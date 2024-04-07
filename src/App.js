
import './App.css';
import { useState } from 'react';
import Footer from './component/Footer';
import Des from './component/Des';
function App() {
  const [weight,setWeight]=useState(0);
  const [height,setHeight]=useState(0);
  const [reload,setReload]=useState(0);
  const [message,setMessage]=useState('');
  const [bmi,setBmi]=useState('');
let calbmi=(e)=>{
e.preventDefault();
if(weight===0 || height===0){
alert("please enter correct weight and height ")
}
else{
  let bmi=(weight/(height*height)*703)
  setBmi(bmi.toFixed(1))
  if(bmi<25){
    setMessage("You are Under-weight")
  }
  else if(bmi>=25 && bmi<30){
    setMessage("You are healthy ! don't worry ")
  }
  else{
    setMessage("You are Over-weight")
  }
}

}
const handleReload=()=>{
  window.location.reload();
}
  return (
    <>
    <div className="App">
  <div className="container">
    <h2 className='heading'>BMI Calculator</h2>
    <form onSubmit={calbmi}>
      <div className='d-flex justify-content-between '>
        <label>
          Weight(lbs)
        </label>
        <input type='text' placeholder='enter your weight ' value={weight} onChange={(e)=>setWeight(e.target.value)}></input>
      </div>
      <div className='d-flex justify-content-between mt-10'>
        <label>
          Height(in)
        </label>
        <input type='text' placeholder='enter your height' value={height} onChange={(e)=>setHeight(e.target.value)}></input>
      </div>

      <div className='d-flex justify-content-around my-20 barea'>
        
        <button className='btn btn-dark my-10' type='submit' >Submit</button>
        <button className='btn btn-dark my-10' onClick={handleReload} type="submit">Reload</button>
      </div>
      <div className='center'>
        <h4 className='premess'> 
          your BMI is : {bmi}
        </h4>
        <p className='mess'>
          {message}
        </p>
      </div>
    </form>
  </div>
    </div>
    <div className='descript'><Des/></div>
    
    <center><Footer/></center>
    </>

  );
}

export default App;
