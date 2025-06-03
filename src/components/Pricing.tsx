import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Pricing = () => {
  const services = [
    {
      category: "Базовое обслуживание",
      items: [
        {
          name: "Диагностика и консультация",
          price: "Бесплатно",
          description: "Осмотр инструмента и оценка состояния",
        },
        {
          name: "Общая чистка и смазка",
          price: "3 000₽",
          description: "Полная чистка корпуса и механизмов",
        },
        {
          name: "Настройка клапанов",
          price: "2 500₽",
          description: "Регулировка всех клапанов и механизмов",
        },
        {
          name: "Замена пробки",
          price: "800₽",
          description: "Установка новой пробки из натуральной кожи",
        },
      ],
    },
    {
      category: "Ремонт механики",
      items: [
        {
          name: "Замена пружин (1 шт)",
          price: "300₽",
          description: "Установка новой пружины",
        },
        {
          name: "Ремонт клапана",
          price: "1 500₽",
          description: "Восстановление одного клапана",
        },
        {
          name: "Замена подушки (1 шт)",
          price: "500₽",
          description: "Установка новой подушки",
        },
        {
          name: "Полная замена подушек",
          price: "12 000₽",
          description: "25 подушек из качественного материала",
          popular: true,
        },
      ],
    },
    {
      category: "Реставрация",
      items: [
        {
          name: "Полировка корпуса",
          price: "5 000₽",
          description: "Восстановление блеска латуни",
        },
        {
          name: "Снятие и нанесение лака",
          price: "15 000₽",
          description: "Полное обновление лакового покрытия",
        },
        {
          name: "Пайка трещин",
          price: "2 000₽",
          description: "Восстановление целостности корпуса",
        },
        {
          name: "Капитальный ремонт",
          price: "от 25 000₽",
          description: "Полная реставрация инструмента",
          popular: true,
        },
      ],
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-montserrat text-4xl font-bold text-slate-800 mb-4">
            Прайс-лист
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Честные цены на все виды ремонта. Точная стоимость после диагностики
          </p>
        </div>

        <div className="space-y-12">
          {services.map((category, index) => (
            <div key={index}>
              <h3 className="font-montserrat text-2xl font-bold text-slate-800 mb-6 text-center">
                {category.category}
              </h3>

              <div className="grid md:grid-cols-2 gap-6">
                {category.items.map((item, idx) => (
                  <Card
                    key={idx}
                    className={`relative ${item.popular ? "ring-2 ring-amber-500" : ""} hover:shadow-lg transition-shadow`}
                  >
                    {item.popular && (
                      <Badge className="absolute -top-3 left-4 bg-amber-600">
                        Популярно
                      </Badge>
                    )}
                    <CardHeader className="pb-3">
                      <div className="flex justify-between items-start">
                        <CardTitle className="font-montserrat text-lg text-slate-800 flex-1">
                          {item.name}
                        </CardTitle>
                        <div className="text-2xl font-bold text-amber-600 ml-4">
                          {item.price}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-gray-600 text-sm">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Дополнительная информация */}
        <div className="mt-16 bg-slate-50 rounded-2xl p-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-montserrat text-2xl font-bold text-slate-800 mb-4">
                Условия работы
              </h3>
              <div className="space-y-3 text-gray-700">
                <div className="flex items-center space-x-3">
                  <Icon
                    name="CheckCircle"
                    size={20}
                    className="text-amber-600"
                  />
                  <span>Гарантия на все виды работ — 12 месяцев</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Clock" size={20} className="text-amber-600" />
                  <span>Средний срок ремонта — 5-7 рабочих дней</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon
                    name="CreditCard"
                    size={20}
                    className="text-amber-600"
                  />
                  <span>Оплата наличными или картой</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Phone" size={20} className="text-amber-600" />
                  <span>Бесплатная консультация по телефону</span>
                </div>
              </div>
            </div>

            <div className="text-center">
              <h4 className="font-montserrat text-xl font-bold text-slate-800 mb-4">
                Нужна консультация?
              </h4>
              <p className="text-gray-600 mb-6">
                Свяжитесь с нами для точной оценки стоимости ремонта
              </p>
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700">
                <Icon name="Phone" size={20} />
                Получить расчёт
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
