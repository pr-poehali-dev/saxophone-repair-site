const Contact = () => {
  const contactInfo = [
    { label: "Телефон", value: "+7 (495) 123-45-67" },
    { label: "Email", value: "info@saxmaster.ru" },
    { label: "Адрес", value: "ул. Музыкальная, 12, Москва" },
    { label: "Время работы", value: "Пн-Пт: 9:00-19:00, Сб: 10:00-16:00" },
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-6">Контакты</h2>
            <p className="text-xl text-gray-600">
              Свяжитесь с нами для консультации
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Контактная информация */}
            <div className="space-y-8">
              {contactInfo.map((item, index) => (
                <div key={index} className="border-b border-gray-100 pb-4">
                  <div className="text-sm text-gray-500 mb-1">{item.label}</div>
                  <div className="text-gray-900">{item.value}</div>
                </div>
              ))}
            </div>

            {/* Карта */}
            <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <div className="text-4xl mb-2">📍</div>
                <p>Карта</p>
                <p className="text-sm">ул. Музыкальная, 12</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-16 p-8 bg-gray-50 rounded-lg">
            <p className="text-gray-600 mb-4">
              Диагностика бесплатная при ремонте
            </p>
            <p className="text-sm text-gray-500">
              Предварительная запись обязательна
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
