作用：
    用来缓存不活动的组件实例，用于保存组件的渲染状态。
    include、exclude、max
    abstract：true // 不会渲染成真实dom，这个属性就是用来判断是否要渲染成真实dom。
    需要用Vue.set属性改变数据。
    被keep-alive包裹的组件提供了activated和deactivated钩子函数。
    页面第一次进入，钩子的触发顺序created-> mounted-> activated，退出时触发deactivated。当再次进入（前进或者后退）时，只触发activated。
