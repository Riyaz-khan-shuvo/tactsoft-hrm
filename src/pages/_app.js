import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import AdminLayout from './admin/SideNavbar/adminLayout'

export default function App({ Component, pageProps }) {
  return (
    <AdminLayout>
      <Component {...pageProps} />
    </AdminLayout>
  )
}
