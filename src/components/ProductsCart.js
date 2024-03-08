import React, { useState } from 'react'

const ProductsCart = () => {

    const [products,setProducts]=useState([
        {
            id:1,
            name:"samsung galaxy s24 ultra"
        },
        {
            id:2,
            name:"samsung galaxy s24 plus"
        },
        {
            id:3,
            name:"samsung galaxy s24"
        }
    ]);

    const [items,setItems] = useState([]);

    const handleAddItem = (product) => {
        setItems([...items,product])
    }

    const handleRemove = (itemid) => {
        setItems(items.filter((item)=>item.id !== itemid))
    }
  return (
    <div className='ml-5'>
        <h1 className='text-2xl text-center'>list of products</h1>
        <ul>
            {
                products.map((product)=>(
                    <div className='inline-block border border-black'>
                        <li key={product.id}>
                            <h1 className='text-2xl p-4 m-2'>{product.name}</h1>
                            <button className='bg-green-800 px-4 py-2 rounded-lg outline-none m-4' onClick={()=>handleAddItem(product)}>Add</button>
                        </li>
                    </div>
                ))
            }
        </ul>
        <h1 className='text-3xl'>cart</h1>
        {
            items.length > 0 ? (
                <ul>
                    {
                        items.map((item)=>(
                            <li key={item.id} className='flex'>
                                <h1 className='text-2xl p-4 m-2'>{item.name}</h1>
                                <button className='bg-red-800 px-4 py-2 rounded-lg outline-none m-4' onClick={()=>{handleRemove(item.id)}}>Remove</button>
                            </li>
                        ))
                    }
                </ul>
            ) : <h1>"cart is empty please add items"</h1>
        }
    </div>
  )
}

export default ProductsCart