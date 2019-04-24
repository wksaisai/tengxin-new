import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/home'
import Record from "../components/record/record";
import Repository from "../components/repository/repository";
import My from "../components/my/my";
import Detail from "../components/detail/detail.vue";
import Change from "../components/change/change.vue";
import Task from "../components/task/task.vue";
import Book from "../components/book/book.vue";
import Appraise from "../components/appraise/appraise.vue";
import Adderror from "../components/adderror/adderror.vue";
import Success from "../components/success/success.vue";
import Antd from "../components/antd/antd.vue";
import Form from "../components/form/form.vue";
import Plan from "../components/plan/plan.vue";
import Login from "../components/login/login.vue";
import Notice from "../components/notice/notice.vue";
import ErrorCom from "../components/error"
Vue.use(Router)

export default new Router({
  routes: [
    { path: "/", redirect: "/home" },
    { path: '/login', name: 'login', component: Login },
    { path: '/home', name: 'home', component: Home },
    { path: '/record', name: 'record', component: Record },
    { path: '/repository', name: 'repository', component: Repository },
    { path: '/my', name: 'my', component: My },
    { path: '/adderror', name: 'adderror', component: Adderror },
    { path: "/detail", name: "detail", component: Detail },
    { path: "/book", name: "book", component: Book },
    { path: "/appraise", name: "appraise", component: Appraise },
    { path: "/success", name: "success", component: Success },
    { path: "/antd", name: "antd", component: Antd },
    { path: "/form", name: "form", component: Form },
    { path: "/plan", name: "plan", component: Plan },
    { path: "/task", name: "task", component: Task },
    { path: "/notice", name: "notice", component: Notice },
    { path: "/change", name: "change", component: Change },
    { path: "**", component: ErrorCom }
  ]
})
