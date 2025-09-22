import "./App.css";
import { useEffect, useState } from "react";

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="section">
      <h2 className="section-title">{title}</h2>
      <div className="section-body">{children}</div>
    </section>
  );
}

export default function App() {
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setTick((t) => t + 1), 2500);
    return () => clearInterval(t);
  }, []);

  // quité los espacios iniciales en cada string
  const slogans = ["Frontend React", "Unity & WebGL", "Experimentos 3D", "UX Interactiva"];
  const slogan = slogans[tick % slogans.length];
  const projects = [
  {
    title: "Landing animada",
    desc: "Hero con micro-interacciones y secciones.",
    demo: "https://tu-landing.vercel.app",
    repo: "https://github.com/vdkaaa/landing-animada",
    tags: ["React", "TS", "Tailwind"]
  },
  {
    title: "Gallery + Lightbox",
    desc: "Grid de imágenes, modal accesible y navegación con teclado.",
    demo: "https://tu-gallery.vercel.app",
    repo: "https://github.com/vdkaaa/gallery-lightbox",
    tags: ["React", "A11y"]
  },
  {
    title: "Buscador con debounce",
    desc: "Filtro con debounce, lista grande y estados vacíos.",
    demo: "https://tu-buscador.vercel.app",
    repo: "https://github.com/vdkaaa/buscador-debounce",
    tags: ["React", "UX"]
  },
];
  return (
    <div className="min-h-screen text-white bg-gradient-to-b from-slate-950 to-slate-900">
      {/* NAV */}
      <header className="sticky top-0 z-10 backdrop-blur bg-black/20 border-b border-white/10">
        <nav className="container mx-auto px-6 h-14 flex items-center justify-between text-sm">
          <div className="flex items-center gap-6">
            <a href="#about" className="link">About</a>
            <a href="#skills" className="link">Skills</a>
            <a href="#contact" className="link">Contacto</a>
          </div>
          <a className="link underline underline-offset-4" href="https://github.com/vdkaaa" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </nav>
      </header>

      {/* HERO */}
      <main className="container mx-auto px-6 py-24 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight fade-in">
          Diego Santander
          <span className="block text-transparent bg-clip-text gradient-text animate-gradient">
            {slogan}
          </span>
        </h1>

        <p className="mt-4 text-white/80">
          Portafolio rápido con React + Tailwind.
        </p>

        <div className="mt-8 flex justify-center gap-3">
          <a href="#contact" className="btn-primary">Contáctame</a>
          <a href="#projects" className="btn-ghost">Proyectos</a>
        </div>
      </main>

    {/* ABOUT */}
    <Section id="about" title="Sobre mí">
      <p className="leading-relaxed">
        Ingeniero en Desarrollo de Videojuegos y Realidad Virtual (Universidad de Talca, 2025) con más de 5 años de
        experiencia en <strong>Unity</strong>, programación en C# y diseño interactivo 2D/3D. He participado en proyectos
        de distintos géneros —desde tower defense y simuladores hasta shooters narrativos— y he asumido roles de
        <strong> programación integral</strong>, <strong>diseño de mecánicas</strong> y <strong>liderazgo de equipo</strong>.
      </p>
      <p className="mt-4 leading-relaxed">
        Actualmente me estoy enfocando en <strong>desarrollo frontend con React + TypeScript</strong>, creando
        aplicaciones web modernas, catálogos interactivos y dashboards. Mi meta es combinar la experiencia adquirida en
        videojuegos con la construcción de productos digitales versátiles, escalables y centrados en la experiencia de
        usuario.
      </p>
      <p className="mt-4 leading-relaxed">
        Busco contribuir en equipos donde pueda aportar tanto mi <strong>capacidad técnica</strong> como mis
        <strong> habilidades interpersonales</strong> (comunicación, colaboración y adaptabilidad), con la visión de
        crecer hacia un rol de <strong>arquitecto de software o líder técnico</strong>.
      </p>
    </Section>

      {/* SKILLS */}
      <Section id="skills" title="Skills">
        <ul className="skills-grid">
          {["React", "TypeScript", "Tailwind", "Unity", "WebGL", "MapLibre", "Zustand", "Vite"].map((s) => (
            <li key={s} className="skill-item">{s}</li>
          ))}
        </ul>
      </Section>
      {/* PROJECTS */}
      {/*
        Cada proyecto tiene:
        - título
        - descripción
        - tags (array)
        - demo (link)
        - repo (link)
      */}
      <Section id="projects" title="Proyectos">
        <div className="cards">
          {projects.map((p) => (
            <article key={p.title} className="card">
              <header className="card-h">
                <h3 className="card-title">{p.title}</h3>
                <div className="tagrow">
                  {p.tags.map((t) => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
              </header>
              <p className="card-desc">{p.desc}</p>
              <div className="card-actions">
                <a className="btn-primary" href={p.demo} target="_blank" rel="noreferrer">Demo</a>
                <a className="btn-ghost" href={p.repo} target="_blank" rel="noreferrer">Repo</a>
              </div>
            </article>
          ))}
        </div>

        {/* CTA doble: CV + Portafolio PDF */}
        <div className="cta-dual">
          <a className="btn-ghost" href="https://drive.google.com/tu-cv.pdf" target="_blank" rel="noreferrer">
            Ver CV
          </a>
          <a className="btn-ghost" href="https://drive.google.com/tu-portafolio.pdf" target="_blank" rel="noreferrer">
            Ver Portafolio
          </a>
        </div>
      </Section>

      {/* CONTACT */}
      <Section id="contact" title="Contacto">
        <p>
          Email: <a className="link" href="mailto:diegosantander43@gmail.com">diegosantander43@gmail.com</a> ·
          LinkedIn: <a className="link" href="https://www.linkedin.com/in/diego-santander-748423341/">/in/diego-santander-748423341/</a>
        </p>
      </Section>

      <footer className="text-center text-xs text-white/60 py-8">
        © {new Date().getFullYear()} Diego Santander
      </footer>
    </div>
  );
}
