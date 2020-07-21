module.exports = {
    head: [
        ['link', { rel: 'icon', type: 'image/png', href: '/favicon.png' }],
        ['meta', { name: "keywords", content: "newCreator.org" }],
        ['meta', { name: "og:title", content: "newCreator.org" }],
        ['meta', { name: "og:description", content: "newCreator.orgが提供する、オープンソースの教材です。" }],
        ['meta', { name: "og:type", content: "website" }],
        ['meta', { name: "og:url", content: "https://docs.newcreator.org" }]
    ],
    // Navbar非表示
    themeConfig: {
        navbar: false
    }
}
