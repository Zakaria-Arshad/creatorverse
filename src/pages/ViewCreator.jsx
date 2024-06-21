import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { supabase } from "../client";

function ViewCreator() {
    const { id } = useParams()
    const [creatorInfo, setCreatorInfo] = useState({name: "", url: "", description: "", imageURL: ""});

    useEffect(() => {
        const fetchData = async () => {
        const { data, error } = await supabase
            .from('creators')
            .select()
            .eq('id', id)
            .single();

        if (error) {
            console.error('Error fetching data:', error);
        } else {
            setCreatorInfo({
                name: data.name,
                url: data.url,
                description: data.description,
                imageURL: data.imageURL
              });
        }
        };

        fetchData();
    }, [id]);

    return (
        <div>
            <h1>View Creator</h1>
            <h1>Name: {creatorInfo.name}</h1>
            <h1>URL: {creatorInfo.url}</h1>
            <h1>Description: {creatorInfo.description}</h1>
            <h1>Image: {creatorInfo.imageURL}</h1>
            <Link to={`/edit/${id}`}>
                Edit Info 
            </Link>
        </div>
        
    )
}

export default ViewCreator;