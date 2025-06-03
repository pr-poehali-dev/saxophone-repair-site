import { useState } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Главная", href: "#home" },
    { name: "О нас", href: "#about" },
    { name: "Услуги", href: "#services" },
    { name: "Прайс", href: "#pricing" },
    { name: "Галерея", href: "#gallery" },
    { name: "Отзывы", href: "#testimonials" },
    { name: "Контакты", href: "#contact" },
    { name: "Блог", href: "#blog" },
  ];

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-amber-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">🎷</span>
            </div>
            <div>
              <h1 className="font-montserrat font-bold text-xl text-slate-800">
                SaxMaster
              </h1>
              <p className="text-xs text-gray-600">Мастерская ремонта</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-amber-600 transition-colors font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button className="bg-amber-600 hover:bg-amber-700">
              <Icon name="Phone" size={16} />
              Записаться
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Icon name={isMenuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-3 pt-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-amber-600 transition-colors font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <Button className="bg-amber-600 hover:bg-amber-700 mt-4">
                <Icon name="Phone" size={16} />
                Записаться
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
