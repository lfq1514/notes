
#  http相关

## OSI 七层模型
从下到上依次为：

- 物理层 

 硬件设备（关注数据是怎么传递的）网线，光纤，双绞线等  ，如何表示0，1，比如说低电平，高电平等表示

- 数据链路层
两个设备之间如何传递数据。建立逻辑连接，通信增加mac地址（交换机）
传输的是数据帧，数据帧最大长度是1500个字节

- 网络层 ip 
进行寻址操作，通过ip找到对应的mac地址，就可以通信了 （路由器）

- 传输层  ****  tcp 
网络层不可靠，为了保证可靠传输，通过tcp等协议，对数据的完整性保护

- 会话层
建立会话

- 表示层
数据的表示形式，安全性等

- 应用层  http dns ftp tftp smtp snmp 
用户最终访问的接口



下层为上层提供服务的

## 为什么要分层

可以将复杂的逻辑，分成小的功能来处理，复杂的问题简单化，修改会变的比较容易


## tcp 

### tcp数据格式

### 三次握手

### 四次挥手

### 滑动窗口

###  tcp的拥塞处理






