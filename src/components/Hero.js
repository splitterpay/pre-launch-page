/* This example requires Tailwind CSS v2.0+ */
import TextTransition, { presets } from "react-text-transition";
import React from "react";
import { ArrowCircleRightIcon, MailIcon } from "@heroicons/react/outline";

const TEXTS = ["in 3 installments", "over 3 months", "0% interest"];

export default function Hero() {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center sm:px-8 md:px-48">
          {/* Mailing list link */}
          <div className="flex flex-row justify-center items-center mx-auto mt-5">
            <a href="#waitlist">
              <MailIcon className="flex text-purple-400 mr-2 h-6 w-6" />
            </a>

            <a
              className="text-lg font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"
              href="#waitlist"
            >
              Join our waitlist{" "}
            </a>
            <a href="#waitlist">
              <ArrowCircleRightIcon className="flex text-red-400 ml-2 h-6 w-6" />
            </a>
          </div>

          {/* header text */}
          <p className="mt-1 text-5xl p-4 leading-snug font-light tracking-tight text-center text-gray-900">
            <span> Shop now &amp; Pay later </span>

            <span className="text-blue-500">
              <TextTransition
                text={TEXTS[index % TEXTS.length]}
                springConfig={presets.wobbly}
              />
            </span>
            <span>in Ghana.</span>
          </p>
        </div>
      </div>
    </div>
  );
}
