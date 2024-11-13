import LayoutAdmin from "~/components/Layout/LayoutAdmin";
import LayoutManager from "~/components/Layout/LayoutManager";
import Dashboard from "~/pages/Admin/Dashboard";

//Public Routes
const publicRoutes = [
  { path: "/dashboard", component: Dashboard, layout: LayoutAdmin },
  { path: "/dashboard/m", component: Dashboard, layout: LayoutManager },
];

//Private Routers
const privateRoutes = [];

export { publicRoutes, privateRoutes };
