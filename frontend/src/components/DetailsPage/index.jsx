import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import PxlSection from '../PxlSection'




export default function DetailsPage(props) {

    const [game, setGame] = useState({ ...props.game })

    const params = useParams()

    useEffect(() => {
        if (!game.id) {
            async function getGameFromAPI() {
                const res = await fetch(`https://www.giantbomb.com/api/game/${params.gameId}/?api_key=3444d80238f7ab96fccbd62cf1f9b06bda8b15af&format=json`)
                const data = await res.json() 
                setGame(data.results)

            }
            getGameFromAPI()
        }
    }, [])

    if (Object.entries(game).length > 0){
        return (
            <>  
                <div className="w-4/5 mx-auto min-h-[300px] max-w-[350px] p-[10px] rounded-lg flex-col content-center  mt-10 bg-gray-100">
                    <img className='w-full' src={game.image.original_url}/>
                    <h3 className='text-xl text-center'>{game.name}</h3>
                    
                </div>
                <PxlSection gameId={game.id} />


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