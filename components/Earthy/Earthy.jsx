import { earthyColors } from "@/data/data";

const Earthy = () => {
    return (
        <section className="flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center w-[95vw] lg:w-[80vw] mt-10 mb-10">
                <h1 className="text-3xl font-semibold self-start text-zinc-800">Earthy Color Palettes</h1>
                <div className="mt-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 justify-center items-center w-full">
                    {earthyColors.map((color, index) => (
                        <div key={index} className="flex flex-col justify-center items-center p-2 w-full">
                            <div className="h-[100px] w-full bg-gray-200 rounded-lg" style={{ backgroundColor: color }}></div>
                            <p className="font-medium text-[15px] mt-2 text-zinc-800">{color}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Earthy;