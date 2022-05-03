import { list } from "postcss";

function PseudoClass() {
    const people = [{ name: 'Roy Chanunkha', email: 'lol@email.com', id: 1 }, { name: 'Davie Chiwaya', email: 'lol@email.com', id: 2 }, { name: 'Pacharo Phillipoh', email: 'lol@email.com', id: 3 }, { name: 'Edward Nhlane', email: 'lol@email.com', id: 4 }]
    return (
        <div className=" text-center py-4">
            <button className=" bg-violet-500 hover:bg-violet-600 px-4 py-2 rounded-xl mb-2">Hover Pseudo Class</button>
            <br />
            <button className=" bg-violet-500 active:bg-violet-700 px-4 py-2 rounded-xl mb-2">Active Pseudo Class</button>
            <br />
            <button className=" bg-violet-500 focus:outline-none focus:ring focus:ring-violet-900 px-4 py-2 rounded-xl mb-2">Active Pseudo Class</button>
            <br />
            <ul className=" p-6 divide-y divide-slate-200 focus-within:bg-gray-400 ">
                {
                    people.map(person => (
                        <li key={person.id} className=" flex py-4 first:pt-0 first:bg-blue-500 last:pb-0">
                            <div className="ml-3 overflow-hidden">
                                <p className=" text-sm font-medium text-slate-900">{person.name}</p>
                                <p className=" text-sm text-slate-500 truncate">{person.email}</p>
                            </div>
                        </li>
                    ))
                }
            </ul>
            <label className="block">
                <span className=" text-slate-500 font-medium">Email</span>
                <input className=" peer required:outline-none required:ring required:ring-red-500 valid:outline-none valid:ring valid:ring-green-500 py-4 px-2 rounded mx-0 w-full invalid:outline-none invalid:ring invalid:ring-yellow-500" required type="email" id="name" placeholder="Enter your name e.g John Done"></input>
                <span className="mt-2 invisible peer-invalid:visible bg-yellow-500 text-sm">Please enter a valid email address</span>
            </label>
            <a href="#" class="group block max-w-xs mx-auto rounded-lg p-6 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-sky-500 hover:ring-sky-500">
                <div class="flex items-center space-x-3">
                    <p class="h-6 w-6 text-slate-900 group-hover:text-slate-50" fill="none" viewBox="0 0 24 24">Icon</p>
                    <h3 class="text-slate-900 group-hover:text-white text-sm font-semibold">New project</h3>
                </div>
                <p class="text-slate-500 group-hover:text-white text-sm">Create a new project from a variety of starting templates.</p>
            </a>
        </div>
    )
}

export default PseudoClass;