import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-ocean-100 font-opensans">
      {/* Header Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-blue-100">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-montserrat font-bold text-blue-900">
              Ретрит в Шри-Ланке
            </h1>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-blue-700 hover:text-blue-900 transition-colors">Главная</a>
              <a href="#program" className="text-blue-700 hover:text-blue-900 transition-colors">Программа</a>
              <a href="#pricing" className="text-blue-700 hover:text-blue-900 transition-colors">Стоимость</a>
              <a href="#contact" className="text-blue-700 hover:text-blue-900 transition-colors">Контакты</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-transparent"></div>
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h2 className="text-5xl lg:text-6xl font-montserrat font-bold text-blue-900 mb-6 leading-tight">
              Женский Ретрит
              <span className="block text-ocean-600">в Шри-Ланке</span>
            </h2>
            <p className="text-xl text-blue-700 mb-8 leading-relaxed">
              Погрузитесь в мир йоги и медитации на райском острове. 
              Обретите гармонию души и тела в окружении тропической природы.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                Забронировать место
              </Button>
              <Button variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3">
                Узнать подробнее
              </Button>
            </div>
          </div>
          <div className="relative animate-fade-in">
            <img 
              src="/img/f59901ad-178d-43a9-ad4e-1b0c00d156d2.jpg" 
              alt="Йога на пляже в Шри-Ланке"
              className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/10 to-transparent rounded-2xl"></div>
          </div>
        </div>
      </section>

      {/* Program Section */}
      <section id="program" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-montserrat font-bold text-blue-900 mb-4">
              Программа Ретрита
            </h3>
            <p className="text-xl text-blue-700 max-w-3xl mx-auto">
              Каждый день наполнен практиками, которые помогут вам найти внутреннюю гармонию
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-all duration-300 border-blue-100">
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Icon name="Sunrise" size={32} className="text-blue-600" />
                </div>
                <CardTitle className="text-blue-900 font-montserrat">Утренняя Йога</CardTitle>
                <CardDescription className="text-blue-600">6:30 - 8:00</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-blue-700 text-center">
                  Приветствие солнца на берегу океана. Энергичная практика для пробуждения тела.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 border-blue-100">
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto bg-ocean-100 rounded-full flex items-center justify-center mb-4">
                  <Icon name="Heart" size={32} className="text-ocean-600" />
                </div>
                <CardTitle className="text-blue-900 font-montserrat">Медитация</CardTitle>
                <CardDescription className="text-blue-600">9:00 - 10:00</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-blue-700 text-center">
                  Глубокие медитативные практики для внутреннего покоя и осознанности.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 border-blue-100">
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Icon name="Waves" size={32} className="text-blue-600" />
                </div>
                <CardTitle className="text-blue-900 font-montserrat">Вечерняя Практика</CardTitle>
                <CardDescription className="text-blue-600">18:00 - 19:30</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-blue-700 text-center">
                  Расслабляющая йога и дыхательные упражнения под закатным солнцем.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 bg-gradient-to-br from-blue-50 to-ocean-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-montserrat font-bold text-blue-900 mb-4">
              Стоимость Участия
            </h3>
            <p className="text-xl text-blue-700">
              Выберите подходящий вариант размещения
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="relative overflow-hidden hover:shadow-xl transition-all duration-300 border-2 border-blue-200">
              <div className="absolute top-0 right-0 bg-ocean-500 text-white px-4 py-2 text-sm font-medium">
                Популярный
              </div>
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl font-montserrat font-bold text-blue-900 mb-2">
                  Стандарт
                </CardTitle>
                <div className="text-4xl font-bold text-blue-600 mb-2">$899</div>
                <CardDescription className="text-blue-600">7 дней / 6 ночей</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Icon name="Check" size={20} className="text-ocean-600" />
                  <span className="text-blue-700">Двухместное размещение</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Check" size={20} className="text-ocean-600" />
                  <span className="text-blue-700">3-разовое питание</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Check" size={20} className="text-ocean-600" />
                  <span className="text-blue-700">Все занятия включены</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Check" size={20} className="text-ocean-600" />
                  <span className="text-blue-700">Трансфер из аэропорта</span>
                </div>
                <Button className="w-full mt-6 bg-blue-600 hover:bg-blue-700">
                  Забронировать
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 border-2 border-ocean-200">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl font-montserrat font-bold text-blue-900 mb-2">
                  Премиум
                </CardTitle>
                <div className="text-4xl font-bold text-ocean-600 mb-2">$1299</div>
                <CardDescription className="text-blue-600">7 дней / 6 ночей</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Icon name="Check" size={20} className="text-ocean-600" />
                  <span className="text-blue-700">Одноместное размещение</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Check" size={20} className="text-ocean-600" />
                  <span className="text-blue-700">3-разовое питание</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Check" size={20} className="text-ocean-600" />
                  <span className="text-blue-700">Все занятия + персональные</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Check" size={20} className="text-ocean-600" />
                  <span className="text-blue-700">Спа-процедуры</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Check" size={20} className="text-ocean-600" />
                  <span className="text-blue-700">VIP трансфер</span>
                </div>
                <Button className="w-full mt-6 bg-ocean-600 hover:bg-ocean-700">
                  Забронировать
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-montserrat font-bold text-blue-900 mb-4">
              Свяжитесь с Нами
            </h3>
            <p className="text-xl text-blue-700">
              Готовы начать свое путешествие к гармонии?
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Icon name="Mail" size={24} className="text-blue-600" />
                </div>
                <div>
                  <h4 className="font-montserrat font-semibold text-blue-900 mb-1">Email</h4>
                  <p className="text-blue-700">retreat@srilanka.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Icon name="Phone" size={24} className="text-blue-600" />
                </div>
                <div>
                  <h4 className="font-montserrat font-semibold text-blue-900 mb-1">Телефон</h4>
                  <p className="text-blue-700">+7 (999) 123-45-67</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Icon name="MapPin" size={24} className="text-blue-600" />
                </div>
                <div>
                  <h4 className="font-montserrat font-semibold text-blue-900 mb-1">Локация</h4>
                  <p className="text-blue-700">Унаватуна, Шри-Ланка</p>
                </div>
              </div>
            </div>
            
            <Card className="p-8 border-blue-100">
              <h4 className="font-montserrat font-bold text-blue-900 text-xl mb-6">
                Оставьте заявку
              </h4>
              <div className="space-y-4">
                <div>
                  <input 
                    type="text" 
                    placeholder="Ваше имя" 
                    className="w-full p-3 border border-blue-200 rounded-lg focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Email" 
                    className="w-full p-3 border border-blue-200 rounded-lg focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <textarea 
                    placeholder="Ваше сообщение" 
                    rows={4}
                    className="w-full p-3 border border-blue-200 rounded-lg focus:outline-none focus:border-blue-500"
                  />
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Отправить заявку
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-blue-100 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="font-montserrat font-bold text-xl mb-4">Ретрит в Шри-Ланке</h2>
          <p className="mb-4">Путешествие к внутренней гармонии</p>
          <div className="flex justify-center space-x-6">
            <Icon name="Instagram" size={24} className="text-blue-300 hover:text-white cursor-pointer" />
            <Icon name="Facebook" size={24} className="text-blue-300 hover:text-white cursor-pointer" />
            <Icon name="Twitter" size={24} className="text-blue-300 hover:text-white cursor-pointer" />
          </div>
        </div>
      </footer>
    </div>
  );
}