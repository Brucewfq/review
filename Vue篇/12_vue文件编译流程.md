将 Vue SFC 转换成临时模块，分别引入  script、template、style
vue-loader/插件会保存  script、template、style 的内容
打包工具遇到 import 语句，会分别处理：

script：从 vue-loader/插件中，取出之前缓存的 script，然后交给其他 JS loader/插件处理（如 babel）
template：从 vue-loader/插件中，取出之前缓存的 template，然后交给其他 JS loader/插件处理（因为 template 转换成 render 函数，这部分也是 JS 类型）
style：从 vue-loader/插件中，取出之前缓存的 style，然后交给其他 Style loader/插件处理（如 Less）

Webpack 提供一种内联 loader 的能力：
import script from "-!babel-loader!vue-loader??ref--0!./App.vue?vue&type=script&setup=true&lang=js"
这种内联 loader 的能力，在 import 的路径中显式的指定了该模块会经过的 loader：

从后往前看，最后的是处理的文件
loader 的执行顺序为从右到左（loader 用 ! 分割）

VueLoaderPlugin  会为 script、template、style，根据不同给的类型，生成不同的内联 loader import 语句，使它们能够正确地被其他的 loader 处理。
