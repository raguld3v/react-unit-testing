import { useState } from "react"

export default function Login(){
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [message,setMessage] = useState("")

    function signInHandler(){
        setMessage("loading")
        if(email == 'a@b.c' && password == '123'){
            setTimeout(() => {
                setMessage("successfully logged in!")
            }, 3000);
        }else{
            setTimeout(() => {
                setMessage("invalid credentials")
            }, 3000);
        }
    }

    return <div>
        <h1>Login</h1>
        <input type="text" placeholder="email" onChange={e=>setEmail(e.target.value)}/>
        <br/>
        <input type="text" placeholder="password" onChange={e=>setPassword(e.target.value)}/>
        <br/>
        <button onClick={signInHandler}>Sign in</button>
        {
            message &&
        <p>{message}</p>
        }
    </div>
}