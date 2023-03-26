import { useEffect, useState } from "react";

function Allproducts() {

    const [products, setProducts] = useState();
    const [counter, setCounter] = useState(0)

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
    useEffect(() => {
        console.log("inside use Effect");
    }, [counter, products]);  

    return (
        <div>
            <h1>Allproducts here - {products}, counter - {counter}</h1>
            <button onClick={() => setProducts("Shose")}> Click to see products.</button>
            <button onClick={()=> setCounter(counter + 1)}>CLick </button>
        </div>
    )

}

export default Allproducts;