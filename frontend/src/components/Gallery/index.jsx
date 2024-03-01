import { useState } from 'react'
import Card from '../Card'
import { getResults } from '../../../utils/backend'

export default function Gallery({ games, setGames, updateDetails }) {
    const [query, setQuery] = useState('')

    function handleSubmit(event) {
        // prevent the form from reloading the page
        event.preventDefault()
        // clear the previous gallery's data
        setGames([])
        // query the API with the user's input
        getResults(query).then(data=>{setGames(data.data.results);console.log(data)})
    }

    return (

        <>
        <div className="p-[25px] m-[25px] bg-zinc-900 rounded-lg">
            <form onSubmit={handleSubmit} className="mt-4 text-center">
                <input
                    className="box-border p-2 w-3/5 rounded-md border border-gray-300 focus:outline-none focus:border-gray-500"
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
              {games.length > 0 ? games.map(game => <Card key={game.id} game={game} updateDetails={updateDetails}/>) : <p className="text-xl text-center text-white">Search for a game to query results...</p>}
        </div>
        </>    
    )
}