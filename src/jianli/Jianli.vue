<template>
  <div id="jianli">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'jianli',
}
</script>

<style>

#jianli {
  width: 800px;
  margin: 0 auto;
}

.jianli-title {
  margin-top: 20px;
  text-align: center;
  font-size: 32px;
}
.jianli-p {
  margin-top: 20px;
  line-height: 2;
  font-size: 16px;
  padding: 0 10px;
}
.jianli-github {
  color: #555;
  border-bottom: 1px solid #999;
}
.jianli-github:hover {
  color: #000;
  border-bottom: 1px solid #000;
}

.jianli-code {
  font-size: 14px;
  white-space: pre-wrap;
  word-wrap: break-word;
}


.jianli-tip {
  font-size: 16px;
  margin: 20px 0;
  padding: 10px;
  border-bottom: 2px dashed;
}
.jianli-tip a {
  color: #42b983;
}
.jianli-tip a:hover {
  text-decoration: underline;
}

@media screen and (max-width: 800px) {
  #jianli {
    width: 100%;
  }
  .jianli-p {
    font-size: 14px;
  }
  .jianli-code {
    font-size: 12px;
  }
}

</style>
  