/** next-sitemap.config.js */
module.exports = {
    siteUrl: 'https://icibha-2025.vercel.app',
    generateRobotsTxt: true,
    generateIndexSitemap: false,  // Ensures all URLs are inside sitemap.xml
    sitemapSize: 7000,
    changefreq: 'daily',
    priority: 0.7,

    exclude: ['/secret-page', '/admin/*'],  // Exclude private pages

    robotsTxtOptions: {
        policies: [
            { userAgent: '*', allow: '/' },
            { userAgent: 'BadBot', disallow: '/' }
        ],
    },

    // Manually add missing dynamic paths
    additionalPaths: async (config) => {
        return [
            { loc: '/about-institution', lastmod: new Date().toISOString() },
            { loc: '/about-conference', lastmod: new Date().toISOString() },
            { loc: '/committee', lastmod: new Date().toISOString() },
            { loc: '/call-for-papers', lastmod: new Date().toISOString() },
            { loc: '/guidelines', lastmod: new Date().toISOString() },
            { loc: '/registration', lastmod: new Date().toISOString() },
            { loc: '/contact', lastmod: new Date().toISOString() },
        ];
    },
};
/** next-sitemap.config.js */
