import ShowCreators from "./ShowCreators";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../client";
import '@picocss/pico';  
import '../styles/HomePage.css';   

function HomePage() {
  const [creators, setCreators] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from('creators').select();
      setCreators(data);
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="header-container">
        <h1>The CreatorVerse 💫</h1>
        <Link to={`/add`} className="add-button-link">
          <button className="add-button">Add a creator</button>
        </Link>
      </div>
      <ShowCreators creators={creators} />
    </>
  );
}

export default HomePage;
