const Testimonials = () => {
  const testimonials = [
    {
      name: "Анна Волкова",
      role: "Профессиональный саксофонист",
      text: "Александр вернул к жизни мой винтажный Selmer. Думала, что инструмент безнадёжно испорчен, но мастер сделал невозможное.",
    },
    {
      name: "Михаил Петров",
      role: "Преподаватель музыки",
      text: "Обращался несколько раз с инструментами студентов. Всегда качественная работа и разумные цены.",
    },
    {
      name: "Елена Смирнова",
      role: "Участник джаз-бенда",
      text: "Срочно нужен был ремонт перед концертом. Александр взялся за работу в выходные и спас выступление!",
    },
    {
      name: "Дмитрий Козлов",
      role: "Любитель",
      text: "Купил подержанный саксофон в плачевном состоянии. После реставрации это совершенно другой инструмент!",
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-6">Отзывы</h2>
            <p className="text-xl text-gray-600">Что говорят наши клиенты</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="p-6 bg-white rounded-lg">
                <p className="text-gray-700 mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div>
                  <div className="font-medium text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <div className="grid grid-cols-3 gap-8">
              <div>
                <div className="text-2xl font-light text-gray-900 mb-1">
                  500+
                </div>
                <div className="text-sm text-gray-600">Довольных клиентов</div>
              </div>
              <div>
                <div className="text-2xl font-light text-gray-900 mb-1">
                  4.9/5
                </div>
                <div className="text-sm text-gray-600">Средний рейтинг</div>
              </div>
              <div>
                <div className="text-2xl font-light text-gray-900 mb-1">
                  99%
                </div>
                <div className="text-sm text-gray-600">Рекомендуют</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
