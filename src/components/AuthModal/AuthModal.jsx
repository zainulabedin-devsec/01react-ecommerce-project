import React, { useEffect, useState } from "react";

function AuthModal({ setShowAuth, authMode, setAuthMode }) {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  const closeModal = () => {
    setAnimate(false);
    setTimeout(() => setShowAuth(false), 300);
  };

  return (
    <section className="fixed inset-0 z-50 flex items-center justify-center px-4">
      {/* Background overlay */}
      <div
        className={`absolute inset-0 bg-black/70 transition-opacity duration-300 ${
          animate ? "opacity-100" : "opacity-0"
        }`}
        onClick={closeModal}
      ></div>

      {/* Modal content */}
      <div
        className={`relative bg-white rounded-3xl p-4 sm:p-8 w-full sm:w-96 z-50 transform transition-all duration-300 ${
          animate ? "opacity-100 scale-100" : "opacity-0 scale-75"
        }`}
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">
          {authMode === "login" ? "Login" : "Sign Up"}
        </h2>

        {authMode === "signup" && (
          <input
            type="text"
            placeholder="Full Name"
            className="w-full border p-3 mb-3 rounded "
          />
        )}

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-3 mb-3 rounded "
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full border p-3 mb-4 rounded "
        />

        <button className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700 transition">
          {authMode === "login" ? "Login" : "Create Account"}
        </button>

        <p className="text-sm text-center mt-4">
          {authMode === "login" ? (
            <>
              Don’t have an account?{" "}
              <span
                className="text-blue-600 cursor-pointer hover:underline"
                onClick={() => setAuthMode("signup")}
              >
                Sign Up
              </span>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <span
                className="text-blue-600 cursor-pointer hover:underline"
                onClick={() => setAuthMode("login")}
              >
                Login
              </span>
            </>
          )}
        </p>

        <button
          onClick={closeModal}
          className="mt-4 w-full text-sm text-gray-500 hover:text-gray-700 transition cursor-pointer"
        >
          Close
        </button>
      </div>
    </section>
  );
}

export default AuthModal;
