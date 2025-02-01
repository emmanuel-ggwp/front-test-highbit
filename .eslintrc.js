module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'standard',
        'plugin:prettier/recommended',
        'plugin:react/recommended',
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: [
        'react',
        'prettier',
    ],
    rules: {
        'prettier/prettier': 'error',
        // Customize your rules here
    },
};
