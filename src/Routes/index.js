import LayoutAdmin from "~/components/Layout/LayoutAdmin"
import Dashboard from "~/pages/Admin/Dashboard"

//Public Routes
const publicRoutes =[
    {path: "/dashboard", component: Dashboard, layout: LayoutAdmin},
]

//Private Routers
const privateRoutes =[

]

export {publicRoutes, privateRoutes}