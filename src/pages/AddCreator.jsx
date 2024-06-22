import { useState } from "react";
import { supabase } from "../client.js"
import { Link } from "react-router-dom";
import '../styles/EditCreator.css'

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
        <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h1>Add Creator</h1>
        <div className="grid">
          <div>
            <label htmlFor="name">Creator Name</label>
            <input 
              type="text" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div>
            <label htmlFor="url">Creator URL</label>
            <input 
              type="text" 
              name="url" 
              value={formData.url} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div>
            <label htmlFor="description">Creator Description</label>
            <textarea 
              name="description" 
              value={formData.description} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div>
            <label htmlFor="imageURL">Creator Image URL</label>
            <input 
              type="text" 
              name="imageURL" 
              value={formData.imageURL} 
              onChange={handleChange} 
              required 
            />
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
      <Link to="/" className="fixed-return-link">Return to Home</Link>
      </div>
      );
}

export default AddCreator;