const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-6">
              О мастерской
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Александр Петров — мастер с 15-летним опытом ремонта саксофонов
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed">
                Специализируюсь на профессиональном ремонте и реставрации
                саксофонов всех типов. Прошел обучение у ведущих европейских
                мастеров.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Использую только оригинальные запчасти и современное
                оборудование. Каждый инструмент получает индивидуальный подход.
              </p>

              <div className="grid grid-cols-3 gap-8 pt-8">
                <div className="text-center">
                  <div className="text-2xl font-light text-gray-900 mb-1">
                    15+
                  </div>
                  <div className="text-sm text-gray-600">лет опыта</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-light text-gray-900 mb-1">
                    500+
                  </div>
                  <div className="text-sm text-gray-600">ремонтов</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-light text-gray-900 mb-1">
                    12
                  </div>
                  <div className="text-sm text-gray-600">мес гарантия</div>
                </div>
              </div>
            </div>

            <div>
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80"
                alt="Мастер за работой"
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
