import React from 'react'
import { GoDatabase } from 'react-icons/go';
import SectionCards from './SectionCards';
import Support from './Suppoert';

const Landing = () => {
    return (
        <div className='h-full w-full bg-black px-20 container'>
            <div className="flex items-center justify-between px-8 bg-black border-b border-[#E4E4E4]">
                <img src={'https://s3-alpha-sig.figma.com/img/53d4/547a/704a651de983ad2433717f3165fc0e4d?Expires=1691366400&Signature=Xfn-eW~l6-Qg~c0Yv2ewjIz34Nq8lI~XOg4ieEsfVGlij6oVlD~drJYw57XXAPiRS0QOt7YyOVA-GA4zWTgCUJnFWVOwL8ZUkFCbgxPsbPhpSY6HiSMm7dcyppYPDX8yvwg4~j6NbVd6iv-5U3dqUUwI2vWb0XCkQCthogo7zn5ZanGgQEENY0SfY3z0Ymz6LUVpipXZ99zJQhdmuuaUoDyIIgNhxmcXEdFg1D1KEGwdU0-Yuwg~TbBzyzQD8jWGNTHFS5cbu7N79Zhrai22e06a32a2rU7-LL28v~oS-hMXZhjj-mOblZEfw-RKeaub1ccdKV1VeBvXEpcBwklh~w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'}
                    alt='logo'
                    className='h-[100px] w-[100px]' />
                <div className='rounded-full w-[176px] h-[70px] text-white border border-white flex items-center justify-center text-[25px] '>
                    XEROCODEE
                </div>
            </div>
            <div className='text-white w-full h-full flex flex-col justify-center gap-2 px-8'>
                <div className="justify-center  flex font-sans text-[50px] bg-gradient-to-r from-[#FF3BFF] from-0% via-[#ECBFBF] via-38.02% to-[#5C24FF] to-100% bg-clip-text text-transparent ">
                    Integrate AI Throughout Your Workflow
                </div>
                <div className="flex justify-center text-[54px]">
                    Code Doctor
                </div>
                <div className='flex justify-center text-[24px] w-[40%] text-center m-auto'>
                    Make processes where AI collaborates with your team throughout the whole development process.
                </div>
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
                <div className='h-full w-full relative'>
                    <img src='https://s3-alpha-sig.figma.com/img/456b/24b9/32bc57ac8f15e471325f9bbfae17cd55?Expires=1691366400&Signature=iJs-c6FtFwKMpdKggKndq97vLxBS1gMqEZ1AX7XAUyJufJ2F7GAn~cl0hnWugrWKQxx55LkHXl4UkJIhIBXqtAJfOta00p-oeSwuuPjMJ2w5t3yjhAeZ24BQMvJp9518OMOciUGLIFbk52BRmPtZuxcOjHUviMPKAraq~6JzHZBg3GyKbXsRxJG06rUZSbbP03EtPbhKP9Ad2A-K3uf4TJcB3~ncrhEVsWlP7KX7X8dM5in857NLqwGWBICjTnEQ8~--VUxXWrLzcTQaFL0xP10Cl76sBBvFE~7TIMlpAQT6rDAN52Qcl7CPaqTEthw7eRYtKsiXf~i~IVqnGxvWhw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
                        alt='background'
                        className=''
                    />
                    <svg class="w-96 h-96 opacity-20 absolute left-12 -bottom-24">
                        <defs>
                            <radialGradient id="gradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                                <stop offset="0%" stop-color="rgba(133, 147, 232, 1)" />
                                <stop offset="100%" stop-color="rgba(249, 168, 212, 0)" />
                            </radialGradient>
                        </defs>

                        <circle cx="50%" cy="50%" r="50%" fill="url(#gradient)" />
                    </svg>
                    <svg class="w-96 h-96 opacity-20 absolute left-96 -bottom-8">
                        <defs>
                            <radialGradient id="gradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                                <stop offset="0%" stop-color="rgba(93, 110, 243, 1)" />
                                <stop offset="100%" stop-color="rgba(249, 168, 212, 0)" />
                            </radialGradient>
                        </defs>

                        <circle cx="50%" cy="50%" r="50%" fill="url(#gradient)" />
                    </svg>
                    <svg class="w-96 h-96 opacity-20 absolute right-10 -bottom-28">
                        <defs>
                            <radialGradient id="gradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                                <stop offset="0%" stop-color="rgba(252, 79, 246, 1)" />
                                <stop offset="100%" stop-color="rgba(249, 168, 212, 0)" />
                            </radialGradient>
                        </defs>

                        <circle cx="50%" cy="50%" r="50%" fill="url(#gradient)" />
                    </svg>
                </div>

                <div className="bg-gradient-to-r from-[#4E4BE4] mt-28 to-[#E862FE] bg-clip-text text-transparent text-[36px] flex justify-center text-center w-[60%] m-auto">
                    Boost the speed of your development and test cycles.
                </div>
                <div className='text-center m-auto w-[60%] my-2 text-lg'>
                    With AI-driven test case generation and code analysis, problems may be found and fixed more quickly.
                </div>
                <div className='flex'>
                    {/* Motion frame */}
                    <div className='flex flex-col p-[32px]  w-full h-full'>
                        <div className='bg-[#181924] p-[32px] w-96 rounded-xl'>
                            <div className='flex border-b pb-4 gap-5 border-gray-600'>
                                <div className='h-10 w-10'>
                                    <GoDatabase className='w-full font-thin h-full text-[#E862FE]' />
                                </div>
                                <span>CI/CD Pipeline Generate</span>
                            </div>
                            <div className='flex pt-4 gap-5'>
                                <div className='h-10 w-10'>
                                    <GoDatabase className='w-full h-full text-[#7534FF]' />
                                </div>
                                <span>Build / Deployment</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        Motion
                    </div>
                    <div className='flex flex-col p-[32px]  w-full h-full'>
                        <div className='bg-[#181924] p-[32px] w-96 rounded-xl'>
                            <div className='flex border-b pb-4 gap-5 border-gray-600'>
                                <div className='h-10 w-10'>
                                    <GoDatabase className='w-full font-thin h-full text-[#E862FE]' />
                                </div>
                                <span>Generate Test Cases </span>
                            </div>
                            <div className='flex pt-4 gap-5'>
                                <div className='h-10 w-10'>
                                    <GoDatabase className='w-full h-full text-[#7534FF]' />
                                </div>
                                <span>Code Analysis</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <SectionCards />
                </div>
                <div>
                    <Support />
                </div>
                <div className='w-full flex justify-center items-center'>
                    <span className='text-center'>Copyright © 2023 <span className='font-bold text-xl'>EXOCODE TECHNOLOGIES</span> | All rights reserved</span>
                </div>
            </div>
        </div>
    )
}

export default Landing;
