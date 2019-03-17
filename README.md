# vue-browser-back

> 捕捉用户点击浏览器返回事件，以便对用户做挽留操作，支持 PC/Mobile

## 安装

```bash
npm i vue-browser-back -S
```

## 用法

```js
import Vue from 'vue'
import VueBrowserBack from 'vue-browser-back'

Vue.use(VueBrowserBack)
```

```js
this.$browserBack(() => { /* 这里就可以做点什么来挽留用户 */ })
```
