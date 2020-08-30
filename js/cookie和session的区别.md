### cookie 和 session的区别

- cookie和session是用来跟踪用户的整个会话的
- cookie和session都是在服务器端生成,cookie保存在客户端中,session保存在服务器端
- cookie只能存储字符串类型的数据,session没有这个限制
- cookie的存储不能超过4kb,session没有这个限制
- 安全性:session数据是存储在服务器端的,通过sessionid维系会话,sessionid又是加密的,安全性会比cookie高

#### cookie

- http协议是无状态的,数据交互完毕后,客户端和服务器端的连接关闭,再次交换数据,需要再次建立连接,无法连接上一次会话
- cookie的内容主要包括：名字、值、过期时间、路径和域
- 如果不在浏览器中设置过期时间，cookie被保存在内存中，生命周期随浏览器的关闭而结束，这种cookie简称会话cookie。如果在浏览器中设置了cookie的过期时间，cookie被保存在硬盘中，关闭浏览器后，cookie数据仍然存在，直到过期时间结束才消失。
应用场景:
- cookie也可以用作本地存储

1. 自动登录(记住密码)

#### session机制

- 服务器接受到请求,如果客户端请求没有对应的sessionid,就会在服务器端创建一个session对象,并生成一个session对象的唯一标识sessionid,并将sessionid保存在cookie中返回给客户端,下次请求时,通过sessionid来实现会话跟踪
- 如果客户端不支持cookie,就会重写url,将sessionid凭借到访问地址后

应用场景:

1. 网上商城中的购物车
2. 保存用户登录信息
