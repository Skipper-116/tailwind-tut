function PseudoElements() {
    return (
        <div className=" flex flex-col items-center">
            <p>Welcome to PseudoElements</p>
            <small>We are going to have fun</small>
            <label className="block mt-9">
                <span className=" after:content-['*'] after:ml-0.5 after:text-red-500 text-sm font-medium text-slate-700">Email</span>
                <input type={"email"} name="email" className="mt-1 px-3 py-2 bg-white border shadow border-slate-300 placeholder-slate-400 rounded placeholder:italic" placeholder="you@example.com" />
            </label>
            <blockquote className="text-2xl font-semibold italic text-center text-slate-900 mt-9">
                When you look
                <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block">
                    <span className="relative text-white">annoyed</span>
                </span>
                all the time, people think that you're busy.
            </blockquote>
            <label className="block mt-9">
                <span className=" font-medium text-slate-600 italic">Choose profile photo</span>
                <input type="file" className=" block w-full text-sm text-slate-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:bg-pink-400 file:text-pink-700 hover:file:bg-pink-100" />
            </label>
            <div className="mt-9 selection:bg-fuchsia-900 selection:text-white">
                <p className="first-letter:float-left first-letter:text-8xl first-letter:font-bold">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
        </div>
    )
}

export default PseudoElements;