/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	compress: false,
	productionBrowserSourceMaps: true,
	poweredByHeader: false,
	httpAgentOptions: {
		keepAlive: true
	},
	// i18n: {
	//   locales: ['ua', "en"],
	//   defaultLocale: 'ua',
	// },
	images: {
		formats: ['image/avif', 'image/webp']
	},
	experimental: {
		typedRoutes: true
		// urlImports: ['https://example.com/assets/', 'https://cdn.skypack.dev'],
	}
}

module.exports = nextConfig
