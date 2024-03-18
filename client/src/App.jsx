import axios from 'axios'
import { useEffect, useState } from 'react'
const App = () => {
  const [users,setUsers] = useState([])
  useEffect(()=>{
    axios.get('http://localhost:3001/getUsers')
    .then(users => setUsers(users.data))
    .catch(err =>console.log(err))
  },[])
  return (
    <>
    <h1>Fetshing Data:</h1>
    <div className=' container w-100 vh-100 d-flex justify-content-center align-items-center'>
      <div className="w-50">
      <table className='table'>
        <thead>
          <th>Name</th>
          <th>Email</th>
          <th>Age</th>
        </thead>
        <tbody>
            {
              users.map(user=>{
                return <tr>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.age}</td>
                </tr>
              })
            }
        </tbody>
      </table>
      </div>
    </div>
    </>
  )
}

export default App