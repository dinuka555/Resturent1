/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.googleusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'dawid-food-ordering.s3.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: '*.postimg.cc',
      },
    ]
  }
}

module.exports = nextConfig



// https://lh3.googleusercontent.com/a/ACg8ocI8CREwz_p7DwcGz-o9hbHjB64mjo0lKlsR6eER348oHj8=s96-c

// https://drive.google.com/file/d/1EFqe_80N0gsJu2xhHQwHp_1-zwtja64J/view

