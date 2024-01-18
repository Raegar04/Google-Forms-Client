import { useEffect, useState } from 'react'
import Navbar from './Navbar';

function App() {
  // const [usersNames, setUsersNames] = useState<string[]>([]);

  // useEffect(()=>
  // {
  //   fetch("https://localhost:7035/api/User").then(async response=>setUsersNames(await response.json()));
  //   console.log("updated!");
  // }, []);

  return (
    <>
      <Navbar />
    </>
  )
}

export default App
