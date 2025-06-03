import { useState } from "react";

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "Все" },
    { id: "before-after", name: "До и после" },
    { id: "workshop", name: "Мастерская" },
    { id: "instruments", name: "Инструменты" },
  ];

  const images = [
    {
      src: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=600&q=80",
      category: "before-after",
      title: "Тенор-саксофон после реставрации",
    },
    {
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
      category: "workshop",
      title: "Процесс замены подушек",
    },
    {
      src: "https://images.unsplash.com/photo-1521337581100-8ca9a73a5c00?auto=format&fit=crop&w=600&q=80",
      category: "workshop",
      title: "Рабочие инструменты",
    },
    {
      src: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=600&q=80",
      category: "instruments",
      title: "Альт-саксофон премиум класса",
    },
    {
      src: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&w=600&q=80",
      category: "before-after",
      title: "Восстановленная механика",
    },
    {
      src: "https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?auto=format&fit=crop&w=600&q=80",
      category: "workshop",
      title: "Рабочее место мастера",
    },
  ];

  const filteredImages =
    selectedCategory === "all"
      ? images
      : images.filter((img) => img.category === selectedCategory);

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-6">Галерея</h2>
            <p className="text-xl text-gray-600">Примеры наших работ</p>
          </div>

          {/* Фильтры */}
          <div className="flex justify-center gap-6 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`text-sm px-4 py-2 rounded-full transition-colors ${
                  selectedCategory === category.id
                    ? "bg-gray-900 text-white"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Галерея */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="overflow-hidden rounded-lg">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <p className="text-sm text-gray-600 mt-3">{image.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
