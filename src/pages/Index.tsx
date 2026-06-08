import { useState } from "react";
import Icon from "@/components/ui/icon";

const LAWYER_PHOTO = "https://cdn.poehali.dev/projects/c6d73db4-f6a3-4ef5-b23d-b3c725a8e023/files/0257a6c6-d39a-42c3-b349-735c5b270258.jpg";

const services = [
  {
    icon: "Shield",
    title: "Защита на следствии",
    desc: "Сопровождение с момента задержания, защита прав на допросах, контроль законности следственных действий.",
  },
  {
    icon: "Scale",
    title: "Защита в суде",
    desc: "Разработка правовой позиции, подготовка ходатайств, участие в судебных заседаниях всех инстанций.",
  },
  {
    icon: "FileSearch",
    title: "Обжалование приговоров",
    desc: "Апелляция, кассация, надзор. Анализ судебных ошибок, подготовка жалоб и новых доказательств.",
  },
  {
    icon: "UserCheck",
    title: "Реабилитация",
    desc: "Прекращение уголовного преследования, возмещение ущерба, восстановление деловой репутации.",
  },
  {
    icon: "BookOpen",
    title: "Правовой анализ",
    desc: "Оценка перспектив дела, правовая экспертиза документов, консультации по уголовному праву.",
  },
  {
    icon: "Lock",
    title: "Меры пресечения",
    desc: "Изменение меры пресечения, освобождение из-под стражи, домашний арест, залог.",
  },
];

const stats = [
  { value: "18+", label: "лет практики" },
  { value: "340+", label: "дел завершено" },
  { value: "87%", label: "оправдательных приговоров" },
  { value: "1200+", label: "консультаций" },
];

const experience = [
  {
    year: "2006",
    title: "Начало адвокатской практики",
    desc: "Принятие в адвокатскую палату. Специализация на уголовных делах в сфере экономики.",
  },
  {
    year: "2010",
    title: "Первый крупный прецедент",
    desc: "Успешная защита по делу с предъявленным обвинением в особо тяжком преступлении. Оправдательный приговор.",
  },
  {
    year: "2015",
    title: "Расширение практики",
    desc: "Формирование команды, ведение дел в Верховном суде РФ, международная арбитражная практика.",
  },
  {
    year: "2020",
    title: "Признание в профессиональном сообществе",
    desc: "Включён в рейтинг лучших адвокатов по уголовным делам. Преподавательская деятельность.",
  },
];

const caseTypes = [
  "Уголовные дела общеуголовного характера",
  "Экономические преступления",
  "Коррупционные дела",
  "Преступления против личности",
  "Налоговые преступления",
  "Другое",
];

export default function Index() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    caseType: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[hsl(220,15%,7%)] text-[hsl(45,20%,92%)]">

      {/* ─── NAVIGATION ─── */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[hsl(220,12%,14%)] bg-[hsl(220,15%,7%)/95] backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 border border-[hsl(43,65%,52%)] flex items-center justify-center">
                <div className="w-2 h-2 bg-[hsl(43,65%,52%)]" />
              </div>
              <span className="font-cormorant text-base font-semibold tracking-widest uppercase text-[hsl(45,20%,92%)]">
                Адвокат
              </span>
            </div>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-8">
              {[
                ["hero", "Главная"],
                ["services", "Услуги"],
                ["experience", "Опыт"],
                ["about", "О мне"],
                ["contact", "Консультация"],
              ].map(([id, label]) => (
                <button
                  key={id}
                  onClick={() => scrollTo(id)}
                  className="nav-link"
                >
                  {label}
                </button>
              ))}
            </div>

            {/* CTA */}
            <button
              onClick={() => scrollTo("contact")}
              className="hidden md:block font-ibm text-xs font-medium tracking-widest uppercase px-5 py-2.5 bg-[hsl(43,65%,52%)] text-[hsl(220,15%,7%)] hover:bg-[hsl(43,60%,60%)] transition-colors duration-300"
            >
              Записаться
            </button>

            {/* Mobile burger */}
            <button
              className="md:hidden text-[hsl(220,10%,60%)] hover:text-[hsl(43,65%,52%)] transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <Icon name={menuOpen ? "X" : "Menu"} size={20} />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-[hsl(220,12%,14%)] bg-[hsl(220,14%,9%)] px-6 py-4 flex flex-col gap-4">
            {[
              ["hero", "Главная"],
              ["services", "Услуги"],
              ["experience", "Опыт"],
              ["about", "О мне"],
              ["contact", "Консультация"],
            ].map(([id, label]) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="text-left font-ibm text-xs font-medium tracking-widest uppercase text-[hsl(220,10%,60%)] hover:text-[hsl(43,65%,52%)] transition-colors py-1"
              >
                {label}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* ─── HERO ─── */}
      <section id="hero" className="relative min-h-screen flex items-center overflow-hidden pt-16">
        {/* Background */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
            style={{ backgroundImage: `url(${LAWYER_PHOTO})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(220,15%,7%)] via-[hsl(220,15%,7%)/85] to-[hsl(220,15%,7%)/40]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[hsl(220,15%,7%)] via-transparent to-transparent" />
        </div>

        {/* Vertical gold line decoration */}
        <div className="absolute left-0 top-1/4 bottom-1/4 w-[1px] bg-gradient-to-b from-transparent via-[hsl(43,65%,52%)/40] to-transparent hidden lg:block" />

        <div className="relative max-w-6xl mx-auto px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <span className="animate-fade-in-up delay-100 inline-block font-ibm text-xs font-medium tracking-[0.2em] uppercase text-[hsl(43,65%,52%)] mb-6">
              Адвокат по уголовным делам
            </span>
            <h1 className="animate-fade-in-up delay-200 font-cormorant text-5xl sm:text-6xl lg:text-7xl font-light leading-[1.05] mb-6">
              Александр<br />
              <span className="font-semibold italic">Михайлов</span>
            </h1>
            <div className="animate-fade-in-up delay-300 w-12 h-[2px] bg-[hsl(43,65%,52%)] mb-6" />
            <p className="animate-fade-in-up delay-400 font-ibm text-base font-light text-[hsl(220,10%,65%)] leading-relaxed mb-10 max-w-lg">
              Профессиональная защита в уголовном процессе. Более 18 лет практики,
              340 завершённых дел, реальный результат для каждого клиента.
            </p>
            <div className="animate-fade-in-up delay-500 flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollTo("contact")}
                className="font-ibm text-xs font-medium tracking-widest uppercase px-8 py-4 bg-[hsl(43,65%,52%)] text-[hsl(220,15%,7%)] hover:bg-[hsl(43,60%,60%)] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.4)]"
              >
                Получить консультацию
              </button>
              <button
                onClick={() => scrollTo("services")}
                className="font-ibm text-xs font-medium tracking-widest uppercase px-8 py-4 border border-[hsl(220,12%,28%)] text-[hsl(220,10%,65%)] hover:border-[hsl(43,65%,52%)/50] hover:text-[hsl(45,20%,92%)] transition-all duration-300"
              >
                Узнать об услугах
              </button>
            </div>
          </div>
        </div>

        {/* Stats strip */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-[hsl(220,12%,14%)] bg-[hsl(220,14%,9%)/80] backdrop-blur-sm">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[hsl(220,12%,18%)]">
              {stats.map((s, i) => (
                <div key={i} className="px-6 py-5 text-center">
                  <div className="font-cormorant text-2xl lg:text-3xl font-semibold text-[hsl(43,65%,52%)]">
                    {s.value}
                  </div>
                  <div className="font-ibm text-xs text-[hsl(220,10%,50%)] mt-0.5 tracking-wide">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section id="services" className="py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <span className="font-ibm text-xs font-medium tracking-[0.2em] uppercase text-[hsl(43,65%,52%)] block mb-4">
              Направления работы
            </span>
            <h2 className="font-cormorant text-4xl lg:text-5xl font-light mb-4">
              Услуги
            </h2>
            <div className="w-12 h-[2px] bg-[hsl(43,65%,52%)]" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[hsl(220,12%,14%)]">
            {services.map((s, i) => (
              <div key={i} className="service-card p-8 bg-[hsl(220,14%,10%)] group">
                <div className="w-10 h-10 border border-[hsl(220,12%,22%)] flex items-center justify-center mb-6 group-hover:border-[hsl(43,65%,52%)/50] transition-colors duration-300">
                  <Icon name={s.icon} fallback="Shield" size={18} className="text-[hsl(43,65%,52%)]" />
                </div>
                <h3 className="font-cormorant text-xl font-semibold mb-3 text-[hsl(45,20%,92%)]">
                  {s.title}
                </h3>
                <p className="font-ibm text-sm font-light text-[hsl(220,10%,55%)] leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── EXPERIENCE ─── */}
      <section id="experience" className="py-24 lg:py-32 bg-[hsl(220,14%,9%)]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <span className="font-ibm text-xs font-medium tracking-[0.2em] uppercase text-[hsl(43,65%,52%)] block mb-4">
              18 лет в профессии
            </span>
            <h2 className="font-cormorant text-4xl lg:text-5xl font-light mb-4">
              Опыт и достижения
            </h2>
            <div className="w-12 h-[2px] bg-[hsl(43,65%,52%)]" />
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-[100px] top-0 bottom-0 w-[1px] bg-[hsl(220,12%,18%)] hidden md:block" />

            <div className="space-y-0">
              {experience.map((item, i) => (
                <div key={i} className="relative flex gap-0 md:gap-12 group">
                  {/* Year */}
                  <div className="hidden md:flex items-start pt-8 w-[100px] shrink-0 justify-end pr-6">
                    <span className="font-cormorant text-2xl font-light text-[hsl(43,65%,52%)/60] group-hover:text-[hsl(43,65%,52%)] transition-colors duration-300">
                      {item.year}
                    </span>
                  </div>

                  {/* Dot */}
                  <div className="hidden md:flex items-start pt-10 shrink-0">
                    <div className="w-3 h-3 border border-[hsl(220,12%,28%)] bg-[hsl(220,14%,9%)] group-hover:border-[hsl(43,65%,52%)] group-hover:bg-[hsl(43,65%,52%)/20] transition-all duration-300 -ml-[6px]" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 py-8 border-b border-[hsl(220,12%,14%)]">
                    <div className="md:hidden font-cormorant text-lg text-[hsl(43,65%,52%)] mb-2">{item.year}</div>
                    <h3 className="font-cormorant text-2xl font-semibold mb-2 text-[hsl(45,20%,92%)]">
                      {item.title}
                    </h3>
                    <p className="font-ibm text-sm font-light text-[hsl(220,10%,55%)] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── ABOUT ─── */}
      <section id="about" className="py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Photo */}
            <div className="relative">
              <div className="relative overflow-hidden">
                <img
                  src={LAWYER_PHOTO}
                  alt="Адвокат Александр Михайлов"
                  className="w-full object-cover grayscale contrast-110"
                  style={{ height: "560px", objectPosition: "center top" }}
                />
                {/* Gold frame accent */}
                <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-[hsl(43,65%,52%)] pointer-events-none" />
                <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-[hsl(43,65%,52%)] pointer-events-none" />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-6 -right-4 bg-[hsl(43,65%,52%)] text-[hsl(220,15%,7%)] p-6 shadow-2xl hidden lg:block">
                <div className="font-cormorant text-3xl font-bold leading-none">18</div>
                <div className="font-ibm text-xs font-medium tracking-wide mt-1">лет практики</div>
              </div>
            </div>

            {/* Text */}
            <div>
              <span className="font-ibm text-xs font-medium tracking-[0.2em] uppercase text-[hsl(43,65%,52%)] block mb-4">
                Об адвокате
              </span>
              <h2 className="font-cormorant text-4xl lg:text-5xl font-light mb-6">
                Александр<br />
                <span className="font-semibold italic">Михайлов</span>
              </h2>
              <div className="w-12 h-[2px] bg-[hsl(43,65%,52%)] mb-8" />

              <p className="font-ibm text-sm font-light text-[hsl(220,10%,62%)] leading-relaxed mb-6">
                Адвокат по уголовным делам с 18-летним опытом. Специализируюсь на делах,
                связанных с экономическими преступлениями, коррупцией и преступлениями
                против личности. Защищал интересы клиентов во всех судебных инстанциях
                Российской Федерации, включая Верховный суд.
              </p>
              <p className="font-ibm text-sm font-light text-[hsl(220,10%,62%)] leading-relaxed mb-10">
                Каждое дело — это не просто юридический казус, это судьба человека.
                Именно поэтому я лично веду каждое дело от начала до конца, без передачи
                помощникам и без формального подхода.
              </p>

              <div className="space-y-3">
                {[
                  "Член Адвокатской палаты г. Москвы",
                  "Кандидат юридических наук",
                  "Преподаватель уголовного права",
                  "Член Комиссии по защите прав адвокатов",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-1 h-1 bg-[hsl(43,65%,52%)] mt-2 shrink-0" />
                    <span className="font-ibm text-sm font-light text-[hsl(220,10%,62%)]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CONTACT / FORM ─── */}
      <section id="contact" className="py-24 lg:py-32 bg-[hsl(220,14%,9%)]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* Left */}
            <div>
              <span className="font-ibm text-xs font-medium tracking-[0.2em] uppercase text-[hsl(43,65%,52%)] block mb-4">
                Первичная консультация
              </span>
              <h2 className="font-cormorant text-4xl lg:text-5xl font-light mb-6">
                Запись на<br />
                <span className="font-semibold italic">консультацию</span>
              </h2>
              <div className="w-12 h-[2px] bg-[hsl(43,65%,52%)] mb-8" />
              <p className="font-ibm text-sm font-light text-[hsl(220,10%,60%)] leading-relaxed mb-10">
                Первичная консультация — это возможность оценить перспективы вашего дела
                и выработать стратегию защиты. Конфиденциальность гарантирована.
              </p>

              <div className="space-y-6">
                {[
                  { icon: "Phone", label: "+7 (495) 000-00-00" },
                  { icon: "Mail", label: "advokat@example.ru" },
                  { icon: "MapPin", label: "Москва, ул. Арбат, 12, офис 301" },
                  { icon: "Clock", label: "Пн–Пт: 9:00 – 20:00, Сб: 10:00 – 16:00" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-10 h-10 border border-[hsl(220,12%,22%)] flex items-center justify-center shrink-0">
                      <Icon name={item.icon} fallback="Phone" size={16} className="text-[hsl(43,65%,52%)]" />
                    </div>
                    <span className="font-ibm text-sm font-light text-[hsl(220,10%,65%)]">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <div>
              {submitted ? (
                <div className="border border-[hsl(43,65%,52%)/30] bg-[hsl(220,14%,11%)] p-10 text-center">
                  <div className="w-12 h-12 border border-[hsl(43,65%,52%)] flex items-center justify-center mx-auto mb-6">
                    <Icon name="Check" size={20} className="text-[hsl(43,65%,52%)]" />
                  </div>
                  <h3 className="font-cormorant text-2xl font-semibold mb-3">Заявка отправлена</h3>
                  <p className="font-ibm text-sm font-light text-[hsl(220,10%,55%)]">
                    Мы свяжемся с вами в течение одного рабочего дня для согласования времени консультации.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-0">
                  <div className="grid sm:grid-cols-2 gap-px bg-[hsl(220,12%,18%)]">
                    <div>
                      <input
                        type="text"
                        placeholder="Ваше имя *"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="form-input"
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        placeholder="Телефон *"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                        className="form-input"
                      />
                    </div>
                  </div>
                  <div className="mt-px">
                    <select
                      value={formData.caseType}
                      onChange={(e) => setFormData({ ...formData, caseType: e.target.value })}
                      className="form-input appearance-none cursor-pointer"
                    >
                      <option value="" disabled>Тип дела</option>
                      {caseTypes.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                  <div className="mt-px">
                    <textarea
                      placeholder="Кратко опишите ситуацию"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                      className="form-input resize-none"
                    />
                  </div>
                  <div className="mt-px">
                    <button
                      type="submit"
                      className="w-full font-ibm text-xs font-medium tracking-widest uppercase py-4 bg-[hsl(43,65%,52%)] text-[hsl(220,15%,7%)] hover:bg-[hsl(43,60%,60%)] transition-colors duration-300"
                    >
                      Записаться на консультацию
                    </button>
                  </div>
                  <p className="font-ibm text-xs text-[hsl(220,10%,38%)] mt-3 leading-relaxed">
                    Нажимая кнопку, вы соглашаетесь с обработкой персональных данных.
                    Все сведения строго конфиденциальны.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="border-t border-[hsl(220,12%,14%)] py-8">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 border border-[hsl(43,65%,52%)] flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-[hsl(43,65%,52%)]" />
            </div>
            <span className="font-cormorant text-sm tracking-widest uppercase text-[hsl(220,10%,50%)]">
              Адвокат Михайлов
            </span>
          </div>
          <p className="font-ibm text-xs text-[hsl(220,10%,38%)]">
            © 2024 Все права защищены. Адвокатское бюро.
          </p>
        </div>
      </footer>

    </div>
  );
}