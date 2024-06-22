import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import ContentCreator from "../components/ContentCreator";
import { supabase } from "../client";
import '../styles/ViewCreator.css'

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
        <div className="container">
        <h1>View Creator</h1>
        <ContentCreator creator={{ id: id, name: creatorInfo.name, url: creatorInfo.url, description: creatorInfo.description, imageURL: creatorInfo.imageURL }} />
        <Link to="/" className="fixed-return-link">Return to Home</Link>
        </div>

    )
}

export default ViewCreator;