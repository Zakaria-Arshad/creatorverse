import { useState } from "react";
import { supabase } from "../client.js"

function AddCreator() {
    const [formData, setFormData] = useState({
        name: '',
        url: '',
        description: '',
        imageURL: ''
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        addToDatabase();
        setFormData({
          name: '',
          url: '',
          description: '',
          imageURL: ''
        });
      };

      const addToDatabase = async(e) => {
        const { error } = await supabase.from('creators').insert({name: formData.name, url: formData.url, description: formData.description, imageURL: formData.imageURL})
      }
    
      return (
        <form onSubmit={handleSubmit}>
        <h1>Add Creator</h1>
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
      );
}

export default AddCreator;