import Footer from "~/components/Layout/components/Footer"
import FAQ from "~/pages/FAQ"
import HomePage from "~/pages/HomePage"
import ServicesPage from "~/pages/ServicesPage"

//Public Routes
const publicRoutes =[
    {path: "/", component: HomePage},
    {path: "/services", component: ServicesPage},
    {path: "/faq", component: FAQ}
]

//Private Routers
const privateRoutes =[

]

export {publicRoutes, privateRoutes}