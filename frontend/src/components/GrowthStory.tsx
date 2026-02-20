import growthStoryImg from "../assets/Extra/GrowthStory.png";
function GrowthStory() {
  return (
    <section>
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#605F5A] mb-3">
            Growth Story
          </h2>
          <div className="w-24 h-1.5 bg-linear-to-r from-[#E77B2E] to-[#F9A056] mx-auto mb-8 rounded-full"></div>

          <p className="text-[#605F5A]/70 text-lg max-w-2xl mx-auto">
            Who we are and what we do.
          </p>
        </div>
        <img
          src={growthStoryImg}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}

export default GrowthStory;
