import React, { useState } from 'react'

const ProductCategory = () => {

    const [selectedGender,setSelectedGender] = useState();
    const [items,setItems] = useState([]);

    const handleGenderChange = (e) => {
        // setSelectedGender(e.target.value); // here i dont know why i cant write like this 
        const selectedGender = e.target.value;
        // console.log(selectedGender);
        const fetchedData = fetchData(selectedGender)
        // console.log(fetchedData);
        setItems(fetchedData);
    }

    const fetchData = (gender) => {
        const male = ["Shirts", "Facial-grooming kits", "Hair styling", "Jeans", "Shoes"];
        const female = ["Tops", "Skirts", "Makeup items", "Jewellery", "Sandals"];
        return gender === 'male' ? male : female;
    }

  return (
    <div>
        <select value={selectedGender} onChange={handleGenderChange}>
           <option value="">select gender</option>
           <option value="male">male</option>
           <option value="female">female</option>
        </select>
        {items.length > 0 && ( // why not i cant write like this {selectedGender && <ul>}
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default ProductCategory