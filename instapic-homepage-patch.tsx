# INSTAPIC WEBSITE PATCH

## HERO SECTION REPLACEMENT

<div className="absolute inset-0 bg-black/55 z-10" />

<div className="relative z-20 max-w-4xl px-6">
  <p className="text-[#d4af37] uppercase tracking-[0.3em] text-sm mb-4">
    Luxury Wedding Entertainment Across Scotland
  </p>

  <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight text-white drop-shadow-2xl">
    Make the room unforgettable.
  </h1>

  <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-2xl leading-relaxed">
    Photo Booths, LED Dance Floors, Light Up Letters & Wedding Packages for
    unforgettable weddings and events across Edinburgh, Glasgow and Central Scotland.
  </p>

  <div className="flex flex-wrap gap-4 mt-8">
    <a
      href="#contact"
      className="bg-[#d4af37] hover:bg-[#b8922f] text-black px-8 py-4 rounded-full font-semibold transition-all"
    >
      Get A Quote
    </a>

    <a
      href="#packages"
      className="border border-white/40 hover:border-white text-white px-8 py-4 rounded-full font-semibold transition-all"
    >
      View Packages
    </a>
  </div>
</div>


============================================================

## 8 PHOTO GALLERY SECTION REPLACEMENT

<section className="py-24 bg-[#faf7f2]">
  <div className="max-w-7xl mx-auto px-6">

    <p className="text-center uppercase tracking-[0.3em] text-sm text-[#9f8a64] mb-4">
      Venue Showcase
    </p>

    <h2 className="text-center text-5xl md:text-6xl font-serif font-bold text-[#111] leading-tight mb-16">
      Transforming Venues <br /> Across Scotland
    </h2>

    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

      {[
        "/images/glasgowletters.jpg",
        "/images/cornxmas.jpg",
        "/images/dancefloorfun.jpg",
        "/images/graduationletters.jpg",
        "/images/weddingdancefloor.jpg",
        "/images/lightupletters.jpg",
        "/images/photoBooth.jpg",
        "/images/loveletters.jpg",
      ].map((image, index) => (
        <div
          key={index}
          className="overflow-hidden rounded-[28px] shadow-xl group h-[320px]"
        >
          <img
            src={image}
            alt="Instapic Events Scotland"
            className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
          />
        </div>
      ))}

    </div>
  </div>
</section>


============================================================

Paste these directly into your existing React/Next.js component file.
