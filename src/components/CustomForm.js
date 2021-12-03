import React, { useState } from "react";
import { RefreshIcon } from "@heroicons/react/outline";

// a basic form
const CustomForm = ({ status, message, onValidated }) => {
  const [btnText] = useState("Join the waitlist");

  let email;
  const submit = () =>
    email &&
    email.value.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email.value,
    });

  return (
    <div>
      {/* form submission status */}

      {status === "error" && (
        <div
          style={{ color: "red" }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      {status === "success" && (
        <div
          className="text-center text-sm"
          style={{ color: "green" }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}

      {/* email */}

      <div className="rounded-md mt-4 shadow-sm -space-y-px">
        <div>
          <label htmlFor="email-address" className="sr-only">
            Email address
          </label>
          <input
            ref={(node) => (email = node)}
            id="email-address"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm"
            placeholder="Email address"
          />
        </div>
      </div>

      {/* buttons */}

      <div className="w-auto mx-auto mt-5">
        <button
          className={`flex relative w-full justify-center items-center mx-auto px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-black`}
          onClick={submit}
        >
          {status === "sending" && (
            <RefreshIcon className="animate-spin h-5 w-5 mr-3" />
          )}

          {btnText}
        </button>

        <p className="mt-4 text-center text-gray-700 text-xs">
          *we hate spams too! you're in good hands.
        </p>
      </div>
    </div>
  );
};

export default CustomForm;
