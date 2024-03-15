import React from 'react';
import Itemcard from '../Itemcard';
//import Itemcard from '../Addtocart/Itemcard';
import data from '../data';
const Cart = () => {
    console.warn(data.productData)
  return (
    <>
    <h1 className="text-center mt-3">All items</h1>
    <section className="py-4 container">
        <div className="row justify-content-center">
            {data.productData.map((item,index)=>{
              return(
                <Itemcard 
                img={item.img}
                 title ={item.title}
                  desc ={item.desc}
                   price={item.price}
                    Item={item}
                    key={index}/>
              )

            }
            )}
           

        </div>
    </section>
    </>
  );
}

export default Cart;
