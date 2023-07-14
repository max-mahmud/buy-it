import React, { useEffect, useState } from "react";
import Layout from "./../components/layout/Layout";
import axios from "axios";
import { Checkbox, Radio, Select } from "antd";
import { Prices } from "../components/Prices";
import { Navigate, useNavigate } from "react-router-dom";
import { AiOutlineReload } from "react-icons/ai";
import { BsGrid1X2Fill } from "react-icons/bs";
import { FaThList } from "react-icons/fa";
import { useCart } from "../context/cart";
import { toast } from "react-toastify";
import "../styles/Homepage.css";
import SliderPage from "../components/layout/SliderPage";
const { Option } = Select;

const HomePage = () => {
  const [cart, setCart] = useCart();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [checked, setChecked] = useState([]);
  const [radio, setRadio] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [open, setOpen] = useState(true);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  //get all cat
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get("/api/v1/category/get-category");
      if (data?.success) {
        setCategories(data?.category);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllCategory();
    getTotal();
  }, []);

  //get products
  const getAllProducts = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`/api/v1/product/product-list/${page}`);
      setLoading(false);
      setProducts(data.products);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  // useEffect(() => {
  //   if (checked.length || radio.length)
  // }, [checked, radio]);

  //getTOtal COunt
  const getTotal = async () => {
    try {
      const { data } = await axios.get("/api/v1/product/product-count");
      setTotal(data?.total);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (page === 1) return;
    loadMore();
  }, [page]);
  //load more
  const loadMore = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`/api/v1/product/product-list/${page}`);
      setLoading(false);
      setProducts([...products, ...data?.products]);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  // filter by cat
  const handleFilter = (value, id) => {
    let all = [...checked];
    if (value) {
      all.push(id);
    } else {
      all = all.filter((c) => c !== id);
    }
    setChecked(all);
  };
  useEffect(() => {
    if (checked.length || radio.length) {
      filterProduct();
    } else {
      getAllProducts();
    }
  }, [checked, radio, checked.length, radio.length]);

  //get filterd product
  const filterProduct = async () => {
    try {
      const { data } = await axios.post("/api/v1/product/product-filters", {
        checked,
        radio,
      });
      setProducts(data?.products);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCart = (p) => {
    setCart([...cart, p]);
    localStorage.setItem("cart", JSON.stringify([...cart, p]));

    toast.success("Item Added to cart");
  };

  return (
    <Layout title={"ALl Products - Best offers "}>
      {/* banner image */}
      <img
        src="/images/1.jpg"
        className="banner-img"
        alt="bannerimage"
        width={"100%"}
      />
      {/* banner image */}
      <div className="container-fluid row mt-3 home-page">
        <div className="col-md-3 filters">
          <h4 className="text-center">Filter By Category</h4>
          <div className="d-flex flex-column">
            {categories?.map((c) => (
              <Checkbox
                key={c._id}
                onChange={(e) => handleFilter(e.target.checked, c._id)}
              >
                {c.name}
              </Checkbox>
            ))}
          </div>
          {/* price filter */}
          <h4 className="text-center mt-4">Filter By Price</h4>
          <div className="d-flex flex-column">
            <Radio.Group onChange={(e) => setRadio(e.target.value)}>
              {Prices?.map((p) => (
                <div key={p._id}>
                  <Radio value={p.array}>{p.name}</Radio>
                </div>
              ))}
            </Radio.Group>
          </div>
          <div className="d-flex flex-column">
            <button
              className="btn btn-danger"
              onClick={() => window.location.reload()}
            >
              RESET FILTERS
            </button>
          </div>
        </div>
        <div className="col-md-9 mt-2 ">
          <div className="prd-header">
            <h2 className="text-center">
              All Products || Total Product Found {products.length}
            </h2>
            <button onClick={() => setOpen(!open)}>
              {open ? <FaThList /> : <BsGrid1X2Fill />}
            </button>
          </div>
          <div className="card-flex">
            {products?.map((p) => (
              <div className={`${open ? "card m-2" : "my-card"}`} key={p._id}>
                <div>
                  {" "}
                  <img
                    src={`/api/v1/product/product-photo/${p._id}`}
                    className={`${open ? "card-img-top" : ""}`}
                    alt={p.name}
                  />
                </div>
                <div className="card-body">
                  <div className="card-name-price">
                    <h5 className="card-title">{p.name}</h5>
                    <h5 className="card-title card-price">
                      {p.price.toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD",
                      })}
                    </h5>
                  </div>
                  <p className="card-text ">
                    {open ? (
                      <span>{p.description.substring(0, 50)}</span>
                    ) : (
                      <span>{p.description.substring(0, 100)}</span>
                    )}
                    ...
                  </p>
                  <div className="card-name-price">
                    <button
                      className="btn btn-info ms-1"
                      onClick={() => navigate(`/product/${p.slug}`)}
                    >
                      More Details
                    </button>
                    <button
                      className="btn btn-dark ms-1"
                      onClick={() => handleCart(p)}
                    >
                      ADD TO CART
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="m-2 p-3">
            {products && products.length < total && (
              <button
                className="btn loadmore"
                onClick={(e) => {
                  e.preventDefault();
                  setPage(page + 1);
                }}
              >
                {loading ? (
                  "Loading ..."
                ) : (
                  <>
                    {" "}
                    Loadmore <AiOutlineReload />
                  </>
                )}
              </button>
            )}
          </div>
          <hr />
          <SliderPage />
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
