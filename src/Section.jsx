import React from 'react'
import { useState } from "react";
import Card from './card';

const Section = () => {

    const [owners, setOwners] = useState(2);
    const [arr, setArr] = useState([]);
    const handleChange = (e) =>{
        setOwners(e.target.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        const newArr = new Array(parseInt(owners)).fill({
            ownerName:"",
            share: 0
        });
        setArr(newArr)
        
    }

    const final = (e) =>{
       console.log(arr);        
    }


    console.log(arr)

    const addOwner = (index, obj) => {
        console.log(index)
        arr[index]= obj;
        // arr[index].share = share;

        console.log(arr[index])
    }

    const carousel = arr.map((elem,index) => (
        <Card
            key={index} 
            id = {index+1} 
            addOwner = {addOwner}
        />
    ))

  return (
    <div className='section'>
        <div className="card ml-10 mr-10 mt-4">
        <form  action='' onSubmit={handleSubmit}>
            <label className='ml-2' htmlFor="noOfOwners">Number of Owners</label>
            <input
                type="number"
                name="num"
                id="num"
                className="block w-42 rounded-md border-0 py-1.5 pl-7 pr-1 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="2"
                autoComplete='off'
                value={owners}
                onChange={handleChange}
                min={2}
                max={100}
            />  
        </form>
        <br />
        <hr />
        <br />
            <div className="carousel">
                {carousel}
            </div>
        </div>


        <button type='button' onClick={final} className="bg-indigo-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" >
                Submit
            </button>
        
        
    </div>
  )
}

export default Section