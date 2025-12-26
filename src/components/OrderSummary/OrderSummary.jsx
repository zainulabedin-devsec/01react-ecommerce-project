import React from "react";

function OrderSummary({
  cart,
  subTotal,
  shipping,
  orderTotal,
  setOrderSummary,
  handleOrder,
  setShowCartWish,
}) {
  return (
    <section className="bg-black/65 fixed inset-0 z-40 flex items-center justify-center p-4">
      <div className="bg-zinc-200 rounded-2xl w-full max-w-xs sm:max-w-sm md:w-120 h-full sm:h-auto max-h-[90vh] p-4 sm:p-6 flex flex-col justify-between relative">
        {/* Header */}
        <div className="bg-blue-500 h-16 sm:h-20 rounded-2xl flex items-center justify-center mb-4 shrink-0">
          <h2 className="text-lg sm:text-2xl md:text-2xl font-bold flex items-center justify-center rounded-2xl text-white text-center">
            My OrderSummary
          </h2>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto px-2">
          <div>
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex justify-between py-1 border-y-1 border-zinc-400 mt-4 text-sm sm:text-base"
              >
                <span>
                  {item.name} (*{item.quantity})
                </span>
                <span>{(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
          </div>

          {/* Totals */}
          <div className="flex justify-between pb-1 text-blue-600 text-sm sm:text-base">
            <span>SubTotal</span>
            <span>${subTotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between mb-2 text-blue-600 text-sm sm:text-base">
            <span>Shipping</span>
            <span>${shipping.toFixed(2)}</span>
          </div>
          <div className="flex justify-between pt-3 text-lg sm:text-2xl font-bold text-blue-600 border-t-1 border-zinc-400">
            <span>Order Total</span>
            <span>${orderTotal.toFixed(2)}</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-between mt-4 shrink-0 gap-2">
          <button
            onClick={() => {
              setOrderSummary();
              setShowCartWish("cart");
            }
            }
            className="bg-blue-500 gap-2 rounded-2xl text-sm sm:text-base text-white w-24 sm:w-28 md:w-30 h-10 cursor-pointer"
          >
            Cancel
          </button>
          <button
            onClick={() => handleOrder()}
            className="bg-blue-500 gap-2 rounded-2xl text-sm sm:text-base text-white w-24 sm:w-28 md:w-30 h-10 active:bg-gray-400 cursor-pointer"
          >
            Place Order
          </button>
        </div>
      </div>
    </section>
  );
}

export default OrderSummary;
