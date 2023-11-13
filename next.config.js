/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    env: {
        // MAIN_DOMAIN: 'http://localhost:3000',
        // SUB_DOMAIN: 'http://localhost:3001',
        // SERVER_API: 'http://localhost:5000',
        MAIN_DOMAIN: 'https://backstory-eta.vercel.app',
        SUB_DOMAIN: 'https://backstory-subdomain.vercel.app',
        SERVER_API: 'https://api.backstory.ink',
    }
}

module.exports = nextConfig
