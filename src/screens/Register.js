import React, { useEffect, useState } from 'react'
const[age, setage] = useState(12);

useEffect(()=>{
    console.log("age", age);
},[age]);

function Register() {
    function handalSubmit (event){
        event.preventDefault(); //  do not reload the screen
        console.log("Hello Vishal");
    }

    function incress (event){
        event.preventDefault();
        setage(age + 1);
    }

    let age = 12;

  return (
   <form>
    {age > 18 ? (
        <div>
           <input type="email" placeholder='Type Email' />
           <button onClick={handalSubmit}>Submit</button>
       </div>
    ) : (
        <h1>You are now kid u are not Eligibal for this website</h1>
    )}
   <div>
   <h1>{age}</h1>
   <button onClick={incress}>click me to increse Number</button>
   </div>
   </form>
   
  )
}

export default Register
