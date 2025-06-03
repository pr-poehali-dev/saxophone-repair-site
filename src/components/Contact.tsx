import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Contact = () => {
  const contactInfo = [
    {
      icon: "Phone",
      title: "Телефон",
      details: "+7 (495) 123-45-67",
      description: "Звоните с 9:00 до 19:00",
    },
    {
      icon: "Mail",
      title: "Email",
      details: "info@saxmaster.ru",
      description: "Ответим в течение часа",
    },
    {
      icon: "MapPin",
      title: "Адрес",
      details: "ул. Музыкальная, 12",
      description: "Москва, метро Сокольники",
    },
    {
      icon: "Clock",
      title: "Режим работы",
      details: "Пн-Пт: 9:00-19:00",
      description: "Сб: 10:00-16:00, Вс: выходной",
    },
  ];

  const socialLinks = [
    {
      icon: "MessageCircle",
      name: "WhatsApp",
      link: "https://wa.me/74951234567",
    },
    { icon: "Send", name: "Telegram", link: "https://t.me/saxmaster" },
    {
      icon: "Instagram",
      name: "Instagram",
      link: "https://instagram.com/saxmaster",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-montserrat text-4xl font-bold text-slate-800 mb-4">
            Контакты
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Свяжитесь с нами для консультации или записи на ремонт
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Контактная информация */}
          <div className="space-y-6">
            <h3 className="font-montserrat text-2xl font-bold text-slate-800 mb-6">
              Наши контакты
            </h3>

            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((item, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                        <Icon
                          name={item.icon as any}
                          size={20}
                          className="text-amber-600"
                        />
                      </div>
                      <CardTitle className="text-lg">{item.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="font-semibold text-slate-800 mb-1">
                      {item.details}
                    </p>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Социальные сети */}
            <div className="mt-8">
              <h4 className="font-montserrat text-lg font-bold text-slate-800 mb-4">
                Мы в социальных сетях
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center text-white hover:bg-amber-700 transition-colors"
                    title={social.name}
                  >
                    <Icon name={social.icon as any} size={20} />
                  </a>
                ))}
              </div>
            </div>

            {/* Быстрые действия */}
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <h4 className="font-montserrat text-lg font-bold text-slate-800 mb-4">
                Быстрая связь
              </h4>
              <div className="space-y-3">
                <Button
                  className="w-full bg-amber-600 hover:bg-amber-700"
                  size="lg"
                >
                  <Icon name="Phone" size={20} />
                  Позвонить сейчас
                </Button>
                <Button variant="outline" className="w-full" size="lg">
                  <Icon name="MessageCircle" size={20} />
                  Написать в WhatsApp
                </Button>
              </div>
            </div>
          </div>

          {/* Карта и дополнительная информация */}
          <div className="space-y-6">
            <h3 className="font-montserrat text-2xl font-bold text-slate-800 mb-6">
              Как нас найти
            </h3>

            {/* Заглушка карты */}
            <div className="bg-gray-200 rounded-2xl h-64 flex items-center justify-center">
              <div className="text-center text-gray-600">
                <Icon name="MapPin" size={48} className="mx-auto mb-2" />
                <p>Интерактивная карта</p>
                <p className="text-sm">ул. Музыкальная, 12, Москва</p>
              </div>
            </div>

            {/* Как добраться */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Icon
                    name="Navigation"
                    size={20}
                    className="text-amber-600"
                  />
                  <span>Как добраться</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-gray-700">
                  <div className="flex items-start space-x-3">
                    <Icon
                      name="Train"
                      size={16}
                      className="text-amber-600 mt-1"
                    />
                    <div>
                      <p className="font-semibold">На метро:</p>
                      <p className="text-sm">
                        Станция "Сокольники", выход №2, 3 минуты пешком
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon
                      name="Car"
                      size={16}
                      className="text-amber-600 mt-1"
                    />
                    <div>
                      <p className="font-semibold">На автомобиле:</p>
                      <p className="text-sm">
                        Бесплатная парковка во дворе дома
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon
                      name="Bus"
                      size={16}
                      className="text-amber-600 mt-1"
                    />
                    <div>
                      <p className="font-semibold">На автобусе:</p>
                      <p className="text-sm">
                        Остановка "Музыкальная улица", автобусы 15, 22, 47
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Важная информация */}
            <Card className="bg-amber-50 border-amber-200">
              <CardContent className="p-6">
                <h4 className="font-semibold text-slate-800 mb-3 flex items-center">
                  <Icon name="Info" size={20} className="text-amber-600 mr-2" />
                  Важная информация
                </h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start space-x-2">
                    <Icon
                      name="CheckCircle"
                      size={16}
                      className="text-amber-600 mt-0.5"
                    />
                    <span>Предварительная запись обязательна</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Icon
                      name="Clock"
                      size={16}
                      className="text-amber-600 mt-0.5"
                    />
                    <span>Диагностика бесплатная при ремонте</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Icon
                      name="CreditCard"
                      size={16}
                      className="text-amber-600 mt-0.5"
                    />
                    <span>Принимаем наличные и банковские карты</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
