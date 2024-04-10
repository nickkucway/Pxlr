export default function AboutPage() {
    return (
        <>
            <div className="w-3/5 mx-auto mt-10">
                <img className="rounded-lg" src="https://i.imgur.com/TJ4uBtF.png"/>
                <h1 className='text-2xl font-bold text-center text-white mt-5'>About PXLR:</h1>
                <p className='text-white mt-5'>PXLR is a revolutionary social media platform tailored specifically for video game enthusiasts. It serves as a vibrant hub where gamers from all corners of the globe can connect, share experiences, and immerse themselves in the world of gaming culture and give their opionions on the latest games. Post your first PXL today!
                </p>
                <h1 className='text-2xl font-bold text-center text-white mt-5 '>How To PXL:</h1>
                <div className='flex flex-wrap content-center justify-between mt-5 mx-auto mb-10'>
                    <div className="bg-zinc-800 hover:bg-fuchsia-800 p-5 min-w-[325px]">
                        <img className="mx-auto h-20" src="https://i.imgur.com/IzIVN75.png"/>
                        <h3 className='text-xl font-bold text-center text-white mt-5'>GAME</h3>
                        <p className='text-white text-center'>Play your favorite games!</p>
                    </div>
                    <div className="bg-zinc-800 hover:bg-fuchsia-800 p-5 min-w-[325px]">
                        <img className="mx-auto h-20" src="https://i.imgur.com/ky0hpLs.png"/>
                        <h3 className='text-xl font-bold text-center text-white mt-5'>SEARCH</h3>
                        <p className='text-white text-center'>Find your favorite games!</p>
                    </div>
                    <div className="bg-zinc-800 hover:bg-fuchsia-800 p-5 min-w-[325px]"> 
                        <img className="mx-auto h-20" src="https://i.imgur.com/E4nKZlv.png"/>
                        <h3 className='text-xl font-bold text-center text-white mt-5'>PXL</h3>
                        <p className='text-white text-center'>Share your thoughts!</p>
                    </div>
                </div>

            </div>
        
        </>
    )
}