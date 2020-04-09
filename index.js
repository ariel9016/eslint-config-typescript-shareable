module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: { sourceType: 'module' },
  plugins: [
    '@typescript-eslint',
    'react-hooks',
    'functional',
    'react',
    'import',
  ],

  rules: {
    /**
     * ESLint rules
     * https://eslint.org/docs/rules/
     * based on version 6.8.0
     */

    /**
     * Possible Errors
     *
     * These are unusual cases that are most often errors rather than intended code.
     * If you find an actual use case for any of these that cannot be worked around,
     * please open an issue describing your use case.
     */
    /** Enforce "for" loop update clause moving the counter in the right direction. */
    'for-direction': 'error',
    /** Enforce `return` statements in getters */
    'getter-return': 'error',
    /** Disallow using an async function as a Promise executor */
    'no-async-promise-executor': 'error',
    /** Disallow lexical declarations in case clauses */
    'no-case-declarations': 'error',
    /** Disallow comparing against -0 */
    'no-compare-neg-zero': 'error',
    /** Disallow assignment operators in conditional expressions */
    'no-cond-assign': 'error',
    /** Disallow constant expressions in conditions */
    'no-constant-condition': 'error',
    /** Disallow control characters in regular expressions */
    'no-control-regex': 'error',
    /** Disallow the use of `debugger` */
    'no-debugger': 'error',
    /** Disallow duplicate arguments in `function` definitions */
    'no-dupe-args': 'error',
    /** Disallow duplicate conditions in if-else-if chains */
    'no-dupe-else-if': 'error',
    /** Disallow duplicate keys in object literals */
    'no-dupe-keys': 'error',
    /** Disallow duplicate case labels */
    'no-duplicate-case': 'error',
    /** Disallow empty block statements */
    'no-empty': 'error',
    /** Disallow empty character classes in regular expressions */
    'no-empty-character-class': 'error',
    /** Disallow reassigning exceptions in `catch` clauses */
    'no-ex-assign': 'error',
    /** Disallow unnecessary boolean casts */
    'no-extra-boolean-cast': 'error',
    /** Disallow unnecessary semicolons */
    'no-extra-semi': 'error',
    /** Disallow reassigning `function` declarations */
    'no-func-assign': 'error',
    /** Disallow assigning to imported bindings */
    'no-import-assign': 'error',
    /** Disallow variable or `function` declarations in nested blocks */
    'no-inner-declarations': 'error',
    /** Disallow invalid regular expression strings in `RegExp` constructors */
    'no-invalid-regexp': 'error',
    /** Disallow irregular whitespace */
    'no-irregular-whitespace': 'error',
    /** Disallow characters which are made with multiple code points in character class syntax */
    'no-misleading-character-class': 'error',
    /** Disallow calling global object properties as functions */
    'no-obj-calls': 'error',
    /** Disallow calling some `Object.prototype` methods directly on objects */
    'no-prototype-builtins': 'error',
    /** Disallow multiple spaces in regular expressions */
    'no-regex-spaces': 'error',
    /** Disallow returning values from setters */
    'no-setter-return': 'error',
    /** Disallow sparse arrays */
    'no-sparse-arrays': 'error',
    /** Disallow unreachable code after `return`, `throw`, `continue`, and `break` statements */
    'no-unreachable': 'error',
    /** Disallow control flow statements in `finally` blocks */
    'no-unsafe-finally': 'error',
    /** Disallow negating the left operand of relational operators */
    'no-unsafe-negation': 'error',
    /** Require calls to `isNaN()` when checking for `NaN` */
    'use-isnan': 'error',
    /** Enforce comparing `typeof` expressions against valid strings */
    'valid-typeof': 'error',

    /**
     * Best Practices
     */
    /** Enforce `return` statements in callbacks of array methods */
    'array-callback-return': ['error', { allowImplicit: true }],
    eqeqeq: ['error', 'always', { null: 'ignore' }],
    /** Require `for-in` loops to include an `if` statement */
    'guard-for-in': 'error',
    /** Disallow `else` blocks after `return` statements in `if` statements */
    'no-else-return': 'error',
    /** Disallow empty destructuring patterns */
    'no-empty-pattern': 'error',
    /** Disallow the use of `eval()` */
    'no-eval': 'error',
    /** Disallow extending native types */
    'no-extend-native': 'error',
    /** Disallow fallthrough of `case` statements */
    'no-fallthrough': 'error',
    /** Disallow assignments to native objects or read-only global variables */
    'no-global-assign': 'error',
    /** Disallow the use of `eval()`-like methods */
    'no-implied-eval': 'error',
    /** Disallow `new` operators outside of assignments or comparisons */
    'no-new': 'error',
    /** Disallow `new` operators with the `Function` object */
    'no-new-func': 'error',
    /** Disallow `new` operators with the `String`, `Number`, and `Boolean` objects */
    'no-new-wrappers': 'error',
    /** Disallow octal literals */
    'no-octal': 'error',
    /** Disallow variable redeclaration */
    'no-redeclare': 'error',
    /** Disallow assignments where both sides are exactly the same */
    'no-self-assign': 'error',
    /** Disallow `javascript:` urls */
    'no-script-url': 'error',
    /** Disallow throwing literals as exceptions */
    'no-throw-literal': 'error',
    /** Disallow unused labels */
    'no-unused-labels': 'error',
    /** Disallow unnecessary `catch` clauses */
    'no-useless-catch': 'error',
    /** Disallow unnecessary escape characters */
    'no-useless-escape': 'error',
    /** Disallow `with` statements */
    'no-with': 'error',

    /**
     * Variables
     */
    /** Disallow deleting variables */
    'no-delete-var': 'error',
    /** Disallow variable declarations from shadowing variables declared in the outer scope */
    'no-shadow': 'error',
    /** Disallow identifiers from shadowing restricted names */
    'no-shadow-restricted-names': 'error',
    /** disallow the use of undeclared variables unless mentioned in global comments */
    'no-undef': 'error',

    /**
     * ECMAScript 6
     */
    /** Require `super()` calls in constructors */
    'constructor-super': 'error',
    /** Disallow reassigning class members */
    'no-class-assign': 'error',
    /** Disallow reassigning `const` variables */
    'no-const-assign': 'error',
    /** Disallow duplicate class members */
    'no-dupe-class-members': 'error',
    /** Disallow duplicate module imports */
    'no-duplicate-imports': 'error',
    /** Disallow `new` operators with the `Symbol` object */
    'no-new-symbol': 'error',
    /** Disallow `this`/`super` before calling `super()` in constructors */
    'no-this-before-super': 'error',
    /** Require `let` or `const` instead of `var` */
    'no-var': 'error',
    /** Require or disallow method and property shorthand syntax for object literals */
    'object-shorthand': 'error',
    /** Require `const` declarations for variables that are never reassigned after declared */
    'prefer-const': 'error',
    /** Require template literals instead of string concatenation */
    'prefer-template': 'error',
    /** Require generator functions to contain `yield` */
    'require-yield': 'error',

    /**
     * @typescript-eslint rules
     * https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules
     * based on version 2.26.0
     */
    /** Require that member overloads be consecutive */
    '@typescript-eslint/adjacent-overload-signatures': 'error',
    /** Requires using either T[] or Array<T> for arrays */
    '@typescript-eslint/array-type': ['error', { default: 'generic' }],
    /** Disallows awaiting a value that is not a Promise */
    '@typescript-eslint/await-thenable': 'error',
    /** Bans “// @ts-ignore” comments from being used */
    '@typescript-eslint/ban-ts-ignore': 'error',
    /** Bans specific types from being used */
    '@typescript-eslint/ban-types': 'error',
    /** Require PascalCased class and interface names */
    '@typescript-eslint/class-name-casing': 'error',
    /** Enforces consistent usage of type assertions */
    '@typescript-eslint/consistent-type-assertions': 'error',
    /** Consistent with type definition either interface or type */
    '@typescript-eslint/consistent-type-definitions': 'error',
    /** Require explicit accessibility modifiers on class properties and methods */
    '@typescript-eslint/explicit-member-accessibility': 'error',
    /** Require or disallow spacing between function identifiers and their invocations */
    '@typescript-eslint/func-call-spacing': 'error',
    /** Require that interface names be prefixed with I */
    '@typescript-eslint/interface-name-prefix': [
      'error',
      { prefixWithI: 'always' },
    ],
    /** Enforces naming conventions for class members by visibility */
    '@typescript-eslint/member-naming': 'error',
    /** Require a consistent member declaration order */
    '@typescript-eslint/member-ordering': 'error',
    /** Disallow generic Array constructors */
    '@typescript-eslint/no-array-constructor': 'error',
    /** Disallow Empty Functions */
    '@typescript-eslint/no-empty-function': 'error',
    /** Disallow usage of the any type */
    '@typescript-eslint/no-explicit-any': 'error',
    /** Forbids the use of classes as namespaces */
    '@typescript-eslint/no-extraneous-class': 'error',
    /** Requires Promise-like values to be handled appropriately */
    '@typescript-eslint/no-floating-promises': 'error',
    /** Disallow iterating over an array with a for-in loop */
    '@typescript-eslint/no-for-in-array': 'error',
    /** Disallows explicit type declarations for variables or parameters initialized to a number, string, or boolean */
    '@typescript-eslint/no-inferrable-types': 'error',
    /** Enforce valid definition of new and constructor */
    '@typescript-eslint/no-misused-new': 'error',
    /** Avoid using promises in places not designed to handle them */
    '@typescript-eslint/no-misused-promises': 'error',
    /** Disallow the use of custom TypeScript modules and namespaces */
    '@typescript-eslint/no-namespace': 'error',
    /** Disallows non-null assertions using the ! postfix operator */
    '@typescript-eslint/no-non-null-assertion': 'error',
    /** Disallow the use of parameter properties in class constructors */
    '@typescript-eslint/no-parameter-properties': 'error',
    /** Disallows invocation of require() */
    '@typescript-eslint/no-require-imports': 'error',
    /** Disallow aliasing this */
    '@typescript-eslint/no-this-alias': 'error',
    /** Warns when a namespace qualifier is unnecessary */
    '@typescript-eslint/no-unnecessary-qualifier': 'error',
    /** Enforces that types will not to be used */
    '@typescript-eslint/no-unnecessary-type-arguments': 'error',
    /** Warns if a type assertion does not change the type of an expression */
    '@typescript-eslint/no-unnecessary-type-assertion': 'error',
    /** Disallow unused variables */
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        varsIgnorePattern: '_',
        ignoreRestSiblings: true,
      },
    ],
    /** Disallow unnecessary constructors */
    '@typescript-eslint/no-useless-constructor': 'error',
    /** Disallows the use of require statements except in import statements */
    '@typescript-eslint/no-var-requires': 'error',
    /** Use for-of loops instead of standard for loops over arrays */
    '@typescript-eslint/prefer-for-of': 'error',
    /** Use function types instead of interfaces with call signatures */
    '@typescript-eslint/prefer-function-type': 'error',
    /** Enforce includes method over indexOf method */
    '@typescript-eslint/prefer-includes': 'error',
    /** Require the use of the namespace keyword instead of the module keyword to declare custom TypeScript modules */
    '@typescript-eslint/prefer-namespace-keyword': 'error',
    /** Require never-modified private members be marked as readonly */
    '@typescript-eslint/prefer-readonly': 'error',
    /** Enforce to use RegExp#exec over String#match */
    '@typescript-eslint/prefer-regexp-exec': 'error',
    /** Enforce the use of String#startsWith and String#endsWith instead of other equivalent methods of checking substrings */
    '@typescript-eslint/prefer-string-starts-ends-with': 'error',
    /** Functions that return promises must be async */
    '@typescript-eslint/promise-function-async': 'error',
    /** Enforce giving compare argument to Array#sort */
    '@typescript-eslint/require-array-sort-compare': 'error',
    /** Disallow async functions which have no await expression */
    '@typescript-eslint/require-await': 'error',
    /** When adding two variables, operands must both be of type number or of type string */
    '@typescript-eslint/restrict-plus-operands': 'error',
    /** Boolean expressions are limited to booleans */
    '@typescript-eslint/strict-boolean-expressions': 'error',
    /** Sets preference level for triple slash directives versus ES6-style import declarations */
    '@typescript-eslint/triple-slash-reference': 'error',
    /** Require consistent spacing around type annotations */
    '@typescript-eslint/type-annotation-spacing': 'error',
    /** Enforces unbound methods are called with their expected scope */
    '@typescript-eslint/unbound-method': 'error',
    /** Warns for any two overloads that could be unified into one by using a union or an optional/rest parameter */
    '@typescript-eslint/unified-signatures': 'error',

    /**
     * react rules
     * https://github.com/yannickcr/eslint-plugin-react
     * based on version 7.19.0
     */
    /** Prevent missing displayName in a React component definition */
    'react/display-name': 'error',
    /** Enforce curly braces or disallow unnecessary curly braces in JSX props and/or children */
    'react/jsx-curly-brace-presence': [
      'error',
      { props: 'never', children: 'never' },
    ],
    /** Detect missing key prop */
    'react/jsx-key': 'error',
    /** No .bind() or Arrow Functions in JSX Props */
    'react/jsx-no-bind': 'error',
    /** Prevent comments from being inserted as text nodes */
    'react/jsx-no-comment-textnodes': 'error',
    /** Prevent duplicate properties in JSX */
    'react/jsx-no-duplicate-props': 'error',
    /** Prevent usage of unsafe target='_blank' */
    'react/jsx-no-target-blank': 'error',
    /** Disallow undeclared variables in JSX */
    'react/jsx-no-undef': 'error',
    /** Prevent React to be incorrectly marked as unused */
    'react/jsx-uses-react': 'error',
    /** Prevent variables used in JSX to be incorrectly marked as unused */
    'react/jsx-uses-vars': 'error',
    /** Prevent passing of children as props */
    'react/no-children-prop': 'error',
    /** Prevent problem with children and props.dangerouslySetInnerHTML */
    'react/no-danger-with-children': 'error',
    /** Prevent usage of deprecated methods */
    'react/no-deprecated': 'error',
    /** Prevent direct mutation of this.state */
    'react/no-direct-mutation-state': 'error',
    /** Prevent usage of findDOMNode */
    'react/no-find-dom-node': 'error',
    /** Prevent usage of isMounted */
    'react/no-is-mounted': 'error',
    /** Prevent usage of the return value of ReactDOM.render */
    'react/no-render-return-value': 'error',
    /** Prevent using string references */
    'react/no-string-refs': 'error',
    /** Prevent invalid characters from appearing in markup */
    'react/no-unescaped-entities': 'error',
    /** Prevent usage of unknown DOM property */
    'react/no-unknown-property': 'error',
    /** Prevent missing React when using JSX */
    'react/react-in-jsx-scope': 'error',
    /** Enforce ES5 or ES6 class for returning value in render function */
    'react/require-render-return': 'error',

    /**
     * react hooks rules
     * https://github.com/facebook/react/tree/master/packages/eslint-plugin-react-hooks
     * based on version 3.0.0
     */
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',

    /**
     * functional rules
     * https://github.com/jonaskello/eslint-plugin-functional
     * based on version
     */
    /** Prefer readonly types over mutable types */
    'functional/prefer-readonly-type': [
      'error',
      { allowLocalMutation: true, ignoreClass: true },
    ],
    /** Prefer property signatures with readonly modifiers over method signatures */
    'functional/no-method-signature': 'error',

    /**
     * import rules
     * https://github.com/benmosher/eslint-plugin-import/tree/master/docs/rules
     * based on version 3.0.0
     */
    /** Ensures that there is no resolvable path back to this module via its dependencies */
    'import/no-cycle': 'error',
    /** Prohibit default exports. */
    'import/no-default-export': 'error',
    /** Reports use of a default export as a locally named import */
    'import/no-named-default': 'error',
    /** Prevent unnecessary path segments in import and require statements */
    'import/no-useless-path-segments': 'error',
  },
}
