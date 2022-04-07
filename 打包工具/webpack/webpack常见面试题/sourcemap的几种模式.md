[cheap,eval,inline,module 的三种模式](https://www.cnblogs.com/skychx/p/webpack-sourse-map-eval-cheap-inline-module.html)

线上环境建议采用：cheap-module-sourcemap



| 参数   | 参数解释                                                     |
| ------ | ------------------------------------------------------------ |
| eval   | 打包后的模块都使用 `eval()` 执行，行映射可能不准；不产生独立的 map 文件 |
| cheap  | map 映射只显示行不显示列，忽略源自 loader 的 source map      |
| inline | 映射文件以 base64 格式编码，加在 bundle 文件最后，不产生独立的 map 文件 |
| module | 增加对 loader source map 和第三方模块的映射                  |

