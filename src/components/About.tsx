import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const About = () => {
  const stats = [
    { number: "15+", label: "лет опыта" },
    { number: "1000+", label: "отремонтированных инструментов" },
    { number: "500+", label: "довольных клиентов" },
    { number: "99%", label: "успешных ремонтов" },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-montserrat text-4xl font-bold text-slate-800 mb-4">
            О нашей мастерской
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Профессиональный ремонт и настройка саксофонов с гарантией качества
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="font-montserrat text-2xl font-bold text-slate-800">
              Александр Петров — Мастер-реставратор
            </h3>

            <div className="space-y-4 text-gray-700">
              <p>
                Более 15 лет занимаюсь профессиональным ремонтом и реставрацией
                саксофонов. Прошел обучение в Европе у ведущих мастеров по
                ремонту духовых инструментов.
              </p>
              <p>
                В моей мастерской используется современное оборудование и
                оригинальные запчасти от ведущих производителей. Каждый
                инструмент получает индивидуальный подход.
              </p>
              <p>
                Работаю с инструментами всех ценовых категорий — от студенческих
                до профессиональных саксофонов стоимостью свыше 1 млн рублей.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-2">
                <Icon
                  name="GraduationCap"
                  size={20}
                  className="text-amber-600"
                />
                <span className="text-sm">Сертифицированный мастер</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Globe" size={20} className="text-amber-600" />
                <span className="text-sm">Обучение в Европе</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Settings" size={20} className="text-amber-600" />
                <span className="text-sm">Современное оборудование</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Shield" size={20} className="text-amber-600" />
                <span className="text-sm">Гарантия качества</span>
              </div>
            </div>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80"
              alt="Мастер за работой"
              className="w-full h-96 object-cover rounded-2xl shadow-lg"
            />
          </div>
        </div>

        {/* Статистика */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center p-6 border-amber-100">
              <CardContent className="p-0">
                <div className="text-3xl font-bold text-amber-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
