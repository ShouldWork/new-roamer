import './new-roamer.css';
import { useState } from 'react';

function NewRoamer() {
  const [inputs, setInputs] = useState("");

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({
        ...values, [name]: value
    }))
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs)
    alert(`Welcome our new Roamer ${inputs.name}! \nIn the brand new ${inputs.trailer}!`)
  }

  return (
    <div className='layout'>
        <div className='sideBar_layout'>
            <ul>
                <li>Roamer Name</li>
                <li>Trailer</li>
                <li>Upgrades</li>
            </ul>
        </div>
        <div className='content-container'>
            <div>
                <p>{inputs.name}</p>
                <p>{inputs.trailer}</p>
            </div>
            <form className='newRoamer-form' onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input 
                        type="text" 
                        name="name"
                        onChange={handleChange} 
                    />
                </label>
                <label>
                    Trailer:
                    <input 
                        type="text" 
                        name="trailer"
                        onChange={handleChange} 
                    />
                </label>
                <button onClick={handleSubmit}>Save</button>
            </form>
        </div>
    </div>
  );
}

export default NewRoamer;
