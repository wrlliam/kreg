/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  distDir: '../public',
  env: {
    name: 'Kasm REGistry',
    description: 'An unofficial store for Kasm workspaces.',
    icon: '/img/logo.svg',
    listUrl: 'https://registry.bnhm.systems/',
    contactUrl: 'https://github.com/wrlliam/kreg',
  },
  reactStrictMode: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
