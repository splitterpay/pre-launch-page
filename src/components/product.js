import Img1 from '../img/img-1.jpg'
import Img2 from '../img/img-2.jpg'
import Img3 from '../img/img-3.jpg'
import Img4 from '../img/img-4.jpg'
import React from "react";




/* This example requires Tailwind CSS v2.0+ */
const features = [
    { name: 'Fill your cart.', description: 'Shop for what you love at you favourite stores. Choose "PayLater with SplitterPay" at checkout.' },
    { name: 'Select a payment plan.', description: 'Pay 40% upfront and pay the rest in 3 months at 0% interest.' },
    { name: 'Fufil Payments.', description: "Automate payment schedule from your bank or mobile wallet so you don't miss a payment." },
    // { name: 'Finish', description: 'Hand sanded and finished with natural oil' },
    // { name: 'Includes', description: 'Wood card tray and 3 refill packs' },
    // { name: 'Considerations', description: 'Made from natural materials. Grain and color vary with each item.' },
  ]
  
  // react component for products

  export default function Product() {
    return (
      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-24 px-4 grid items-center grid-cols-1 gap-y-16 gap-x-8 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">How it works.</h2>
            <p className="mt-4 text-gray-900">
              Pay later with SplitterPay is a payment service that allows you to pay for goods and services in installments. 
            </p>
  
            <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
              {features.map((feature) => (
                <div key={feature.name} className="border-t border-gray-200 pt-4">
                  <dt className="font-bold text-gray-900">{feature.name}</dt>
                  <dd className="mt-2 text-sm text-gray-800">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
            <img
              src={Img4}
              alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
              className="bg-gray-100 rounded-lg"
            />
            <img
              src={Img2}
              alt="Top down view of walnut card tray with embedded magnets and card groove."
              className="bg-gray-100 rounded-lg"
            />
            <img
              src={Img3}
              alt="Side of walnut card tray with card groove and recessed card area."
              className="bg-gray-100 rounded-lg"
            />
            <img
              src={Img1}
              alt="Walnut card tray filled with cards and card angled in dedicated groove."
              className="bg-gray-100 rounded-lg"
            />
          </div>
        </div>
      </div>
    )
  }
  