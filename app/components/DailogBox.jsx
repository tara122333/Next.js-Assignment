import { Dialog, Transition } from '@headlessui/react'
import axios from 'axios';
import { Fragment, useState } from 'react'

export default function DailogBox({ isOpen, setIsOpen, email }) {


    const [fullname, setFullname] = useState('');

    console.log(email);
    console.log(fullname);
    const AddUserData = async() =>{
        try {
            const userData = await axios.post("https://assignment-my6n.onrender.com/create",{email, fullname});
            console.log(userData);
            if(userData.status === 202){
                closeModal();
                alert("User Data Added Success !!");
                setFullname('');
            }        
            else{
                alert("User Data not added");
            }    
        } catch (error) {
            console.log(error)
        }
        
    }
    function closeModal() {
        setIsOpen(false)
    }

    return (
        <>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white px-4 py-12 text-left align-middle shadow-xl transition-all">
                                    <div className='flex w-full items-center justify-between rounded-full border-2 pl-4'>
                                        <input type='text'
                                            placeholder='Your Name'
                                            className='placeholder-gray-500  px-2 outline-none bg-transparent'
                                            value={fullname}
                                            onChange={(e) => setFullname(e.target.value)}
                                        />
                                        <div className='border py-2 text-sm rounded-full px-4 bg-blue-700 text-white font-bold cursor-pointer' onClick={AddUserData}>Submit</div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
