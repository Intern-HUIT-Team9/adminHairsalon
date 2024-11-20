import React from 'react';
import LayoutAdmin from "~/components/Layout/LayoutAdmin"

import Account from "~/pages/Admin/Account"
import Customer from "~/pages/Admin/Customer"
import Dashboard from "~/pages/Admin/Dashboard"
import ServicePage from "~/pages/Admin/ServicePage"
import LayoutManager from "~/components/Layout/LayoutManager";
import EmployeeForm from "~/pages/Manager/EmployeeForm";
import Payroll from "~/pages/Manager/Payroll";
import PromotionManagement from "~/pages/Manager/PromotionManagement";

import LayoutStylist from '~/components/Layout/LayoutStylist';
import DashboardStylist from "~/pages/Stylist/Dashboard"
import Login from '~/pages/Login';


//Public Routes
const publicRoutes =[
    {path: "/", component: Login},
    {path: "/admin/dashboard", component: Dashboard, layout: LayoutAdmin},
    {path: "/admin/account", component: Account, layout: LayoutAdmin},
    {path: "/admin/customer", component: Customer, layout: LayoutAdmin},
    {path: "/admin/service", component: ServicePage, layout: LayoutAdmin},

     { path: "/dashboard", component: Dashboard, layout: LayoutAdmin },
  {
    path: "/Manager/Payroll",
    component: Payroll,
    layout: LayoutManager,
  },
  {
    path: "/Manager/employees",
    component: EmployeeForm,
    layout: LayoutManager,
  },
  {
    path: "/Manager/PromotionManagement",
    component: PromotionManagement,
    layout: LayoutManager,
  },

  {path: "/dashboardStylist", component: DashboardStylist, layout: LayoutStylist},

]

//Private Routers
const privateRoutes = [];

export { publicRoutes, privateRoutes };
