function AttributSelector(){
    return (
        <div className="flex flex-col px-6 py-4">
            <h1 className=" mb-2 text-center">RTL & LTR</h1>
            <p className=" ltr:mr-3" dir="ltr"> Welcome to left to right</p>
            <p className=" rtl:ml-3" dir="rtl"> Welcome to right to left</p>
        </div>
    )
}

export default AttributSelector;