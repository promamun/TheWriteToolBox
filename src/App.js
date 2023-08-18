import { Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/frontend/home/index";
import Error404 from "./components/frontend/404/index";
import About from "./components/frontend/about";
import Course from "./components/frontend/Course";
import Contact from "./components/frontend/contact";
import Blog from "./components/frontend/blog";
import Membership from "./components/frontend/Membership";
import PrivacyPolicy from "./components/frontend/privacy_policy/privacyPolicy";
import TermsConditions from "./components/frontend/TarmsConditions/index";
import Register from "./components/frontend/Auth/Register";
import Login from "./components/frontend/Auth/Login";
import Pen from "./components/frontend/landingPage/Index";
import Faqs from "./components/frontend/faqs/Index";
import AccountActivation from "./components/frontend/page/AccountActivation";
import UserDashboard from "./components/frontend/User/UserDashboard";
import EnrollCourses from "./components/frontend/User/EnrollCourses";
import UserReview from "./components/frontend/User/UserReview";
import OrderHistory from "./components/frontend/User/OrderHistory";
import Setting from "./components/frontend/User/Setting";
import Wishlist from "./components/frontend/User/Wishlist";
import CourseDetails from "./components/frontend/Course/CourseDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route exact path="/" Component={Home} />
            <Route exact path="/about-janine" Component={About} />
            <Route exact path="/courses" Component={Course} />
            <Route exact path="/course-details/:id" Component={CourseDetails} />
            <Route exact path="/contact" Component={Contact} />
            <Route exact path="/blog" Component={Blog} />
            <Route exact path="/memberships" Component={Membership} />
            <Route exact path="/privacy-policy" Component={PrivacyPolicy} />
            <Route
              exact
              path="/terms-of-condition"
              Component={TermsConditions}
            />
            <Route exact path="/pen" Component={Pen} />
            {/*auth route */}
            <Route exact path="/register" Component={Register} />
            <Route exact path="/login" Component={Login} />
            <Route exact path="/pen" Component={Pen} />
            <Route exact path="/faqs" Component={Faqs} />
            <Route
              exact
              path="/activate-account/:id"
              Component={AccountActivation}
            />
            {/*User route*/}
            <Route exact path="/dashboard" Component={UserDashboard} />
            <Route exact path="/wishlist" Component={Wishlist} />
            <Route exact path="/enrolled-courses" Component={EnrollCourses} />
            <Route exact path="/reviews" Component={UserReview} />
            <Route exact path="/order-history" Component={OrderHistory} />
            <Route exact path="/settings" Component={Setting} />
            {/* WHEN NO ROUTE FOUND */}
            <Route path="*" Component={Error404} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
