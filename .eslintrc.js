module.exports = {
	plugins: ['sonarjs', 'testing-library', '@typescript-eslint'],
	extends: [
		'next/core-web-vitals',
		'plugin:sonarjs/recommended',
		'prettier',
		'plugin:jest-dom/recommended',
		'plugin:@typescript-eslint/recommended'
	],
	parser: '@typescript-eslint/parser',
	rules: {
		'jsx-a11y/alt-text': 'error',
		'@typescript-eslint/no-unused-vars': 'warn'
	},
	overrides: [
		// Only uses Testing Library lint rules in test files
		{
			files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
			extends: ['plugin:testing-library/react']
		}
	]
}
