<template>
<div class="box">
    <div>我的设置</div>
    <div>我的设置</div>
    <div>我的设置</div>
    <div>我的设置</div>
    <div>我的设置</div>
    <div>我的设置</div>
    <div>我的设置</div>
    <div>我的设置</div>
    <div>我的设置</div>
        <button @click="btn">返回上一级页面</button>

</div>
    
</template>

<script>
export default {
methods: {
    btn() {
      this.$router.back();
    }
  }
}
</script>

<style>

</style>
