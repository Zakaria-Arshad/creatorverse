// display content creator information in this component
import { Link } from "react-router-dom";

function ContentCreator({creator: {id, name, url, description, imageURL}}) {
    return (
        <div>
            <h1>Name: {name}</h1>
            <h1>URL: {url}</h1>
            <h1>Description: {description}</h1>
            <h1>Image: {imageURL}</h1>
            <Link to={`/view/${id}`} >
                More Info 
            </Link>
            <Link to={`/edit/${id}`}>
                Edit Info 
            </Link>
        </div>
    )
}

export default ContentCreator;