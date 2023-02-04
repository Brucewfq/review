# ts代码如何编译成js
  typescript compiler的编译流程是这样的：
    源码先用scanner进行词法分析，拆分成一个一个不能细分的单词，叫做token。
    然后用Parser进行语法分析，组装成抽象语法树AST，
    之后做语义分析，包括用 Binder 进行作用域分析，和有 Checker 做类型检查。如果有类型的错误，就是在 Checker 这个阶段报的。
    如果有 Transformer 插件（tsc 支持 custom transform），会在 Checker 之后调用，可以对 AST 做各种增删改。
    类型检查通过后就会用 Emmiter 把 AST 打印成目标代码，生成类型声明文件 d.ts，还有 sourcemap。

    源码进行词法和语法分析生成抽象语法树（AST），再进行作用域分析以及类型检查，最后把AST转换新的AST再生成目标代码，生成类型声明文件d.ts和sourcemap。
  
  babel的编译流程：
    源码经过 Parser 做词法分析和语法分析，生成 token 和 AST。
    AST 会做语义分析生成作用域信息，然后会调用 Transformer 进行 AST 的转换。
    最后会用 Generator 把 AST 打印成目标代码并生成 sourcemap。
    
    babel编译不会做类型检查和生成类型声明文件。