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


## 说说你对前端缓存策略的理解

[https://github.com/haizlin/fe-interview/issues/3286](https://github.com/haizlin/fe-interview/issues/3286)

缓存，分为私有缓存，以及共享缓存。  
私有缓存 一般指用户自己才能使用的缓存，比如浏览器缓存。  
共享缓存，一般指可以用于多用户的缓存，比如代理缓存，CDN缓存。  

HTTP请求头中的Cache-Control用来定义缓存策略。  

一般用来定义  
请求的响应内容是否允许被‘缓存’ 缓存 以及 是否允许从缓存中下载   (no-store)  
缓存是否需要由服务器验证是否过期(no-cache)  
决定由私有缓存来缓存，还是由共享缓存来缓存(private, public)\
以及设置响应内容被缓存的最大时间  

资料：[https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Caching_FAQ](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Caching_FAQ)


## 请解释下Expires和Cache-Control有什么区别？ #1855
[https://github.com/haizlin/fe-interview/issues/1855](https://github.com/haizlin/fe-interview/issues/1855)

### no-cache 和 no-store的区别

no-store 指的是 永远不缓存请求和响应内容 并直接从服务器中下载原始资源  
no-cache 指的是 由缓存请求服务器检查缓存是否过期，如果未过期 则下载缓存内容，过期则从服务器下载原始资源  

资料：[https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Caching_FAQ](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Caching_FAQ)
