# 基于Vue的艺术设计辅助平台

## 程序运行配置说明

### 运行步骤

  1. 安装Node.js和npm。
  2. 在终端中进入项目根目录。
  3. 运行`npm install`安装依赖包。
  4. 运行`npm run dev`启动开发服务器。
  5. 在浏览器中访问`http://localhost:3000`查看运行效果。

> ⚠️**注意**
> 程序运行需要在`src/stores/api.ts`文件中填入自己的API Key
> API Key请在[阿里云百炼平台](https://bailian.console.aliyun.com/#/api_key)获取

### 程序运行环境

  - 操作系统
    - Windows10+
  - 开发语言及版本
    - Vue.js: ^3.4.27
    - TypeScript: ~5.4.5
  - 构建工具
    - Vite: ^5.2.11
  - 相关库函数版本
    - Element Plus: ^2.7.2
    - Pinia: ^2.1.7
    - Axios: ^1.6.8
    - Vue Router: ^4.3.2
    - @element-plus/icons-vue: ^2.3.1

---

## 模型更换说明

api调用参考文档：
https://help.aliyun.com/zh/dashscope/developer-reference/api-details?disableWebsiteRedirect=true#ccc3a8fb41yqq

- 选择模型：阿里云百炼->[模型广场](https://bailian.console.aliyun.com/#/model-market)
- 计费统计：阿里云百炼->计费管理
- 查看扣费和余额: 阿里云控制台->账单管理->[账单详情](https://usercenter2.aliyun.com/finance/expense-report/expense-detail)

---

# bishe

### 安装依赖

```sh
npm install
```

### 热编译

```sh
npm run dev
```

### 打包项目

```sh
npm run build
```
