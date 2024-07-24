import { Route, Routes } from "react-router-dom";
import Signin from "./Login/Signin";
import Signup from "./Login/Signup";

const Views = () => {
  return (
    <Routes>
      <Route path="/login" element={<Signin />} />
      <Route path="/register" element={<Signup />} />
      <Route path="*" element={<Signup />} />
    </Routes>
  );
};

export default Views;
