<template>
  <div>
      <top-bar></top-bar>
      <menu></menu>
      <div class="content">
          <div class="content-mr">
            <router-view></router-view>
          </div>
      </div>
  </div>
</template>
<style>
     #line-chart {
        height:300px;
        width:800px;
        margin: 0px auto;
        margin-top: 1em;
    }
    .brand {
        font-family: georgia, serif;
    }
    .brand .first {
        color: #ccc;
        font-style: italic;
    }
    .brand .second {
        color: #fff;
        font-weight: bold;
        font-family: '微软雅黑';
    }
</style>
<script>
    import TopBar from './top-bar.vue'
    import Menu from './menu.vue'
    export default {
      components: {
        TopBar,
        Menu,
      },
    }
</script>
