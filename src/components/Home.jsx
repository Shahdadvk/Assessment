import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Home = () => {
    const [items, setItems]=useState([]);
    useEffect(()=>{
        //call typicode api
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response=>setItems(response.data))
        .catch(error=>console.log(error))
    },[])

  return (
    <>
        <ul>
            <table>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                </tr>
                {
                    items.map(item=>(
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                    </tr>
                
                    )) 
                }
            </table>
        </ul>
    </>
  )
}

export default Home