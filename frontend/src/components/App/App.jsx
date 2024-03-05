import { useState, useEffect } from 'react'
import { Routes, Route, Link } from "react-router-dom";
import DetailsPage from '../DetailsPage'
import Gallery from '../Gallery'
import AboutPage from '../AboutPage'
import AuthFormPage from '../AuthFormPage'
import NotFoundPage from '../NotFoundPage'
import { getResults } from '../../../utils/backend'
import './styles.css'



export default function App() {
    // Store API data here
    const [games, setGames] = useState([])
    const [detailsData, setDetailsData] = useState({})
    const [loginStatus, setLoginStatus] = useState(false)


    async function getData(url) {
        const res = await fetch(url)
        const data = await res.json()        
        setGames(data.results)
    }

    // Query the API on component mount
    useEffect(() => {
        getResults('like a dragon').then(data=>{setGames(data.data.results)})
        if (localStorage.getItem('userToken')) {
            setLoginStatus(true)
        }
    }, [])

    // Conditionally render the login/singup links and the logout button
    let authLink = <div className="flex lg:gap-5 md:gap-4 sm:gap-3 gap-2">
        <Link to="/about">
            <h2 className="text-white md:text-lg sm:text-md">About</h2>
        </Link>
        <Link to="/auth/signup">
            <h2 className="text-white md:text-lg sm:text-md">Sign-Up</h2>
        </Link>
        <Link to="/auth/login">
            <h2 className="text-white md:text-lg sm:text-md">Log-In</h2>
        </Link>
    </div>

    if (loginStatus) {
        authLink = <div className="flex lg:gap-5 md:gap-4 sm:gap-3 gap-2">
            <Link to="/about">
                <h2 className="text-white md:text-lg sm:text-md">About</h2>
            </Link>

            <button
                className="text-white md:text-lg sm:text-md"
                onClick={() => {
                    localStorage.clear()
                    setLoginStatus(false)
                }}>
                Log-Out
            </button>
        </div>
    }

    //  Create the HTML using JSX for the App component
    return (
        <>
          
            <nav className="flex items-center justify-between h-16 bg-zinc-900 shadow-lg lg:px-9 md:px-6 px-3">
                <Link to="/">
                    <img className='max-w-24' src='https://i.imgur.com/lsdibaA.png'/>
                </Link>
                
                {authLink}
            </nav>
            

            <Routes>
                <Route path='/' element={<Gallery games={games} setGames={setGames} refreshQueue={getData} updateDetails={setDetailsData}/>}/>
                <Route path="/details/:gameId" element={<DetailsPage game={detailsData} />} />
                <Route path="/auth/:formType" element={<AuthFormPage setLoginStatus={setLoginStatus} />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/*" element={<NotFoundPage />} />


            </Routes>
        </>
        
    )
}