import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Policy from "./pages/Policy";
import NotePage from "./pages/NotePage";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import PrivateRoute from "./components/Routes/Private";
import ForgetPassword from "./pages/auth/ForgetPassword";
import AdminRoute from "./components/Routes/AdminRoute";
import AdminDashboard from "./pages/admin/AdminDashboard";
import Dashboard from "./pages/user/Dashboard";
import Order from "./pages/user/Order";
import Profile from "./pages/user/Profile";
import CreateCategory from "./pages/admin/CreateCategory";
import CreateProduct from "./pages/admin/CreateProduct";
import User from "./pages/admin/User";
import Products from "./pages/admin/Products";
import UpdateProduct from "./pages/admin/UpdateProduct";
import SearchPage from "./pages/SearchPage";
import ProductDetails from "./pages/ProductDetails";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
       <Route path="/product/:slug" element={<ProductDetails />} />
        {/*  <Route path="/categories" element={<Categories />} />
        <Route path="/category/:slug" element={<CategoryProduct />} /> */}
        <Route path="/search" element={<SearchPage />} />
        {/* User Route */}
        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="user" element={<Dashboard />} />
          <Route path="user/orders" element={<Order />} />
          <Route path="user/profile" element={<Profile />} />
        </Route>
        {/* Admin Route */}
        <Route path="/dashboard" element={<AdminRoute />}>
          <Route path="admin" element={<AdminDashboard />} />
          <Route path="admin/create-category" element={<CreateCategory />} />
          <Route path="admin/create-product" element={<CreateProduct />} />
          <Route path="admin/products" element={<Products />} />
          <Route path="admin/product/:slug" element={<UpdateProduct />} />
          <Route path="admin/users" element={<User />} />
        </Route>

        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="*" element={<NotePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgetPassword />} />
      </Routes>
    </>
  );
};

export default App;
