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
                    path: '/network/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                    sidebarDepth: 2,    // 可选的, 默认值是 1
                    children: [
                        ['/network/prototype', '协议']
                    ]
                }
            ]
    }
}
  