/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  output: 'export', // یہ لائن نیٹلی فائی کے لیے سٹیٹک ایچ ٹی ایم ایل جنریٹ کرے گی
};

export default nextConfig;