/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'lrxqrmfzyehktopsnyot.supabase.co',
          },
        ],
      },
}

module.exports = nextConfig

