import React, { useEffect, useState } from "react"; 
import Preview from "./Preview";

const Submit = () => {
    const [name,setName] = useState('');
    const [mail,setMail] = useState('');
    const [phone,setPhone] = useState('');
    const arr = [];
    useEffect (()=> {
        handleSubmit();
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = { name,mail,phone };
        console.log(data);
        arr.push(data);
    }
    return(
        <div className="create">
            <h2>Sample Data</h2>
            <form onSubmit={handleSubmit}>
                <label>Full Name</label>
                <input 
                type="text"
                required
                value={name}
                onChange={(e)=>setName(e.target.value)}
                />
                <label>Email Address</label>
                <input 
                type="email"
                required
                value={mail}
                onChange={(e)=>setMail(e.target.value)}
                />
                <label>Phone Number</label>
                <input 
                type="tel"
                required
                value={phone}
                onChange={(e)=>setPhone(e.target.value)}
                />
                <button>Submit</button>
            </form>
            <Preview arr = {arr} />
        </div>
    );
}
  export default Submit;
  