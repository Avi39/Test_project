


import Layout from "../../src/layouts/full/FullLayout.vue"
import Login from "@/views/Auth/Login/Login.vue";
import Logout from "@/views/Auth/Logout/Logout.vue"
import HomePage from "@/views/HomePage.vue";
import NotFound from "@/views/404.vue"
import ModuleHomePage from "@/views/ModuleHomePage.vue";
import CustomerInfo from '@/views/CUSTOMERPROFILE/Pages/CustomerInfo.vue';
import { createRouter, createWebHistory } from 'vue-router';
// import CorBEFTTransStatusChange from "@/views/BEFTN/pages/CorBEFTTransStatusChange.vue";


const routes = [
  
  {
   
    path: "/",
    redirect: {
      name: "login",
    },
  },
  {
    path: "/login",
    name: "login",
    component: Login,
    meta: {
      requiresVisitor: false,
    },
  },
  {
    path: "/Logout",
    name: "Logout",
    component: Logout,
    meta: {
      requiresAuth: false, // all children will need authentication too
    },
  },

  {
    path: "/home",
    name: "Home Page",
    component: Layout,
    meta: {
      requiresVisitor: false,
    },
    children: [
      {
        path: "/HomePage",
        name: "home",
        components: {
          content: HomePage,
        },
      },
    ]
  },

  {
    name: "layout",
    path: "/",
    component: Layout,
    meta: {
      requiresAuth: false, // all children will need authentication too
    },
    redirect: {
      path: "home",
    },
    children: [
      {
        name: "Home Page",
        path: "/home",
        component: HomePage,
      },
      {
        name: "Module Home Page",
        path: "home/:requestData",
        component: ModuleHomePage,
      },
      {
        name:"Customer Profile",
        path:"/customer",
        component: CustomerInfo,
      },
      // {
      //   name:"CorBEFT",
      //   path:"/corbeft",
      //   component: CorBEFTTransStatusChange,
      // },


    ],
  },
  {
    name: "NotFound",
    path: "/:catchAll(.*)",
    component: NotFound,
    meta: {
      requiresAuth: false, 
    },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

let count = 0;
const firstPathList: Array<any> = JSON.parse(sessionStorage.getItem("RoutingPage") as any)

let pages: any = [];
if (firstPathList != null) {

  firstPathList.forEach((e: any) => {
    let routObj = {
      id: "",
      name: "",
      path: "",
      parentPath: "",
      component: {},
      metaTag: false,
      children: [],
      targetPath: ""

    }
    let pathName = e.TargetPath.split("/");
    let ComName = pathName[pathName.length - 1]
    let parentCom = pathName[pathName.length - 2]
    routObj.id = e.FastPath,
      routObj.name = ComName
    routObj.path = "/" + ComName
    routObj.parentPath = parentCom
    routObj.targetPath = e.TargetPath;
    pages.push(routObj)
  });
 
  pages.forEach((page: any) => {
    count++;
    let r = page.targetPath;
    router.addRoute(
      {
        name: count + page.parentPath,
        path: '/' + page.parentPath,
        component: Layout,
        meta: page.metaTag,
        children: [{
          path: page.path,
          name: page.name,
          component: () => import(`../${r}.vue`),
        },
        {
          name: "NotFound",
          path: "/:catchAll(.*)",
          component: NotFound,
          meta: {
            requiresAuth: false, // all children will need authentication too
          }
        },]
      }
    );

  });
}
router.onError((error, to) => {
  if (error.message.includes('Failed to fetch dynamically imported module') || error.message.includes("Importing a module script failed")) {
    router.push('NotFound');
  }
})
export default router
