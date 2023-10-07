import AdminLayout from "../../../Component/Layout/Admin/adminLayout";


export default function App({ Component, pageProps }) {
    return (
        <AdminLayout>
            <Component {...pageProps} />
        </AdminLayout>
    )
}
