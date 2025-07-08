import React from "react";
import Layout from "./components/layout/Layout";
import MainRoutes from "./routes/MainRoutes";

const App = () => {
  return (
    <div>
      <Layout>
        <MainRoutes />
      </Layout>
    </div>
  );
};

export default App;
