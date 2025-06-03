import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Анна Волкова",
      role: "Профессиональный саксофонист",
      rating: 5,
      text: "Александр вернул к жизни мой винтажный Selmer Mark VI 1965 года. Думала, что инструмент безнадёжно испорчен, но мастер сделал невозможное. Теперь саксофон звучит как новый!",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616c15c12b1?auto=format&fit=crop&w=150&q=80",
    },
    {
      name: "Михаил Петров",
      role: "Преподаватель музыки",
      rating: 5,
      text: "Обращался уже несколько раз с инструментами студентов. Всегда качественная работа, разумные цены и быстрые сроки. Особенно радует, что мастер объясняет, что именно делал.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    },
    {
      name: "Елена Смирнова",
      role: "Участник джаз-бенда",
      rating: 5,
      text: "Срочно нужен был ремонт перед важным концертом. Александр взялся за работу в выходные и буквально спас выступление! Профессионализм на высшем уровне.",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80",
    },
    {
      name: "Дмитрий Козлов",
      role: "Любитель",
      rating: 5,
      text: "Купил подержанный саксофон в плачевном состоянии. После реставрации это совершенно другой инструмент! Спасибо за терпение и подробные консультации для новичка.",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80",
    },
    {
      name: "Игорь Васильев",
      role: "Музыкант оркестра",
      rating: 5,
      text: "Работал с разными мастерами, но такого качества ещё не встречал. Александр не просто чинит — он возвращает инструменту душу. Цены более чем адекватные.",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
    },
    {
      name: "Светлана Королёва",
      role: "Студентка консерватории",
      rating: 5,
      text: "Обратилась с проблемой интонации на верхних нотах. Мастер не только устранил проблему, но и дал ценные советы по уходу за инструментом. Очень благодарна!",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80",
    },
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Icon
        key={i}
        name="Star"
        size={16}
        className={i < rating ? "text-amber-400 fill-current" : "text-gray-300"}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-montserrat text-4xl font-bold text-slate-800 mb-4">
            Отзывы клиентов
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Что говорят музыканты о качестве наших услуг
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                {/* Рейтинг */}
                <div className="flex space-x-1 mb-4">
                  {renderStars(testimonial.rating)}
                </div>

                {/* Текст отзыва */}
                <p className="text-gray-700 mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Автор */}
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-slate-800">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Статистика и призыв */}
        <div className="mt-16 bg-slate-50 rounded-2xl p-8 text-center">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="text-3xl font-bold text-amber-600 mb-2">500+</div>
              <div className="text-gray-600">Довольных клиентов</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-amber-600 mb-2">
                4.9/5
              </div>
              <div className="text-gray-600">Средний рейтинг</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-amber-600 mb-2">99%</div>
              <div className="text-gray-600">Рекомендуют друзьям</div>
            </div>
          </div>

          <h3 className="font-montserrat text-2xl font-bold text-slate-800 mb-4">
            Присоединяйтесь к нашим довольным клиентам
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Доверьте свой инструмент профессионалу и получите результат, который
            превзойдёт ваши ожидания
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
