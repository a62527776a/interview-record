# 协议

## 使用nodejs可以获取客户端连接的真实IP吗？为什么？如何获取？ #2142
[https://github.com/haizlin/fe-interview/issues/2142](https://github.com/haizlin/fe-interview/issues/2142)

不能直接获取。

一般来说 web服务器需要经过一层反向代理  
这个时候读取到的http请求 都是由代理服务器或者负载均衡发起的。
拿到的请求IP地址 都是代理服务器的IP地址。  

这个时候 一般通过读取http请求头中的X-Forwarded-For来获取原请求IP以及经过的代理服务器的IP。

X-Forwarded-For协议格式
```
X-Forwarded-For: <client>, <proxy1>, <proxy2>
```

参考资料：  
[https://zh.wikipedia.org/zh-hant/X-Forwarded-For](https://zh.wikipedia.org/zh-hant/X-Forwarded-For)  

[https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/X-Forwarded-For](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/X-Forwarded-For)

## 请解释下Expires和Cache-Control有什么区别？ #1855
[https://github.com/haizlin/fe-interview/issues/1855](https://github.com/haizlin/fe-interview/issues/1855)

Expires 定义资源过期时间  
Cache-control 定义资源缓存策略  

### no-cache 和 no-store的区别

no-store 指的是 永远不缓存请求和响应内容 并直接从服务器中下载原始资源  
no-cache 指的是 由缓存请求服务器检查缓存是否过期，如果未过期 则下载缓存内容，过期则从服务器下载原始资源  

资料：[https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Caching_FAQ](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Caching_FAQ)
