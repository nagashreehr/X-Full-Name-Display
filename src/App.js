import React,{useState} from "react";
import './App.css';


function App() {
  let [fname,setFname] = useState('');
  let [lname,setLname] = useState('');
  let [fullname,setFullname] = useState('');
  let [check,setCheck] = useState(false);

  const handleData = (event)=>{
    event.preventDefault();
    // let a ='1234567890`!@#$%^&*()-+{}[]|?/>,<.'
    // for(let i=0;i<fname.length;i++){
    //   if(a.includes(fname[i])){
    //     return;
    //   }
    // }
    // for(let i=0;i<lname.length;i++){
    //   if(a.includes(lname[i])){
    //     return;
    //   }
    // }
    setFullname(fname+' '+lname)
  }
  return (
    <div className="App">
      <h1>Full Name Display</h1>
      <form onSubmit={handleData}>
        <>
          <label htmlFor="first">First Name:</label>
          <input
            type="text"
            id="first"
            name="firstname"
            value={fname}
            onChange={(e) => {
              setFname(e.target.value);
              // setFullname('')
            }}
            required
          />
        </><br/>
        <>
          <label htmlFor="last">Last Name:</label>
          <input
            type="text"
            id="last"
            name="lastname"
            value={lname}
            onChange={(e) => {
              setLname(e.target.value)
              // setFullname('')
            }
            }
            required
          />
        </>
        <br/>
        <button type="submit">Submit</button>
      </form>
      {fullname?<p>{`Full Name: ${fullname}`}</p>:""}
    </div>
  );
}

export default App;