import React, {useState} from "react";
// import Home from "./Home";
// import Contact from "./Contact";
// import Order from "./Order";


const App = ()=>{

    const [signin, setSignin] = useState(false);


    // const page = ()=>{
    //     if(window.location.pathname==="/"){
    //         return <Home 
    //         singin={signin} 
    //         setSignin={setSignin}
    //         />
    //     }
    //     if(window.location.pathname==="/contact"){
    //         return <Contact />
    //     }
    //     if(window.location.pathname==="/order"){
    //         return <Order />
    //     }
    // }
const page = ()=>{
}
    return (
        <div>
            {page()}

            {/* <h1>
                Black Spoon
                <img  alt="photo"
                    src="https://i.pinimg.com/originals/da/00/49/da0049fd6948a0a7b84060fc65cd5ec3.jpg" />
            </h1> */}
        </div>
        
    )
}

export default App;