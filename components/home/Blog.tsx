import { Calendar, User, User2 } from "lucide-react";
import Header from "./Header";
import { blogs } from "./_data";

export default function Blog() {

  


  return (
    <div className="py-10">
      <Header
        title="From Our Blog"
        mb={40}
        mt={50}
        subtitle="Lorem, ipsum dolor sit amet consectetur adipisicing elit.."
      />
      <div className="container3 grid grid-cols-2 lg:grid-cols-4 gap-x-3 gap-y-7 md:gap-x-6 gap-y-10">
        {blogs.map((blog, key) => (
          <div className="" key={key}>
            <div className="h-44 sm:h-56 md:h-64 lg:h-44 rounded overflow-hidden shadow-md">
              <img src={`${blog.image}`} className="w-full h-full object-cover" alt="" />
            </div>
            <div className="flex text-xs justify-between mt-2 gap-4">
                <div className="hidden md:flex items-center gap-1">
                    <User2 className="shrink-0" size={13}/>
                    <p>{blog.title}</p>
                </div>
                <div className="flex items-center gap-1">
                    <Calendar className="shrink-0" size={13}/>
                    <p>{blog.date}</p>
                </div>
            </div>
            <p className="font-semibold mt-2 text-sm">{blog.content}</p>
            <p className="text-gray-600 mt-2 mb-2 w-full ">{blog.body.slice(0, 100)} ...</p>
            <p className="font-semibold text-blue-600 border-blue-600 w-fit cursor-pointer border-b-2">READ MORE</p>
          </div>
        ))}
      </div>
    </div>
  );
}
