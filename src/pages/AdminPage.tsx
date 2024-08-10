import React from 'react';
import AdminHeader from "../components/AdminHeader/adminHeader";
import AdminBody from "../components/AdminBody/adminBody";

interface AdminPageProps {
  token: string;
  loggedIn: boolean;
}

const AdminPage: React.FC<AdminPageProps> = ({ token, loggedIn }) => {
  if (!loggedIn) {alert("You need to sign in with an admin account")}
  return (
    <div>
      <AdminHeader />
      <AdminBody token={token} />
    </div>
  );
};

export default AdminPage;
