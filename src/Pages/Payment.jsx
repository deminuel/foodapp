import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import Swal from "sweetalert2";


const Payment = () => {
  const [selectedPayment, setSelectedPayment] = useState("");
  const navigate = useNavigate();

  const handleSelect = (method) => {
    setSelectedPayment(method);
    
  };
  
 



  return (
    <>
    <section className="min-h-screen bg-[#EEBE1F] flex justify-center items-center p-6">
      <div className="bg-white w-full max-w-lg rounded-2xl shadow-xl p-6 md:p-10 space-y-6">
        <h2 className="text-3xl font-extrabold text-[#193B22] text-center">
          Choose Payment Method
        </h2>
        <p className="text-center text-gray-600 text-sm">
          Select how you want to pay for your order.
        </p>

        {/* === Payment Options === */}
        <div className="flex flex-col gap-3 mt-5">
          {[
            { id: "card", label: "💳 Card Payment" },
            { id: "bank", label: "🏦 Bank Transfer" },
            { id: "wallet", label: "📱 Mobile Wallet" },
            { id: "cash", label: "💵 Cash on Delivery" },
          ].map((option) => (
            <button
              key={option.id}
              onClick={() => handleSelect(option.id)}
              className={`border p-4 rounded-xl text-left font-semibold transition-all duration-200 ${
                selectedPayment === option.id
                  ? "border-[#193B22] bg-[#EEBE1F]/30 shadow-md"
                  : "border-gray-300 hover:border-[#193B22]/50 hover:bg-[#EEBE1F]/10"
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>

        {/* === Payment Details Section === */}
        <div className="mt-8">
          {selectedPayment === "card" && (
            <div className="space-y-4 animate-fadeIn">
              <h3 className="font-bold text-lg text-[#193B22]">
                💳 Card Payment
              </h3>
              <input
                type="text"
                placeholder="Card Number"
                className="border rounded-lg w-full p-3 focus:outline-[#EEBE1F]"
              />
              <div className="flex gap-3">
                <input
                  type="text"
                  placeholder="MM/YY"
                  className="border rounded-lg w-1/2 p-3 focus:outline-[#EEBE1F]"
                />
                <input
                  type="text"
                  placeholder="CVV"
                  className="border rounded-lg w-1/2 p-3 focus:outline-[#EEBE1F]"
                />
              </div>
              <button 
              onClick={() => 
                Swal.fire ({
                  title: "payment confirmed",
                  icon: "success",
                  text: "Order is on the way",
                  timer: 10000
                })
              }
              className="bg-[#193B22] text-white w-full py-3 rounded-lg font-semibold hover:bg-[#145e29] transition">
                Pay ₦12,000
              </button>
            </div>
          )}

          {selectedPayment === "bank" && (
            <div className="space-y-4 animate-fadeIn">
              <h3 className="font-bold text-lg text-[#193B22]">
                🏦 Bank Transfer
              </h3>
              <p className="text-sm text-gray-700">
                Transfer to the account below and click confirm:
              </p>
              <div className="bg-[#EEBE1F]/20 p-4 rounded-lg border border-[#193B22]/30">
                <p>
                  <strong>Bank:</strong> Zenith Bank
                </p>
                <p>
                  <strong>Account Name:</strong> Amofe Foods
                </p>
                <p>
                  <strong>Account Number:</strong> 0123456789
                </p>
              </div>
              <button
  onClick={() =>
    Swal.fire({
      title: "✅ Order Confirmed!",
      text: "Thank you for your purchase. Your food is on the way!",
      icon: "success",
      confirmButtonColor: "#193B22",
      background: "#fffbea",
    })
  }
  className="bg-[#193B22] text-white w-full py-3 rounded-lg font-semibold hover:bg-[#145e29] transition"
>
  Confirm Order
</button>

            </div>
          )}

          {selectedPayment === "wallet" && (
            <div className="space-y-4 animate-fadeIn">
              <h3 className="font-bold text-lg text-[#193B22]">
                📱 Mobile Wallet
              </h3>
              <input
                type="text"
                placeholder="Enter Phone Number"
                className="border rounded-lg w-full p-3 focus:outline-[#EEBE1F]"
              />
              <button className="bg-[#193B22] text-white w-full py-3 rounded-lg font-semibold hover:bg-[#145e29] transition">
                Pay with Wallet
              </button>
            </div>
          )}

          {selectedPayment === "cash" && (
            <div className="space-y-4 animate-fadeIn">
              <h3 className="font-bold text-lg text-[#193B22]">
                💵 Cash on Delivery
              </h3>
              <p className="text-gray-700 text-sm">
                You’ll pay the delivery agent when your food arrives.
              </p>
              <button onSubmit={handlSubmit} className="bg-[#193B22] text-white w-full py-3 rounded-lg font-semibold hover:bg-[#145e29] transition">
                Confirm Order
              </button>
            </div>
          )}
        </div>
      </div>


     

    </section>
  
    </>
  );
};


export default Payment;
