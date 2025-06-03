import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "Все работы" },
    { id: "before-after", name: "До и после" },
    { id: "workshop", name: "Мастерская" },
    { id: "instruments", name: "Инструменты" },
  ];

  const images = [
    {
      src: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=600&q=80",
      alt: "Реставрированный саксофон",
      category: "before-after",
      title: "Тенор-саксофон после реставрации",
    },
    {
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
      alt: "Мастер за работой",
      category: "workshop",
      title: "Процесс замены подушек",
    },
    {
      src: "https://images.unsplash.com/photo-1521337581100-8ca9a73a5c00?auto=format&fit=crop&w=600&q=80",
      alt: "Инструменты мастера",
      category: "workshop",
      title: "Профессиональные инструменты",
    },
    {
      src: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=600&q=80",
      alt: "Альт-саксофон",
      category: "instruments",
      title: "Альт-саксофон премиум класса",
    },
    {
      src: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&w=600&q=80",
      alt: "Детали саксофона",
      category: "before-after",
      title: "Восстановление механики",
    },
    {
      src: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=600&q=80",
      alt: "Полированный саксофон",
      category: "before-after",
      title: "После полировки корпуса",
    },
    {
      src: "https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?auto=format&fit=crop&w=600&q=80",
      alt: "Рабочее место мастера",
      category: "workshop",
      title: "Рабочее место мастера",
    },
    {
      src: "https://images.unsplash.com/photo-1524230659092-07f99a75c013?auto=format&fit=crop&w=600&q=80",
      alt: "Сопрано-саксофон",
      category: "instruments",
      title: "Редкий сопрано-саксофон",
    },
  ];

  const filteredImages =
    selectedCategory === "all"
      ? images
      : images.filter((img) => img.category === selectedCategory);

  return (
    <section id="gallery" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-montserrat text-4xl font-bold text-slate-800 mb-4">
            Галерея работ
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Примеры наших работ по ремонту и реставрации саксофонов
          </p>
        </div>

        {/* Фильтры */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className={
                selectedCategory === category.id
                  ? "bg-amber-600 hover:bg-amber-700"
                  : ""
              }
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Галерея */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredImages.map((image, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-xl transition-shadow group cursor-pointer"
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-end">
                    <div className="p-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="font-semibold text-sm">{image.title}</h3>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Призыв к действию */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="font-montserrat text-2xl font-bold text-slate-800 mb-4">
              Хотите увидеть свой инструмент в нашей галерее?
            </h3>
            <p className="text-gray-600 mb-6">
              Доверьте ремонт профессионалам и получите результат, которым можно
              гордиться
            </p>
            <Button size="lg" className="bg-amber-600 hover:bg-amber-700">
              Записаться на ремонт
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
