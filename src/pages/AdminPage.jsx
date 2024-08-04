import AdminHeader from "../components/AdminHeader/adminHeader"
import AdminBody from "../components/AdminBody/adminBody"
const AdminPage = (props) => {
    return (
        <div>
            <AdminHeader/>
            <AdminBody token={props.token}/>
        </div>
    );
}

export default AdminPage;