import { useState, useEffect } from 'react'
import { Routes, Route, Link } from "react-router-dom";
import DetailsPage from '../DetailsPage'

export default function App() {
    // Store API data here
    const [games, setGames] = useState([])
    const [detailsData, setDetailsData] = useState({})

    async function getData(url) {
        const res = await fetch(url)
        const data = await res.json()
        
        setGames(data)
    }

    // Query the API on component mount
    useEffect(() => {


        // Call the async function
        getData(`#`)
    }, [])

    //  Create the HTML using JSX for the App component
    return (
        <>
          
          <Link to="/">
              <h1 className="text-6xl text-center mt-10 font-bold">PXLR</h1>
          </Link>

          <Routes>
              <Route path='/' />
              <Route path="/details/:gameId" element={<DetailsPage game={detailsData} />} />

          </Routes>
        </>
        
    )
}