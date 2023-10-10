module.exports = {
	plugins: ['sonarjs', 'testing-library'],
	extends: ['next/core-web-vitals', 'plugin:sonarjs/recommended', 'prettier'],
	rules: {
		'jsx-a11y/alt-text': 'error'
	},
	overrides: [
		// Only uses Testing Library lint rules in test files
		{
			files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
			extends: ['plugin:testing-library/react']
		}
	]
}
