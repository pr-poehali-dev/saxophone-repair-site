import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Services = () => {
  const services = [
    {
      icon: "Wrench",
      title: "Общий ремонт",
      description: "Диагностика, чистка, смазка, регулировка механики",
      features: [
        "Полная диагностика",
        "Чистка корпуса",
        "Смазка механизмов",
        "Настройка клапанов",
      ],
    },
    {
      icon: "CircleDollarSign",
      title: "Замена подушек",
      description: "Установка новых подушек из качественных материалов",
      features: [
        "Кожаные подушки",
        "Синтетические подушки",
        "Подушки премиум класса",
        "Точная настройка",
      ],
    },
    {
      icon: "Zap",
      title: "Реставрация корпуса",
      description: "Восстановление лакового покрытия и полировка",
      features: [
        "Снятие старого лака",
        "Полировка латуни",
        "Нанесение нового покрытия",
        "Защитное покрытие",
      ],
    },
    {
      icon: "Settings",
      title: "Ремонт механики",
      description: "Восстановление сложных механических узлов",
      features: [
        "Замена пружин",
        "Ремонт рычагов",
        "Настройка шарниров",
        "Балансировка клапанов",
      ],
    },
    {
      icon: "Volume2",
      title: "Настройка звука",
      description: "Профессиональная настройка интонации и тембра",
      features: [
        "Настройка мундштука",
        "Регулировка резонанса",
        "Балансировка октав",
        "Тест звучания",
      ],
    },
    {
      icon: "Gauge",
      title: "Срочный ремонт",
      description: "Экстренное восстановление перед концертом",
      features: [
        "Ремонт за 24 часа",
        "Временная настройка",
        "Экстренная диагностика",
        "Приоритетное обслуживание",
      ],
    },
  ];

  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-montserrat text-4xl font-bold text-slate-800 mb-4">
            Наши услуги
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Полный спектр услуг по ремонту и обслуживанию саксофонов всех типов
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-shadow border-0 shadow-md"
            >
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon
                    name={service.icon as any}
                    size={32}
                    className="text-amber-600"
                  />
                </div>
                <CardTitle className="font-montserrat text-xl text-slate-800">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-gray-600 mb-4 text-center">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-sm text-gray-700"
                    >
                      <Icon
                        name="Check"
                        size={16}
                        className="text-amber-600 mr-2 flex-shrink-0"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Не нашли нужную услугу? Свяжитесь с нами для консультации
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="flex items-center space-x-2 text-gray-700">
              <Icon name="Phone" size={20} className="text-amber-600" />
              <span>+7 (495) 123-45-67</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-700">
              <Icon name="Mail" size={20} className="text-amber-600" />
              <span>info@saxmaster.ru</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
