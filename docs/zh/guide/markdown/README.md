---
meta:
  - name: keywords
    content: static docs generator vue
---

# Markdown 拓展

## 在 Markdown 中 使用 Vue

- 浏览器的 API 访问限制

当你在开发一个 VuePress 应用时，由于所有的页面在生成静态 HTML 时都需要通过 Node.js 服务端渲染，因此所有的 Vue 相关代码都应当遵循 [编写通用代码](https://ssr.vuejs.org/zh/universal.html) 的要求。简而言之，请确保只在 `beforeMounted` 或者 `mounted` 访问浏览器 / DOM 的 API。

如果你正在使用，或者需要展示一个对于 SSR 不怎么友好的组件（比如包含了自定义指令），你可以将它们包裹在内置的 `<ClientOnly>` 组件中：

```md
<ClientOnly>
  <NonSSRFriendlyComponent/>
</ClientOnly>
```

请注意，这并不能解决一些组件或库在**导入**时就试图访问浏览器 API 的问题 —— 如果需要使用这样的组件或库，你需要在合适的生命周期钩子中**动态导入**它们：

```vue
<script>
export default {
  mounted() {
    import("./lib-that-access-window-on-import").then(module => {
      // use code
    });
  },
};
</script>
```

## 模板语法

### 插值

每一个 Markdown 文件将首先被编译成 HTML，接着作为一个 Vue 组件传入 `vue-loader`，这意味着你可以在文本中使用 Vue 风格的插值：

**Input**

```md
{{ 1 + 1 }}
```

**Output**

<pre><code>{{ 1 + 1 }}</code></pre>

### 指令

同样地，也可以使用指令:

**Input**

```md
<span v-for="i in 3">{{ i }} </span>
```

**Output**

<pre><code><span v-for="i in 3">{{ i }} </span></code></pre>

### 访问网站以及页面的数据

编译后的组件没有私有数据，但可以访问 [网站的元数据](./custom-themes.md#site-and-page-metadata)，举例来说：

**Input**

```md
{{ $page }}
```

**Output**

```json
{
  "path": "/using-vue.html",
  "title": "Using Vue in Markdown",
  "frontmatter": {}
}
```

## Escaping

默认情况下，块级 (block) 的代码块将会被自动包裹在 `v-pre` 中。如果你想要在内联 (inline) 的代码块或者普通文本中显示原始的大括号，或者一些 Vue 特定的语法，你需要使用自定义容器 `v-pre` 来包裹：

**Input**

```md
::: v-pre
`{{ This will be displayed as-is }}`
:::
```

**Output**

::: v-pre
`{{ This will be displayed as-is }}`
:::

## 使用组件

所有在 `.vuepress/components` 中找到的 `*.vue` 文件将会自动地被注册为全局的异步组件，如：

```
.
└─ .vuepress
   └─ components
      ├─ demo-1.vue
      ├─ OtherComponent.vue
      └─ Foo
         └─ Bar.vue
```

你可以直接使用这些组件在任意的 Markdown 文件中（组件名是通过文件名取到的）：

```md
<demo-1/>
<OtherComponent/>
<Foo-Bar/>
```

<demo-1></demo-1>

<OtherComponent/>

<Foo-Bar/>

::: warning 重要！
请确保一个自定义组件的名字包含连接符或者是 PascalCase，否则，它将会被视为一个内联元素，并被包裹在一个 `<p>` 标签中，这将会导致 HTML 渲染紊乱，因为 HTML 标准规定， `<p>` 标签中不允许放置任何块级元素。
:::

## 使用预处理器

VuePress 对以下预处理器已经内置相关的 webpack 配置：`sass`、`scss`、`less`、`stylus` 和 `pug`。要使用它们你只需要在项目中安装对应的依赖即可。例如，要使用 `sass`，需要安装：

```bash
yarn add -D sass-loader node-sass
```

然后你就可以在 Markdown 或是组件中使用如下代码：

```vue
<style lang="sass">
  .title
    font-size: 20px
</style>
```

要在组件中使用 `<template lang="pug">`，则需要安装 `pug` 和 `pug-plain-loader`:

```bash
yarn add -D pug pug-plain-loader
```

::: tip
需要指出的是，如果你是一个 `stylus` 用户，你并不需要在你的项目中安装 `stylus` 和 `stylus-loader`，因为 VuePress 已经内置了它们。

对于那些没有内置的预处理器，除了安装对应的依赖，你还需要 [拓展内部的 Webpack 配置](../config/#configurewebpack)。
:::

## 脚本和样式提升

有时，你可以只想在当前页面应用一些 JavaScript 或者 CSS，在这种情况下，你可以直接在 Markdown 文件中使用原生的 `<script>` 或者 `<style>` 标签，它们将会从编译后的 HTML 文件中提取出来，并作为生成的 Vue 单文件组件的 `<script>` 和 `<style>` 标签。

<p class="demo" :class="$style.example"></p>

<style module>
.example {
  color: #41b883;
}
</style>

<script>
export default {
  mounted () {
    document.querySelector(`.${this.$style.example}`)
      .textContent = '这个块是被内联的脚本渲染的，样式也采用了内联样式。'
  }
}
</script>

## Header Anchors

所有的标题将会自动地应用 anchor 链接，anchor 的渲染可以通过 [`markdown.anchor`](../config/#markdownanchor) 来配置。

## 链接

- 内部的、并以 `.md` or `.html` 结尾的链接，将会被转换成 `<router-link>` 用于 SPA 导航。

  - [首页](/zh/)
  - [Markdown 的配置](../config/#markdown)

- 外部的链接将会被自动地设置为 `target="_blank"`:

  - [vuejs.org](https://vuejs.org)
  - [VuePress on GitHub](https://github.com/vuejs/vuepress)

## YAML Front Matter

VuePress 提供了对 [YAML front matter](https://jekyllrb.com/docs/frontmatter/) 开箱即用的支持:

```yaml
title: Blogging Like a Hacker
lang: en-US
---

```

这些数据可以在当前页的正文中使用，在任意的自定义或主题组件中，它可以通过 `$page` 来访问。

`title` 和 `lang` 的 meta 将会被自动地注入到当前的页面中，当然你也可以指定一些额外需要注入的 meta：

```yaml
meta:
  - name: description
    content: hello
  - name: keywords
    content: super duper SEO
---

```

## GitHub 风格的表格

**Input**

```
| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |
```

**Output**

| Tables        |      Are      |  Cool |
| ------------- | :-----------: | ----: |
| col 3 is      | right-aligned | $1600 |
| col 2 is      |   centered    |   $12 |
| zebra stripes |   are neat    |    $1 |

## Emoji

**Input**

```
:tada: :100:
```

**Output**

:tada: :100:

## 目录

**Input**

```
[[toc]]
```

**Output**

[[toc]]

目录（Table of Contents）的渲染可以通过 [`markdown.toc`](../config/#markdowntoc) 选项来配置。

## 自定义容器

**Input**

```
::: tip
This is a tip
:::

::: warning
This is a warning
:::

::: danger
This is a dangerous warning
:::
```

**Output**

::: tip
This is a tip
:::

::: warning
This is a warning
:::

::: danger
This is a dangerous thing
:::

你也可以自定义块中的标题：

```
::: danger STOP
Danger zone, do not proceed
:::
```

::: danger STOP
Danger zone, do not proceed
:::

## 代码块中的行高亮

**Input**

````
``` js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
````

**Output**

```js{4}
export default {
  data() {
    return {
      msg: "Highlighted!",
    };
  },
};
```

## 进阶配置

VuePress 使用 [markdown-it](https://github.com/markdown-it/markdown-it) 来渲染 Markdown，上述大多数的拓展也都是通过自定义的插件实现的。想要进一步的话，你可以通过 `.vuepress/config.js` 的 `markdown` 选项，来对当前的 `markdown-it` 实例做一些自定义的配置：

```js
module.exports = {
  markdown: {
    // markdown-it-anchor 的选项
    anchor: { permalink: false },
    // markdown-it-toc 的选项
    toc: { includeLevel: [1, 2] },
    config: md => {
      // 使用更多的 markdown-it 插件!
      md.use(require("markdown-it-xxx"));
    },
  },
};
```
