/* eslint-disable react/prop-types */

import { useNavigate } from "react-router";

export default function Main({info}){
    const navigate=useNavigate();

    const shopers=info;


    


   
    return(
       <>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 m-5 p-5">
            {shopers&&(
                shopers?.map((data,idx)=>(
                       <div className="card w-96 glass" key={idx}>
                       <figure><img src={data.thumbnail} alt={data.title } className="h-60 w-full"/></figure>
                       <div className="card-body">
                       <h1 className="card-title">Model Name: {data.title} </h1>
                            <h2 className="card-title">Brand:{data.brand} <div className="badge badge-accent badge-outline">Rating: {data.rating}/5</div> </h2>
                            <div className="stats shadow">
                            <div className="stat">
                                <div className="stat-title">OfferPrice:</div>
                                <div className="stat-value"> ₹ {data.price*90}</div>
                                <div className="stat-desc">discount:{data.discountPercentage}% </div>
                            </div>
                            
                            </div>
                            <kbd className="kbd w-64"><h2>Mrp: ₹ {((data.price / (1 - data.discountPercentage / 100))*90).toFixed(2)}</h2></kbd>
                            <p>{data.description}</p> 
                            
                         {/* <div className="card-actions justify-center">       
                            <select
                            className="select select-bordered select-sm w-24 max-w-xs"
                            onChange={handleQuantityChange}
                            value={cart}
                            >
                                    <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            </select>
                         
                         </div> */}
                         <div className="card-actions justify-center">
                         <button className="btn btn-primary" onClick={()=>navigate(`/cart/${data.id}`)}>Add to Cart</button>
                         </div>
                        </div>
                     </div>
                )
            )
            )}


        </div>
       </>
    )
}



