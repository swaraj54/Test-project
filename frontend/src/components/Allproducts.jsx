import { useEffect, useState } from "react";
import axios from 'axios';
import '../App.css';

function Allproducts() {

    const [products, setProducts] = useState();
    console.log(products, "all products here")
    useEffect(() => {
        async function gettingData() {
            const kaveri = await axios.get('https://fakestoreapi.com/products');
            // console.log(kaveri.data);
            setProducts(kaveri.data)
        }
        gettingData();
    }, [])







    // const [counter, setCounter] = useState(0)

    // useEffect(() => {
    //     console.log("inside use Effect");
    // }); 
    // runs on every render 
    // useEffect(() => {
    //     console.log("inside use Effect");
    // }, []);  
    //runs on only first render 
    // useEffect(() => {
    //     console.log("inside use Effect");
    // }, [counter]);  
    // excutes on VERY First time and when dependchy chnges
    // useEffect(() => {
    //     console.log("inside use Effect");
    // }, [counter, products]);  

    return (
        <div>
            <h1>Allproducts here -</h1>
            <div id='products'>
                {products && products.map((e) => (
                    <div>
                        <div>
                            <img src={e.image} />
                        </div>
                        <h1>{e.title}</h1>
                        <p>{e.price}</p>
                    </div>
                ))}

            </div>
        </div>
    )

}

export default Allproducts;