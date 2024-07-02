import React from 'react';
import Link from 'next/link';
import { FaArrowRightLong } from "react-icons/fa6";

const Navbar = () => {
    return (
        <section className='flex flex-col justify-center items-center bg-slate-300'>
            <div className='flex justify-between items-center w-[95vw] lg:w-[80vw] py-3'>
                <Link href="/" className='text-3xl font-semibold text-zinc-800 self-start'>Color Palette 🎨</Link>
            </div>
        </section>
    );
};

export default Navbar;