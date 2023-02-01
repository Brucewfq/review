# useEffect:
### 概念：
  利用useEffect可以让函数式组件拥有类似于类组件的生命周期（componentDidMount，componentDidUpdate，componentDidUnMount），在每轮渲染结束才会执行。
### 规则：
  在每次render之后执行
  接收第二个参数来控制跳过执行，下次render后如果指定的值没有变化就不会执行
  useEffect时在render之后浏览器已经渲染结束才执行
### 第二个参数：
  规则：可选的，类型是一个数组，参数可以为空数组、一个值的数组、多个值的数组。
  说明：
    1、没有参数的情况下，组件初始化和更新都会执行
    2、空数组的情况下，初始化调用一次就不再执行，类似于componentDidMount
    3、一个值的数组情况下，该值有变化就会执行
    4、有多个值的数组的情况下，只要有一个值发生变化就会执行。
### 使用技巧：
  1、如果第二个传了多个参数，如何查看是那个参数发生了变化呢？
  ```js
    // 在一个正常的Hooks函数中，有如下代码，此代码实现的原理就是通过useRef来达到缓存的目的
    const [a, setA] = useState();
    const [b, setB] = useState();
    const [c, setC] = useState();
    const myRef = useRef({a, b, c});
    useEffect(() => {
      const { a: prevA, b: prevB, c: prevC } = myRef.current;
      if (prevA !== a) {
        // 证明a发生了变化
      }
      if (prevB !== b) {
        // 证明b发生了变化
      }
      if (prevC !== c) {
        // 证明c发生了变化
      }
    }, [a, b, c])
  ```
  2、有时使用useEffect会使组件一直处于不停的刷新，这个是为什么？
    如以下情况:
    ```js
      const [a, setA] = useState<number[]>([]);
      useEffect(() => {
        setA([11])
      }, [a]);
    ```
    一直不停的刷新的原因是因为传给useEffect的第二个参数为引用类型，因为两个引用类型在进行比较的时候永远都是不相等的，以数组为例，声明一个数组就是从Array类上实例化出来了一个新对象，然后JS引擎会为这个对象分配内存空间，所以不同的对象，就会有不同的内存空间，所以两个引用类型的比较永远都是不相等的；
    比如：console.log([] === []); //false
    所以在给useEffect传第二个参数的时候尽量避免使用引用类型的依赖，如果一定要用的话可以通过useCallback或者useMemo来缓存对应的依赖，保持引用值不变。

### useLayoutEffect
  和useEffect的结构相同，但是调用时机不同。在所有的 DOM 变更之后同步调用 effect。