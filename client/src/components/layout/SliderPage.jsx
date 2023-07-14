import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import axios from "axios";
import "../../styles/Slider.css";
import { useNavigate } from "react-router-dom";

const SliderPage = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getAllProducts();
  }, []);

  // get products
  const getAllProducts = async () => {
    try {
      const res = await axios.get("/api/v1/product/get-latesh-product");

      setProducts(res?.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="slider-page">
        <h2>Latesh Product</h2>
        <Swiper
          // install Swiper modules
          breakpoints={{
            576: {
              width: 576,
              slidesPerView: 1,
            },
            768: {
              width: 768,
              slidesPerView: 2,
            },
            992: {
              width: 992,
              slidesPerView: 3,
            },
          }}
          // modules={[Navigation, Pagination]}
          spaceBetween={0}
          slidesPerView={1}
          navigation
          // pagination={{ clickable: true }}
          // scrollbar={{ draggable: true }}
          // onSwiper={(swiper) => console.log(swiper)}
          // onSlideChange={() => console.log("slide change")}
        >
          {products.map((p) => (
            <SwiperSlide key={p._id}>
              <div className="my-slider">
                <div className="slider-img">
                  <img
                    src={`/api/v1/product/product-photo/${p._id}`}
                    alt={p.name}
                  />
                </div>
                <div className="slider-body">
                  <h5>{p.name}</h5>
                  <h4>
                    {p.price.toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                    })}
                  </h4>
                </div>
                <button onClick={() => navigate(`/product/${p.slug}`)}>
                  View
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default SliderPage;
