import { useState, useEffect } from "react"
import { postPxl, getPxls } from "../../../utils/backend"
import Pxl from "../Pxl"

export default function pxlSection({ gameId, gameImg, gameTitle }) {
    // Save pxls queried from the database in state
    const [pxls, setPxls] = useState([])
    const [showCreateForm, setShowCreateForm] = useState(false)
    const [createFormData, setCreateFormData] = useState({
        
        content: ''
    })

    // Query the database for all pxls that pertain to this artwork on component mount
    useEffect(() => {
        getPxls(gameId)
            .then(pxls => setPxls(pxls))
    }, [])


    // Update the form fields as the user types
    function handleInputChange(event) {
        setCreateFormData({
            ...createFormData,
            [event.target.name]: event.target.value
        })
    }

    // Render a form that allows a user to create a pxl on submit
    function toggleCreateForm() {
        setShowCreateForm(!showCreateForm)
    }

    // Update the pxls in the pxl section after a database transaction
    function refreshPxls() {
        getPxls(gameId)
            .then(newPxlData => setPxls(newPxlData))
    }

    // Execute form submission logic
    function handleSubmit(event) {
        // prevent the page from reloading
        event.preventDefault()
        // clear the form
        setCreateFormData({
            
            content: ''
        })
        // close the form
        setShowCreateForm(false)
        // create the pxl in the backend
        postPxl({ ...createFormData, gameId: gameId, gameImg: gameImg, gameTitle: gameTitle })
            .then(() => refreshPxls())
    }


    // conditionally render pxls
    let pxlElements = [<p key='0' className='text-center'>No Pxls yet. Be the first to Pxl!</p>]
    if (pxls.length > 0) {
        pxlElements = pxls.map(pxl => {
            return <Pxl
                key={pxl._id}
                data={pxl}
                refreshPxls={refreshPxls}
            />
        })
    }

    // conditionally display the text of the create form button
    let btnText = 'Create'
    if (showCreateForm) {
        btnText = 'Close'
    }

    return (
        <div className='pxl-section bg-zinc-300 rounded-lg p-4 pb-10 mt-4 mx-10 space-y-4 relative'>
            <h1 className='text-xl font-bold'>Pxls:</h1>
            <button
                onClick={toggleCreateForm}
                className="top-0 right-5 absolute text-white hover:bg-fuchsia-800 font-bold py-2 px-4 bg-fuchsia-700 rounded cursor-pointer mr-2"
            >
                {btnText}
            </button>

            {/* Conditionally render the create form */}
            {
                showCreateForm && <form
                    onSubmit={handleSubmit}
                    className="bg-gray-100 rounded-lg p-4 my-4  w-[80vw] mx-auto text-right">
                    
                    <br />
                    <textarea
                        name="content"
                        className="p-2 my-2 h-[100px] w-full bg-gray-100"
                        placeholder="Share your thoughts!"
                        value={createFormData.content}
                        onChange={handleInputChange}
                    />
                    <button
                        type="submit"
                        className="text-white hover:bg-fuchsia-800 font-bold py-2 px-4 bg-fuchsia-700 rounded cursor-pointer mr-2">
                        Post
                    </button>
                </form>
            }

            {/* Display the value of the pxlElements variable */}
            {pxlElements}
        </div>
    )
}
