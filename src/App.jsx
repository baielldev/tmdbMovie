import React from "react";
import Layout from "./components/layout/Layout";
import MainRoutes from "./routes/MainRoutes";
import ScrollTop from "./ui/scroll/ScrollTop";

const App = () => {
  return (
    <div>
      <Layout>
        <ScrollTop />
        <MainRoutes />
      </Layout>
    </div>
  );
};

export default App;
