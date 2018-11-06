<template>
<div class="box">
    <div>个人信息</div>
    <div>个人信息</div>
    <div>个人信息</div>
    <div>个人信息</div>
    <div>个人信息</div>
    <div>个人信息</div>
    <div>个人信息</div>
    <div>个人信息</div>
    <div>个人信息</div>
    <div>个人信息</div>
    <div>个人信息</div>
    <div>个人信息</div>
    <div>个人信息</div>
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
};
</script>

<style>
</style>
