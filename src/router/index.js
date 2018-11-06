import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import foot from '@/components/foot'
import shangcheng from '@/components/shangcheng'
import fenlei from '@/components/fenlei'
import gouwuche from '@/components/gouwuche'
import wode from '@/components/wode'
import wdgrxx from '../vues/wdgrxx'
import wdwddd from '../vues/wdwddd'
import wdwdsc from '../vues/wdwdsc'
import wdwdsz from '../vues/wdwdsz'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'foot',
      component: foot
    },
    {
      path: '/shangcheng',
      name: 'shangcheng',
      component: shangcheng
    },
    {
      path: '/fenlei',
      name: 'fenlei',
      component: fenlei
    },
    {
      path: '/gouwuche',
      name: 'gouwuche',
      component: gouwuche
    },
    {
      path: '/wode',
      name: 'wode',
      component: wode
    },
    {
      path: '/wdgrxx',
      name: 'wdgrxx',
      component: wdgrxx
    },
    {
      path: '/wdwdsz',
      name: 'wdwdsz',
      component: wdwdsz
    },
    {
      path: '/wdwddd',
      name: 'wdwddd',
      component: wdwddd
    },
    {
      path: '/wdwdsc',
      name: 'wdwdsc',
      component: wdwdsc
    }
  ]
})
