/*!

=========================================================
* Material Dashboard React - v1.8.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import WidgetsIcon from '@material-ui/icons/Widgets';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import PersonIcon from '@material-ui/icons/Person';
import TimelineOutlinedIcon from '@material-ui/icons/TimelineOutlined';
import StorageIcon from '@material-ui/icons/Storage';
// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.js";
import Form from "views/Form/Form.js";
//import UserProfile from "views/UserProfile/UserProfile.js";
import Widget from "views/Widget/Widget.js";
import Customer from "views/Customer/Customer.js";
import Analysis from "views/Analysis/Analysis.js";
/*import TableList from "views/TableList/TableList.js";
import Typography from "views/Typography/Typography.js";
import Icons from "views/Icons/Icons.js";
import Maps from "views/Maps/Maps.js";
import NotificationsPage from "views/Notifications/Notifications.js";
import UpgradeToPro from "views/UpgradeToPro/UpgradeToPro.js";*/
// core components/views for RTL layout
import RTLPage from "views/RTLPage/RTLPage.js";
import Reviews from "views/Reviews/Reviews.js";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    //rtlName: "لوحة القيادة",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin"
  },
  {
    path: "/widget",
    name: "Widget",
    icon: WidgetsIcon,
    component: Widget,
    layout: "/admin"
  },
  {
    path: "/reviews",
    name: "Reviews",
    icon: StarBorderOutlinedIcon,
    component: Reviews,
    layout: "/admin"
  },
  {
    path: "/customer",
    name: "Customer",
    icon: PersonIcon,
    component: Customer,
    layout: "/admin"
  },
  {
    path: "/analysis",
    name: "Online Analysis",
    icon: TimelineOutlinedIcon,
    component: Analysis,
    layout: "/admin"
  },
  {
    path: "/form",
    name: "Form",
    icon: StorageIcon,
    component: Form,
    layout: "/admin"
  }
  /*
  {
    path: "/user",
    name: "User Profile",
    rtlName: "ملف تعريفي للمستخدم",
    icon: Person,
    component: UserProfile,
    layout: "/admin"
  },
  {
    path: "/table",
    name: "Table List",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: TableList,
    layout: "/admin"
  },
  {
    path: "/typography",
    name: "Typography",
    rtlName: "طباعة",
    icon: LibraryBooks,
    component: Typography,
    layout: "/admin"
  },
  {
    path: "/icons",
    name: "Icons",
    rtlName: "الرموز",
    icon: BubbleChart,
    component: Icons,
    layout: "/admin"
  },
  {
    path: "/maps",
    name: "Maps",
    rtlName: "خرائط",
    icon: LocationOn,
    component: Maps,
    layout: "/admin"
  },
  {
    path: "/notifications",
    name: "Notifications",
    rtlName: "إخطارات",
    icon: Notifications,
    component: NotificationsPage,
    layout: "/admin"
  },
  {
    path: "/rtl-page",
    name: "RTL Support",
    rtlName: "پشتیبانی از راست به چپ",
    icon: Language,
    component: RTLPage,
    layout: "/rtl"
  },
  {
    path: "/upgrade-to-pro",
    name: "Upgrade To PRO",
    rtlName: "التطور للاحترافية",
    icon: Unarchive,
    component: UpgradeToPro,
    layout: "/admin"
  },*/
];

export default dashboardRoutes;
