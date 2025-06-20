/**
 * @type {import('next').NextConfig}
 */
const config = {
  reactStrictMode: true,
  images: {
    // É permitido qualquer host porque pode ser colocado qualquer link de imagem no database
    // Eu sei isso é uma bosta.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default config;
