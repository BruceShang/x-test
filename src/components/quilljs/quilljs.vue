<template>
  <div :id="containerId" v-html="content">
    <p>Hello World!</p>
    <p>Some initial <strong>bold</strong> text</p>
    <p><br></p>
  </div>
</template>
<style>
    body{
        background-color:#ff0000;
    }
</style>
<script>
    import Quill from 'quill'
//    import $script from 'scriptjs'
    import './quill-snow.css'

    // 保证编辑器id唯一
    let uuid = 1
    function getEditorId() {
      return `ueditor_container_${uuid++}`
    }
    export default{
      props: {
        content: {
          required: true,
        }
      },
      data() {
        return {
          containerId: getEditorId(),
        }
      },
      ready () {
        new Quill('#' + this.containerId, {
          theme: 'snow'
        })
      },
    }
</script>
















