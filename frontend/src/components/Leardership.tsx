import het from "../assets/Director/Het.png";
import hitesh from "../assets/Director/Hitesh.png";
import navin from "../assets/Director/Navin.png";
import samji from "../assets/Director/Samji.jpeg";
interface Director {
  id: number;
  name: string;
  designation: string;
  photo: string;
}

const Leardership = () => {
  const directors: Director[] = [
    {
      id: 1,
      name: "Samji Dholu",
      designation: "Managing Director",
      photo: samji,
    },
    {
      id: 2,
      name: "Shanti Dholu",
      designation: "Managing Director",
      photo: "/api/placeholder/300/400",
    },
    {
      id: 3,
      name: "Navin Dholu",
      designation: "Managing Director",
      photo: navin,
    },
    {
      id: 4,
      name: "Hitesh Dholu",
      designation: "Managing Director",
      photo: hitesh,
    },
    {
      id: 5,
      name: "Het Dholu",
      designation: "Managing Director",
      photo: het,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#626162] mb-6">
            Our Leadership
          </h2>
          <div className="w-24 h-1.5 bg-linear-to-r from-[#E77B2E] to-[#F9A056] mx-auto mb-8 rounded-full"></div>

          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-lg md:text-xl text-[#626162]/80 leading-relaxed font-light">
              Meet the leaders of DIMPL who guide the company with experience
              and strong values.
            </p>
          </div>
        </div>

        {/* Directors Grid - Single Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {directors.map((director) => (
            <div
              key={director.id}
              className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 h-full border border-gray-100"
            >
              {/* Card Inner Container */}
              <div className="relative h-full flex flex-col">
                {/* Photo Container - Increased Height (Aspect Ratio 3:4) */}
                <div className="relative overflow-hidden aspect-4/7 w-full">
                  <img
                    src={director.photo}
                    alt={director.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>

                  {/* Decorative Corner - Brand Orange */}
                  {/* <div className="absolute top-0 right-0 w-20 h-20 bg-linear-to-br from-[#E77B2E]/30 to-[#F9A056]/30 transform translate-x-10 -translate-y-10 rotate-45 group-hover:translate-x-8 group-hover:-translate-y-8 transition-transform duration-500"></div> */}
                </div>

                {/* Info Container */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform transition-transform duration-500">
                  <h3 className="text-xl uppercase font-bold mb-1 group-hover:text-[#E77B2E] transition-colors duration-300">
                    {director.name}
                  </h3>
                  <p className="text-sm text-gray-300 font-medium tracking-wide">
                    {director.designation}
                  </p>

                  {/* Animated Underline */}
                  <div className="mt-4 h-0.5 bg-linear-to-r from-[#E77B2E] to-[#F9A056] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </div>

                {/* Top Border Accent */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-linear-to-r from-[#E77B2E] via-[#F9A056] to-[#E77B2E] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .lg\\:grid-cols-5 {
            grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          }
        }
      `}</style>
    </section>
  );
};

export default Leardership;
