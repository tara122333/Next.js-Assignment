
const Suppoert = () => {
    return (
        <>
            <div className="mt-20 flex w-full justify-center items-center flex-col gap-8">
                <div className="w-[1350px]">
                    <h1 className="bg-gradient-to-r from-[#4E4BE4] text-5xl to-[#E862FE] bg-clip-text text-transparent text-center">Automate all aspects of your delivery process with
                        AI support.</h1>
                </div>
                <div>
                    <span className="font-extralight text-2xl">Get Early Access</span>
                </div>
                <div className="w-full h-full">
                    <div className='w-1/3 m-auto my-4 rounded-full text-white'>
                        <div className=' relative -top-1 left-0 flex items-center justify-between p-1 px-3 rounded-full bg-clip-border w-full h-16 my-8 bg-gradient-to-r from-[#FF3BFF] from-0% via-[#ECBFBF] via-38.02% to-[#5C24FF] to-100% border-transparent'>
                        </div>
                        <div className='relative -top-24 left-0 px-1 rounded-full'>
                            <div className='flex w-full h-14 items-center justify-between p-1 px-3 rounded-full  bg-black '>
                                <input type='email'
                                    placeholder='Your Email'
                                    className='placeholder-gray-500  px-2 outline-none bg-transparent' />
                                <div className='border p-2 text-sm border-white rounded-full text-gray-200 cursor-pointer'>JOIN WAITLIST</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Suppoert
