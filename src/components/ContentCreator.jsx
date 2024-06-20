// display content creator information in this component
function ContentCreator({name, URL, description, image}) {
    return (
        <div>
        <h1>{name}</h1>
        <h1>{URL}</h1>
        <h1>{description}</h1>
        <h1>{image}</h1>
        </div>
       
    )
}

export default ContentCreator;