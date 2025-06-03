const Footer = () => {
  const links = [
    { name: "Главная", href: "#home" },
    { name: "О нас", href: "#about" },
    { name: "Услуги", href: "#services" },
    { name: "Контакты", href: "#contact" },
  ];

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Логотип и описание */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="text-2xl">🎷</div>
                <div>
                  <h3 className="text-lg font-medium">SaxMaster</h3>
                  <p className="text-sm text-gray-400">Ремонт саксофонов</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Профессиональный ремонт и реставрация саксофонов с гарантией
                качества.
              </p>
            </div>

            {/* Навигация */}
            <div>
              <h4 className="font-medium mb-4">Навигация</h4>
              <ul className="space-y-2">
                {links.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white text-sm transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Контакты */}
            <div>
              <h4 className="font-medium mb-4">Контакты</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <p>+7 (495) 123-45-67</p>
                <p>info@saxmaster.ru</p>
                <p>ул. Музыкальная, 12</p>
                <p>Москва</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2024 SaxMaster. Все права защищены.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
