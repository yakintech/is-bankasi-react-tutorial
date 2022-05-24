import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

function ProductPage() {


  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true)
  let navigate = useNavigate();

  useEffect(() => {

    fetch("https://northwind.vercel.app/api/products")
      .then(res => res.json())
      .then(data => {
        setProducts(data)
        setLoading(false);
      });

  }, [])

  const goToDetail = (title, id) => {

    navigate('/urunler/' + title + ',' + id);

  }

  return ( loading == true ? <h1>loading...</h1> : <table>
    <tr>
      <td>Id</td>
      <td>Name</td>
      <td>Unit Price</td>
    </tr>
    {
      products && products.map(item => {
        return <tr>
          <td>{item.id}</td>
          <td><Link to={'/urunler/' + item.name + ',' + item.id}> {item.name}</Link></td>
          <td>{item.unitPrice}</td>
          <td><button onClick={() => goToDetail(item.name,item.id)}>Go To Detail</button></td>
        </tr>
      })
    }
  </table>
  )
}

export default ProductPage