
const SectionCards = () => {
    return (
        <>
            <div className="flex flex-col gap-20">
                <div className="flex justify-center items-center">
                    <span className="text-5xl font-semibold bg-gradient-to-r from-[#4E4BE4] mt-28 to-[#E862FE] bg-clip-text text-transparent text-center flex justify-center m-auto">Use AI to handle workflows in your chat platforms.</span>
                </div>
                <div className="flex flex-col gap-20">
                    <div className="flex justify-between w-full">
                        <div className="bg-[#181924] flex flex-col justify-between w-[600px] px-6 rounded-3xl h-[350px] py-12">
                            <div className="flex flex-col gap-3">
                                <h1 className="bg-gradient-to-r from-[#4E4BE4] to-[#E862FE] bg-clip-text text-transparent text-4xl">ask question</h1>
                                <span className="text-lg font-light text-gray-300">To assist with managing the development, testing, and
                                    deployment process, ask it questions or issue instructions.</span>
                            </div>
                            <div>
                                <span className="cursor-pointer bg-[#4F4CE5] px-5 py-3 rounded-3xl">
                                    COMMING SOON
                                </span>
                            </div>
                        </div>
                        <div className="bg-[#181924] flex flex-col justify-between w-[600px] px-6 rounded-3xl h-[350px] py-12">
                            <div className="flex flex-col gap-3">
                                <h1 className="bg-gradient-to-r from-[#4E4BE4] to-[#E862FE] bg-clip-text text-transparent text-4xl">execute</h1>
                                <span className="text-lg font-light text-gray-300">With a single command, you may run a series of tests or install a
                                    new version of a programme in a particular setting.

                                </span>
                            </div>
                            <div>
                                <span className="cursor-pointer bg-[#4F4CE5] px-5 py-3 rounded-3xl">
                                    COMMING SOON
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center items-center w-full">
                        <div className="bg-[#181924] px-6 rounded-3xl py-12 w-[980px]">
                            <div className="flex flex-col gap-3">
                                <h1 className="bg-gradient-to-r from-[#4E4BE4] to-[#E862FE] bg-clip-text text-transparent text-4xl font-semibold">Fix security concerns more quickly <br />using generated code <br /> recommendations</h1>
                                <span className="text-lg font-light text-gray-300">With the aid of AI, recognise any security risk and swiftly and effectively fix it.
                                    granting developers the freedom they require to protect their work frequently and early.</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div></div>
            </div>
        </>
    )
}

export default SectionCards
