const WebSocket = require("ws");

// 创建 WebSocket 服务器
const wss = new WebSocket.Server({ port: 9992 });

// 监听连接事件
wss.on("connection", (ws) => {
    console.log("客户端已连接");

    // 监听消息事件
    ws.on("message", (message) => {
        disp = message.toString();
        console.log("接收到消息:", disp);

        // 在消息后面添加 "Hi from server"
        const response = message + " Hi from server";

        // 发送回客户端
        ws.send(response);
    });

    // 监听关闭事件
    ws.on("close", () => {
        console.log("客户端已断开连接");
    });
});

console.log("WebSocket 服务器已启动");
