# f2Chart在最新项目模板4.xx中使用的一些问题

## 问题：f2Chart在最新项目模板4.xx中使用的一些问题

注意：我们的4.xx模板的hooks版本，默认是将@tuya-rn/tuya-native-components和@tuya-rn/tuya-native-elements整合 tuya-panel-kit这个包里，但是我们的F2Chart组件是在@tuya-rn/tuya-native-elements里的。@tuya-rn/tuya-native-elements的依赖包又依赖于@tuya-rn/tuya-native-components这个包，

所以如果在项目中使用F2Chart的图表，就要下载@tuya-rn/tuya-native-components和@tuya-rn/tuya-native-elements这两个依赖包

但是：如果将@tuya-rn/tuya-native-components和@tuya-rn/tuya-native-elements这两个依赖包直接添加项目中时，运行项目时，就会报错,意思就是存在相同的模块依赖，就是有冲突了，

```
This error is caused by a @xxx declaration with the same name across two different files.
jest-haste-map: @xxx naming collision
This error is caused by hasteImpl returning the same name for different files.

```

## 问题原因：
我们引入了tuya-panel-kit和@tuya-rn/tuya-native-components和@tuya-rn/tuya-native-elements，造成了依赖直接的冲突

## 解决：
因为我们要用到f2chart，所以只能舍弃tuya-panel-kit，在hooks版本的模板里，默认所有的组件和方法都是从tuya-panel-kit中引入的。好在所有组件和方法在@tuya-rn/tuya-native-components和@tuya-rn/tuya-native-element都有原样的映射，我们直接全局替换就行


## 最后：同时附上一份没有问题的package.json

```js
{
  "rnVersion": [
    "5.28"
  ],
  "license": "ISC",
  "author": "",
  "pid": [],
  "uiid": "",
  "version": "1.0.0",
  "scripts": {
    "start": "node node_modules/react-native/local-cli/cli.js start",
    "lint": "prettier --write '**/*.{js,jsx,ts,tsx}'",
    "test": "echo \"Error: no test specified\" && exit 1",
    "postinstall": "tuya-patch-package --patch-dir node_modules/@tuya-rn/tuya-react-native-patches/patches",
    "readResource": "node src/res/read.ts",
    "release:init": "standard-version --first-release -t @template/basic-ts-0.59@",
    "release:major:pre": "standard-version --release-as major --prerelease rc --skip.tag=true",
    "release:major": "standard-version --release-as major -t @template/basic-ts-0.59@",
    "release:minor:pre": "standard-version --release-as minor --prerelease rc --skip.changelog=true --skip.tag=true",
    "release:minor": "standard-version --release-as minor -t @template/basic-ts-0.59@",
    "release:patch:pre": "standard-version --release-as patch --prerelease rc --skip.tag=true",
    "release:patch": "standard-version --release-as patch -t @template/basic-ts-0.59@"
  },
  "main": "index.ios.js",
  "description": "Basic Template (基础模板 React Native 0.59 TS Hooks 版本)",
  "dependencies": {
    "@tuya-rn/TYRCTFileManager": "1.0.0-rc.7",
    "@tuya-rn/rn-storage-cache": "^2.0.0",
    "@tuya-rn/tuya-native-components": "~4.0.3",
    "@tuya-rn/tuya-native-elements": "~4.0.5",
    "@tuya-rn/tuya-native-health-elements": "~1.0.0",
    "lodash": "^4.17.19",
    "prop-types": "^15.7.2",
    "react": "16.8.3",
    "react-native": "0.59.10",
    "react-native-calendars": "1.21.0",
    "react-native-shadow": "^1.2.2",
    "react-native-svg": "5.5.1",
    "react-redux": "^7.2.1",
    "redux": "^4.0.0",
    "redux-actions": "^2.6.1",
    "redux-logger": "^3.0.6",
    "redux-observable": "^1.0.0",
    "redux-thunk": "^2.3.0",
    "rn-fetch-blob": "^0.12.0",
    "rxjs": "^6.3.1",
    "rxjs-compat": "^6.3.1"
  },
  "devDependencies": {
    "@babel/plugin-proposal-decorators": "^7.12.1",
    "@tuya-rn/tuya-native-lint": "^1.0.3",
    "@tuya-rn/tuya-react-native-patches": "^1.0.2",
    "@types/lodash": "^4.14.137",
    "@types/react": "^16.0.4",
    "@types/react-native": "^0.57.65",
    "@types/react-redux": "^7.1.2",
    "@types/redux": "^3.6.0",
    "@types/redux-actions": "^2.6.1",
    "@types/redux-logger": "^3.0.7",
    "@types/tuya-rn__tuya-native-components": "https://registry.npmjs.org/@types/tuya-panel-kit/-/tuya-panel-kit-4.0.0.tgz",
    "@typescript-eslint/eslint-plugin": "^2.16.0",
    "@typescript-eslint/parser": "^2.16.0",
    "babel-eslint": "^10.0.0",
    "babel-jest": "^22.1.0",
    "babel-plugin-import": "^1.11.0",
    "babel-plugin-module-resolver": "^4.0.0",
    "babel-plugin-transform-decorators-legacy": "^1.3.4",
    "babel-plugin-transform-remove-console": "^6.9.4",
    "eslint": "^7.1.0",
    "eslint-import-resolver-alias": "^1.1.2",
    "jest": "^22.1.1",
    "metro-react-native-babel-preset": "^0.63.0",
    "prettier": "^1.16.4",
    "react-native-typescript-transformer": "^1.2.13",
    "react-test-renderer": "^16.2.0",
    "standard-version": "^8.0.1",
    "typescript": "^3.8.3"
  },
  "jest": {
    "preset": "react-native"
  }
}

```
