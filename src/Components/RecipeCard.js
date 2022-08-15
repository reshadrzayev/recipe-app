import React, {useState} from 'react';
import {useSelector} from "react-redux";

function RecipeCard(props) {
    const [expand, setExpand] = useState(false)
    const {user} = useSelector(state => state.auth)
    const checkUserLogin = () =>{
        if(user.length === 0){
            setExpand(false)
            alert("Please log in in order to see ingredients!")
        }
        else{
            setExpand(!expand)
        }
    }
    return (
        <div className="recipe-card">
            <div className="card-main">
                <div className="image">
                    <img src={props.image} alt={props.label}/>
                </div>
                <div className="label">
                    <h4>{props.label}</h4>
                </div>
                {
                    expand===true ? <div className="more-detail">
                        {
                            props.ingredients.map((i, index) => {
                                return (
                                    <p className="ingredients" key={index}>
                                        {i.text}
                                    </p>
                                )
                            })
                        }
                    </div> : <></>
                }
                <span onClick={checkUserLogin}>{expand === false ? "See ingredients" : "Close ingredients"}</span>
            </div>
        </div>
    );
}

export default RecipeCard;
