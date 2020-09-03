import Dashboard from "views/Dashboard/Dashboard";
import Todo from "views/Dashboard/Todo";

var dashRoutes = [
    {
      path: "/dashboard",
      name: "Dashboard",
      component: Dashboard,
      layout: "/admin",
      view: true,
    },
    {
      path: "/todo",
      name: "todo",
      component: Todo,
      layout: "/admin",
      view: true,
    }
]

export default dashRoutes;
