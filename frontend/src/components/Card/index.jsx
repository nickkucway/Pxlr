
import { Link } from "react-router-dom"

export default function Card({ game, updateDetails }) {
    
    
    return (
        <div className="w-4/5 mx-auto max-w-[350px] p-[10px] rounded-lg flex-col content-center text-center mb-10 bg-gray-100 break-inside-avoid-column">
            <Link to={"/details/" + game.id} onClick={() => updateDetails(game)}>
                <div>
                    <div className='flex-row'>
                        <img className='' src={game.image.original_url}/>
                        <h3 className="text-xl font-bold mb-4px">{game.name}</h3>
                    </div> 
                </div>

            </Link>            
        </div>
    )
}