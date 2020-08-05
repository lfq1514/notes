### create-react-app修改环境变量

------

用CMD打开，执行：

```
set HTTPS=true&&npm start
//如果要修改多个环境变量，用下面这种方式
set HTTPS=true&&set PORT = 3001&&npm start
```

PowerShell打开（或者是vscode终端打开），执行：

```
($env:HTTPS = "true") -and (npm start)
//如果要更改多个环境变量，用下面的这种方式
 ($env:HTTPS = "false") -and($env:PORT = 3001) -and (npm start) 
```

注意：一个符号都不能少哈，直接复制即可，都是有用的，以上都是在window上执行的命令  