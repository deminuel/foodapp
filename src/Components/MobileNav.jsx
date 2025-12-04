// import React, { useState } from "react";
// import { BiHome, BiCart, BiUser, BiBell } from "react-icons/bi";
// import { Link } from "react-router-dom";

// const MobileNav = ({ cart, addToCart, removeFromCart }) => {
//   const [showCart, setShowCart] = useState(false);
//   const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);

//   return (
//     <nav className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 shadow-inner flex justify-around items-center py-2 z-50 lg:hidden">
//       {/* === Home === */}
//       <div className="flex flex-col items-center text-[#193B22] hover:text-[#EEBE1F] transition">
//         <Link to="/Hero">
//           <BiHome size={24} />
//         </Link>
//         <span className="text-[12px] font-medium">Home</span>
//       </div>

//       {/* === Cart === */}
//       <div className="flex flex-col items-center text-[#193B22] hover:text-[#EEBE1F] transition relative">
//         <BiCart
//           className="text-2xl hover:cursor-pointer"
//           onClick={() => setShowCart(!showCart)}
//         />
//         <span className="text-[12px] font-medium">Cart</span>

//         {totalItems > 0 && (
//           <span className="absolute -top-1 right-3 bg-[#EEBE1F] text-[#193B22] text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center shadow">
//             {totalItems}
//           </span>
//         )}

//         {showCart && (
//           <div className="absolute -top-96 -right-24 mt-6 w-60 bg-white border rounded-lg shadow-lg p-3 z-50">
//             <h4 className="font-bold text-lg mb-2">Your Cart</h4>

//             {cart.length === 0 ? (
//               <p className="text-sm text-gray-600">Cart is empty</p>
//             ) : (
//               <>
//                 {cart.map((item) => (
//                   <div
//                     key={item.title}
//                     className="flex justify-between items-center mb-2 border-b pb-1"
//                   >
//                     <div>
//                       <p className="font-semibold text-[14px]">{item.title}</p>
//                       <small className="text-gray-600">
//                         x{item.qty} — {item.price}
//                       </small>
//                     </div>

//                     <div className="flex items-center gap-2">
//                       <button
//                         onClick={() => removeFromCart(item.title)}
//                         className="bg-red-500 text-white rounded-full px-2 pb-1 hover:bg-red-600 transition"
//                       >
//                         -
//                       </button>
//                       <button
//                         onClick={() => addToCart(item)}
//                         className="bg-green-500 text-white rounded-full px-2 pb-1 hover:bg-green-600 transition"
//                       >
//                         +
//                       </button>
//                     </div>
//                   </div>
//                 ))}

//                 {/* === Subtotal === */}
//                 <hr className="my-2 border-gray-300" />
//                 <div className="flex justify-between font-bold text-black text-sm">
//                   <span>Subtotal:</span>
//                   <span>
//                     ₦
//                     {cart
//                       .reduce((sum, item) => {
//                         const numericPrice = parseInt(
//                           item.price.replace(/[^0-9]/g, ""),
//                           10
//                         );
//                         return sum + numericPrice * item.qty;
//                       }, 0)
//                       .toLocaleString()}
//                   </span>
//                 </div>

//                 {/* === Checkout Button === */}
//                 <Link to="/payment">
//                   <button className="mt-3 w-full bg-[#193B22] text-white py-2 rounded-lg font-semibold hover:bg-[#145e29] transition">
//                     Checkout
//                   </button>
//                 </Link>
//               </>
//             )}
//           </div>
//         )}
//       </div>

//       {/* === Notifications === */}
//       <div className="flex flex-col items-center text-[#193B22] hover:text-[#EEBE1F] transition">
//         <BiBell size={24} />
//         <span className="text-[12px] font-medium">Alerts</span>
//       </div>

//       {/* === Profile === */}
//       <div className="flex flex-col items-center text-[#193B22] hover:text-[#EEBE1F] transition">
//         <BiUser size={24} />
//         <span className="text-[12px] font-medium">Profile</span>
//       </div>
//     </nav>
//   );
// };

// export default MobileNav;
