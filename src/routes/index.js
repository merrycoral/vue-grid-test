import {
  createRouter,
  createWebHashHistory
} from "vue-router";

import VueHome from "./VueHome";
import NotFound from "./NotFound";

import AgGrid from "../components/AgGrid";
import TabulatorGrid from "../components/TabulatorGrid";
import ExcelEditor from "../components/ExcelEditor";

export default createRouter({
  // Hash
  // https://google.com/#/search
  history: createWebHashHistory(),
  // pages
  routes: [{
      path: "/",
      component: VueHome,
    },
    {
      path: "/aggrid",
      component: AgGrid,
    },
    {
      path: "/tabulator",
      component: TabulatorGrid,
    },
    {
      path: "/exceleditor",
      component: ExcelEditor,
    },
    {
      path: "/:notFound(.*)",
      component: NotFound,
    },
  ],
});