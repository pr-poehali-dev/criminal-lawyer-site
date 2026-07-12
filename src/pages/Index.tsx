import { useState } from "react";
import Icon from "@/components/ui/icon";

const LAWYER_PHOTO = "https://cdn.poehali.dev/projects/c6d73db4-f6a3-4ef5-b23d-b3c725a8e023/bucket/e4bb7f63-014c-423e-b1e5-a7813c1d96f3.jpg";
const LAWYER_PHOTO_ABOUT = "https://cdn.poehali.dev/projects/c6d73db4-f6a3-4ef5-b23d-b3c725a8e023/bucket/d879cba7-d480-4b70-ad8d-e80d18e917cb.jpg";
const PHONE = "89025436378";
const PHONE_DISPLAY = "+7 (902) 543-63-78";
const EMAIL = "89025436378@mail.ru";
const ADDRESS = "Красногвардейская улица, 23";

const services = [
  {
    icon: "Siren",
    title: "Срочный выезд адвоката 24/7",
    subtitle: "при задержании, обыске, допросе по Иркутску и Республике Бурятия",
    desc: "Экстренно выезжаю на задержания, обыски и допросы. Защищаю ваши права с первых минут общения со следователем. Связь круглосуточно.",
    urgent: true,
  },
  {
    icon: "Phone",
    title: "Краткая юридическая консультация 24/7",
    subtitle: "по телефону",
    desc: "Если к вам пришли с обыском или решается вопрос о задержании — не паникуйте. Позвоните мне прямо сейчас. Я пошагово объясню, что делать и как себя вести.",
    urgent: true,
  },
  {
    icon: "MessageSquare",
    title: "Юридическая консультация",
    subtitle: "на личном приёме в офисе",
    desc: "Разберем вашу ситуацию на встрече. Спокойно обсудим детали доследственной проверки или уголовного дела и выстроим сильную, максимально безопасную позицию для защиты.",
    urgent: false,
  },
  {
    icon: "FileSearch",
    title: "Юридическая консультация",
    subtitle: "с изучением материалов уголовного дела",
    desc: "Изучу материалы дела, чтобы найти процессуальные ошибки следствия или дознания, выстроить наиболее правильную стратегию защиты.",
    urgent: false,
  },
  {
    icon: "Scale",
    title: "Участие адвоката",
    subtitle: "в одном следственном действии",
    desc: "В случаях, когда участие адвоката требуется только один раз (для допроса или дачи объяснений). Соглашение с адвокатом заключается для участия в конкретном следственном действии.",
    urgent: false,
  },
  {
    icon: "Shield",
    title: "Защита подозреваемого (обвиняемого)",
    subtitle: "по уголовному делу",
    desc: "Комплексная защита на любом этапе: от доследственной проверки, уголовного дела и рассмотрения его в суде.",
    urgent: false,
  },
  {
    icon: "UserCheck",
    title: "Представление интересов свидетеля",
    subtitle: "по уголовному делу",
    desc: "Сопровождаю на допросах, главная задача — не допустить перевода свидетеля в статус обвиняемого.",
    urgent: false,
  },
  {
    icon: "ClipboardList",
    title: "Полное сопровождение жалоб",
    subtitle: "на незаконные действия (бездействие) следствия и дознания",
    desc: "Недостаточно просто составить жалобу и направить ее в компетентное государственное учреждение, также необходимо контролировать ее рассмотрение на каждом этапе, добиваюсь реального устранения нарушений и законного решения.",
    urgent: false,
  },
  {
    icon: "HeartHandshake",
    title: "Представление интересов потерпевшего",
    subtitle: "по уголовному делу",
    desc: "Помогаю добиться справедливости и компенсации причиненного ущерба. Защищаю ваши интересы во время следствия и в суде, добиваясь взыскания материального и морального вреда.",
    urgent: false,
  },
];

const experiencePoints = [
  {
    icon: "BookOpen",
    title: "20 лет юридической практики",
    desc: "Досконально и подробно изучил как в теории, так и на практике уголовное право и уголовный процесс, что является объективным преимуществом для правильной и квалифицированной юридической помощи.",
  },
  {
    icon: "Trophy",
    title: "Достижение результата",
    desc: "Принятие комплексных мер по недопущению возбуждения уголовного дела на стадии доследственной проверки, достижение прекращения уголовного преследования, переквалификации обвинения на менее тяжкие статьи уголовного закона и как следствие назначение наказания судом, не связанного лишением свободы.",
  },
  {
    icon: "Search",
    title: "Работа на упреждение",
    desc: "Анализирую материалы уголовного дела, нахожу процессуальные нарушения следствия и дознания и использую их для отказа от обвинения и реабилитации нарушенных прав.",
  },
  {
    icon: "Eye",
    title: "Контроль рисков",
    desc: "Сопровождаю доверителей на допросах, очных ставках, обысках и иных следственных действиях. Исключаю любое психологическое давление со стороны правоохранительных органов.",
  },
];

const principles = [
  {
    icon: "MessageCircle",
    title: "Честный прогноз",
    desc: "Не даю ложных обещаний ради гонорара. Говорю правду о рисках и перспективах дела на первой встрече.",
  },
  {
    icon: "ShieldAlert",
    title: "Защита от давления",
    desc: "Лично сопровождаю на допросах и обысках. Пресекаю любые незаконные действия следствия и дознания.",
  },
  {
    icon: "Crosshair",
    title: "Работа на упреждение",
    desc: "Нахожу процессуальные ошибки следствия и дознания, выстраиваю тактику защиты, выгодную для доверителя, еще до того, как дело дойдет до суда.",
  },
];

const SEND_URL = "https://functions.poehali.dev/589729a4-9cdc-4434-a55a-a5bba5d57948";

export default function Index() {
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setSendError("");
    try {
      const res = await fetch(SEND_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setSendError("Не удалось отправить заявку. Позвоните нам напрямую.");
      }
    } catch {
      setSendError("Ошибка соединения. Позвоните нам напрямую.");
    } finally {
      setSending(false);
    }
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const callPhone = () => {
    window.location.href = `tel:${PHONE}`;
  };

  return (
    <div className="min-h-screen bg-[hsl(220,15%,7%)] text-[hsl(45,20%,92%)]">

      {/* ─── NAVIGATION ─── */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[hsl(220,12%,13%)] bg-[hsl(220,15%,7%)] bg-opacity-95 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-5 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 border border-[hsl(43,65%,52%)] flex items-center justify-center">
                <div className="w-2 h-2 bg-[hsl(43,65%,52%)]" />
              </div>
              <span className="font-cormorant text-sm font-semibold tracking-widest uppercase">
                Маханов Денис Анатольевич
              </span>
            </div>

            <div className="hidden md:flex items-center gap-7">
              {[["hero","Главная"],["services","Услуги"],["experience","Опыт"],["about","О мне"],["contact","Консультация"]].map(([id, label]) => (
                <button key={id} onClick={() => scrollTo(id)} className="nav-link">{label}</button>
              ))}
            </div>

            <a
              href={`tel:${PHONE}`}
              className="hidden md:flex items-center gap-2 font-ibm text-xs font-medium tracking-wider uppercase px-5 py-2.5 bg-[hsl(43,65%,52%)] text-[hsl(220,15%,7%)] hover:bg-[hsl(43,60%,60%)] transition-colors duration-300"
            >
              <Icon name="Phone" size={13} />
              Позвонить
            </a>

            <button className="md:hidden text-[hsl(220,10%,60%)] hover:text-[hsl(43,65%,52%)] transition-colors" onClick={() => setMenuOpen(!menuOpen)}>
              <Icon name={menuOpen ? "X" : "Menu"} size={20} />
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden border-t border-[hsl(220,12%,13%)] bg-[hsl(220,14%,9%)] px-5 py-4 flex flex-col gap-4">
            {[["hero","Главная"],["services","Услуги"],["experience","Опыт"],["about","О мне"],["contact","Консультация"]].map(([id, label]) => (
              <button key={id} onClick={() => scrollTo(id)} className="text-left font-ibm text-xs font-medium tracking-widest uppercase text-[hsl(220,10%,60%)] hover:text-[hsl(43,65%,52%)] transition-colors py-1">
                {label}
              </button>
            ))}
            <a href={`tel:${PHONE}`} className="flex items-center gap-2 font-ibm text-xs font-medium tracking-wider uppercase py-2.5 px-4 bg-[hsl(43,65%,52%)] text-[hsl(220,15%,7%)] w-fit mt-1">
              <Icon name="Phone" size={13} />
              {PHONE_DISPLAY}
            </a>
          </div>
        )}
      </nav>

      {/* ─── HERO ─── */}
      <section id="hero" className="relative min-h-screen flex items-center overflow-hidden pt-16">
        <div className="absolute inset-0 bg-[hsl(220,15%,6%)]" />
        <div className="absolute left-0 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-[hsl(43,65%,52%)] to-transparent opacity-30 hidden lg:block" />

        <img
          src={LAWYER_PHOTO}
          alt="Маханов Денис Анатольевич"
          className="hidden md:block absolute right-0 top-0 bottom-0 h-full w-[60%] object-cover object-top z-0"
          style={{
            WebkitMaskImage: "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.5) 25%, black 55%)",
            maskImage: "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.5) 25%, black 55%)",
          }}
        />
        <div className="hidden md:block absolute right-0 top-0 bottom-0 w-[60%] bg-gradient-to-t from-[hsl(220,15%,6%)] via-transparent to-transparent z-0" />

        <div className="relative z-10 max-w-6xl mx-auto px-5 lg:px-8 w-full py-20">
          <div className="max-w-2xl">
            <div className="md:hidden mb-8 relative overflow-hidden max-w-xs">
              <img
                src={LAWYER_PHOTO}
                alt="Маханов Денис Анатольевич"
                className="w-full object-cover object-top"
                style={{ height: "360px" }}
              />
              <div className="absolute bottom-0 left-0 w-10 h-10 border-b-2 border-l-2 border-[hsl(43,65%,52%)]" />
              <div className="absolute top-0 right-0 w-10 h-10 border-t-2 border-r-2 border-[hsl(43,65%,52%)]" />
            </div>
            <span className="animate-fade-in-up delay-100 inline-block font-ibm text-xs font-medium tracking-[0.22em] uppercase text-[hsl(43,65%,52%)] mb-6">
              Адвокат по уголовным делам
            </span>
            <h1 className="animate-fade-in-up delay-200 font-cormorant text-5xl sm:text-6xl lg:text-7xl font-light leading-[1.05] mb-6">
              Профессиональная<br />
              <span className="font-semibold italic">защита</span>
            </h1>
            <div className="animate-fade-in-up delay-300 w-12 h-[2px] bg-[hsl(43,65%,52%)] mb-7" />
            <p className="animate-fade-in-up delay-400 font-ibm text-base font-light text-[hsl(220,10%,65%)] leading-relaxed mb-3 max-w-lg">
              Профессиональная защита в уголовном процессе.
            </p>
            <p className="animate-fade-in-up delay-400 font-ibm text-base font-light text-[hsl(220,10%,65%)] leading-relaxed mb-3 max-w-lg">
              20 лет опыта <span className="text-[hsl(43,65%,52%)]">изнутри правоохранительной системы.</span>
            </p>
            <p className="animate-fade-in-up delay-400 font-ibm text-base font-light text-[hsl(220,10%,65%)] leading-relaxed mb-10 max-w-lg">
              Гарантия максимально положительного результата для каждого клиента.
            </p>
            <div className="animate-fade-in-up delay-500 flex flex-col sm:flex-row gap-4">
              <a
                href={`tel:${PHONE}`}
                className="flex items-center justify-center gap-2.5 font-ibm text-xs font-medium tracking-widest uppercase px-8 py-4 bg-[hsl(43,65%,52%)] text-[hsl(220,15%,7%)] hover:bg-[hsl(43,60%,60%)] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)]"
              >
                <Icon name="Phone" size={14} />
                Позвонить сейчас
              </a>
              <button
                onClick={() => scrollTo("contact")}
                className="w-full sm:w-auto text-center font-ibm text-xs font-medium tracking-widest uppercase px-8 py-4 border border-[hsl(220,12%,28%)] text-[hsl(220,10%,65%)] hover:border-[hsl(43,65%,52%)] hover:text-[hsl(45,20%,92%)] transition-all duration-300"
              >
                Записаться на приём
              </button>
            </div>
          </div>
        </div>

        {/* Urgent 24/7 badge */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-[hsl(220,12%,13%)] bg-[hsl(220,14%,9%)] bg-opacity-90 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto px-5 lg:px-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[hsl(43,65%,52%)] animate-pulse" />
                <span className="font-ibm text-xs font-medium tracking-wide text-[hsl(220,10%,60%)] uppercase">
                  Экстренная юридическая помощь
                </span>
                <span className="font-ibm text-xs font-semibold tracking-wider text-[hsl(43,65%,52%)] uppercase">24/7</span>
              </div>
              <a
                href={`tel:${PHONE}`}
                className="flex items-center gap-2 font-cormorant text-lg font-semibold text-[hsl(45,20%,92%)] hover:text-[hsl(43,65%,52%)] transition-colors"
              >
                <Icon name="Phone" size={16} className="text-[hsl(43,65%,52%)]" />
                {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section id="services" className="py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-5 lg:px-8">
          <div className="mb-16">
            <span className="font-ibm text-xs font-medium tracking-[0.22em] uppercase text-[hsl(43,65%,52%)] block mb-4">
              Направления работы
            </span>
            <h2 className="font-cormorant text-4xl lg:text-5xl font-light mb-4">Услуги</h2>
            <div className="w-12 h-[2px] bg-[hsl(43,65%,52%)]" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[hsl(220,12%,13%)]">
            {services.map((s, i) => (
              <div key={i} className="service-card p-7 bg-[hsl(220,14%,10%)] group flex flex-col">
                <div className="flex items-start justify-between mb-5">
                  <div className="w-10 h-10 border border-[hsl(220,12%,22%)] flex items-center justify-center group-hover:border-[hsl(43,65%,52%)] transition-colors duration-300 shrink-0">
                    <Icon name={s.icon} fallback="Shield" size={17} className="text-[hsl(43,65%,52%)]" />
                  </div>
                  {s.urgent && (
                    <span className="font-ibm text-[10px] font-semibold tracking-widest uppercase px-2 py-1 border border-[hsl(43,65%,52%)/50] text-[hsl(43,65%,52%)] bg-[hsl(43,65%,52%)/8]">
                      24/7
                    </span>
                  )}
                </div>
                <h3 className="font-cormorant text-lg font-semibold text-[hsl(45,20%,92%)] leading-tight mb-1">
                  {s.title}
                </h3>
                <p className="font-ibm text-xs font-medium text-[hsl(43,65%,52%)] mb-3 leading-snug">
                  {s.subtitle}
                </p>
                <p className="font-ibm text-sm font-light text-[hsl(220,10%,52%)] leading-relaxed flex-1 mb-5">
                  {s.desc}
                </p>
                <a
                  href={`tel:${PHONE}`}
                  className="flex items-center gap-2 font-ibm text-xs font-medium tracking-wider uppercase text-[hsl(220,10%,50%)] hover:text-[hsl(43,65%,52%)] transition-colors duration-300 mt-auto"
                >
                  <Icon name="Phone" size={13} />
                  Позвонить
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── EXPERIENCE ─── */}
      <section id="experience" className="py-24 lg:py-32 bg-[hsl(220,14%,9%)]">
        <div className="max-w-6xl mx-auto px-5 lg:px-8">
          <div className="mb-16">
            <span className="font-ibm text-xs font-medium tracking-[0.22em] uppercase text-[hsl(43,65%,52%)] block mb-4">
              Адвокат по уголовным делам / Ведущий юрист
            </span>
            <h2 className="font-cormorant text-4xl lg:text-5xl font-light mb-4">Опыт и достижения</h2>
            <div className="w-12 h-[2px] bg-[hsl(43,65%,52%)]" />
          </div>

          <div className="grid gap-10 items-start">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[hsl(220,12%,13%)]">
            {experiencePoints.map((item, i) => (
              <div key={i} className="bg-[hsl(220,14%,10%)] p-8 group hover:bg-[hsl(220,14%,11%)] transition-colors duration-300">
                <div className="w-10 h-10 border border-[hsl(220,12%,22%)] flex items-center justify-center mb-5 group-hover:border-[hsl(43,65%,52%)] transition-colors duration-300">
                  <Icon name={item.icon} fallback="Star" size={17} className="text-[hsl(43,65%,52%)]" />
                </div>
                <h3 className="font-cormorant text-xl font-semibold mb-3 text-[hsl(45,20%,92%)]">{item.title}</h3>
                <p className="font-ibm text-sm font-light text-[hsl(220,10%,55%)] leading-relaxed">{item.desc}</p>
              </div>
            ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── ABOUT ─── */}
      <section id="about" className="py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-5 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Photo */}
            <div className="relative">
              <div className="relative overflow-hidden bg-[hsl(220,14%,9%)] flex items-center justify-center" style={{ height: "580px" }}>
                <img
                  src={LAWYER_PHOTO_ABOUT}
                  alt="Адвокат"
                  className="w-full h-full object-contain"
                />
                <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-[hsl(43,65%,52%)]" />
                <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-[hsl(43,65%,52%)]" />
              </div>
              <div className="absolute -bottom-5 -right-4 bg-[hsl(43,65%,52%)] text-[hsl(220,15%,7%)] p-5 shadow-2xl hidden lg:block">
                <div className="font-cormorant text-3xl font-bold leading-none">20</div>
                <div className="font-ibm text-xs font-medium tracking-wide mt-1">лет практики</div>
              </div>
            </div>

            {/* Text */}
            <div>
              <span className="font-ibm text-xs font-medium tracking-[0.22em] uppercase text-[hsl(43,65%,52%)] block mb-4">
                Об адвокате
              </span>
              <h2 className="font-cormorant text-4xl lg:text-5xl font-light mb-6">
                Маханов Денис<br />
                <span className="font-semibold italic">Анатольевич</span>
              </h2>
              <div className="w-12 h-[2px] bg-[hsl(43,65%,52%)] mb-8" />

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-[hsl(220,12%,13%)] mb-8">
                {[
                  { value: "20 лет", label: "юридической практики" },
                  { value: "СК РФ", label: "Следственный комитет РФ" },
                  { value: "ИГУ", label: "Юридический институт" },
                ].map((item, i) => (
                  <div key={i} className="bg-[hsl(220,14%,10%)] px-5 py-4 text-center">
                    <div className="font-cormorant text-2xl font-bold text-[hsl(43,65%,52%)] leading-none mb-1">{item.value}</div>
                    <div className="font-ibm text-[11px] font-medium tracking-wide text-[hsl(220,10%,48%)] uppercase leading-snug">{item.label}</div>
                  </div>
                ))}
              </div>

              <div className="bg-[hsl(220,14%,10%)] border border-[hsl(43,65%,52%)/25] px-6 py-4 mb-6 flex items-start gap-4">
                <div className="w-8 h-8 border border-[hsl(43,65%,52%)/50] flex items-center justify-center shrink-0 mt-0.5">
                  <Icon name="Medal" fallback="Star" size={15} className="text-[hsl(43,65%,52%)]" />
                </div>
                <div>
                  <div className="font-cormorant text-base font-semibold text-[hsl(45,20%,90%)] mb-0.5">Подполковник юстиции СК РФ в отставке</div>
                  <div className="font-ibm text-xs font-light text-[hsl(220,10%,50%)] leading-relaxed">Выпускник Юридического института ИГУ · Адвокат по уголовным делам</div>
                </div>
              </div>

              <p className="font-ibm text-sm font-light text-[hsl(220,10%,60%)] leading-relaxed mb-4">
                На протяжении многих лет расследовал уголовные дела различной категории и сложности. Как практикующий правоприменитель, знаю уголовное право и уголовный процесс, точно просчитываю этапы обвинения и нахожу скрытые ошибки в материалах дела, чтобы использовать их в пользу доверителя.
              </p>

              <div className="border-l-2 border-[hsl(43,65%,52%)/40] pl-5 mb-8">
                <p className="font-cormorant text-xl italic text-[hsl(45,20%,78%)] leading-relaxed">
                  Не оставайтесь один на один с системой. Позвоните мне прямо сейчас — разберем вашу ситуацию и начнем действовать.
                </p>
              </div>

              <div className="space-y-4 mb-8">
                <h4 className="font-ibm text-xs font-medium tracking-[0.18em] uppercase text-[hsl(220,10%,45%)] mb-4">Принципы работы</h4>
                {principles.map((p, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 border border-[hsl(220,12%,16%)] hover:border-[hsl(43,65%,52%)/35] transition-colors duration-300">
                    <div className="w-8 h-8 border border-[hsl(220,12%,22%)] flex items-center justify-center shrink-0 mt-0.5">
                      <Icon name={p.icon} fallback="Check" size={14} className="text-[hsl(43,65%,52%)]" />
                    </div>
                    <div>
                      <div className="font-cormorant text-base font-semibold text-[hsl(45,20%,90%)] mb-1">{p.title}</div>
                      <div className="font-ibm text-sm font-light text-[hsl(220,10%,55%)] leading-relaxed">{p.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              <a
                href={`tel:${PHONE}`}
                className="flex items-center justify-center gap-2.5 font-ibm text-xs font-medium tracking-widest uppercase px-8 py-4 bg-[hsl(43,65%,52%)] text-[hsl(220,15%,7%)] hover:bg-[hsl(43,60%,60%)] transition-all duration-300 w-full sm:w-auto"
              >
                <Icon name="Phone" size={14} />
                Позвонить: {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CONTACT ─── */}
      <section id="contact" className="py-24 lg:py-32 bg-[hsl(220,14%,9%)]">
        <div className="max-w-6xl mx-auto px-5 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* Left */}
            <div>
              <span className="font-ibm text-xs font-medium tracking-[0.22em] uppercase text-[hsl(43,65%,52%)] block mb-4">
                Первичная консультация
              </span>
              <h2 className="font-cormorant text-4xl lg:text-5xl font-light mb-6">
                Запись на<br />
                <span className="font-semibold italic">консультацию</span>
              </h2>
              <div className="w-12 h-[2px] bg-[hsl(43,65%,52%)] mb-8" />
              <p className="font-ibm text-sm font-light text-[hsl(220,10%,58%)] leading-relaxed mb-10">
                Первичная консультация — это возможность оценить перспективы вашего дела и выработать стратегию защиты. Конфиденциальность гарантирована.
              </p>

              <div className="space-y-5 mb-10">
                {[
                  { icon: "Phone", label: PHONE_DISPLAY, href: `tel:${PHONE}` },
                  { icon: "Mail", label: EMAIL, href: `mailto:${EMAIL}` },
                  { icon: "MapPin", label: ADDRESS, href: "#" },
                  { icon: "Clock", label: "Доступен 24/7 для экстренных ситуаций", href: "#" },
                ].map((item, i) => (
                  <a key={i} href={item.href} className="flex items-center gap-4 group">
                    <div className="w-10 h-10 border border-[hsl(220,12%,22%)] flex items-center justify-center shrink-0 group-hover:border-[hsl(43,65%,52%)] transition-colors duration-300">
                      <Icon name={item.icon} fallback="Info" size={15} className="text-[hsl(43,65%,52%)]" />
                    </div>
                    <span className="font-ibm text-sm font-light text-[hsl(220,10%,63%)] group-hover:text-[hsl(45,20%,88%)] transition-colors duration-300">{item.label}</span>
                  </a>
                ))}
              </div>

              <a
                href={`tel:${PHONE}`}
                className="flex items-center justify-center gap-2.5 font-ibm text-xs font-medium tracking-widest uppercase px-8 py-4 bg-[hsl(43,65%,52%)] text-[hsl(220,15%,7%)] hover:bg-[hsl(43,60%,60%)] transition-all duration-300 w-full"
              >
                <Icon name="Phone" size={14} />
                Позвонить сейчас — {PHONE_DISPLAY}
              </a>
            </div>

            {/* Form */}
            <div>
              {submitted ? (
                <div className="border border-[hsl(43,65%,52%)/30] bg-[hsl(220,14%,11%)] p-10 text-center">
                  <div className="w-12 h-12 border border-[hsl(43,65%,52%)] flex items-center justify-center mx-auto mb-6">
                    <Icon name="Check" size={20} className="text-[hsl(43,65%,52%)]" />
                  </div>
                  <h3 className="font-cormorant text-2xl font-semibold mb-3">Заявка принята</h3>
                  <p className="font-ibm text-sm font-light text-[hsl(220,10%,55%)] mb-6">
                    Свяжемся с вами в течение одного рабочего дня. Если ситуация срочная — звоните немедленно.
                  </p>
                  <a href={`tel:${PHONE}`} className="flex items-center justify-center gap-2 font-ibm text-xs font-medium tracking-wider uppercase px-6 py-3 bg-[hsl(43,65%,52%)] text-[hsl(220,15%,7%)]">
                    <Icon name="Phone" size={13} />
                    {PHONE_DISPLAY}
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-0">
                  <div className="bg-[hsl(220,14%,11%)] border border-[hsl(220,12%,17%)] p-1">
                    <div className="font-ibm text-xs font-medium tracking-[0.15em] uppercase text-[hsl(220,10%,40%)] px-4 pt-4 pb-2">
                      Оставить заявку на консультацию
                    </div>
                    <div className="space-y-px">
                      <input
                        type="text"
                        placeholder="Ваше имя *"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="form-input"
                      />
                      <input
                        type="tel"
                        placeholder="Телефон для связи *"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                        className="form-input"
                      />
                      <textarea
                        placeholder="Кратко опишите ситуацию"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        rows={4}
                        className="form-input resize-none"
                      />
                      <button
                        type="submit"
                        disabled={sending}
                        className="w-full font-ibm text-xs font-medium tracking-widest uppercase py-4 bg-[hsl(43,65%,52%)] text-[hsl(220,15%,7%)] hover:bg-[hsl(43,60%,60%)] transition-colors duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                      >
                        {sending ? "Отправляем..." : "Отправить заявку"}
                      </button>
                    </div>
                    {sendError && (
                      <p className="font-ibm text-xs text-red-400 mt-2 px-1">{sendError}</p>
                    )}
                  </div>
                  <p className="font-ibm text-xs text-[hsl(220,10%,35%)] mt-3 leading-relaxed">
                    Нажимая кнопку, вы соглашаетесь с обработкой персональных данных. Все сведения строго конфиденциальны.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="border-t border-[hsl(220,12%,13%)] py-8">
        <div className="max-w-6xl mx-auto px-5 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 border border-[hsl(43,65%,52%)] flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-[hsl(43,65%,52%)]" />
            </div>
            <span className="font-cormorant text-sm tracking-widest uppercase text-[hsl(220,10%,45%)]">
              Маханов Денис Анатольевич · Иркутск
            </span>
          </div>
          <a href={`tel:${PHONE}`} className="font-ibm text-xs text-[hsl(220,10%,40%)] hover:text-[hsl(43,65%,52%)] transition-colors">
            {PHONE_DISPLAY}
          </a>
        </div>
      </footer>

    </div>
  );
}