/** @type {import('next').NextConfig} */
const SERVER_API = process.env.NEXT_PUBLIC_SERVER_API

const nextConfig = {
    reactStrictMode: false,
    env: {
        MAIN_DOMAIN: process.env.NEXT_PUBLIC_MAIN_DOMAIN || '',
        SUB_DOMAIN: process.env.NEXT_PUBLIC_SUB_DOMAIN || '',
        SERVER_API: process.env.NEXT_PUBLIC_SERVER_API || '',
        MAIN_DOMAIN_SERVER_API: process.env.NEXT_PUBLIC_MAIN_DOMAIN_SERVER_API || '',

        JWT_SECRET: '3c6ef071b1d4c28d5b0ba2e7b9bfaa3013515048551173bc0d77a8e6c4e5382d',
    },
    async rewrites() {
		return [
			{
				source: '/serverAPI/:path*',
				destination: `${SERVER_API}/:path*`
			}
		]
	}
}

module.exports = nextConfig
