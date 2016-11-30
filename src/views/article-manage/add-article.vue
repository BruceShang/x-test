<template>
  <div class="header">
    <h1 class="page-title">新建文章</h1>
  </div>
  <ul class="breadcrumb">
    <li><a v-link="{ path: '/article/article-add'}"> <i class=" icon-home"></i> 主页</a> <span class="divider">/</span></li>
    <li><a  class="active">新建页</a> <span class="divider">/</span></li>
  </ul>
  <div class="container-fluid">
    <div class="row-fluid">
      <div class="well">
        <!--start-->
        <form class="form-horizontal">
          <div class="control-group">
            <label class="control-label" for="inputEmail">诗词标题:</label>
            <div class="controls">
              <input type="text" class="span11" id="inputEmail" v-model="param.poetryName" name="poetryName" placeholder="请输入诗词标题...">
            </div>
          </div>
          <div class="control-group">
            <label class="control-label" for="inputPassword">副标题:</label>
            <div class="controls">
              <input type="password" class="span11" id="inputPassword" name="fPoetryName" placeholder="Password">
            </div>
          </div>
          <div class="control-group">
            <label class="control-label" for="authorName">作者:</label>
            <div class="controls">
              <input type="password" class="span11" id="authorName" name="authorName" placeholder="Password">
            </div>
          </div>
          <div class="control-group">
            <label class="control-label" for="dynasty">朝代:</label>
            <div class="controls">
              <select name="dynasty" id="dynasty" class="span11">
                <option value="">全部朝代</option>
                <option value="1">唐朝</option>
                <option value="11">宋朝</option>
                <option value="12">元朝</option>
                <option value="13">明朝</option>
                <option value="13">清朝</option>
              </select>
            </div>
          </div>
          <div class="control-group">
            <label class="control-label" for="authorTxt">作者简介:</label>
            <div class="controls">
              <textarea name="authorTxt" cols="" rows="" class="textarea"  placeholder="说点什么...最少输入10个字符" datatype="*10-100" dragonfly="true" nullmsg="备注不能为空！" onKeyUp="textarealength(this,200)"></textarea>
              <p class="textarea-numberbar"><em class="textarea-length">0</em>/200</p>
            </div>
          </div>
          <div class="control-group">
            <label class="control-label" for="creationBg">创作背景:</label>
            <div class="controls">
              <textarea name="creationBg" cols="" rows="" class="textarea"  placeholder="说点什么...最少输入10个字符" datatype="*10-100" dragonfly="true" nullmsg="备注不能为空！" onKeyUp="textarealength(this,200)"></textarea>
              <p class="textarea-numberbar"><em class="textarea-length">0</em>/200</p>
            </div>
          </div>
          <div class="control-group">
            <label class="control-label" for="poetryArticl">古诗文:</label>
            <div class="controls">
              <div id="ueditor_container_1">
                <p>Hello World!</p>
                <p>Some initial <strong>bold</strong> text</p>
                <p><br></p>
              </div>
            </div>
          </div>
          <div class="control-group">
            <label class="control-label" for="poetryArticlEdit">古诗文解析:</label>
            <div class="controls">
              <div id="ueditor_container_2">
                <p>Hello World!</p>
                <p>Some initial <strong>bold</strong> text</p>
                <p><br></p>
              </div>
            </div>
          </div>
          <div class="control-group">
            <div class="controls">
              <button class="btn btn-primary radius" type="button" id="subForm" @click="queryArticle"><i class="icon-folder-close"></i> 保存并提交审核</button>
              <button class="btn btn-default radius" type="button">&nbsp;&nbsp;取消&nbsp;&nbsp;</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<style>
  .breadcrumb li a {
    font-size: 12px;
  }
</style>

<script>
import {
  post,
} from 'utils/api'
// import Quill from 'quill'
// import 'components/quilljs/quill-snow.css'

export default {
  data () {
    return {
      param: {
        poetryName: '',                          // name
        fPoetryName: '',
        poetryArticl: '',
        poetryArticlEdit: '',
      },
      quillMethods: {
        quill1: '',
        quill2: '',
      },
      about: {
        memo: '',
      }
    }
  },
  created () {
  },
  methods: {
    onMemoChange (content) {
      this.about.memo = content
    },
    queryArticle () {
      let params = {
        poetryName: this.param.poetryName,
        fPoetryName: this.param.fPoetryName,
        poetryArticl: this.quillMethods.quill1.getContents(),
        poetryArticlEdit: this.quillMethods.quill2.getContents(),
      }
      post('/abcd', params).then(res => {
        if (res.code === '0') {
          console.log('123456')
        }
      })
    },
  },
  ready () {
  },
}
</script>
