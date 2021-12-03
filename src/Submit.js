import React, { useState } from "react"; 
const Submit = () => {
    const [name,setName] = useState('');
    const [mail,setMail] = useState('');
    const [phone,setPhone] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = { name,mail,phone };
        console.log(data);
    }
    return(
        <div className="create">
            <h2>Sample Data</h2>
            <form >
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
                <button onMouseDown={handleSubmit}>Submit</button>

            </form>


        </div>
    );
}
  export default Submit;
  