module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: ['plugin:vue/essential', 'eslint:recommended', '@vue/standard', '@vue/prettier'],
    parserOptions: {
        parser: 'babel-eslint'
    },
    rules: {
        'prettier/prettier': 2, // 启用prettier作为优先校验
        'array-bracket-newline': 0, // 在数组开括号后和闭括号前强制换行
        'block-spacing': ['warn', 'always'], // 禁止或强制在代码块中开括号前和闭括号后有空格
        'brace-style': ['warn', '1tbs'], // 强制在代码块中使用一致的大括号风格 (强制 one true brace style:将大括号放在控制语句或声明语句同一行的位置)
        'comma-spacing': ['warn', { before: false, after: true }], // 强制在逗号前后使用一致的空格
        'max-len': ['warn', { code: 180 }], // 强制一行的最大长度
        'no-console': 0,
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
        'no-trailing-spaces': 0, // 禁用行尾空格
        'no-eval': 1,
        'no-empty': ['error', { allowEmptyCatch: true }], // 禁止空块语句，但允许空的 catch 子句
        'no-extend-native': 1,
        'no-tabs': ['error', { allowIndentationTabs: true }],
        'no-mixed-spaces-and-tabs': 2, // 禁止空格和 tab 的混合缩进
        'no-undef': 0, // 禁用未声明的变量
        'one-var': 0, // 强制函数中的变量要么一起声明要么分开声明
        'dot-notation': ['error', { allowKeywords: true }], // 强制尽可能地使用点号，避免不必要的方括号
        'prefer-const': 1, // 要求使用 const 声明那些声明后不再被修改的变量
        indent: ['error', 4, { SwitchCase: 1, VariableDeclarator: 'first', MemberExpression: 'off', ignoredNodes: ['TemplateLiteral'] }], // 强制使用一致的缩进 [强制 switch 语句中的 case 子句的缩进级别, 强制 var 声明的缩进级别, 强制多行属性链的缩进]
        'space-before-function-paren': ['error', { anonymous: 'ignore', named: 'never', asyncArrow: 'always' }], // 强制在 function的左括号之前使用一致的空格
        eqeqeq: ['off', 'always'], // 要求使用 === 和 !==
        camelcase: ['off', 'always'], // 强制使用骆驼拼写法命名约定
        'func-call-spacing': ['warn', 'never'], // 要求或禁止在函数标识符和其调用之间有空格
        'no-unused-vars': ['warn', { args: 'none' }],
        'vars-on-top': 1,
        'eol-last': ['off', 'always'], // 要求或禁止文件末尾存在空行
        'comma-dangle': ['warn', 'never'], // 要求或禁止末尾逗号
        'max-lines': ['off', { max: 800, skipBlankLines: true, skipComments: true }],
        'max-lines-per-function': ['off', { max: 200, skipComments: true, skipBlankLines: true }],
        'multiline-ternary': ['off', 'always'], // 强制三元操作符之间有换行
        'handle-callback-err': 0, // 要求回调函数中有容错处理
        'vue/no-unused-vars': 1,
        'vue/return-in-computed-property': 0,
        'template-curly-spacing': 'off',
        'require-atomic-updates': 0
    },
    overrides: [
        {
            files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)'],
            env: {
                mocha: true
            }
        }
    ]
}
