import Admins from "@/components/admin/Admins";
import Dashboard from "@/components/admin/Dashboard";
import DashboardSetting from "@/components/admin/dashboardComponents/DashboardSetting";
import NotificationSound from "@/components/admin/dashboardComponents/NotificationSound";
import PrivacySecurity from "@/components/admin/dashboardComponents/PrivacySecurity";
import Groups from "@/components/admin/Groups";
import Profile from "@/components/admin/Profile";
import QuoteManagement from "@/components/admin/QuoteManagement";
import Setting from "@/components/admin/Setting";
import UserReports from "@/components/admin/UserReports";
import Users from "@/components/admin/Users";
import ValidateUsers from "@/components/admin/ValidateUsers";
import { useGetMe } from "@/hooks";
import AdminDashboardLayout from "@/Layouts/AdminLayouts/AdminDashboardLayout";
import { ReactNode } from "react";
import { Navigate, RouteObject } from "react-router-dom";

interface ProtectedAdminRouteProps {
  element: ReactNode;
}

const ProtectedAdminRoute: React.FC<ProtectedAdminRouteProps> = ({element}) => {
 const {data: getMe, isLoading} = useGetMe();

 if (isLoading) return <div>Loading...</div>;

 if(getMe && getMe?.role !== "Admin") {
  return <Navigate to="/home"/>
 }
 return <>{element}</>;
};

const AdminRouter: RouteObject[] = [
  {
    path: "/admin-dashboard",
    element: <ProtectedAdminRoute element={<AdminDashboardLayout />}/>,
    children: [
      {
        index: true,
        element: <Navigate to={"dashboard"} />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "user-data",
        element: <Users />,
      },
      {
        path: "groups",
        element: <Groups />,
      },
      {
        path: "admins",
        element: <Admins />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "quote-management",
        element: <QuoteManagement />,
      },
      {
        path: "validate-users",
        element: <ValidateUsers />,
      },
      {
        path: "user-reports",
        element: <UserReports />,
      },
      {
        path: "setting",
        element: <Setting />,
        children: [
          {
            index: true,
            element: <Navigate to={"dashboard-setting"} />,
          },
          {
            path: "dashboard-setting",
            element: <DashboardSetting/>
          },
          {
            path: "privacy-security",
            element: <PrivacySecurity/>
          },
          {
            path: "notification-sound",
            element: <NotificationSound/>
          }
        ]
      },
    ],
  },
];

export default AdminRouter;