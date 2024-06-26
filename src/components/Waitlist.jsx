// Dependencies
import React, { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";

// Styles


const App = () => {
  const [waitlistData, setWaitlistData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  // Function to validate the email on the FE.
  function validateEmail(email) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return true;
    }
    return false;
  }

  // Function to submit Waitlist data
  function submitWaitlist(data) {
    if (!data.email) {
      setError("Please enter your email");
      return;
    }
    if (validateEmail(data.email) === false) {
      setError("Please enter a valid email");
      return;
    }

    setLoading(true);

    data.waitlist_id = 596;
    data.referral_link = document.URL;

    fetch("https://api.getwaitlist.com/api/v1/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        setWaitlistData(data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  }

  return (
    <div className="flex w-full h-full p-6">
      {!waitlistData ? (
        <form className="w-full">
          <div className="flex flex-col space-y-4">
            <div className="flex flex-col space-y-2">
              <label htmlFor="email" className="text-gray-700">
                What is your email?
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Please enter your email"
                autoComplete="email"
                onChange={(e) => e.stopPropagation()}
                required
                className="p-2 text-base text-gray-700 border border-gray-200 rounded-md"
              />
            </div>
          </div>
          <div className="mt-4">
            <button
              type="button"
              disabled={loading}
              onClick={() => {
                submitWaitlist({
                  email: document.getElementById("email").value,
                });
              }}
              className="w-full px-3 py-2 text-white transition duration-300 bg-indigo-600 rounded-md hover:bg-indigo-700"
            >
              {loading ? (
                <ClipLoader size={25} color={"#ffffff"} loading={true} />
              ) : (
                "Sign up for the waitlist"
              )}
            </button>
            {error && (
              <div className="px-6 mt-2 text-xs text-center text-red-500">
                {error}
              </div>
            )}
          </div>
        </form>
      ) : (
        <div className="text-gray-700">
          <div>
            Thank you for signing up. Your are waiter{" "}
            <b>{waitlistData.priority}</b> on the waitlist.{" "}
          </div>
          <div className="mt-4">
            <button
              type="button"
              disabled={loading}
              onClick={() => {
                setWaitlistData();
              }}
              className="w-full px-3 py-2 text-white transition duration-300 bg-indigo-600 rounded-md hover:bg-indigo-700"
            >
              Return to signup
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
