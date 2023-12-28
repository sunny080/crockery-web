const path = require("path");
// const i18nextConfig = require("./next-i18next.config");

module.exports = async () => {
  // const { i18n } = await i18nextConfig;
  return {
    // i18n,
    trailingSlash: true,
    serverRuntimeConfig: {
      PROJECT_ROOT: __dirname,
    },
    sassOptions: {
      includePaths: [path.join(__dirname, "styles")],
    },
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "**",
        },
      ],
      formats: ["image/webp"],
    },
    compress: true,
    eslint: {
      ignoreDuringBuilds: true,
    },
  };
};
