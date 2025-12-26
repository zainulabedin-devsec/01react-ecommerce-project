import React from "react";
import { ImHappy } from "react-icons/im";

function PlacedOrder({ setFinalOrder }) {
  return (
    <section className="bg-black/80 fixed inset-0 z-40 flex items-center justify-center p-4">
      <div className="bg-zinc-200 rounded-2xl w-full max-w-xs sm:max-w-sm md:w-80 p-4 sm:p-6 flex flex-col justify-between relative">
        <div className="flex items-center justify-center mb-4 shrink-0">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold flex items-center justify-center text-green-600 text-center">
            Order Details
          </h2>
        </div>

        <div className="flex items-center justify-center rounded-2xl">
          <p className="gap-2 flex items-center justify-center text-sm sm:text-base md:text-base text-center">
            Your Order has been placed <ImHappy />
          </p>
        </div>

        <div className="flex mt-4 shrink-0 items-center justify-center">
          <button
            onClick={() => setFinalOrder()}
            className="bg-blue-500 gap-2 rounded-2xl text-sm sm:text-base text-white w-24 sm:w-28 md:w-30 h-10 cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </section>
  );
}

export default PlacedOrder;
