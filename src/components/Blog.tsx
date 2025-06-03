import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Blog = () => {
  const articles = [
    {
      title: "Как правильно ухаживать за саксофоном",
      excerpt:
        "Простые правила ежедневного ухода, которые продлят жизнь вашего инструмента на десятилетия.",
      date: "15 мая 2024",
      category: "Уход",
      readTime: "5 мин",
      image:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=400&q=80",
    },
    {
      title: "Признаки того, что саксофону нужен ремонт",
      excerpt:
        "Научитесь распознавать симптомы, которые указывают на необходимость профессионального вмешательства.",
      date: "8 мая 2024",
      category: "Ремонт",
      readTime: "7 мин",
      image:
        "https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&w=400&q=80",
    },
    {
      title: "История реставрации Selmer Mark VI 1965 года",
      excerpt:
        "Подробный рассказ о восстановлении легендарного винтажного саксофона с фотографиями процесса.",
      date: "1 мая 2024",
      category: "Реставрация",
      readTime: "10 мин",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    },
    {
      title: "Выбор мундштука: влияние на звук и играбельность",
      excerpt:
        "Как правильно подобрать мундштук под ваш стиль игры и особенности инструмента.",
      date: "24 апреля 2024",
      category: "Настройка",
      readTime: "6 мин",
      image:
        "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=400&q=80",
    },
    {
      title: "Проблемы с клапанами: диагностика и решения",
      excerpt:
        "Разбираем самые частые проблемы с механикой саксофона и способы их устранения.",
      date: "17 апреля 2024",
      category: "Ремонт",
      readTime: "8 мин",
      image:
        "https://images.unsplash.com/photo-1521337581100-8ca9a73a5c00?auto=format&fit=crop&w=400&q=80",
    },
    {
      title: "Подготовка инструмента к концертному сезону",
      excerpt:
        "Checklist для музыкантов: что проверить в саксофоне перед важными выступлениями.",
      date: "10 апреля 2024",
      category: "Советы",
      readTime: "4 мин",
      image:
        "https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?auto=format&fit=crop&w=400&q=80",
    },
  ];

  const categories = [
    { name: "Все статьи", count: 15 },
    { name: "Уход", count: 4 },
    { name: "Ремонт", count: 6 },
    { name: "Реставрация", count: 3 },
    { name: "Советы", count: 2 },
  ];

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-montserrat text-4xl font-bold text-slate-800 mb-4">
            Блог мастера
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Полезные статьи о ремонте, уходе и настройке саксофонов от
            профессионала
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Боковая панель с категориями */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Icon name="BookOpen" size={20} className="text-amber-600" />
                  <span>Категории</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {categories.map((category, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
                    >
                      <span className="text-gray-700">{category.name}</span>
                      <Badge variant="secondary" className="text-xs">
                        {category.count}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Список статей */}
          <div className="lg:col-span-3">
            <div className="grid md:grid-cols-2 gap-8">
              {articles.map((article, index) => (
                <Card
                  key={index}
                  className="overflow-hidden hover:shadow-lg transition-shadow group cursor-pointer"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-4 left-4 bg-amber-600">
                      {article.category}
                    </Badge>
                  </div>

                  <CardHeader className="pb-3">
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-2">
                      <div className="flex items-center space-x-1">
                        <Icon name="Calendar" size={14} />
                        <span>{article.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Icon name="Clock" size={14} />
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                    <CardTitle className="font-montserrat text-xl group-hover:text-amber-600 transition-colors">
                      {article.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {article.excerpt}
                    </p>
                    <Button
                      variant="ghost"
                      className="p-0 h-auto text-amber-600 hover:text-amber-700"
                    >
                      Читать далее
                      <Icon name="ArrowRight" size={16} className="ml-1" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Пагинация */}
            <div className="flex justify-center mt-12">
              <div className="flex space-x-2">
                <Button variant="outline" size="sm">
                  <Icon name="ChevronLeft" size={16} />
                  Назад
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="bg-amber-600 text-white border-amber-600"
                >
                  1
                </Button>
                <Button variant="outline" size="sm">
                  2
                </Button>
                <Button variant="outline" size="sm">
                  3
                </Button>
                <Button variant="outline" size="sm">
                  Далее
                  <Icon name="ChevronRight" size={16} />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Подписка на новости */}
        <div className="mt-16 bg-slate-50 rounded-2xl p-8 text-center">
          <h3 className="font-montserrat text-2xl font-bold text-slate-800 mb-4">
            Подпишитесь на новые статьи
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Получайте уведомления о новых статьях и полезных советах по уходу за
            саксофоном
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Ваш email"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
            <Button className="bg-amber-600 hover:bg-amber-700">
              <Icon name="Mail" size={16} />
              Подписаться
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
