import React,{useState} from 'react';


function Reliable (){
    const [name, setName] = useState("")
    const handleName=(e) =>{setName(e.target.value)
    console.log(name)
    }
    return (
        <div className="App">
        <h1>{name}</h1>
        <input type = 'text' onChange ={handleName}/>
        </div>
        

    )


}


export default Reliable;