import ContentCreator from "../components/ContentCreator";
import { Link } from "react-router-dom";
import '../styles/ShowCreators.css'

function ShowCreators( {creators} ) {
    if (creators.length === 0) {
        return <div className="no-creators-container"><h1>No creators found</h1></div>;
    }
    return (
        <div className="container">
            {creators.map((creator, index) => (
            <ContentCreator creator={creator} key={index}/>    
            ))}
        </div>
    )
}

export default ShowCreators;