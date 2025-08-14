import React, { useState } from 'react'
import Sidebar from '../../components/admin/Sidebar'
const Login = () => {

    const [username, setUsername] = useState("")
    const [password, setpassword] = useState("")

    const onSubmitHandler = async(event) =>  {
        event.preventDefault()
    }

    return (
       <>
       </>
    )
}

export default Login