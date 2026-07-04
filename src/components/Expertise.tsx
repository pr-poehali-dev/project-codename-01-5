import { useEffect, useRef, useState } from "react"
import { Sparkles, Palette, Megaphone, Monitor } from "lucide-react"
import { HighlightedText } from "./HighlightedText"

const expertiseAreas = [
  {
    title: "Брендинг и айдентика",
    description: "Разрабатываем логотип, фирменный стиль и визуальную систему, которые выделяют вас среди конкурентов.",
    icon: Sparkles,
  },
  {
    title: "Дизайн и графика",
    description:
      "Создаём упаковку, полиграфию и рекламные материалы, которые притягивают внимание и вызывают доверие.",
    icon: Palette,
  },
  {
    title: "Реклама и продвижение",
    description:
      "Придумываем и запускаем креативные кампании, которые приводят клиентов и усиливают ваш бренд.",
    icon: Megaphone,
  },
  {
    title: "Веб и digital",
    description:
      "Проектируем сайты и лендинги, которые красиво выглядят и превращают посетителей в клиентов.",
    icon: Monitor,
  },
]

export function Expertise() {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const sectionRef = useRef<HTMLElement>(null)
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"))
          if (entry.isIntersecting) {
            setVisibleItems((prev) => [...new Set([...prev, index])])
          }
        })
      },
      { threshold: 0.2 },
    )

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" ref={sectionRef} className="py-32 md:py-29">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-20">
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Наши услуги</p>
          <h2 className="text-6xl font-medium leading-[1.15] tracking-tight mb-6 text-balance lg:text-8xl">
            <HighlightedText>Экспертиза</HighlightedText>, которая
            <br />
            приводит клиентов
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Каждый проект — это команда сильных дизайнеров, стратегов и маркетологов, которые создают креатив, работающий на ваш результат.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
          {expertiseAreas.map((area, index) => {
            const Icon = area.icon
            return (
              <div
                key={area.title}
                ref={(el) => {
                  itemRefs.current[index] = el
                }}
                data-index={index}
                className={`relative pl-8 border-l border-border transition-all duration-700 ${
                  visibleItems.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div
                  className={`transition-all duration-1000 ${
                    visibleItems.includes(index) ? "animate-draw-stroke" : ""
                  }`}
                  style={{
                    transitionDelay: `${index * 150}ms`,
                  }}
                >
                  <Icon className="w-10 h-10 mb-4 text-foreground" strokeWidth={1.25} />
                </div>
                <h3 className="text-xl font-medium mb-4">{area.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{area.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}