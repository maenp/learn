1. 安装typescript编译器
```bash
npm install -g typescript
``` 
2. 编译ts文件
```bash
tsc hello.ts
```
3. 运行js文件
```bash
node hello.js
```


## 持续编译
```bash
tsc --init   // 生成tsconfig.json文件
tsc -w       // 持续编译
```