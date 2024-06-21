import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../client.js"
import { useNavigate } from 'react-router-dom';

function EditCreator() {
    const { id } = useParams();
    const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    name: '',
    url: '',
    description: '',
    imageURL: ''
  });

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
        setFormData({
          name: data.name,
          url: data.url,
          description: data.description,
          imageURL: data.imageURL
        });
      }
    };

    fetchData();
  }, [id]);
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        update();
      };

      const update = async(e) => {
        const { error } = await supabase.from('creators').update({name: formData.name, url: formData.url, description: formData.description, imageURL: formData.imageURL}).eq('id', id)
      }

      const deleteCreator = async(e) => {
        const response = await supabase
        .from('creators')
        .delete()
        .eq('id', id)
        navigate("/")

      }
    
      return (
        <>
        <form onSubmit={handleSubmit}>
        <h1>Edit Creator</h1>
          <div>
            <h2>Creator Name</h2>
            <input 
              type="text" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div>
            <h2>Creator URL</h2>
            <input 
              type="text" 
              name="url" 
              value={formData.url} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div>
            <h2>Creator Description</h2>
            <textarea 
              name="description" 
              value={formData.description} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div>
            <h2>Creator Image URL</h2>
            <input 
              type="text" 
              name="imageURL" 
              value={formData.imageURL} 
              onChange={handleChange} 
              required 
            />
          </div>
          <button type="submit">Submit</button>
        </form>
        <button onClick={() => deleteCreator()}>Delete Creator</button>
        </>
        
      );
}

export default EditCreator;