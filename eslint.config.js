module.exports = {
    // Define environments for the code. This sets up global variables and syntax specific to these environments.
    env: {
        browser: true,    // Browser global variables like 'window' are enabled.
        es2021: true,     // Enables features available in ECMAScript 2021.
        node: true        // Node.js global variables and scoping are enabled.
    },
    // Specify the files that ESLint should lint.
    files: ["**/*.js", "**/*.cjs", "**/*.mjs"],
    // Extend the base set of rules from ESLint.
    extends: [
        'eslint:recommended'  // Uses the recommended set of rules provided by ESLint.
    ],
    // Configure the parser options.
    parserOptions: {
        ecmaVersion: 12,    // Allows parsing of modern ECMAScript features (ECMAScript 2021).
        sourceType: 'module' // Allows for the use of modules (import/export).
    },
    // Override or customize specific linting rules.
    rules: {
        // Warn when there are variables that are defined but not used.
        'no-unused-vars': 'warn',
        // Turn off the rule that disallows the use of console.
        'no-console': 'off'
    }
};