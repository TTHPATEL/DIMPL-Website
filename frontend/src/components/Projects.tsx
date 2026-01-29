import { MapPin, Building2, Calendar } from "lucide-react";

export function Projects() {
  const projects = [
    {
      client: "Coal India Limited",
      location: "Talabira, Odisha",
      type: "MDO - Overburden Removal",
      capacity: "12 Million CuM/Year",
      image:
        "https://images.unsplash.com/photo-1693774557231-e2be6c3594e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2FsJTIwbWluaW5nJTIwb3BlcmF0aW9uc3xlbnwxfHx8fDE3NjkzMzQxNzV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      client: "Singareni Collieries Company Limited",
      location: "PK OC 2, Telangana",
      type: "HEMM Operations",
      capacity: "4 Million MT Coal/Year",
      image:
        "https://images.unsplash.com/photo-1758448182583-8871f8eb43c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwY29uc3RydWN0aW9uJTIwbWFjaGluZXJ5fGVufDF8fHx8MTc2OTM2MDYxMXww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      client: "Gujarat Mineral Development Corporation",
      location: "Tadkeshwar, Gujarat",
      type: "Lignite Mining Operations",
      capacity: "2 Million MT/Year",
      image:
        "https://images.unsplash.com/photo-1621470777049-006c9b58119a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWF2eSUyMG1hY2hpbmVyeSUyMGVxdWlwbWVudHxlbnwxfHx8fDE3NjkzNjA2MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      client: "Private Power Company",
      location: "Parsa Kente, Chhattisgarh",
      type: "MDO - Coal & OB",
      capacity: "8 Million CuM/Year",
      image:
        "https://images.unsplash.com/photo-1699083045149-359a38fe68ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbmclMjBpbmZyYXN0cnVjdHVyZSUyMGFlcmlhbHxlbnwxfHx8fDE3NjkzNjA2MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#605F5A] mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-[#E5710A] mx-auto mb-6"></div>
          <p className="text-lg text-[#605F5A]/80 max-w-3xl mx-auto">
            Executing large-scale mining operations across India for leading
            PSUs and private companies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.client}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#605F5A] to-transparent opacity-60"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-2 text-white mb-2">
                    <Building2 size={20} />
                    <span className="font-semibold">{project.client}</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-start gap-2 mb-3">
                  <MapPin
                    className="text-[#E5710A] flex-shrink-0 mt-1"
                    size={20}
                  />
                  <div>
                    <div className="font-semibold text-[#605F5A]">
                      {project.location}
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <div className="text-sm text-[#605F5A]/60 mb-1">
                    Project Type
                  </div>
                  <div className="text-[#605F5A] font-medium">
                    {project.type}
                  </div>
                </div>
                <div className="pt-4 border-t border-gray-200">
                  <div className="flex items-center gap-2 text-[#E5710A] font-semibold">
                    <Calendar size={18} />
                    <span>Capacity: {project.capacity}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-[#605F5A] text-white hover:bg-[#E5710A] transition-colors"
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
}
