import React from 'react';
import styled from 'styled-components';
import {motion} from 'framer-motion';
//Redux
import {useDispatch} from 'react-redux';
import loadDetail from '../actions/detailAction';

const Game =({name, released, image, id}) =>{
    const dispatch = useDispatch();
    const loadDetailHandler = () =>{
        dispatch(loadDetail(id));
    }
    return(
        <StyledGame onClick={loadDetailHandler}>
            <h3>{name}</h3>
            <p>{released}</p>
            <img src={image} alt={name}/>
        </StyledGame>
    )
} 

const StyledGame = styled(motion.div)`
    min-height: 30vh;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
    text-align: center;
    border-radius: 1rem;
    img{
        width: 100%;
        height: 40vh;
        object-fit: cover;
        color: #333;
    }
    h3{
        font-size: 1.3rem;
        color: #333;
        padding: 1.5rem;
    }
    p{
        font-size: 1.2rem;
        line-height: 200%;
        color: #696969;
    }
    a{
        text-decoration: none;
        color: #333;
    }
    `


export default Game;