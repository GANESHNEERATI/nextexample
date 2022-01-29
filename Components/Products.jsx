import Link from "next/link";
import React from "react";

function truncateString(str, num) {
    if (str.length <= num) {
      return str
    }
    return str.slice(0, num) + '...'
  }
  
 
function Products({ products ,setCartSize,cartSize}) {
  return (
    <div className=" mt-3 sm:grid grid-cols-4 gap-2.5">
      {products.map((product) => (
       
          <div className="   flex flex-col justify-center  items-center cursor-pointer   hover:scale-105 hover:shadow-xl hover:shadow-blue-500 ">
            <Link href={`/product/${encodeURIComponent(product.id)}`}  >
            <img
              className="h-48 w-40"
              src={product.image}
              alt={product.title}
            />
            </Link>
           &nbsp;
            <div>
              <h1 className="text-center"><span className="font-bold font-sans">Name:</span>{' '}{truncateString(product.title,20)}</h1>
              <h1 className="text-center"><span className="font-bold font-sans">Description:</span>{' '}{truncateString(product.description,80)}</h1>
              <h1 className="text-center"><span className="font-bold font-sans">Price:</span>{' '}{product.price}$</h1>
              
            </div>
            <button className="p-2 mb-1 text-white bg-blue-500 rounded-md hover:bg-blue-900" onClick={()=>setCartSize(cartSize+1)}>Add to Cart</button>
          </div>
        
      ))}
    </div>
  );
}

export default Products;
