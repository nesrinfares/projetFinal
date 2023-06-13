import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteproduct, editproduct, getproduct } from '../JS/productslice'

const ListProduct = () => {
    const [ping, setping] = useState(false)
    const dispatch=useDispatch()
    useEffect(() => {
  dispatch(getproduct())
    }, [ping])
 const prods=useSelector((store)=>store.product?.productList)   
 console.log('hahom',prods)
 const [showedit, setshowedit] = useState(false)
 const [editprod, seteditprod] = useState({
    name:prods?.name,
    image:prods?.image,
    prix:prods?.prix,
    catégori:prods?.catégori,
    gender:prods?.gender,
    description:prods?.description,
    details:prods?.details,
 })
  return (
    <div >
      {/* {prods?.map((el)=>(
        <div style={{display:'flex', justifyContent:'space-around'}}>
        <h1>{el?.name}</h1>
        <img src={el?.image} alt='image'  style={{width:'350px'}}/>
        <h6>{el?.prix}</h6>
        </div>
        
      ))} */}

      <table style={{border:"1px solid black"}}>
        <tr>
        <th>Image</th>
        <th>Name</th>
        <th>Price</th>
        <th>Actions</th>
        </tr>
        {prods?.map((el)=>(
        <tr>
        <td><img src={el?.image} alt='image'  style={{width:'350px'}}/></td>
        <td><h4>{el?.name}</h4></td>
<td> <h4>{el?.prix}</h4></td>
<td><button onClick={()=>setshowedit(!showedit)}>Edit</button>
<button onClick={()=>(setping(!ping),dispatch(deleteproduct(el?._id)))}>Delete</button>
{showedit? (
    <>
    <input type='text' placeholder={el?.name} onChange={(e)=>seteditprod({name:e.target.value})}/>
    <button onClick={()=>(setping(!ping),dispatch(editproduct({id:el?._id,edited:editprod})))}>OK</button>
    </>
):""}
</td>

        </tr>
        ))}
      </table>
    </div>
  )
}

export default ListProduct
