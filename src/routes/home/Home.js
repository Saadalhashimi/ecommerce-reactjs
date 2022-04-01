import React,{useState,useEffect} from "react";
import Main from "../../components/main/Main";



const Home=()=> {
  const [products,setProducts] = useState([])
  console.log(products)


  useEffect(()=>{
   const getProducts = async ()=>{
     const res = await fetch(`https://api.jsonbin.io/b/62444bcfd96a510f028cce4c`, {
       headers: {
         "Secret-Key": process.env.REACT_APP_API_KEY
       }
     })
     
     const data = await res.json()
     setProducts(data.products)
   }
   getProducts()
  },[])

  return (
    <div className="home">
    
      <Main products={products}/>
    </div>
  );
}

export default Home;