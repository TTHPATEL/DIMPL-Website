import { useEffect } from "react";

export function LocationMap() {
  useEffect(() => {
    if (document.getElementById("simplemaps-mapdata")) return;

    const mapdata = document.createElement("script");
    mapdata.id = "simplemaps-mapdata";
    mapdata.src = "/mapdata.js";
    mapdata.async = false;

    const countrymap = document.createElement("script");
    countrymap.id = "simplemaps-countrymap";
    countrymap.src = "/countrymap.js";
    countrymap.async = false;

    document.body.appendChild(mapdata);
    document.body.appendChild(countrymap);
  }, []);

  return (
    <section
      id="location"
      className="relative min-h-screen bg-[#F6F6F6] flex flex-col py-20"
    >
      <div className="max-w-7xl mx-auto flex flex-col flex-1 w-full z-20">
        {/* HEADER */}
        <div className="text-center z-20">
          <h2 className="text-4xl md:text-5xl font-bold text-[#605F5A] mb-4">
            Our Presence Across India
          </h2>
          <div className="w-24 h-1 bg-[#E5710A] mx-auto mb-4" />
          <p className="text-[#605F5A]/80 max-w-2xl mx-auto">
            Active mining operations across India
          </p>
        </div>

        {/* MAP */}
        <div id="map" className="absolute top-0 left-0 w-[50%] h-full" />
      </div>
    </section>
  );
}
