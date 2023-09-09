module.exports = {
	plugins: ['sonarjs'],
	extends: ['next/core-web-vitals', 'plugin:sonarjs/recommended', 'prettier'],
	rules: {
		'jsx-a11y/alt-text': 'error'
	}
}
