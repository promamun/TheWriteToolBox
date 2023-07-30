import { Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/frontend/home/index"
import Error404 from "./components/frontend/404/index"
import About from "./components/frontend/about";
import Course from "./components/frontend/Course";
import Contact from "./components/frontend/contact";
import Blog from "./components/frontend/blog";
import Membership from "./components/frontend/Membership";

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route exact path="/" Component={Home} />
            <Route exact path="/about-janine" Component={About} />
            <Route exact path="/courses" Component={Course} />
            {/*<Route exact path="/course-details" Component={Services} />*/}
            <Route exact path="/contact" Component={Contact} />
            <Route exact path="/blog" Component={Blog} />
            <Route exact path="/memberships" Component={Membership} />
            {/*<Route exact path="/privacy-policy" Component={memberships} />*/}
            {/*<Route exact path="/terms-of-condition" Component={memberships} />*/}
            {/* WHEN NO ROUTE FOUND */}
            <Route path="*" Component={Error404} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
