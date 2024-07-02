import React from 'react'

const Footer = () => {
    return (
        <footer className='flex justify-center items-center w-full bg-slate-300'>
            <div className='flex flex-col justify-center items-center lg:w-[80vw] py-2 w-full'>
                <h1 className='text-zinc-800 font-medium text-center'>Developed By <a target='blank' href="http://priyanshuchahar.vercel.app" className='underline'>Priyanshu Chahar</a></h1>
            </div>
        </footer>
    )
}

export default Footer;