import React, { useState } from 'react'
import photo from '../assets/photo.jpg'
import { BiBell, BiCart, BiMenu  } from 'react-icons/bi';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import { Carousel } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import CardSection from './CardSection';
import { IoClose } from 'react-icons/io5';



const HeroSection = () => {
   const [cart, setCart] = useState([]);
   const [showCart, setShowCart] = useState(false);
   const [showMenu, setShowMenu] = useState(false);
   const [search, setSearch] = useState();

  // add to cart function
  const addToCart = (item) => {
    setCart((prev) => {
      const exists = prev.find((cartItem) => cartItem.title === item.title);
      if (exists) {
        return prev.map((cartItem) =>
          cartItem.title === item.title
            ? { ...cartItem, qty: cartItem.qty + 1 }
            : cartItem
        );
      }
      return [...prev, { ...item, qty: 1 }];
    });
  };

 

    const removeFromCart = (itemTitle) => {
    setCart((prev) => {
      const existing = prev.find((cartItem) => cartItem.title === itemTitle);
      if (!existing) return prev;
      if (existing.qty > 1) {
        return prev.map((cartItem) =>
          cartItem.title === itemTitle
            ? { ...cartItem, qty: cartItem.qty - 1 }
            : cartItem
        );
      } else {
        return prev.filter((cartItem) => cartItem.title !== itemTitle);
      }
    });
  };

  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);


  
  return (
    <>
   
   <section className='bg-[#EEBE1F]  flex flex-col'> 
    <nav className='flex justify-between p-4 bg-[#EEBE1F] '>
        <div className='flex flex-[20%] items-center gap-3'>
            <img className='w-[50px] rounded-full h-[50px] ' src={photo} alt="profile" />
            <span className='text-[#193B22] font-bold text-[15px]'>Hello <strong className='text-white font-[24px]'>AMOFE</strong></span>
        </div>
        <div className='relative w-full'>
            <input 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className=' lg:flex-[60%] w-full lg:flex border-none outline-blue-200 bg-white rounded-lg h-[42px] indent-24 hidden ' type="text" placeholder='Order Your Package' />
            <FaMagnifyingGlass className='absolute top-4 left-4 lg:flex hidden text-[14px] text-black/45' />
        </div>
        

        <div className='lg:flex-[20%] lg:flex justify-end hidden gap-3'>

           <div className=''>
            <BiCart className='relative text-2xl hover:cursor-pointer'
             onClick={() => setShowCart(!showCart)} />
            <span className='absolute top-3 right-14 bg-white rounded-full size-5 text-center'>  {totalItems}</span>
            
          {/* Cart dropdown */}
          {showCart && (
            <div className="absolute right-0 mt-3 w-60 bg-white border rounded-lg shadow-lg p-3 z-50">
              <h4 className="font-bold text-lg mb-2">Your Cart</h4>
              {cart.length === 0 ? (
                <p className="text-sm text-gray-600">Cart is empty</p>
              ) : (
                cart.map((item) => (
                  <div key={item.title} className="flex justify-between items-center mb-2">
                    <div>
                      <p className="font-semibold">{item.title}</p>
                      <small className="text-gray-600">
                        x{item.qty} — #{item.price}
                      </small>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => removeFromCart(item.title)}
                        className="bg-red-500 text-white rounded-full px-2 pb-1"
                      >
                        -
                      </button>
                      <button
                        onClick={() => addToCart(item)}
                        className="bg-green-500 text-white rounded-full px-2 pb-1"
                      >
                        +
                      </button>
                    </div>
                  </div>
                ))
              )}
                 </div>
              )}
           

            </div> 
            <BiBell className='text-2xl' />
            
        </div>
       
          {showMenu ? (
            <IoClose onClick={() => setShowMenu(!showMenu)} className='lg:hidden' />
            

          ) : (
         
             <BiMenu onClick={() => setShowMenu(!showMenu) } className='lg:hidden flex ' />
              
           
            
            

          )}

    </nav>

    {/* mobile view */}

    {showMenu && (
      <div className='lg:hidden flex flex-col pb-5  '>
        <div className='relative w-full '>
            <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
             className=' w-fit md:w-[80%] flex border-none outline-blue-200 bg-white rounded-lg h-[42px] indent-7 m-auto ' type="text" placeholder='Order Your Package' />
            <FaMagnifyingGlass className='absolute top-4 left-20 flex text-[14px] text-black/45' />
            <div className='flex flex-col gap-3 mt-4'>
               <BiCart className='relative text-2xl hover:cursor-pointer m-auto'
              onClick={() => setShowCart(!showCart)} />
               <span className='absolute top-14 md:left-96 left-52 bg-white rounded-full size-5 text-center'>  {totalItems}</span>
               <BiBell className='m-auto text-2xl' />
            </div>
            

               {/* Cart dropdown */}
                  {showCart && (
            <div className="absolute right-0 mt-3 w-60 bg-white border rounded-lg shadow-lg p-3 z-50">
              <h4 className="font-bold text-lg mb-2">Your Cart</h4>
              {cart.length === 0 ? (
                <p className="text-sm text-gray-600">Cart is empty</p>
              ) : (
                cart.map((item) => (
                  <div key={item.title} className="flex justify-between items-center mb-2">
                    <div>
                      <p className="font-semibold">{item.title}</p>
                      <small className="text-gray-600">
                        x{item.qty} — #{item.price}
                      </small>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => removeFromCart(item.title)}
                        className="bg-red-500 text-white rounded-full px-2 pb-1"
                      >
                        -
                      </button>
                      <button
                        onClick={() => addToCart(item)}
                        className="bg-green-500 text-white rounded-full px-2 pb-1"
                      >
                        +
                      </button>
                    </div>
                  </div>
                ))
              )}
                 </div>
              )}
        </div>
      
      </div>

     
      
     
    
    )}
   <div className='rounded-tr-3xl bg-white' >
      <div className='m-12'>
        <h1 className='text-[#193B22] text-[16px] font-bold'>Special Offers</h1>
    </div>
  
    </div>

 
    <div className="container  w-[200px] bg-[#FFC400]">
     
     
  {/* Carousel */}
    <div className="container mt-5">
      <Carousel interval={3000} fade>
        {/* Slide 1 */}
        <Carousel.Item>
          <div className="flex flex-row items-center justify-center w-full lg:h-[400px] mb-5">
            {/* Left: Image */}
            <div className="w-1/2 lg:h-full">
              <img
                className="object-cover w-full h-full rounded"
                src="https://tse2.mm.bing.net/th/id/OIP.v47l06wfRd7sIqZ1QEE-GQHaE8?rs=1&pid=ImgDetMain&o=7&rm=3"
                alt="Slide 1"
              />
            </div>

            {/* Right: Text */}
            <div className="w-1/2 lg:h-full h-[120px] md:h-full flex flex-col justify-center items-start p-8 bg-gray-900/60 text-[#193B22] rounded">
              <h3 className="text-2xl font-semibold mb-2">Hurray!!!</h3>
              <p className="text-lg leading-relaxed font-[24px] text-black">
                Get Special Offers <strong className='font-bold text-[24px]'>50%</strong>
              </p>
              <button className='bg-[#FF0505] text-white w-[94px] h-[30px] rounded-full lg:mb-0 mb-11'>Shop Now</button>
            </div>
          </div>
        </Carousel.Item>

        {/* Slide 2 */}
        <Carousel.Item>
          <div className="flex flex-row-reverse items-center justify-center w-full lg:h-[400px] mb-5">
            {/* Right: Image */}
            <div className="w-1/2 lg:h-full ">
              <img
                className="object-cover w-full lg:h-full rounded"
                src="https://tse2.mm.bing.net/th/id/OIP.v47l06wfRd7sIqZ1QEE-GQHaE8?rs=1&pid=ImgDetMain&o=7&rm=3"
                alt="Slide 2"
              />
            </div>

            {/* Left: Text */}
            <div className="w-1/2 lg:h-full h-[120px] md:h-full flex flex-col justify-center items-start p-8 bg-gray-900/60 text-[#193B22] rounded">
              <h3 className="text-2xl mb-2 font-bold text-[24px]">Hurray!!!</h3>
              <p className="text-lg leading-relaxed">Get Special Offers <strong className='font-bold text-[24px] text-black'>50%</strong>
             
              </p>
               <button className='bg-[#FF0505] text-white w-[94px] h-[30px] rounded-full lg:mb-0 mb-11'>Shop Now</button>
            </div>
          </div>
        </Carousel.Item>

        {/* Slide 3 */}
        <Carousel.Item>
          <div className="flex flex-row items-center justify-center w-full lg:h-[400px] mb-5 ">
            {/* Left: Image */}
            <div className="w-1/2 lg:h-full">
              <img
                className="object-cover w-full h-full rounded"
                src="https://tse2.mm.bing.net/th/id/OIP.v47l06wfRd7sIqZ1QEE-GQHaE8?rs=1&pid=ImgDetMain&o=7&rm=3"
                alt="Slide 3"
              />
            </div>

            {/* Right: Text */}
            <div className="w-1/2 lg:h-full h-[120px] md:h-full flex flex-col justify-center items-start p-8 bg-gray-900/60 text-[#193B22] rounded">
              <h3 className="text-2xl font-bold mb-2">Hurray!!!</h3>
              <p className="text-lg leading-relaxed text-black text-[24px]">
                Get Special Offers <strong className='text-[24px] font-bold text-black'>50%</strong>
              </p>
              <button className='bg-[#FF0505] text-white w-[94px] h-[30px] rounded-full lg:mb-0 mb-11'>Shop Now</button>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
        </div>
    </div>

    <article className='bg-white flex flex-col'>
      <h2 className='font-bold text-[16px] flex justify-center pt-11'>Category</h2>
      <div className='flex justify-center gap-3'>
         <div className=''>
         <div className='w-[55px] h-[50px] md:size-28 lg:w-[250px] lg:h-[120px] bg-[#FFC400] rounded-md'>
          <img className='w-[fit] m-auto lg:w-[120px]' src="https://tse3.mm.bing.net/th/id/OIP.sEkkDkTHHEo5TrbRH6IhtQHaHa?w=1024&h=1024&rs=1&pid=ImgDetMain&o=7&rm=3" alt="" />
         </div>
       <p>Chicken</p>
      </div>
     <div className='flex flex-col '>
       <div className='w-[55px] h-[50px] md:size-28 lg:w-[250px] lg:h-[120px] bg-[#FFC400] rounded-md'>
        <img className='w-fit m-auto lg:w-[180px]' src="https://tse1.mm.bing.net/th/id/OIP.qumQMOoxID8JO8me-LaiWgHaEJ?rs=1&pid=ImgDetMain&o=7&rm=3" alt="" />
       </div>
       <p className='text-center'>Rice</p>
     </div>
      
   
     
      <div className='flex flex-col'>
         <div className='w-[55px] h-[50px] md:size-28 lg:w-[250px] lg:h-[120px] bg-[#FFC400] rounded-md'>
        <img className='w-[fit] m-auto lg:w-[170px]' src="https://tse3.mm.bing.net/th/id/OIP.uPJNhmsCGP72JL72DmMLfwHaE8?rs=1&pid=ImgDetMain&o=7&rm=3" alt="" />
        </div>
         <p className='text-center'>Burger</p>
      </div>
      <div className='flex flex-col'>
        <div className='w-[55px] h-[50px] md:size-28 lg:w-[250px] lg:h-[120px] bg-[#FFC400] rounded-md'>
        <img className='w-[fit] m-auto lg:w-[190px]' src="https://th.bing.com/th/id/R.9ce014ef34f2081a45351ad9d2cc7c36?rik=kv%2bnUcaVtixR7A&pid=ImgRaw&r=0" alt="" />
        </div>
         <p className='text-center'>Pizza</p>
      </div>
      <div className='flex flex-col'>
        <div className='w-[55px] h-[50px] md:size-28 lg:w-[250px] lg:h-[120px] bg-[#FFC400] rounded-md'>
        <img className='w-[fit] m-auto lg:w-[170px]' src="https://tse4.mm.bing.net/th/id/OIP.iZ4rYz5YnNnY4WHz0_KQswHaE8?rs=1&pid=ImgDetMain&o=7&rm=3" alt="" />
        <p className='text-center pt-2 md:pt-24'>shawarma</p>
        </div>

      </div>
      </div>
      <div>
      </div>
    </article>

   
    
      </section>
      <CardSection addToCart={addToCart} search={search} />
      </>
  );
}





  
 
   

export default HeroSection;