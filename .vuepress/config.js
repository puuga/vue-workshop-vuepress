module.exports = {
    title: 'Hello Me',
    description: 'Just playing around',
    themeConfig: {
        lastUpdated: true,
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Page', link: '/homepage' },
            { text: 'Skooldio', link: 'https://skooldio.com' },
        ],
        sidebar: [
            '/',
            '/homepage'
        ]
    },
    markdown: {
        lineNumbers: true
    }
}