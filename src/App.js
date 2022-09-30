import React from 'react'
import {Layout} from 'antd';
import './App.css';
import axios from 'axios'
import {useState, useEffect} from 'react'
import {Routes, Route, useNavigate, useParams} from 'react-router-dom'
import Atas from './components/Header.jsx'
import Footers from './components/Footer.jsx'
import Contents from './components/Content.jsx'



function App() {
  const navigate = useNavigate();
  const [meals, setMeals] = useState([]);
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState('')
  
  const loadData = async () => {
    try {
      const res = await axios.get("https://www.themealdb.com/api/json/v1/1/search.php?s=");
      console.log(res)
      setMeals(res.data.meals);
    } catch (error) {
      console.error(error)
    }
  };
  useEffect(() => {
    loadData();
  }, [])

  const functionSearch = async() => {
    try {
      const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
      setMeals(res.data.meals);
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    functionSearch();
  }, [query])

  const updateQuery = (e) => {
    e.preventDefault();
    setQuery(search)
  }

  const handleReset = () => {
    loadData();
  }

  const Category = async(category) => {
    try {
      const res = await axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=" + category);
      setMeals(res.data.meals);
    } catch (error) {
      console.error(error)
    }
  }


  return (
  <Layout className="layout">
    <Atas  
    loadData ={loadData}
    Category = {Category}
    />
    <Contents 
    meals={meals}
    query = {query}
    setQuery = {setQuery} 
    loadData ={loadData}
    Category = {Category}
    search = {search}
    setSearch = {setSearch}
    updateQuery = {updateQuery}
    handleReset = {handleReset}
    />
    <Footers></Footers>
  </Layout>
  );
}

export default App;
