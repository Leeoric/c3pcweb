import Vue from 'vue'
import Router from 'vue-router'
import NewestMeeting from 'components/newestMeeting/newestMeeting'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/NewestMeeting'
    },
    {
      path: '/newestMeeting',
      component: NewestMeeting
    }
    // {
    //   path: '/singer',
    //   component: Singer,
    //   children: [
    //     {
    //       path: ':id',
    //       component: SingerDetail
    //     }
    //   ]
    // },
    // {
    //   path: '/rank',
    //   component: Rank
    // },
    // {
    //   path: '/search',
    //   component: Search
    // }
  ]
})
