import { useState } from 'react'
import './App.css'
import React from "react";
import RegistrationForm from "./components/RegistrationForm";
import FormikForm from "./components/FormikForm";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <h1>React Form Handling</h1>
      <RegistrationForm />
      <hr />
      <FormikForm />
    </div>
    <div>
      <h1>Welcome to the Registration Page</h1>
      <FormikForm />
    </div>
    <button onClick={() => refetch()}>🔄 Refresh Posts</button>

    </>
  )
}

export default App
