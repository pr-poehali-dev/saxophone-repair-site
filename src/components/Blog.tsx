const Blog = () => {
  const posts = [
    {
      title: "Как ухаживать за саксофоном",
      excerpt:
        "Простые правила ежедневного ухода за инструментом для продления срока службы.",
      date: "15 мая 2024",
      image:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=400&q=80",
    },
    {
      title: "Признаки необходимости ремонта",
      excerpt:
        "Основные сигналы, которые указывают на то, что инструменту нужна помощь мастера.",
      date: "8 мая 2024",
      image:
        "https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?auto=format&fit=crop&w=400&q=80",
    },
    {
      title: "История реставрации винтажного Selmer",
      excerpt:
        "Рассказ о восстановлении легендарного саксофона 1965 года выпуска.",
      date: "1 мая 2024",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    },
  ];

  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-6">Блог</h2>
            <p className="text-xl text-gray-600">
              Полезные статьи о ремонте и уходе за саксофонами
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <article
                key={index}
                className="bg-white rounded-lg overflow-hidden hover:shadow-sm transition-shadow"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="text-xs text-gray-500 mb-3">{post.date}</div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
              Все статьи →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
