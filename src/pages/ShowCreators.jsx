import ContentCreator from "../components/ContentCreator";
import { Link } from "react-router-dom";

function ShowCreators( {creators} ) {
    if (creators.length === 0) {
        return <h1>No creators found</h1>
    }
    return (
        <>
            {creators.map((creator, index) => (
            <ContentCreator creator={creator} key={index}/>    
            ))}
        </>
    )
}

export default ShowCreators;