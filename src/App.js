import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/frontend/home/index";
import Error404 from "./components/frontend/404/index";
import About from "./components/frontend/about";
import Course from "./components/frontend/Course";
import Contact from "./components/frontend/contact/index";
import Blog from "./components/frontend/blog/Blog";
import BlogDetails from "./components/frontend/blogDetails/index";
import Membership from "./components/frontend/Membership/Membership";
import PrivacyPolicy from "./components/frontend/privacy_policy/privacyPolicy";
import TermsConditions from "./components/frontend/TarmsConditions/index";
import Register from "./components/frontend/Auth/Register";
import Login from "./components/frontend/Auth/Login";
import Pen from "./components/frontend/landingPage/Index";
import Faqs from "./components/frontend/faqs/Index";
import ThankYou from "./components/frontend/thankUpage/ThankYou";
import AccountActivation from "./components/frontend/page/AccountActivation";
import UserDashboard from "./components/frontend/User/UserDashboard";
import EnrollCourses from "./components/frontend/User/EnrollCourses";
import UserReview from "./components/frontend/User/UserReview";
import OrderHistory from "./components/frontend/User/OrderHistory";
import Setting from "./components/frontend/User/Setting";
import Wishlist from "./components/frontend/User/Wishlist";
import CourseDetails from "./components/frontend/Course/CourseDetails";
import Cart from "./components/frontend/cart/Cart";
import Checkout from "./components/frontend/cart/Checkout";
import ProtectRoute from "./utils/ProtectRoute";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Route without Layout */}
          <Route exact path="/pen" Component={Pen} />
          <Route
            path="/*"
            element={
              <Layout>
                <Routes>
                  <Route index element={<Home />} />
                  <Route path="about-janine" element={<About />} />
                  <Route path="courses" element={<Course />} />
                  <Route
                    path="course-details/:id"
                    element={<CourseDetails />}
                  />
                  <Route path="contact" element={<Contact />} />
                  <Route path="blog" element={<Blog />} />
                  <Route path="memberships" element={<Membership />} />
                  <Route path="privacy-policy" element={<PrivacyPolicy />} />
                  <Route
                    path="terms-of-condition"
                    element={<TermsConditions />}
                  />
                  <Route path="cart" element={<Cart />} />
                  <Route path="checkout" element={<Checkout />} />
                  <Route path="blog-details" element={<BlogDetails />} />
                  <Route path="thank-you" element={<ThankYou />} />

                  {/* Auth route */}
                  <Route path="register" element={<Register />} />
                  <Route path="login" element={<Login />} />
                  <Route path="faqs" element={<Faqs />} />
                  <Route
                    path="activate-account/:id"
                    element={<AccountActivation />}
                  />

                  {/* User route */}
                  <Route element={<ProtectRoute />}>
                    <Route path="dashboard" element={<UserDashboard />} />
                    <Route path="wishlist" element={<Wishlist />} />
                    <Route
                      path="enrolled-courses"
                      element={<EnrollCourses />}
                    />
                    <Route path="reviews" element={<UserReview />} />
                    <Route path="order-history" element={<OrderHistory />} />
                    <Route path="settings" element={<Setting />} />
                  </Route>

                  {/* WHEN NO ROUTE FOUND */}
                  <Route path="*" element={<Error404 />} />
                </Routes>
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
