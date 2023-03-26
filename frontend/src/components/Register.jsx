import { useState } from 'react';
import Navbar from '../components/common/Navbar';
import { useNavigate } from 'react-router-dom';
import '../App.css';

function Register() {
    const [userData, setUserData] = useState({ name: "", email: '', password: '', number: '', imgUrl: '' });
    const router = useNavigate();
    console.log(userData, "userData here")
    function handleData(e) {
        const name = e.target.name
        const value = e.target.value
        setUserData({ ...userData, [name]: value })
    }
    async function handleSubmit(e) {
        e.preventDefault();
        if (userData.name && userData.email && userData.password && userData.number) {
            // alert("Registration done.")
            // const response = await axios.post("/register", {userData});
            const response = true;
            if (response) {
                router('/login');
                alert("Inside Response Done!")
            }
        } else {
            alert("Please fill all fields.")
        }
    }
    return (
        <div id='reg'>
            <Navbar />
            <h1 >Register</h1>
            <form onSubmit={(e) => handleSubmit(e)} >
                <label className='labelStyle'>Name</label><br />
                <input type="text" name='name' onChange={(e) => handleData(e)} /> <br />
                <label className='labelStyle'>Image url</label><br />
                <input type="text" name='imgUrl' onChange={(e) => handleData(e)} /> <br />
                <label className='labelStyle'>Number</label><br />
                <input type='number' name='number' onChange={(e) => handleData(e)} /> <br />
                <label className='labelStyle'>Email</label><br />
                <input type='email' name='email' onChange={(e) => handleData(e)} /> <br />
                <label className='labelStyle'>Password</label><br />
                <input type='password' name='password' onChange={(e) => handleData(e)} /> <br />
                <input type='submit' value='Register' />
            </form>





        </div>
    )
}
export default Register;