import LayoutAdmin from "~/components/Layout/LayoutAdmin"
import Account from "~/pages/Admin/Account"
import Customer from "~/pages/Admin/Customer"
import Dashboard from "~/pages/Admin/Dashboard"
import ServicePage from "~/pages/Admin/ServicePage"

//Public Routes
const publicRoutes =[
    {path: "/admin/dashboard", component: Dashboard, layout: LayoutAdmin},
    {path: "/admin/account", component: Account, layout: LayoutAdmin},
    {path: "/admin/customer", component: Customer, layout: LayoutAdmin},
    {path: "/admin/service", component: ServicePage, layout: LayoutAdmin},
]

//Private Routers
const privateRoutes =[

]

export {publicRoutes, privateRoutes}