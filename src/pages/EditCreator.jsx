import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { supabase } from "../client.js";
import '@picocss/pico'; 
import '../styles/EditCreator.css'; 

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    await update();
  };

  const update = async () => {
    const { error } = await supabase.from('creators').update({
      name: formData.name,
      url: formData.url,
      description: formData.description,
      imageURL: formData.imageURL
    }).eq('id', id);

    if (!error) {
      navigate('/');
    }
  };

  const deleteCreator = async () => {
    const response = await supabase
      .from('creators')
      .delete()
      .eq('id', id);
    navigate("/");
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h1>Edit Creator</h1>
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
      <button type="button" className="secondary" onClick={deleteCreator}>Delete Creator</button>
      <Link to="/" className="fixed-return-link">Return to Home</Link>
    </div>
  );
}

export default EditCreator;
