import React, { useState } from 'react';
import {Layout, Card} from 'antd';
import {useNavigate} from 'react-router-dom'

const { Meta } = Card;
const {Content} = Layout;


const Contents = ({meals, query, setQuery, Category, search, setSearch, updateQuery, handleReset}) => {
    const navigate = useNavigate();
    const updateSearch = (e) =>{
      setSearch(e.target.value)
      console.log(e.target.value)
    }
    return(
    <Content
      style={{
        padding: '0 50px',
      }}
    >
    <div className="container-top">
      <div className="containerTopleft">
        <form className="container-form" onSubmit={updateQuery}>
        <input 
        type="text" 
        placeholder="Search..." 
        className="search"
        value = {search}
        onChange={updateSearch}
        // value={query} 
        // onChange={(e)=> setQuery(e.target.value)}
        />

        <button  className="btn-search" type="submit">Search</button>
        <button className="btn-reset" onClick={handleReset} >Reset</button>
      </form>
      </div>

      <div className="judul"><h1>Welcome<br/>V i e w e r s</h1></div>

      <div className="containerTopright">
      <button className="category1" onClick={() => Category('Side')}>Side</button>
      <button className="category" onClick={() => Category('Starter')}>Starter</button>
      <button className="category" onClick={() => Category('Dessert')}>Dessert</button>
      <button className="category" onClick={() => Category('Chicken')}>Chicken</button>
      <button className="category" onClick={() => Category('Seafood')}>Seafood</button>
      <button className="category" onClick={() => Category('Beef')}>Beef</button>
      <button className="category" onClick={() => Category('Pasta')}>Pasta</button>
      <button className="category0" onClick={() => Category('Vegetarian')}>Vegetarian</button>
      </div>
    </div>
      
    

    <div className="site-layout-content">
        {meals.length > 0 && meals
        // .filter((item) => item.strMeal.toLowerCase().includes(query))
        .map((item) => {
        return<Card
        hoverable
        style={{ width: 340}}
        className="kartu"
        cover={<img alt="example" src={item.strMealThumb} onClick={()=>navigate(`/${item.idMeal}`)} />}
        key={item.idMeal}
        >
        <Meta title={item.strMeal} />
        </Card>
        })}
    </div>
    </Content>
    )
}

export default Contents