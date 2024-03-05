import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getDetails } from '../../../utils/backend'

import PxlSection from '../PxlSection'




export default function DetailsPage(props) {

    const [game, setGame] = useState({ ...props.game })

    const params = useParams()

    useEffect(() => {
        if (!game.id) {
            getDetails(params.gameId).then(data=>{setGame(data.data.results)})
            
        }
    }, [])

    if (Object.entries(game).length > 0){
        return (
            <>  
                <div className="w-4/5 mx-auto min-h-[300px] max-w-[600px] p-[10px] rounded-lg md:flex content-center  mt-10 bg-zinc-900">
                    <div>

                        <img className='w-full' src={game.image.original_url}/>
                    </div>
                    <div className="p-[10px]">

                        <h3 className='text-2xl font-bold text-center text-white'>{game.name}</h3>
                        <p className='text-white'>Release Date: {game.original_release_date}</p>
                        <p className='text-white'>{game.deck}</p>
                        {
                            game.platforms.length > 0 &&
                            <div className="flex flex-wrap text-white">
                                <details>
                                    <summary className="md:pr-2 pr-1 font-bold">Platforms</summary>

                                    {game.platforms.map(platform =>
                                        <p>{platform.name}</p>
                                    )}
                                </details>
                            </div>
                        }
                    </div>
                </div>
                <PxlSection gameId={game.id} gameImg={game.image.original_url} gameTitle={game.name} />


            </>
        )
    }  else {
        return (
        <>

          <p className="text-xl text-center">Your game is loading...</p>
        </>
      )
    }
}