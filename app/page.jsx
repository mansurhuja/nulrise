import { useState } from "react"; import { motion } from "framer-motion";

export default function NulriseFinal() { const [lang, setLang] = useState("en");

const t = { en: { slogan: "Clothing for those who rise from zero", actions: "Dream. Act. Grow.", shop: "Shop Collection", philosophyTitle: "Our Philosophy", philosophyText: "NULRISE is not fashion. It is identity. Created for those who started from zero and chose discipline over excuses. Every piece represents growth, strength, and silence louder than words.", collection: "Collections", men: "Men", women: "Women", limited: "Limited 2026", lookbook: "Lookbook", contact: "Contacts", }, ru: { slogan: "Одежда для тех, кто поднимается с нуля", actions: "Мечтай. Действуй. Расти.", shop: "Коллекция", philosophyTitle: "Философия бренда", philosophyText: "NULRISE — это не мода. Это идентичность. Бренд для тех, кто начал с нуля и выбрал дисциплину вместо оправданий. Каждая вещь — символ роста, силы и тишины громче слов.", collection: "Коллекции", men: "Мужская", women: "Женская", limited: "Limited 2026", lookbook: "Лукбук", contact: "Контакты", }, };

return ( <div className="bg-black text-white min-h-screen font-sans"> {/* HEADER */} <header className="flex justify-between items-center px-6 py-6"> <h1 className="text-2xl tracking-[0.3em] font-bold">NULRISE</h1> <button onClick={() => setLang(lang === "en" ? "ru" : "en")} className="border rounded-full px-4 py-1 text-sm hover:bg-white hover:text-black transition" > {lang === "en" ? "RU" : "EN"} </button> </header>

{/* HERO */}
  <section className="h-[90vh] flex flex-col justify-center items-center text-center px-6">
    <motion.h2
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="text-5xl md:text-7xl font-extrabold mb-6"
    >
      {t[lang].slogan}
    </motion.h2>
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="text-xl opacity-70 mb-10"
    >
      {t[lang].actions}
    </motion.p>
    <button className="border px-10 py-4 rounded-full text-lg hover:bg-white hover:text-black transition">
      {t[lang].shop}
    </button>
  </section>

  {/* COLLECTIONS */}
  <section className="max-w-6xl mx-auto px-6 py-24">
    <h3 className="text-3xl mb-12">{t[lang].collection}</h3>
    <div className="grid md:grid-cols-3 gap-8">
      {[t[lang].men, t[lang].women, t[lang].limited].map((item) => (
        <motion.div
          whileHover={{ scale: 1.05 }}
          key={item}
          className="border rounded-2xl h-48 flex items-center justify-center text-xl"
        >
          {item}
        </motion.div>
      ))}
    </div>
  </section>

  {/* LOOKBOOK */}
  <section className="bg-neutral-900 py-24 text-center">
    <h3 className="text-3xl mb-10">{t[lang].lookbook}</h3>
    <p className="opacity-60">Premium mannequin visuals coming soon</p>
  </section>

  {/* PHILOSOPHY */}
  <section className="px-6 py-24 max-w-4xl mx-auto text-center">
    <h3 className="text-3xl mb-8">{t[lang].philosophyTitle}</h3>
    <p className="text-lg opacity-75">{t[lang].philosophyText}</p>
  </section>

  {/* FOOTER */}
  <footer className="border-t border-white/10 py-10 text-center opacity-50">
    <p>{t[lang].contact}</p>
    <p className="mt-2">Instagram · TikTok · © 2026 NULRISE</p>
  </footer>
</div>

); }
