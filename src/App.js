import { Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/frontend/home/index"

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route exact path="/" Component={Home} />
            {/*<Route exact path="/projects" Component={Projects} />*/}
            {/*<Route exact path="/about" Component={About} />*/}
            {/*<Route exact path="/service" Component={Services} />*/}
            {/*<Route exact path="/contact" Component={Contact} />*/}
            {/*<Route exact path="/case-studies" Component={CaseStudies} />*/}
            {/*<Route exact path="/team" Component={Team} />*/}
            {/*<Route exact path="/pricing-plans" Component={Pricing} />*/}
            {/*<Route*/}
            {/*    exact*/}
            {/*    path="/free-consultation"*/}
            {/*    Component={FreeConsultation}*/}
            {/*/>*/}
            {/* WHEN NO ROUTE FOUND */}
            {/*<Route path="*" Component={Error404} />*/}
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
