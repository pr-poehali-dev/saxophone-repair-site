const Services = () => {
  const services = [
    {
      title: "Общий ремонт",
      description: "Диагностика, чистка, настройка механики",
      price: "от 3 000₽",
    },
    {
      title: "Замена подушек",
      description: "Установка новых подушек из качественных материалов",
      price: "от 12 000₽",
    },
    {
      title: "Реставрация корпуса",
      description: "Полировка и восстановление покрытия",
      price: "от 15 000₽",
    },
    {
      title: "Ремонт механики",
      description: "Восстановление клапанов и рычагов",
      price: "от 5 000₽",
    },
    {
      title: "Настройка звука",
      description: "Профессиональная настройка интонации",
      price: "от 2 500₽",
    },
    {
      title: "Срочный ремонт",
      description: "Экстренное восстановление за 24 часа",
      price: "от 5 000₽",
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-6">Услуги</h2>
            <p className="text-xl text-gray-600">
              Полный спектр услуг по ремонту саксофонов
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-6 border border-gray-100 rounded-lg hover:shadow-sm transition-shadow"
              >
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {service.description}
                </p>
                <div className="text-sm text-gray-500">{service.price}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
