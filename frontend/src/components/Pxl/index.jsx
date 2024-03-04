import { useState } from "react"
import { updatePxl, deletePxl } from "../../../utils/backend"

export default function Pxl({ data, refreshPxls }) {
    const [showEditForm, setShowEditForm] = useState(false)
    const [editFormData, setEditFormData] = useState({

        content: data.content
    })

    // Update the form fields as the user types
    function handleInputChange(event) {
        setEditFormData({
            ...editFormData,
            [event.target.name]: event.target.value
        })
    }

    // Execute form submission logic
    function handleSubmit(event) {
        // prevent the page from reloading
        event.preventDefault()
        // close the form
        setShowEditForm(false)
        // update the pxl in the backend
        updatePxl(editFormData, data._id)
            .then(() => refreshPxls())
    }

    // Delete a pxl
    function handleDelete() {
        deletePxl(data._id)
            .then(() => refreshPxls())
    }

    // Change the pxl to a form if the showEditForm state variable is true
    if (showEditForm) {
        return (
            <form
                onSubmit={handleSubmit}
                className="bg-gray-100 rounded-lg p-4 my-4  w-[80vw] mx-auto text-right">

                <textarea
                    name="content"
                    className="p-2 my-2 h-[100px] w-full bg-gray-100"
                    placeholder="Share your thoughts!"
                    value={editFormData.content}
                    onChange={handleInputChange}
                />
                <div>
                    <button
                        onClick={() => { setShowEditForm(false) }}
                        className="text-white hover:bg-gray-800 font-bold py-2 px-4 bg-gray-700 rounded cursor-pointer mr-2">
                        Close
                    </button>
                    <button
                        type="submit"
                        className="text-white hover:bg-fuchsia-700 font-bold py-2 px-4 bg-fuchsia-800 rounded cursor-pointer mr-2">
                        Post
                    </button>
                </div>
            </form>
        )

        //  Default JSX of each pxl
    } else {
        return (
            <div
                className="bg-gray-100 rounded-lg p-4 my-4  w-[50vw] mx-auto">
                <div>
                    <div className="flex ">
                        <img className='max-h-64' src={data.gameImg}/>
                        <div>
                            <p className="font-bold">{data.userId}</p>
                            <p className="my-2">{data.content}</p>

                        </div>
                    </div>
                </div>
                <div className="flex justify-end">
                    <button
                        onClick={() => { setShowEditForm(true) }}
                        className="text-white hover:bg-fuchsia-800 font-bold py-2 px-4 bg-fuchsia-700 rounded cursor-pointer mr-2">
                        Edit
                    </button>
                    <button
                        onClick={handleDelete}
                        className="bg-zinc-700 hover:bg-zinc-800 text-white font-bold py-2 px-4 rounded">
                        Delete
                    </button>
                </div>
            </div>
        )
    }
}