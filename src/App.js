import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import Button from './Button';
import Table from './Table';
function App() {
  const [requests,setRequests]  = useState('users')
  const [items,setItems]   = useState(null)
  const [loading,setLoading] = useState(false)
  const handleClick = (e) =>{
    console.log(e.target.innerText)
    setLoading(true)
    setRequests(e.target.innerText)
  };

  useEffect(()=>{
    console.log(`useEffect change to ${requests}`)
    
    const fetchData = async ()  =>{
      const API_URL = `https://jsonplaceholder.typicode.com/${requests}`
      const response = await fetch(API_URL);
      const listItem = await response.json()
      setItems(listItem)
      setLoading(false)
      console.log(loading)


    };
    setTimeout(() => {
      (async () => await fetchData())();},2000)
  },[requests]);



  return (
    <div className="App">
      <header>
        <Button ButtonText={'users'} Req={requests} setReq={setRequests} handleClick={handleClick}></Button>
        <Button ButtonText={'posts'} Req={requests} setReq={setRequests} handleClick={handleClick}></Button>
        <Button ButtonText={'comments'} Req={requests} setReq={setRequests} handleClick={handleClick}></Button>
      </header>
      <Table items={items} loading={loading}></Table>
      
    </div>
  );
}

export default App;
