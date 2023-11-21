# DeepLX Translate Alfred 插件

## 依赖

- [**DeepLX**](https://github.com/OwO-Network/DeepLX/tree/main#run-on-mac)
- [Alfred 4 or later](https://www.alfredapp.com) with the paid [Powerpack](https://www.alfredapp.com/powerpack/) upgrade
- [Node.js 16+](https://nodejs.org)

## 安装

```bash
npm i -g alfred-deeplx
```

## 配置

> 通过设置 alfred 插件 Environment Variables 注入变量

![env-configuration](https://mdn.alipayobjects.com/huamei_ewonmy/afts/img/A*AbVtTYCc85kAAAAAAAAAAAAADmihAQ/original)

### host

- DeepLX 服务端地址，**不含 `/` 或 `/translate` 后缀**
- 类型：URL
- 默认值: http://localhost:1188

### token

- DeepLX 访问 token，可选，与 DeepLX 部署参数值保持一致
- 类型：String
- 默认值：无

### showAlternatives

- 是否展示备选翻译结果
- 类型：Boolean
- 默认值：true

### reverseTranslate

- 是否反向翻译，即对结果进行逆向翻译
- 类型：Boolean
- 默认值：true

## 使用

- 唤起 alfred，输入关键字 `dp` 输入待翻译内容
- 通过快捷键 `⌥ + D` 翻译当前系统选中的文案
- 通过快捷键 `⌥ + T` 唤起插件

## 运行截图

![zh-to-en](https://mdn.alipayobjects.com/huamei_ewonmy/afts/img/A*GcyQSq1tFnoAAAAAAAAAAAAADmihAQ/original)

![en-to-zh](https://mdn.alipayobjects.com/huamei_ewonmy/afts/img/A*4zQwQo9M9QMAAAAAAAAAAAAADmihAQ/original)

## 相关项目

- [DeepLX](https://github.com/OwO-Network/DeepLX)
- [YoudaoTranlator](https://github.com/wensonsmith/YoudaoTranslator)
