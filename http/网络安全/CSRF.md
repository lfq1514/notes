# CSRF

跨站请求伪造(Cross-site request forgery)

## 表现形式

在当前网站获取 cookie,然后在第三地方网站利用这个 cookie 发送请求

-   伪造请求购物，转账，发弹窗等

## 避免 csrf

1. 使用 post 请求
2. csrf-token
3. 使用验证码
4. 验证 Referer
