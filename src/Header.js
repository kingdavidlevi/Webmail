import { useState } from "react";
import img1 from "./images/tmc-login.png"
import img2 from "./images/westnet-login.png"
function Header(){
    const [language,setLanguage] = useState(true)
    const toggleLanguage = () =>{
        setLanguage(prevstate => !prevstate)
    }
    return(
        <section className="grid place-items-center">
        <div className="flex items-center lg:mt-12 mt-10  justify-center gap-5 md:gap-12 ">
         <div><img className="lg:w-60 lg:h-18 w-38 sm:w-48 h-12 sm:h-14" src={img1} /></div>
         <div><img className="lg:w-54 lg:h-16 w-38 sm:w-48 h-12 sm:h-14 " src={img2} /></div>

        </div>
        <h1 className="lg:mt-7 mt-6 grid items-center lg:text-2xl sm:text-base text-sm font-medium sm:max-w-full sm:text-start text-center sm:mx-0 mx-auto max-w-[300px] textcl">Welcome to the new email login page for Westnet webmail</h1>
        </section>
    )
}

export default Header;