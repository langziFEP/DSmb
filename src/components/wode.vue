<template>
    <div class="wode">
        <h1 class="top">
            <span>&lt;</span>
            <span>我的</span>
            <span></span>
        </h1>
        <div class="banner">
            <img src="../assets/head.png" alt="">
        </div> 
        <div class="dls">
            <dl class="dl">
                <dt>
                   <img src="../assets/gexx.png" alt=""> 
                </dt>
          <router-link tag="dd" to="/wdgrxx">
                    <h1 class="h1">    
                        <p class="p1">
                            个人信息
                        </p>
                        <p class="p2">
                            personal information
                        </p>
                    </h1>
                    <h1 class="h2">
                        &gt;
                    </h1>
                </router-link>
            </dl>
            <dl class="dl">
                <dt>
                   <img src="../assets/wddd.png" alt=""> 
                </dt>
          <router-link tag="dd" to="/wdwddd">
                    <h1 class="h1">    
                        <p class="p1">
                            我的订单
                        </p>
                        <p class="p2">
                            My Order
                        </p>
                    </h1>
                    <h1 class="h2">
                        &gt;
                    </h1>
                </router-link>
            </dl>
            <dl class="dl">
                <dt>
                   <img src="../assets/wdsc.png" alt=""> 
                </dt>
          <router-link tag="dd" to="/wdwdsc">
                    <h1 class="h1">    
                        <p class="p1">
                            我的收藏
                        </p>
                        <p class="p2">
                            My collection
                        </p>
                    </h1>
                    <h1 class="h2">
                        &gt;
                    </h1>
                </router-link>
            </dl>
            <dl class="dl">
                <dt>
                   <img src="../assets/sz.png" alt=""> 
                </dt>
          <router-link tag="dd" to="/wdwdsz">
                    <h1 class="h1">    
                        <p class="p1">
                            设置
                        </p>
                        <p class="p2">
                            Set Up
                        </p>
                    </h1>
                    <h1 class="h2">
                        &gt;
                    </h1>
                </router-link>
            </dl>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang='less'>
.wode {
  width: 100%;
  .top {
    justify-content: space-between;
    height: 1.8rem;
    line-height: 1.8rem;
    font-size: 0.533333rem;
    color: #fff;
    display: flex;
    background: #494961;
    span {
      flex: 1;
      padding: 0 0.2rem;
      text-align: center;
    }
  }
  .banner {
    width: 100%;
    img {
      width: 100%;
    }
  }
  .dls {
    .dl {
      display: flex;
      height: 2.666667rem;
      dt {
        img {
          height: 1.866667rem;
          width: 1.866667rem;
          margin: 0.3rem;
        }
      }
      dd {
        display: flex;
        border-bottom: 1px solid #ccc;
        justify-content: space-between;
        width: 100%;
        .h1 {
            margin-left: 0.2rem;
          .p1 {
            font-size: 0.6rem;
            font-weight: bolder;
            margin-top: 0.8rem;
          }
          .p2 {
            font-size: 0.346667rem;
            color: #ccc;
            margin-top: 0.2rem;
          }
        }
        .h2{
            font-size: 0.666667rem;
            color: #ccc;
            line-height: 2.666667rem;
        }
      }
    }
  }
}
</style>
