<template>
  <div id="app">
    <!-- 匹配组件的坑 -->
    <router-view />
  </div>
</template>

<style lang="less">
// 引入图标库
// css的原生写法
@import url("//at.alicdn.com/t/font_1426139_jm7n2373nlh.css");
// 导入vant样式
@import url("../node_modules/vant/lib/index.css");

// 公共的样式
* {
  margin: 0;
  padding: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

a:hover {
  color: inherit;
}

ul,
li,
ol {
  list-style: none;
}

i,
em {
  font-style: normal;
}
</style>
