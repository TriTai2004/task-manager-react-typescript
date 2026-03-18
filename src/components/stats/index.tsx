
const Stats = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-1 gap-4">
            <div className=" p-4 rounded-xl text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 
                            hover:bg-gradient-to-br text-center">
                <p >Total</p>
                <p className="text-2xl font-bold">10</p>
            </div>
            <div className="p-4 rounded-xl text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 
                hover:bg-gradient-to-br text-center">
                <p>Done</p>
                <p className="text-2xl font-bold">5</p>
            </div>
       
            <div className=" p-4 rounded-xl text-center text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 
                hover:bg-gradient-to-br">
                <p>Overdue</p>
                <p className="text-2xl font-bold">2</p>
            </div>

        </div>
    )
}

export default Stats;