import { useState, useEffect } from "react";
import { supabase } from "./client";
import { BrowserRouter, useRoutes } from 'react-router-dom';
import ShowCreators from './pages/ShowCreators';
import ViewCreator from './pages/ViewCreator';
import EditCreator from './pages/EditCreator';
import AddCreator from './pages/AddCreator';

function Router () {
  let router = useRoutes([
    {
    path: "/",
    element: <ShowCreators />,
    },
    {
      path: "view",
      element: <ViewCreator />
    },
    {
      path: "edit",
      element: <EditCreator />
    },
    {
      path: "add",
      element: <AddCreator />
    }
  ])
  return router;

}

function App() {
  const [creators, setCreators] = useState([])

  useEffect(() => {
    const fetchData = async() => {
      const { data, error } = await supabase.from('creators').select()
      // console.log(data)
      setCreators([...creators, data])
    }
    fetchData();
    
  }, [])
  

  return (
    <BrowserRouter>
        <Router />
    </BrowserRouter>
  )
}

export default App
