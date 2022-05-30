
各个浏览器内核统计
猎豹浏览器8  Chromium 79 +　IE全内核版本

搜狗浏览器  高速模式 是Chromium 兼容模式是 IE内核





注：IE内核其实就是Trident内核


### react-app-ployfill
This package includes polyfills for various browsers. It includes minimum requirements and commonly used language features used by Create React App projects.（此软件包包括适用于各种浏览器的polyfill。它包括Create React App项目使用的最低要求和常用语言功能。）


```js
// This must be the first line in src/index.js
import 'react-app-polyfill/ie11';//针对ie11的
import 'react-app-polyfill/stable';//稳定版的
```


