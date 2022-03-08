import React, { useState } from 'react';

const User = (props) => {
    //console.log(props.user);
    const {name, email, picture, website, gender, location,phone} = props.user;
    const addMember = props.addMember;
    const fullName = name.first + ' ' + name.last;
    const [mobile, setMobile] = useState('');
    const userStyle= {
        border:'1px solid red',
        borderRadius: '10px',
        margin: '10px',
        padding: '10px',
        display: 'flex',
        width: '40%',
        alignItems: 'center'
    }

    const setPhone = () => setMobile(phone);
    
    return (
        <div style={userStyle}>
           <div style={{marginTop:'25px',}}>
               <img src={picture.large} alt="" />
            </div>
            <div style={{marginLeft:'20px'}}>
               <h1>Name: {fullName}</h1>
               <p>Gender: {gender}</p>
               <p>Email: {email}</p>
               <p><a target="_blank" href={website}>Learn about me</a></p>
               <p>Phone: {mobile}</p>
               <p>Country: {location.country}</p>
               <button onClick={setPhone}>Show Phone Number</button>
               <button onClick={()=> addMember(fullName)}>Add me</button> 
            </div> 
        </div>
    );
};

export default User;