import React from 'react'

const Card = (props) => {

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        console.log(name, value)
        setOwnerObj({...ownerObj, [name]:value })

    }

    const [ownerObj, setOwnerObj] = React.useState({
        ownerName:"",
        share: 0
    })
    const one = (e)=>{
        e.preventDefault();
        props.addOwner(props.id-1,ownerObj)
    }
    const val = 1
  return (
    <form action="" className='mb-3' onSubmit={one}>
        <h2 className="text-xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
          Owner no. {props.id} details
        </h2>
        <br />
        <div className="flex">
            <label className='mr-2' htmlFor="noOfOwners">Name of the Owner</label>
            <input
                type="text"
                name="ownerName"
                id="ownerName"
                autoComplete='off'
                value={ownerObj.ownerName}
                onChange={handleChange}
                className=" mr-10 block w-42 rounded-md border-0 py-1.5 pl-7 pr-1 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />  
            <label className='mr-2' htmlFor="noOfOwners">Percentage Share</label>
            <input
                type="number"
                name="share"
                id="share"
                value={ownerObj.share}
                onChange={handleChange}
                min={0}
                max={100}
                className=" mr-4 block w-42 rounded-md border-0 py-1.5 pl-7 pr-1 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            /> 
            <button type='submit' className="bg-indigo-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" >
                Add 
            </button>
        </div>
    </form>
  )
}

export default Card