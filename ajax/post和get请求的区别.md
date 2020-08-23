
### get请求和post请求的区别

1. get请求相交于post请求来说不安全
    - get请求参数是带在url上的，post请求是在放在请求体中的，对于用户来说是不可见的，相对于get请求来说安全一些
    - 但是也并不是说get请求只能在url上带参数，post只能通过请求体传参；其实get也是可以在请求体中带的，post也可以在url上带参数，但是这个样子是不符合规范的（会被打，哈哈）；据说老版本的postman是不支持在GET请求里加body的，也是最近才加上的支持

2. get请求传送的数据量有限，主要原因是受url长度的限制（url最大的长度是2048个字符），post请求则一般不受这个限制，所以传输的数据量会较大

3. 对传输的数据类型的限制: get请求只允许ASCII字符，post没有限制，也允许二进制数据

4. 编码类型有区别
    - get请求只能是application/x-www-form-urlencoded（也叫百分号编码）
    - 表单中的get请求 ： 将数据按照name=value形式，添加到action所指向的URL后面，并且二者使用？连接，各个变量之间使用&连接；
    - post请求可以是application/x-www-form-urlencoded或multipart/form-data，以及二进制数据多重编码

5. get请求可以被缓存，post请求不能被缓存



