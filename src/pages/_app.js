import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import AdminLayout from './admin/SideNavbar/adminLayout'
import { useRouter } from 'next/router';
import FrontendLayout from '@/Component/Layout/Frontend/FrontendLayout';

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const isAdminRoute = router.pathname.startsWith('/admin');
  const Layout = isAdminRoute ? AdminLayout : FrontendLayout;
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
