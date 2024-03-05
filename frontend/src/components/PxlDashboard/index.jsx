import { useState, useEffect } from "react"
import { getPxlIndex } from "../../../utils/backend"
import Pxl from "../Pxl"

export default function pxlDashboard() {
    // Save pxls queried from the database in state
    const [pxls, setPxls] = useState([])
    

    // Query the database for all pxls on component mount
    useEffect(() => {
        getPxlIndex().then(data => setPxls(data))
  
    }, [])


    // Update the pxls in the pxl section after a database transaction
    function refreshPxls() {
        getPxlIndex()
            .then(newPxlData => setPxls(newPxlData))
    }




    // conditionally render pxls
    let pxlElements = [<p key='0' className='text-center'>No Pxls yet.</p>]
    if (pxls.length > 0) {
        pxlElements = pxls.map(pxl => {
            return <Pxl
                key={pxl._id}
                data={pxl}
                refreshPxls={refreshPxls}
            />
        })
    }



    return (
        <>
            <h1 className='text-xl font-bold text-center text-white '>Recent PXLs:</h1>
            <div className='pxl-section  rounded-lg p-4 pb-10 mt-4 mx-10 space-y-4 relative '>
                {pxlElements}
            </div>
        </>
    )
}