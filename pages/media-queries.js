function MediaQueries() {
    return (
        <div className="flex flex-col items-center">
            <h1 className=" text-slate-700">Responsive Breakpoints</h1>
            <div className=" sm:bg-green-600 md:bg-yellow-400 lg:bg-purple-600 xl:bg-red-500 text-white mt-6 bg-blue-500">
                <p>Welcome to Pseudo Elements</p>
            </div>
            <h1 className=" text-slate-800 mt-4 ">Prefers color scheme</h1>
            <div className="bg-white dark:bg-slate-900 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl mt-4">
                <div>
                    <span className="inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg">
                        <p className="h-6 w-6 text-white">Icon</p>
                    </span>
                </div>
                <h3 className="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">Writes Upside-Down</h3>
                <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
                    The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.
                </p>
            </div>
        </div>
    )
}

export default MediaQueries;