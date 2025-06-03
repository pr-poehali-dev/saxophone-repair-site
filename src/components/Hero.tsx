import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section
      id="home"
      className="pt-20 min-h-screen flex items-center bg-white"
    >
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          {/* Content */}
          <div className="space-y-8">
            <h1 className="text-5xl lg:text-6xl font-light text-gray-900 leading-tight">
              Ремонт саксофонов
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Профессиональное восстановление духовых инструментов. 15 лет
              опыта, гарантия качества.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3"
            >
              Записаться на ремонт
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-gray-300 text-gray-700 px-8 py-3"
            >
              Узнать стоимость
            </Button>
          </div>

          {/* Image */}
          <div className="mt-16">
            <img
              src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1200&q=80"
              alt="Саксофон"
              className="w-full max-w-3xl mx-auto h-[400px] object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
