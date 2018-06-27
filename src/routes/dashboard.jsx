// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import Unarchive from "@material-ui/icons/Unarchive";


import Event from "@material-ui/icons/Event";
import Description from "@material-ui/icons/Description";
import Extension from "@material-ui/icons/Extension";
import Settings from "@material-ui/icons/Settings";



// core components/views
import DashboardPage from "views/Dashboard/Dashboard.jsx";
import UserProfile from "views/UserProfile/UserProfile.jsx";
import TableList from "views/TableList/TableList.jsx";
import Typography from "views/Typography/Typography.jsx";

import NotificationsPage from "views/Notifications/Notifications.jsx";
import UpgradeToPro from "views/UpgradeToPro/UpgradeToPro.jsx";


import RecordPage from "views/Record/Record.jsx";


const dashboardRoutes = [
  {
    path: "/dashboard",
    sidebarName: "Dashboard",
    navbarName: "SMART Dashboard ",
    icon: Dashboard,
    component: DashboardPage
  },
  {
    path: "/appointments",
    sidebarName: "Appointments",
    navbarName: "Appointments",
    icon: Event,
    component: Typography
  },
  {
    path: "/patientrecord",
    sidebarName: "Patient Record",
    navbarName: "Patient Record",
    icon: Description,
    component: RecordPage
  },
  {
    path: "/qrisk",
    sidebarName: "QRisk Calculator",
    navbarName: "QRisk Calculator",
    icon: Extension,
    component: TableList
  },
  {
    path: "/user",
    sidebarName: "User Profile",
    navbarName: "Profile",
    icon: Person,
    component: UserProfile
  },
  {
    path: "/settings",
    sidebarName: "Settings",
    navbarName: "Settings",
    icon: Settings,
    component: NotificationsPage
  },
  {
    path: "/upgrade-to-pro",
    sidebarName: "Upgrade",
    navbarName: "Upgrade",
    icon: Unarchive,
    component: UpgradeToPro
  },
  { redirect: true, path: "/", to: "/dashboard", navbarName: "Redirect" }
];

export default dashboardRoutes;
