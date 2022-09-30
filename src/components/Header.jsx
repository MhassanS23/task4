import React from 'react';
import {Layout} from 'antd';
import {useNavigate} from 'react-router-dom'

const {Header} = Layout;

const Atas = ({loadData}) => {
    const navigate = useNavigate();
    return(
    <Header>
      <div className="container-header">
        <div className="logo">
          <p>reacTMeals</p>
          </div>
        <div className="Navbar">
          <button onClick={() =>{ 
            navigate('/')
            loadData()}} 
            className="btn-nav">
            <p>Home</p>
          </button>
        </div>
      </div>
    </Header>
    )
}

export default Atas