# 浏览器一帧都干了什么

![浏览器一帧图解](./%E6%B5%8F%E8%A7%88%E5%99%A8%E4%B8%80%E5%B8%A7.webp)

【1】接受输入事件

【2】执行事件回调

【3】开始一帧

【4】执行 RAF (RequestAnimationFrame)

【5】页面布局，样式计算

【6】绘制渲染

【7】执行 RIC (RequestIdelCallback)
