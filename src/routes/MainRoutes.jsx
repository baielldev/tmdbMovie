import { Route, Routes } from "react-router-dom";
import { route } from "../constants/common";

const MainRoutes = () => {
  return (
    <Routes>
      {route.map((item, index) => (
        <Route key={index} path={item.link} element={item.element} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
