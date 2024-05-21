import React from "react";
import g1 from "../assets/Image.png";
import g2 from "../assets/Image1.png";
import g3 from "../assets/Image2.png";
import g4 from "../assets/Image3.png";
const DiscountProduct = () => {
  return (
    <div className="lg:px-14 lg:py-10 md:px-12 md:py-8 px-7 py-5">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
        <div className="grid gap-4">
          <div
            className="bg-cover bg-center rounded-lg h-auto max-w-full relative"
            style={{
              backgroundRepeat: "no-repeat",
              backgroundImage: `url(${g1})`,
              width: "100%",
              height: "370px",
            }}
          >
            <div className="bg-white-text absolute lg:top-[210px] md:top-[180px] top-[170px] lg:right-[40px] md:right-[20px]  px-8 py-3 flex flex-col items-center gap-3">
              <div className="flex flex-col gap-1">
                <p className="text-heading-text text-[25px] font-bold leading-[35px] text-center">
                  Bravo Sunglasses
                </p>
                <p className="text-heading-text text-xl leading-[30px] text-center">
                  Up to 80% off on selected item
                </p>
              </div>
              <div>
                <button className="px-8 py-2.5 bg-heading-text text-white-text rounded-md">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
          <div
            className="bg-cover bg-center rounded-lg h-auto max-w-full relative"
            style={{
              backgroundRepeat: "no-repeat",
              backgroundImage: `url(${g2})`,
              backgroundPosition: "center",
              height: "380px",
            }}
          >
            <div className="bg-white-text absolute lg:top-[220px] md:top-[190px] top-[170px] lg:right-[40px] md:right-[20px]  px-8 py-3 flex flex-col items-center gap-3">
              <div className="flex flex-col gap-1">
                <p className="text-heading-text text-[25px] font-bold leading-[35px] text-center">
                  Bravo Sunglasses
                </p>
                <p className="text-heading-text text-xl leading-[30px] text-center">
                  Up to 80% off on selected item
                </p>
              </div>
              <div>
                <button className="px-8 py-2.5 bg-heading-text text-white-text rounded-md">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="grid gap-4">
          <div
            className="h-auto max-w-full rounded-lg bg-cover bg-center relative"
            style={{
              height: "300px",
              backgroundImage: `url(${g3})`,
            }}
          >
            <div className="bg-white-text absolute top-[140px] md:top-[110px] top-[90px] lg:right-[40px] md:right-[20px]  px-8 py-3 flex flex-col items-center gap-3">
              <div className="flex flex-col gap-1">
                <p className="text-heading-text text-[25px] font-bold leading-[35px] text-center">
                  Bravo Sunglasses
                </p>
                <p className="text-heading-text text-xl leading-[30px] text-center">
                  Up to 80% off on selected item
                </p>
              </div>
              <div>
                <button className="px-8 py-2.5 bg-heading-text text-white-text rounded-md">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
          <div
            className="h-auto max-w-full rounded-lg bg-cover bg-center relative"
            style={{
              height: "450px",
              backgroundImage: `url(${g4})`,
            }}
          >
            <div className="bg-white-text absolute lg:top-[290px] md:top-[260px] top-[250px]  lg:right-[40px] md:right-[20px]   px-8 py-3 flex flex-col items-center gap-3">
              <div className="flex flex-col gap-1">
                <p className="text-heading-text text-[25px] font-bold leading-[35px] text-center">
                  Bravo Sunglasses
                </p>
                <p className="text-heading-text text-xl leading-[30px] text-center">
                  Up to 80% off on selected item
                </p>
              </div>
              <div>
                <button className="px-8 py-2.5 bg-heading-text text-white-text rounded-md">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscountProduct;
