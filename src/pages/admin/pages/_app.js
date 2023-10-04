import AdminLayout from "../SideNavbar/adminLayout";


export default function App({ Component, pageProps }) {
    return (
        <AdminLayout>
            <Component {...pageProps} />
        </AdminLayout>
    )
}
