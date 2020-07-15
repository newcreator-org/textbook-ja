module.exports = {
    title: 'newCreator.org',
    locales: {
        '/': {
            lang: 'ja'
        }
    },
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
        sidebar: 'auto',
        lastUpdated: '最終更新日',
        search: false,
        nav: [
            { text: 'GitHub', link: 'https://github.com/newcreator-org/docs.newcreator.org' },
            { text: '公式サイト', link: 'https://newcreator.org' }
        ]
    },
    plugins: [
        '@vuepress/last-updated',
        [
            '@vuepress/google-analytics',
            {
                'ga': 'UA-159919918-5'
            }
        ]
        [
        'vuepress-plugin-sitemap', {
            hostname: 'https://docs.newcreator.org'
        }
        ]
    ]
}

