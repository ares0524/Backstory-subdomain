/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    env: {
        // MAIN_DOMAIN: 'http://localhost:3000',
        // SUB_DOMAIN: 'http://localhost:3001',
        // SERVER_API: 'http://localhost:5001',
        // MAIN_DOMAIN_SERVER_API: 'http://localhost:5000',

        MAIN_DOMAIN: 'https://backstory-eta.vercel.app',
        SUB_DOMAIN: 'https://backstory-subdomain.vercel.app',
        SERVER_API: 'https://api.teloria.backstory.ink',
        MAIN_DOMAIN_SERVER_API: 'https://api.backstory.ink',

        JWT_SECRET: '3c6ef071b1d4c28d5b0ba2e7b9bfaa3013515048551173bc0d77a8e6c4e5382d',
    }
}

module.exports = nextConfig
