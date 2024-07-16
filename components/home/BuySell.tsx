export default function BuySell() {
    const places = [
        {
            state: 'California',
            city: 'Los Angeles',
            image: ''
        }
    ]
    
  return (
    <div className="buysell mt-16 text-white py-20">
        <div className="container2 grid grid-cols-1 gap-10 md:grid-cols-2">
            <div className="flex flex-col items-center md:items-start text-center md:text-start md:justify-center">
                <p className="text-2xl font-semibold">We Help You Buy or Sell</p>
                <p className="text-2xl font-semibold mb-5">Your Property Quickly</p>
                <p className="w-60">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea veritatis perferendis non facere tempore enim excepturi recusandae voluptates est quos.</p>
            </div>
            <div className="flex justify-center md:justify-end items-center">
                <div className="w-80 space-y-5 rounded-md text-orange-300 bg-white/20 backdrop-blur-3xl shadow-md shadow-black p-5">
                    <div className="">
                        <p className="font-semibold text-xs">NAME</p>
                        <input className="h-9 placeholder:text-white border-gray-300 bg-transparent w-full outline-none border-b-2" placeholder="John Doe"/>
                    </div>
                    <div className="">
                        <p className="font-semibold text-xs">PHONE NUMBER</p>
                        <input className="h-9 placeholder:text-white border-gray-300 bg-transparent w-full outline-none border-b-2" placeholder="123 456 7890"/>
                    </div>
                    <div className="">
                        <p className="font-semibold text-xs">EMAIL</p>
                        <input className="h-9 placeholder:text-white border-gray-300 bg-transparent w-full outline-none border-b-2" placeholder="johndoe@email.com"/>
                    </div>
                    <div className="">
                        <p className="font-semibold text-xs">YOUR MESSAGE</p>
                        <textarea className="h-16 placeholder:text-white border-gray-300 mt-2 bg-transparent w-full outline-none border-b-2" placeholder="Message">
                        </textarea>
                    </div>
                    <button className="w-full py-4 shadow-md rounded duration-300 active:scale-95 bg-orange-500 text-white font-semibold cursor-pointer">SEND MESSAGE</button>
                </div>
            </div>
        </div>
    </div>
  )
}
