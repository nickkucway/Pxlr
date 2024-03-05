import { useState } from 'react'
import Card from '../Card'
import { getResults } from '../../../utils/backend'
import PxlDashboard from '../PxlDashboard'

export default function Gallery({ games, setGames, updateDetails }) {
    const [query, setQuery] = useState('')

    function handleSubmit(event) {
        // prevent the form from reloading the page
        event.preventDefault()
        // clear the previous gallery's data
        setGames([])
        // query the API with the user's input
        getResults(query).then(data=>{setGames(data.data.results)})
    }

    return (

        <>
        <div className='lg:flex flex-row'>
            <div className='basis-2/5 mt-[25px]' >
                <PxlDashboard/>

            </div>

            <div className='basis-3/5'>
            <div className=' p-[25px] flex flex-wrap content-center justify-between mt-5 mx-auto'>
                    <div className="bg-zinc-900 hover:bg-fuchsia-800 p-5 w-1/3">
                        <img className="mx-auto h-20" src="https://i.imgur.com/IzIVN75.png"/>
                        <h3 className='text-xl font-bold text-center text-white mt-5'>GAME</h3>
                        <p className='text-white text-center'>Play your favorite games!</p>
                    </div>
                    <div className="bg-zinc-900 hover:bg-fuchsia-800 p-5 w-1/3">
                        <img className="mx-auto h-20" src="https://i.imgur.com/ky0hpLs.png"/>
                        <h3 className='text-xl font-bold text-center text-white mt-5'>SEARCH</h3>
                        <p className='text-white text-center'>Find your favorite games!</p>
                    </div>
                    <div className="bg-zinc-900 hover:bg-fuchsia-800 p-5 w-1/3"> 
                        <img className="mx-auto h-20" src="https://i.imgur.com/E4nKZlv.png"/>
                        <h3 className='text-xl font-bold text-center text-white mt-5'>PXL</h3>
                        <p className='text-white text-center'>Share your thoughts!</p>
                    </div>
                </div>

                <div className="p-[25px] m-[25px] bg-zinc-900 rounded-lg">
                    <h1 className='text-xl font-bold text-center text-white '>Search for a game:</h1>

                    <form onSubmit={handleSubmit} className="mt-4 text-center">
                        <input
                            className="box-border p-2 w-4/5 rounded-md border border-gray-300 focus:outline-none focus:border-gray-500"
                            name="search"
                            placeholder="Search for a Game!"
                            value={query}
                            onChange={event => setQuery(event.target.value)} />
                        <button
                            type="submit"
                            className="box-border mx-1 px-3 py-[6px] text-lg rounded-lg font-semibold hover:bg-fuchsia-800 transition-all duration-200 ease-in-out bg-fuchsia-700 text-white">
                            Search
                        </button>
                    </form>
                </div>

                <div className="w-4/5 mt-10 mx-auto xl:columns-4 lg:columns-3 md:columns-2">
                    {games.length > 0 ? games.map(game => <Card key={game.id} game={game} updateDetails={updateDetails}/>) : <p className="text-xl text-center text-white">Search for a game...</p>}
                </div>
            </div>
        </div>
        </>    
    )
}