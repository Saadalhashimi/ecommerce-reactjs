import { createContext,useState ,useEffect} from "react";

export const ProductsContext = createContext()

export const ProductsProvider= ({children})=>{
    const [products,setProducts]= useState([])
    const value= products
    console.log('value', value)

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


    return(
        <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
    )


    
}

