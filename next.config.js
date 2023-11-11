/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    env: {
        // MAIN_DOMAIN: 'http://localhost:3000',
        // SUB_DOMAIN: 'http://localhost:3001',
        MAIN_DOMAIN: 'https://backstory-eta.vercel.app',
        SUB_DOMAIN: 'https://backstory-subdomain.vercel.app',
    }
}

module.exports = nextConfig
