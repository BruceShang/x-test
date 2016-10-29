<template>
    <div class="sidebar-nav">
        <a v-link="{ path: '/article/article-add'}" class="nav-header" data-toggle="collapse">
          <i class="icon-book"></i>文章</a>
        <ul id="dashboard-menu" class="nav nav-list collapse in">
            <li ><a v-link="{ path: '/article/article-add'}"> <i class="icon-plus"></i> 新建文章</a></li>
            <li ><a v-link="{ path: '/article/article-list'}"> <i class="icon-list-alt"></i> 文章列表</a></li>
        </ul>
    </div>
</template>
<style>
  #dashboard-menu li a {
    border-bottom: 1px dashed #cccccc;
  }
  #dashboard-menu li:last-child a {
     border-bottom: none;
   }
</style>
<script>

</script>
