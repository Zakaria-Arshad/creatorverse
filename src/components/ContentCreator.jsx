import React from 'react';
import { Link } from 'react-router-dom';
import '@picocss/pico';  
import '../styles/ContentCreator.css'

function ContentCreator({ creator: { id, name, url, description, imageURL } }) {
    const handleImageError = (e) => {
        e.target.src = '../../public/anonymous.jpg';
      };
  return (
    <article className="card" style={{ maxWidth: '400px', margin: 'auto' }}>
      <header>
        <h2>{name}</h2>
      </header>
      <img 
        src={imageURL} 
        alt={`${name}'s profile`} 
        onError={handleImageError} 
        className="image"
      />
      <div className="body">
        <p>{description}</p>
      </div>
      <footer>
        <p><a href={url} target="_blank" rel="noopener noreferrer">Profile URL</a></p>
        <div className="button-container">
          <Link to={`/view/${id}`} className="button black-button">
            More Info
          </Link>
          <Link to={`/edit/${id}`} className="button black-button">
            Edit Info
          </Link>
        </div>
      </footer>
    </article>
  );
}

export default ContentCreator;
