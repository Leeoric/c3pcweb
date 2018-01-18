import Vue from 'vue'
import Router from 'vue-router'
import NewestMeeting from 'components/newestMeeting/newestMeeting'
import HistoryMeeting from 'components/historyMeeting/historyMeeting'
import MeetingInfo from 'components/meetingInfo/meetingInfo'
import PersonalCenter from 'components/personalCenter/personalCenter'
import Search from 'components/search/search'
import CreateMeeting from 'components/createMeeting/createMeeting'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/newestMeeting'
    },
    {
      path: '/newestMeeting',
      component: NewestMeeting
    },
    {
      path: '/historyMeeting',
      component: HistoryMeeting
    },
    {
      path: '/meetingInfo',
      component: MeetingInfo
    },
    {
      path: '/personalCenter',
      component: PersonalCenter
    },
    {
      path: '/search',
      component: Search
    },
    {
      path: '/createMeeting',
      component: CreateMeeting
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
    // }
  ]
})
