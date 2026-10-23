/** @type {import('next').NextConfig} */
export default {
  poweredByHeader: false,
  async redirects() {
    // Static, not IP- or language-based. The x-default alternate (Arabic) is declared in hreflang on every page.
    return [{ source: "/", destination: "/en", permanent: false }];
  },
};
