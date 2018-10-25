module.exports = {
    title: 'Hello Me',
    description: 'Just playing around',
    themeConfig: {
        lastUpdated: true,
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Let Code', link: '/let-code' },
            { text: 'Skooldio', link: 'https://skooldio.com' },
        ],
        sidebar: [
            '/',
            '/let-code',
            '/docs/code-a'
        ]
    },
    markdown: {
        lineNumbers: true
    }
}