import HomePage from "~/pages/HomePage"
import ServicesPage from "~/pages/ServicesPage"

//Public Routes
const publicRoutes =[
    {path: "/", component: HomePage},
    {path: "/services", component: ServicesPage},
]

//Private Routers
const privateRoutes =[

]

export {publicRoutes, privateRoutes}