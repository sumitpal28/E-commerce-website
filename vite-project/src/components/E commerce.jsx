import React from 'react'
import { useState } from 'react'

const Products = ({cart,setcart,Addtocart}) => {
    const [fordata] = useState([
        {
            id: 1,
            name: "Wireless Headphones",
            price: 1499,
            category: "Electronics",
            image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6373/6373460cv11d.jpg"
          },
          {
            id: 2,
            name: "Smartphone",
            price: 9999,
            category: "Electronics",
            image: "https://tse3.mm.bing.net/th?id=OIP.u5xoXjM68RBgzNPj17pGOwHaHa&pid=Api&P=0&h=220"
          },
          {
            id: 3,
            name: "Running Shoes",
            price: 799,
            category: "Fashion",
            image: "https://sportal365images.com/process/smp-images-production/ringier.africa/26032023/e416d345-ff63-43b3-8218-398d18198a65.png"
          },
          {
            id: 4,
            name: "Wrist Watch",
            price: 1200,
            category: "Fashion",
            image: "https://tse1.mm.bing.net/th?id=OIP.Q0e_3FDV6uMq9FyjHQULzwHaHa&pid=Api&P=0&h=220"
          },
          {
            id: 5,
            name: "Bookshelf",
            price: 1599,
            category: "Home",
            image: "https://tse4.mm.bing.net/th?id=OIP.Orf7KXDrYKBKR4rsPfUrzAHaG6&pid=Api&P=0&h=220"
          },
          {
            id: 6,
            name: "Water Bottle",
            price: 299,
            category: "Home",
            image: "https://tse3.mm.bing.net/th?id=OIP.-N9usbgJstcA9jqxZ1g36AHaHa&pid=Api&P=0&h=220"
          }
    ])

    const [name, setname] = useState("");
    const [price, setprice] = useState("");
    const [category, setcategory] = useState("");
    const [all, setall] = useState(fordata)

    const Findbutton = () => {
        e.preventDefault();
        const Filter = fordata.filter(pro => 
        (!name || pro.name.toLowerCase() === name.toLowerCase()) &&
        (!price || pro.price >= parseFloat(price)) &&
        (!category || pro.category === category)
        )
        setall(Filter)
    }



  return (
    <div>
        
        <input  className="searchs input" type="text" placeholder='PRODUCT' value={name} onChange={(e) => setname(e.target.value)} />
      
        <select className="searchs" value={price} onChange={(e) => setprice(e.target.value)}>
            <option value="">Price select</option>
            {[100,1000,9999].map((val) => (
                <option key={val} value={val}>
                    {""}
                    {val}
                    {""}
                </option>
            ))}
        </select>

        <select className="searchs" value={category} onChange={(e) => setcategory(e.target.value)}>
            <option value="">Select category</option>
            {["Electronics","Fashion", "Home"].map((val) => (
                <option key={val} value={val}>
                    {""}
                    {val}
                    {""}
                </option>
            ))}
        </select>

        <button className="searchs  class2"  onClick={Findbutton}>Find</button>

        <div className='product'>
            <h1>Electronics Item</h1>
        <ul className='container'>
        {all.map(item => (
          <li key={item.id} className='items'>
            <p>ID: {item.id}</p>
            <img src={item.image} width={200} alt={item.name} />
            <p>Name: {item.name}</p>
            <p>Price: ₹{item.price}</p>
            <p>Category: {item.category}</p>
            <button className="button" onClick={() => Addtocart(item)}>Add to cart</button>
          </li>
        ))}
        </ul>
        </div>
    </div>
  )
}

export default Products