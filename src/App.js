import {useState,useEffect} from 'react'
import './App.css';
import axios from 'axios'
import Header from './components/Header'
import Characters from './components/Characters';
// import Spinner from './components/Spinner.js';
import Search from './components/Search';

function App() {
  const [cast,setCast] = useState([])
  const [loading,setLoading] =  useState(true)
  const [query,setQuery] = useState('')

  useEffect(()=>{
    const fetchCast = async () => {
        const response =  await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)
        
        setCast(response.data)
        setLoading(false)
    }
    fetchCast()
  },[query])

  return (
    <div className="App">
       <Header/>
       {/* <Spinner/> */}
       <Search getQuery={(q) => setQuery(q)}/>
       <Characters loading= {loading} cast= {cast}/>
       
    </div>
  );
}

export default App;
