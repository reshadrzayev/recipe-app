import axios from 'axios'
import {useEffect, useState} from "react";
import RecipeCard from "./Components/RecipeCard";
import SearchBar from "./Components/SearchBar";
import Loader from "./Components/Loader";
import ProtectedRoute from "./Components/ProtectedRoute";

function App(props) {

    const [data, setData] = useState({})
    const [recipes, setRecipes] = useState([])
    const [query, setQuery] = useState('chicken')
    const [text, setText] = useState('chicken')
    const [loading, setLoading] = useState(true)

    const APP_KEY = '375a65cec67407c8d28760f0f6c531c6'
    const APP_ID = 'bd9257eb'

    const getData = async () => {
        try {
            setLoading(true)
            const response = await axios.get(`https://api.edamam.com/api/recipes/v2?type=public&app_key=${APP_KEY}&app_id=${APP_ID}&q=${query}`)
            setData(response.data)
            setRecipes(response.data.hits)
        } catch (e) {
            if (e) {
                console.log(e)
            }
        }
        setLoading(false)
    }


    useEffect(() => {
        getData()
    }, [query])

    return (

        <ProtectedRoute>
            <div className="home-page">
                <SearchBar query={query} setQuery={setQuery} text={text} setText={setText}/>
                <div className="recipes">
                    {
                        loading === true ? <Loader/> : <>
                            {recipes.map((r) => {
                                return (
                                    <RecipeCard key={r.recipe.id} label={r.recipe.label} image={r.recipe.image}
                                                ingredients={r.recipe.ingredients}/>
                                )
                            })}
                        </>
                    }
                    {
                        recipes.length === 0 && loading === false ? <h2 className="no-result">No result :(</h2> : <></>
                    }
                </div>

            </div>
        </ProtectedRoute>

    );
}

export default App;
