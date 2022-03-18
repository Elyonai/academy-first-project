import React, {useState} from 'react';
import './App.css';

function App() {
  const [name, setName,address,setAddress,email,setEmail,phone,setPhone] = useState('');

  const changeName = (e) => {
    const value = e.target.value;
    setName(value);
  }

  const changeAddress = (e) => {
    const value = e.target.value;
    setAddress(value);
  }

  const changeEmail = (e) => {
    const value = e.target.value;
    setEmail(value);
  }

  const changePhoneNumber = (e) => {
    const value = e.target.value;
    setPhone(value);
  }

  const saveButton = () => {
    document.getElementById("name").value = "";
    document.getElementById("address").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
  }

  return (
    <div className='formContainer'>
      <div className='formHeader'>
        <h1 className='formTitle'>Form</h1>
      </div>
      
      <div className='formBody'>
        
        <div className='formField'>
        
        <label className='formLabel'></label>
        <div className='formProfile'>
        <i className="fa-solid fa-user formIcon" aria-hidden="true"></i>
        <input 
        id="name"
        name='name'
        value={name}
        onChange={changeName} 
        className='formInput'
        placeholder='Name'
        required />
        </div>

        <label className='formLabel'></label>
        <div className='formAddress'>
        <i className="fa-solid fa-location-arrow formIcon" aria-hidden="true"></i>
        <input 
        id="address"
        name='address'
        value={address}
        onChange={changeAddress} 
        className='formInput'
        placeholder='Address'
        required />
        </div>

        <label className='formLabel'></label>
        <div className='formEmail'>
        <i className="fa-solid fa-envelope formIcon"></i>
        <input 
        id="email"
        name='email'
        value={email}
        onChange={changeEmail} 
        className='formInput'
        placeholder='Email'
        required />
        </div>

        <label className='formLabel'></label>
        <div className='formPhone'>
        <i className="fa-solid fa-phone formIcon" aria-hidden="true"></i>
        <input 
        id="phone"
        name='phone'
        value={phone}
        onChange={changePhoneNumber} 
        className='formInput'
        placeholder='Phone'
        required />
        </div>

        <button onClick={saveButton} className='formButton'>Save</button>
        </div>
      </div>

      <div className='formFooter'>
        <div className='formGroup'>
          <span className='formLabel'></span>
        </div>
      </div>
    </div>
  );
}


export default App;
