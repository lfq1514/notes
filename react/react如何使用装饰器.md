# 在 react 中如何使用装饰器？

## 背景

装饰器处于试验阶段，如果想要在项目中使用装饰器，要安装相应的包（@babelplugin-proposal-decorators），但是呢，直接安装后，然后在 babel 中配置，仍然没用（你说气不气），这里我结合网上的说明，以及我自己的试验，给大家说一下才能正常使用

## 步骤

1. 项目要执行 reject
   不要问为什么，不执行，你配置了就是不生效，

2. 安装@babelplugin-proposal-decorators

3. 在 package.json 中去配置

```
"babel":{
    "plugins": [
    [
        "@babel/plugin-proposal-decorators",
        {
            "legacy": true
        }
    ]
  ]
}
```

之后就能成功啦，亲测有效
