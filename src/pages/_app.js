import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import AdminLayout from '../component/layout/admin/adminLayout'
import { useRouter } from 'next/router';
import FrontendLayout from '@/component/layout/frontend/frontendLayout';

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const isAdminRoute = router.pathname.startsWith('/admin');
  const isLoginRoute = router.pathname.endsWith('/login') || router.pathname.endsWith('/register');
  const Layout = isAdminRoute ? AdminLayout : FrontendLayout;
  // const Layout = isLoginRoute ?  "" : isAdminRoute ? AdminLayout : FrontendLayout;
  // console.log(isLoginRoute);
  // console.log(router.pathname);
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}