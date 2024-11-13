import React from 'react';
import LayoutAdmin from "~/components/Layout/LayoutAdmin"
import LayoutStylist from '~/components/Layout/LayoutStylist';
import Dashboard from "~/pages/Admin/Dashboard"
import DashboardStylist from "~/pages/Stylist/Dashboard"

//Public Routes
const publicRoutes =[
    {path: "/dashboard", component: Dashboard, layout: LayoutAdmin},
    {path: "/dashboardStylist", component: DashboardStylist, layout: LayoutStylist},
]

//Private Routers
const privateRoutes =[

]

export {publicRoutes, privateRoutes}