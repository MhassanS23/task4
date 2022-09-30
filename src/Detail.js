import {Link, useNavigate, useParams} from 'react-router-dom'
import { Card } from 'antd';
import { Breadcrumb, Layout, Menu } from 'antd';
import axios from 'axios'
import {useState, useEffect} from 'react'
import React from 'react'
import Footers from './components/Footer.jsx'
import Atas from './components/Header.jsx'

export default function Detail(){
    let {id} = useParams();
    const [meals, setMeals] = useState([]);
    const [ingredient, setIngredient] = useState([]);
    const {Content} = Layout;
    
    const loadData = async () => {
      try {
        const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
        console.log(res)
        setMeals(res.data.meals[0]);
      } catch (error) {
        console.error(error)
      }
    };

    useEffect(() => {
      loadData();
    }, [])  

    // const loadIngredient = async () => {
    //   try {
    //     const ing = await axios.get(`https://www.themealdb.com/api/json/v1/1/list.php?i=${id}`);
    //     console.log(ing)
    //     setIngredient(ing.data.meals[0]);
    //   } catch (error) {
    //     console.error(error)
    //   }
    // };

    // useEffect(() => {
    //   loadIngredient();
    // }, [])

    const ingredientArray = () => {
      const ingredientData = [];
        if (meals.strIngredient1){
          ingredientData.push(
            <li>{meals.strIngredient1}</li>
          )
        }
      setIngredient(ingredientData);
    }

    return(
      <>
      <Atas></Atas>
      <Content
        style={{
          padding: '0 50px',
        }}
      >
        
      <div className="site-layout-content2">
          {meals && 
          <div className="container-detailLeft">
              <img src={meals.strMealThumb}></img>
          </div>}
          {meals && 
            <div className="container-detailRigth">
              <h1>{meals.strMeal}</h1>
              <h3>Categories: {meals.strCategory}</h3>
              <p><strong>Ingredient:</strong></p>
              <div className="ingredient">
                <p>{meals.strIngredient1 && meals.strMeasure1 !== "" ?`1. ${meals.strIngredient1}: ${meals.strMeasure1}` : ""}</p>
                <p>{meals.strIngredient2 && meals.strMeasure2 !== "" ?`2. ${meals.strIngredient2}: ${meals.strMeasure2}` : ""}</p>
                <p>{meals.strIngredient3 && meals.strMeasure3 !== "" ?`3. ${meals.strIngredient3}: ${meals.strMeasure3}` : ""}</p>
                <p>{meals.strIngredient4 && meals.strMeasure4 !== "" ?`4. ${meals.strIngredient4}: ${meals.strMeasure4}` : ""}</p>
                <p>{meals.strIngredient5 && meals.strMeasure5 !== "" ?`5. ${meals.strIngredient5}: ${meals.strMeasure5}` : ""}</p>
                <p>{meals.strIngredient6 && meals.strMeasure6 !== "" ?`6. ${meals.strIngredient6}: ${meals.strMeasure6}` : ""}</p>
                <p>{meals.strIngredient7 && meals.strMeasure7 !== "" ?`7. ${meals.strIngredient7}: ${meals.strMeasure7}` : ""}</p>
                <p>{meals.strIngredient8 && meals.strMeasure8 !== "" ?`8. ${meals.strIngredient8}: ${meals.strMeasure8}` : ""}</p>
                <p>{meals.strIngredient9 && meals.strMeasure9 !== "" ?`9. ${meals.strIngredient9}: ${meals.strMeasure9}` : ""}</p>
                <p>{meals.strIngredient10 && meals.strMeasure10 !== "" ?`10. ${meals.strIngredient10}: ${meals.strMeasure10}` : ""}</p>
                <p>{meals.strIngredient11 && meals.strMeasure11 !== "" ?`11. ${meals.strIngredient11}: ${meals.strMeasure11}` : ""}</p>
                <p>{meals.strIngredient12 && meals.strMeasure12 !== "" ?`12. ${meals.strIngredient12}: ${meals.strMeasure12}` : ""}</p>
                <p>{meals.strIngredient13 && meals.strMeasure13 !== "" ?`13. ${meals.strIngredient13}: ${meals.strMeasure13}` : ""}</p>
                <p>{meals.strIngredient14 && meals.strMeasure14 !== "" ?`14. ${meals.strIngredient14}: ${meals.strMeasure14}` : ""}</p>
                <p>{meals.strIngredient15 && meals.strMeasure15 !== "" ?`15. ${meals.strIngredient15}: ${meals.strMeasure15}` : ""}</p>
                <p>{meals.strIngredient16 && meals.strMeasure16 !== "" ?`16. ${meals.strIngredient16}: ${meals.strMeasure16}` : ""}</p>
                <p>{meals.strIngredient17 && meals.strMeasure17 !== "" ?`17. ${meals.strIngredient17}: ${meals.strMeasure17}` : ""}</p>
                <p>{meals.strIngredient18 && meals.strMeasure18 !== "" ?`18. ${meals.strIngredient18}: ${meals.strMeasure18}` : ""}</p>
                <p>{meals.strIngredient19 && meals.strMeasure19 !== "" ?`19. ${meals.strIngredient19}: ${meals.strMeasure19}` : ""}</p>
                <p>{meals.strIngredient20 && meals.strMeasure20 !== "" ?`20. ${meals.strIngredient20}: ${meals.strMeasure20}` : ""}</p>
              </div>
            </div>}
      </div>
      <div className="instruction">
        <h1>Instruction</h1>
        <p>{meals.strInstructions}</p>
      </div>
      </Content>
      <Footers></Footers>
    </>
    )
}