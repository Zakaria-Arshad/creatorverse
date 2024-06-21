import ShowCreators from "./ShowCreators"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { supabase } from "../client"

function HomePage() {
    const [creators, setCreators] = useState([])

    useEffect(() => {
        const fetchData = async() => {
          const { data, error } = await supabase.from('creators').select()
          setCreators(data)
        }
        fetchData();
      }, [])

    return (
        <>
            <h1>Home Page</h1>
            <ShowCreators creators={creators}/>
            <Link to={`/add`}>
                <button>Add a creator</button>
            </Link>
        </>

    )
}

export default HomePage