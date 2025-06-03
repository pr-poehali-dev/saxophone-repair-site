import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section
      id="home"
      className="pt-20 min-h-screen flex items-center bg-gradient-to-br from-slate-50 to-amber-50"
    >
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="font-montserrat text-5xl lg:text-6xl font-bold text-slate-800 leading-tight">
                Профессиональный
                <span className="text-amber-600 block">ремонт саксофонов</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Более 15 лет опыта в восстановлении и настройке духовых
                инструментов. Возвращаем вашему саксофону идеальное звучание.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-gray-700">
                <Icon name="CheckCircle" size={20} className="text-amber-600" />
                <span>Гарантия качества 12 месяцев</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-700">
                <Icon name="Clock" size={20} className="text-amber-600" />
                <span>Срочный ремонт от 1 дня</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-700">
                <Icon name="Award" size={20} className="text-amber-600" />
                <span>Сертифицированный мастер</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700">
                <Icon name="Phone" size={20} />
                Записаться на ремонт
              </Button>
              <Button size="lg" variant="outline">
                <Icon name="Calculator" size={20} />
                Узнать стоимость
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=800&q=80"
                alt="Саксофон в мастерской"
                className="w-full h-[600px] object-cover rounded-2xl shadow-2xl"
              />
            </div>
            {/* Декоративные элементы */}
            <div className="absolute -top-4 -left-4 w-72 h-72 bg-amber-200 rounded-full opacity-20 -z-10"></div>
            <div className="absolute -bottom-4 -right-4 w-48 h-48 bg-slate-200 rounded-full opacity-30 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
