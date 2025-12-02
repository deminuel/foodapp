import React from 'react'
import CardProp from './CardProp';
import nugget from '../assets/nugget.jpg'
import spag from '../assets/spag.jpg'
import burger from '../assets/burger.jpg'
import rice from '../assets/rice.png'
import plantain from '../assets/plantain.jpg'

const CardSection = ( { addToCart, search } ) => {
    const items = [
    { category: "spicy", img: spag, title: "Spaghetti", price: "#8000" },
    { category: "Snacks", img: burger, title: "Burger", price: "#10000" },
    { category: "snack", img: nugget, title: "Chicken Nuggets", price: "#6000" },
    { category: "spicy", img: rice, title: "Rice and Chicken", price: "#9000" },
    { category: "spicy", img: plantain, title: "Rice and Plantain", price: "#4500" },
  ];

  // ✅ Filter by search
  const filteredItems = items.filter((item) =>
    item.title.toLowerCase().includes((search || '').toLowerCase())
  );
 
  return (

    <section> 
        <div className=' grid lg:grid-cols-3 grid-cols-1 m-10 md:grid-cols-2 space-y-4'>
           {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
                <CardProp
              key={item.title}
              category={item.category}
              img={item.img}
              title={item.title}
              price={item.price}
              addToCart={addToCart}
            />
          ))
        ) : (
          <p className="text-center text-gray-600 w-full col-span-full">
            ❌ Item not available
          </p>
        )}
        
           

        </div>
        
    </section>
  )
}

export default CardSection;