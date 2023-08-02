import { Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/frontend/home/index"
import Error404 from "./components/frontend/404/index"
import About from "./components/frontend/about";
import Course from "./components/frontend/Course";
import Contact from "./components/frontend/contact";
import Blog from "./components/frontend/blog";
import Membership from "./components/frontend/Membership";
import PrivacyPolicy from "./components/frontend/privacy_policy/privacyPolicy";
import TermsConditions from "./components/frontend/TarmsConditions/index"
import Register from "./components/frontend/Auth/Register";
import Login from "./components/frontend/Auth/Login";
import AdminHome from "./AdminPanel/home/AdminHome";
import AdminLayout from "./AdminPanel/AdminLayout";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/twt/home" element={<AdminLayout><AdminHome /></AdminLayout>} />
          <Route path="/" element={<Layout><Home /></Layout>} />
          <Route path="/about-janine" element={<Layout><About /></Layout>} />
          <Route path="/courses" element={<Layout><Course /></Layout>} />
          {/*<Route path="/course-details" element={<Layout><Services /></Layout>} />*/}
          <Route path="/contact" element={<Layout><Contact /></Layout>} />
          <Route path="/blog" element={<Layout><Blog /></Layout>} />
          <Route path="/memberships" element={<Layout><Membership /></Layout>} />
          <Route path="/privacy-policy" element={<Layout><PrivacyPolicy /></Layout>} />
          <Route path="/terms-of-condition" element={<Layout><TermsConditions /></Layout>} />
          {/*auth route */}
          <Route path="/register" element={<Layout><Register /></Layout>} />
          <Route path="/login" element={<Layout><Login /></Layout>} />

          {/* WHEN NO ROUTE FOUND */}
          <Route path="*" element={<Layout><Error404 /></Layout>} />
        </Routes>
      </BrowserRouter>
      {/*<BrowserRouter>*/}
      {/*  <AdminLayout>*/}
      {/*    <Route exact path="/twt/home" Component={AdminHome} />*/}
      {/*  </AdminLayout>*/}
      {/*  <Layout>*/}
      {/*    <Routes>*/}
      {/*      <Route exact path="/" Component={Home} />*/}
      {/*      <Route exact path="/about-janine" Component={About} />*/}
      {/*      <Route exact path="/courses" Component={Course} />*/}
      {/*      /!*<Route exact path="/course-details" Component={Services} />*!/*/}
      {/*      <Route exact path="/contact" Component={Contact} />*/}
      {/*      <Route exact path="/blog" Component={Blog} />*/}
      {/*      <Route exact path="/memberships" Component={Membership} />*/}
      {/*      <Route exact path="/privacy-policy" Component={PrivacyPolicy} />*/}
      {/*      <Route exact path="/terms-of-condition" Component={TermsConditions} />*/}
      {/*      /!*auth route *!/*/}
      {/*      <Route exact path="/register" Component={Register} />*/}
      {/*      <Route exact path="/login" Component={Login} />*/}
      {/*      */}
      {/*      /!*Admin route *!/*/}
      {/*      <Route exact path="/twt/home" Component={AdminHome} />*/}

      {/*      /!* WHEN NO ROUTE FOUND *!/*/}
      {/*      <Route path="*" Component={Error404} />*/}
      {/*    </Routes>*/}
      {/*  </Layout>*/}
      {/*</BrowserRouter>*/}
    </>
  );
}

export default App;
