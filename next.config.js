/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true,
  },
  images: {
    domains: ["coding-challenge-api.aerolab.co"],
  },
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push(
      {
        type: "asset",
        resourceQuery: /url/, // *.svg?url
      },
      {
        test: /\.svg$/,
        issuer: /\.[jt]sx?$/,
        use: [{ loader: "@svgr/webpack", options: { icon: true } }],
      }
    )
    return config
  },
}

module.exports = nextConfig
