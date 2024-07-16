import Header from "./Header"

export default function Cities() {
  const places = [
    {
      country: 'Canada',
      city: 'Toronto',
      image: 'https://images.pexels.com/photos/1519088/pexels-photo-1519088.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      country: 'United Kingdom',
      city: 'London',
      image: 'https://images.pexels.com/photos/427679/pexels-photo-427679.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      country: 'France',
      city: 'Paris',
      image: 'https://images.pexels.com/photos/699466/pexels-photo-699466.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      country: 'Japan',
      city: 'Tokyo',
      image: 'https://images.pexels.com/photos/2341830/pexels-photo-2341830.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      country: 'Italy',
      city: 'Rome',
      image: 'https://images.pexels.com/photos/753639/pexels-photo-753639.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      country: 'Australia',
      city: 'Sydney',
      image: 'https://images.pexels.com/photos/995764/pexels-photo-995764.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      country: 'Mexico',
      city: 'Mexico City',
      image: 'https://images.pexels.com/photos/3551805/pexels-photo-3551805.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      country: 'Germany',
      city: 'Berlin',
      image: 'https://images.pexels.com/photos/1114892/pexels-photo-1114892.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];
  return (
    <div className="mt-10 pb-10 container3 text-center">
      <Header title="Explore Cities" mb={30} mt={50} subtitle="Explore top cities in the world starting from yours"/>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-7">
        {places.map((place, key) => (
          <div key={key} className="flex lg:text-start flex-col lg:flex-row text-center cursor-pointer items-center gap-3">
            <div className="h-20 w-20 shadow-md rounded-md overflow-hidden">
              <img src={`${place.image}`} className="w-full h-full object-cover" alt="" />
            </div>
            <div className="">
              <p className="font-semibold text-15 duration-300">{place.city}</p>
              <p>{place.country}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
