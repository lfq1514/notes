[什么是 JWT](https://www.jianshu.com/p/576dbf44b2ae)
tips:

1. 讲了 JWT 是什么，怎么生成的

header 算法和类型
payload 非敏感数据（不能有密码等）
signature 由 base64 编码的 header，payload，和 secret 秘钥组成

最后生成的格式如
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ

第一个点之前的就是 header 通过 base64 编码得到的
第二个点之前的就是 payload 通过 base64 编码得到的
第三个点之前的就是 这个部分需要 base64 加密后的 header 和 base64 加密后的 payload 使用.连接组成的字符串，然后通过 header 中声明的加密方式进行加盐 secret 组合加密
