import Icon from "@/components/ui/icon";

const Footer = () => {
  const quickLinks = [
    { name: "Главная", href: "#home" },
    { name: "О нас", href: "#about" },
    { name: "Услуги", href: "#services" },
    { name: "Прайс", href: "#pricing" },
  ];

  const services = [
    { name: "Общий ремонт", href: "#services" },
    { name: "Замена подушек", href: "#services" },
    { name: "Реставрация", href: "#services" },
    { name: "Срочный ремонт", href: "#services" },
  ];

  const contacts = [
    { icon: "Phone", text: "+7 (495) 123-45-67" },
    { icon: "Mail", text: "info@saxmaster.ru" },
    { icon: "MapPin", text: "ул. Музыкальная, 12, Москва" },
    { icon: "Clock", text: "Пн-Пт: 9:00-19:00, Сб: 10:00-16:00" },
  ];

  const socialLinks = [
    { icon: "MessageCircle", name: "WhatsApp" },
    { icon: "Send", name: "Telegram" },
    { icon: "Instagram", name: "Instagram" },
    { icon: "Youtube", name: "YouTube" },
  ];

  return (
    <footer className="bg-slate-800 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* О компании */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-amber-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">🎷</span>
              </div>
              <div>
                <h3 className="font-montserrat font-bold text-xl">SaxMaster</h3>
                <p className="text-sm text-gray-400">Мастерская ремонта</p>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed">
              Профессиональный ремонт и реставрация саксофонов с гарантией
              качества. Более 15 лет опыта и сотни довольных клиентов.
            </p>

            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-amber-600 transition-colors"
                  title={social.name}
                >
                  <Icon name={social.icon as any} size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Быстрые ссылки */}
          <div>
            <h4 className="font-montserrat font-bold text-lg mb-6">
              Навигация
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-amber-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Услуги */}
          <div>
            <h4 className="font-montserrat font-bold text-lg mb-6">Услуги</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.href}
                    className="text-gray-300 hover:text-amber-400 transition-colors"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Контакты */}
          <div>
            <h4 className="font-montserrat font-bold text-lg mb-6">Контакты</h4>
            <ul className="space-y-4">
              {contacts.map((contact, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <Icon
                    name={contact.icon as any}
                    size={18}
                    className="text-amber-600 mt-0.5 flex-shrink-0"
                  />
                  <span className="text-gray-300 text-sm leading-relaxed">
                    {contact.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Разделитель */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 SaxMaster. Все права защищены.
            </div>

            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-amber-400 transition-colors">
                Политика конфиденциальности
              </a>
              <a href="#" className="hover:text-amber-400 transition-colors">
                Пользовательское соглашение
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
