import React from "react";
import Slider from "react-slick";
import { IoHeartCircleOutline } from "react-icons/io5";

const ProductCard = ({ product, addToCart }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <div>
      <div className="relative">
        <p className="text-base font-bold bg-primary inline-block rounded-full p-1 absolute top-[20px] left-[20px]">
          {product.discount}%
        </p>
        <div>
          <IoHeartCircleOutline className="text-4xl absolute top-[20px] right-[20px]" />
        </div>
        <div className="bg-[#F7F7F7] px-5 py-9 rounded-sm our-product">
          <Slider {...settings}>
            {product.image.map((imag, index) => (
              <div key={index}>
                <img
                  src={imag}
                  alt={`Product ${product.id} - ${index + 1}`}
                  style={{ width: "100%", height: "200px" }}
                />
              </div>
            ))}
          </Slider>
        </div>
        <div className="flex flex-col gap-2 mt-3">
          <h3 className="text-3xl font-normal text-heading-text">
            {product.name}
          </h3>
          <p className="text-[20px] font-bold text-heading-text">
            Price: ${product.price}
          </p>

          <div>
            <button
              className="underline text-[20px] font-normal text-[#5A5A5A]"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
