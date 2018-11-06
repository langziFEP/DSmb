<template>
    <div class="foot">
        <ul class="ft-ul">
            <router-link tag="li" to="/shangcheng">商城</router-link>
            <router-link tag="li" to="/fenlei">分类</router-link>
            <router-link tag="li" to="/gouwuche">购物车</router-link>
            <router-link tag="li" to="/wode">我的</router-link>
        </ul>
    </div>
</template>

<script>
export default {

}
</script>

<style lang='less'>
.foot{
    height: 1.533333rem;
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    align-items: center;
    justify-content: center;
    background: #25252f;
    .ft-ul{
        display: flex;
        li{
            flex: 1;
            text-align: center;
            line-height: 1.533333rem;
            color: #a0a0a0;
            font-size: 0.46rem;
            cursor: pointer;
        }
        .router-link-exact-active{
            color: #ff6666;   
        }
    }
}
    
</style>
