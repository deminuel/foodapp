import React from 'react'


const CardProp = ({img, category, title, price, addToCart, } ) => {
   
 
   

    
  
  return (
    <article>
        <div className=' relative border-2 border-y-gray-300 rounded-2xl w-[320px]  '> 
          
        <span className='absolute top-0 left-1 bg-[#FF0505] text-white w-[54px] h-[22px] text-center'>{category}</span>
        <img src={img} alt="" />
        <div className='flex flex-col'>
         <div className='flex justify-between'>
        <span className='font-bold text-[16px] ml-3'>{title}</span>
        <button  onClick={() => addToCart({ img, category, title, price })}
        className='bg-green-300 text-black border-2 border-gray-200 px-3 '>
          Add to cart</button>
        </div>
        
        <p className='text-[13px] font-semibold ml-3'>{price}</p>
        </div>
        
        </div>
      
    </article>
  )
}

export default CardProp;