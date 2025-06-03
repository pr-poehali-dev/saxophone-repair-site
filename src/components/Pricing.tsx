const Pricing = () => {
  const pricingData = [
    {
      category: "Базовые услуги",
      items: [
        { name: "Диагностика", price: "Бесплатно" },
        { name: "Общая чистка", price: "3 000₽" },
        { name: "Настройка клапанов", price: "2 500₽" },
        { name: "Замена пробки", price: "800₽" },
      ],
    },
    {
      category: "Ремонт механики",
      items: [
        { name: "Замена пружины", price: "300₽" },
        { name: "Ремонт клапана", price: "1 500₽" },
        { name: "Замена подушки", price: "500₽" },
        { name: "Полная замена подушек", price: "12 000₽" },
      ],
    },
    {
      category: "Реставрация",
      items: [
        { name: "Полировка корпуса", price: "5 000₽" },
        { name: "Обновление лака", price: "15 000₽" },
        { name: "Пайка трещин", price: "2 000₽" },
        { name: "Капитальный ремонт", price: "от 25 000₽" },
      ],
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-6">Цены</h2>
            <p className="text-xl text-gray-600">
              Прозрачные цены на все виды работ
            </p>
          </div>

          <div className="space-y-12">
            {pricingData.map((category, index) => (
              <div key={index}>
                <h3 className="text-xl font-medium text-gray-900 mb-6 text-center">
                  {category.category}
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {category.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex justify-between items-center p-4 bg-white rounded-lg"
                    >
                      <span className="text-gray-700">{item.name}</span>
                      <span className="font-medium text-gray-900">
                        {item.price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16 p-8 bg-white rounded-lg">
            <p className="text-gray-600 mb-4">
              Гарантия на все работы — 12 месяцев
            </p>
            <p className="text-sm text-gray-500">
              Точная стоимость определяется после диагностики
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
