import { useState } from "react"
import { Plus } from "lucide-react"

const faqs = [
  {
    question: "С какими проектами вы работаете?",
    answer:
      "Мы работаем с брендами любого масштаба — от стартапов до крупных компаний. Берёмся за брендинг, дизайн, рекламные кампании и digital-проекты. Главное для нас — интересная задача, где креатив может дать реальный результат.",
  },
  {
    question: "Сколько времени занимает проект?",
    answer:
      "Сроки зависят от объёма задачи. Логотип и айдентика обычно занимают 2–4 недели, полноценный ребрендинг или рекламная кампания — от 1 до 2 месяцев. Точные сроки мы согласуем на старте, чтобы вы понимали каждый этап работы.",
  },
  {
    question: "Как строится работа над проектом?",
    answer:
      "Мы начинаем с брифа и погружения в ваш бизнес, затем предлагаем концепцию, дорабатываем её по вашим комментариям и передаём финальные материалы. На каждом этапе вы участвуете в процессе, чтобы результат точно попал в цель.",
  },
  {
    question: "Сколько стоят ваши услуги?",
    answer:
      "Стоимость зависит от задачи и объёма работ. Мы формируем прозрачную смету после первого разговора, где обсуждаем ваши цели, сроки и бюджет. Никаких скрытых доплат — вы заранее знаете, за что платите.",
  },
  {
    question: "Вы работаете удалённо или только офлайн?",
    answer:
      "Мы работаем с клиентами по всей России и за её пределами полностью удалённо. Все встречи, презентации и правки проходят онлайн, а материалы вы получаете в удобном цифровом формате.",
  },
  {
    question: "Как начать сотрудничество?",
    answer:
      "Напишите нам или оставьте заявку — мы созвонимся, обсудим вашу задачу и предложим решение. Первая консультация бесплатна, и уже на ней вы поймёте, чем именно мы можем быть полезны вашему бренду.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 md:py-29">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-16">
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Вопросы</p>
          <h2 className="text-6xl font-medium leading-[1.15] tracking-tight mb-6 text-balance lg:text-7xl">
            Частые вопросы
          </h2>
        </div>

        <div>
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-border">
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full py-6 flex items-start justify-between gap-6 text-left group"
              >
                <span className="text-lg font-medium text-foreground transition-colors group-hover:text-foreground/70">
                  {faq.question}
                </span>
                <Plus
                  className={`w-6 h-6 text-foreground flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-45" : "rotate-0"
                  }`}
                  strokeWidth={1.5}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-muted-foreground leading-relaxed pb-6 pr-12">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}