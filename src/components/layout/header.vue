<template>
    <div class="header">
        <div class="headmr">
            <div class="logo"><a href="index.html" title="诗词鉴赏"><!-- <img src="./asserts/index_03.png">--></a> </div>
            <div class="nav">
                <ul>
                    <li><a v-link="{ path: '/songs'}" title="">test-list</a> </li>
                    <li><a v-link="{ path: '/song/songs-detail'}" title="">test-detail</a> </li>
                    <!-- <li><a href="#" target="_blank" title="">宋词</a> </li>
                    <li><a href="#" target="_blank" title="">元曲</a> </li>
                    <li><a href="#" target="_blank" title="">明清小说</a> </li>
                    <li><a href="#" target="_blank" title="">名句赏析</a> </li>-->
                </ul>
            </div>
        </div>
    </div>
    <!--header-->
</template>
<script>
  export default {
    menthods: {
      nextJump () {
        this.$router.go({
          path: '/list/songs-list',
        })
      },
    },
  }
</script>
