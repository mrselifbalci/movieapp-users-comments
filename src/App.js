import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './App.css';
import Users from './components/Users';


function App() {

  const [users,setUsers] = useState([])


  useEffect(() => {
		axios
			.get('https://movieapp-server.herokuapp.com/users')
			.then((res) => {
				setUsers(res.data)
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);


  return (
    <div className="app">
       <Users users={users}/>
    </div>
  );
}

export default App;
