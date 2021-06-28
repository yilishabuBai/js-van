module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: ['standard'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint'],
  rules: {
    //
    // 可能的错误
    // 这些规则与 JavaScript 代码中可能的语法错误或逻辑错误有关
    //
    // 禁止使用 console
    // @off console 的使用很常见
    'no-console': 'off',
    // @fixable 禁止使用 debugger
    'no-debugger': 'error',
    // 禁止出现空代码块，允许 catch 为空代码块
    'no-empty': [
      'error',
      {
        allowEmptyCatch: true
      }
    ],
    // @fixable 禁止函数表达式中出现多余的括号，比如 let foo = (function () { return 1 })
    'no-extra-parens': ['error', 'functions'],
    // 必须使用 isNaN(foo) 而不是 foo === NaN
    'use-isnan': 'error',
    // typeof 表达式比较的对象必须是 'undefined', 'object', 'boolean', 'number', 'string', 'function' 或 'symbol'
    'valid-typeof': 'error',

    //
    // 最佳实践
    // 这些规则通过一些最佳实践帮助你避免问题
    //
    // switch 语句必须有 default
    // @off 太严格了
    'default-case': 'off',
    // @fixable 链式调用的时候，点号必须放在第二行开头处，禁止放在第一行结尾处
    'dot-location': ['error', 'property'],
    // @fixable 必须使用 === 或 !==，禁止使用 == 或 !=，与 null 比较时除外
    eqeqeq: [
      'error',
      'always',
      {
        null: 'ignore'
      }
    ],
    // for in 内部必须有 hasOwnProperty
    'guard-for-in': 'error',
    // 禁止注释中出现 TODO 和 FIXME
    // @off TODO 很常用
    'no-warning-comments': 'off',
    // @fixable 立即执行的函数必须符合如下格式 (function () { alert('Hello') })()
    'wrap-iife': [
      'error',
      'inside',
      {
        functionPrototypeMethods: true
      }
    ],
    // @fixable 必须使用 if (foo === 5) 而不是 if (5 === foo)
    yoda: [
      'error',
      'never',
      {
        onlyEquality: true
      }
    ],

    //
    // 变量
    // 这些规则与变量申明有关
    //
    // 变量必须在定义的时候赋值
    // @off 先定义后赋值很常见
    'init-declarations': 'off',
    // 禁止变量名与上层作用域内的定义过的变量重复
    // @off 很多时候函数的形参和传参是同名的
    'no-shadow': 'off',
    // 禁止使用保留字作为变量名
    'no-shadow-restricted-names': 'error',
    // 禁止使用未定义的变量
    'no-undef': [
      'error',
      {
        typeof: false
      }
    ],
    // @fixable 禁止将 undefined 赋值给变量
    'no-undef-init': 'error',
    // 定义过的变量必须使用
    'no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'none',
        caughtErrors: 'none',
        ignoreRestSiblings: true
      }
    ],
    // 变量必须先定义后使用
    'no-use-before-define': [
      'error',
      {
        functions: false,
        classes: false,
        variables: false
      }
    ],

    //
    // Node.js 和 CommonJS
    // 这些规则与在 Node.js 中运行的代码或浏览器中使用的 CommonJS 有关
    //
    // 禁止使用 process.env.NODE_ENV
    // @off 使用很常见
    'no-process-env': 'off',
    // 禁止使用 process.exit(0)
    // @off 使用很常见
    'no-process-exit': 'off',

    //
    // 风格问题
    // 这些规则与代码风格有关，所以是非常主观的
    //
    // 变量名必须是 camelcase 风格的
    // @off 很多 api 或文件名都不是 camelcase
    camelcase: 'off',
    // @fixable 注释的首字母必须大写
    // @off 没必要限制
    'capitalized-comments': 'off',
    // @fixable 逗号前禁止有空格，逗号后必须要有空格
    'comma-spacing': [
      'error',
      {
        before: false,
        after: true
      }
    ],
    // 代码块嵌套的深度禁止超过 5 层
    'max-depth': ['error', 5],
    // 回调函数嵌套禁止超过 3 层，多了请用 async await 替代
    'max-nested-callbacks': ['error', 3],
    // 函数的参数禁止超过 7 个
    'max-params': ['error', 7],
    // 禁止使用 Array 构造函数
    'no-array-constructor': 'error',
    // 禁止使用 continue
    // @off continue 很常用
    'no-continue': 'off',
    // 禁止混用空格和缩进
    'no-mixed-spaces-and-tabs': 'error',
    // 禁止连续赋值，比如 a = b = c = 5
    // @off 没必要限制
    'no-multi-assign': 'off',
    // @fixable 禁止出现超过三行的连续空行
    'no-multiple-empty-lines': [
      'error',
      {
        max: 3,
        maxEOF: 1,
        maxBOF: 1
      }
    ],
    // @fixable 大括号内的首尾必须有换行
    'object-curly-newline': [
      'error',
      {
        multiline: true,
        consistent: true
      }
    ],
    // @fixable 对象字面量只有一行时，大括号内的首尾必须有空格
    'object-curly-spacing': [
      'error',
      'always',
      {
        arraysInObjects: true,
        objectsInObjects: false
      }
    ],

    //
    // ECMAScript 6
    // 这些规则与 ES6（即通常所说的 ES2015）有关
    //
    // @fixable 箭头函数能够省略 return 的时候，必须省略，比如必须写成 () => 0，禁止写成 () => { return 0 }
    // @off 箭头函数的返回值，应该允许灵活设置
    'arrow-body-style': 'off',
    // @fixable 箭头函数只有一个参数的时候，必须加括号
    // @off 应该允许灵活设置
    'arrow-parens': 'off',
    // @fixable 箭头函数的箭头前后必须有空格
    'arrow-spacing': [
      'error',
      {
        before: true,
        after: true
      }
    ],
    // constructor 中必须有 super
    'constructor-super': 'error',
    // 禁止对使用 const 定义的常量重新赋值
    'no-const-assign': 'error',
    // 禁止重复 import 模块
    'no-duplicate-imports': 'error',
    // 禁止在 super 被调用之前使用 this 或 super
    'no-this-before-super': 'error',
    // @fixable 禁止使用 var
    'no-var': 'error'
  }
}
