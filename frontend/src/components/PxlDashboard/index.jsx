import { useState, useEffect } from "react"
import { getPxlIndex } from "../../../utils/backend"
import HomePxl from '../HomePxl'

export default function PxlDashboard() {
    // Save pxls queried from the database in state
    const [pxls, setPxls] = useState([])

    // Query the database for all pxls on component mount
    useEffect(() => {
        getPxlIndex().then(data => setPxls(data))
    }, [])

    return(
        <>
            <div className="">
              {pxls.length > 0 ? pxls.map(pxl => <HomePxl key={pxl.id} pxl={pxl} />) : <p className="text-xl text-center text-white">No PXLS found</p>}
            </div>
        </>
    )
}