import React from "react";
import Link from "next/link";

const Category = () => {

    return (
        <section className="flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center w-[95vw] lg:w-[80vw] mt-10 mb-10">
                <h1 className="text-3xl font-semibold self-start text-zinc-800">Color Palettes Category</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center items-center gap-5 mt-5">
                    {/* Pastel */}
                    <div className="flex flex-col justify-center items-center gap-3 rounded-lg bg-slate-300 overflow-hidden">
                        <div className="h-[125px] w-full flex justify-center items-center" style={{background: "#D37676"}}><h1 className="text-3xl font-semibold text-slate-100">Pastel</h1></div>
                        <div className="flex flex-col justify-center items-center gap-2 p-3">
                            <p className="text-xl font-medium text-zinc-800">Explore our collection of pastel color palettes.</p>
                            <Link href='/pastel' className='px-4 py-2 text-sm font-medium text-slate-200 bg-zinc-700 hover:bg-zinc-900 text-[18px] transition ease-in-out rounded-lg flex items-center gap-4 self-start'>View Palettes</Link>
                        </div>
                    </div>
                    {/* Vibrant */}
                    <div className="flex flex-col justify-center items-center gap-3 rounded-lg bg-slate-300 overflow-hidden">
                        <div className="h-[125px] w-full flex justify-center items-center" style={{background: "#3BCEAC"}}><h1 className="text-3xl font-semibold text-slate-100">Vibrant</h1></div>
                        <div className="flex flex-col justify-center items-center gap-2 p-3">
                            <p className="text-xl font-medium text-zinc-800">Explore our collection of vibrant color palettes.</p>
                            <Link href='/vibrant' className='px-4 py-2 text-sm font-medium text-slate-200 bg-zinc-700 hover:bg-zinc-900 text-[18px] transition ease-in-out rounded-lg flex items-center gap-4 self-start'>View Palettes</Link>
                        </div>
                    </div>
                    {/* Neutral */}
                    <div className="flex flex-col justify-center items-center gap-3 rounded-lg bg-slate-300 overflow-hidden">
                        <div className="h-[125px] w-full flex justify-center items-center" style={{background: "#6B7280"}}><h1 className="text-3xl font-semibold text-slate-100">Neutral</h1></div>
                        <div className="flex flex-col justify-center items-center gap-2 p-3">
                            <p className="text-xl font-medium text-zinc-800">Explore our collection of neutral color palettes.</p>
                            <Link href='/neutral' className='px-4 py-2 text-sm font-medium text-slate-200 bg-zinc-700 hover:bg-zinc-900 text-[18px] transition ease-in-out rounded-lg flex items-center gap-4 self-start'>View Palettes</Link>
                        </div>
                    </div>
                    {/* Earthy */}
                    <div className="flex flex-col justify-center items-center gap-3 rounded-lg bg-slate-300 overflow-hidden">
                        <div className="h-[125px] w-full flex justify-center items-center" style={{background: "#43766C"}}><h1 className="text-3xl font-semibold text-slate-100">Earthy</h1></div>
                        <div className="flex flex-col justify-center items-center gap-2 p-3">
                            <p className="text-xl font-medium text-zinc-800">Explore our collection of earthy color palettes.</p>
                            <Link href='/earthy' className='px-4 py-2 text-sm font-medium text-slate-200 bg-zinc-700 hover:bg-zinc-900 text-[18px] transition ease-in-out rounded-lg flex items-center gap-4 self-start'>View Palettes</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Category;