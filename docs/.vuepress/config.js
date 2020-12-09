module.exports = {
    title: '面试题学习记录',
    description: '记录一些感兴趣的面试题 并且写一些学习笔记',
    themeConfig: {
        sidebarDepth: 3,
            sidebar: [
                {
                    title: '介绍',   // 必要的
                    path: '/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                },
                {
                    title: '网络',   // 必要的
                    collapsable: false,
                    children: [
                        {
                            title: '协议',   // 必要的
                            collapsable: false,
                            path: '/network/prototype',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                        }
                    ]
                },
                {
                    title: '语言',   // 必要的
                    collapsable: false,
                    children: [
                        {
                            title: 'JavaScript',   // 必要的
                            collapsable: false,
                            path: '/language/js',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                        }
                    ]
                }
            ]
    }
}
  