import { useEffect, useState } from "react";

import {
  ArrowUpRight,
  Camera,
  Aperture,
  X,
  ChevronLeft,
  ChevronRight,
  Code2,
  UserRound,
  Mail,
  Sparkles,
  Globe,
  AtSign,
  BookOpen,
  Shield,
} from "lucide-react";

// SOCIAL LINKS
const socialLinks = [
  {
    name: "GitHub",
    handle: "Explore my code",
    icon: Code2,
    url: "https://github.com/SanskarGavali",
  },
  {
    name: "Instagram",
    handle: "My personal space",
    icon: Camera,
    url: "https://www.instagram.com/sanskar.gavali.9/",
  },
  {
    name: "LunaFrame",
    handle: "My photography collection",
    icon: Camera,
    url: "https://www.instagram.com/lunaframe._/",
  },
  {
    name: "LinkedIn",
    handle: "Professional network",
    icon: UserRound,
    url: "https://www.linkedin.com/in/SanskarGavali/",
  },
  {
    name: "X",
    handle: "Thoughts, technology & updates",
    icon: AtSign,
    url: "https://x.com/Sanskar54",
  },
  {
    name: "Email",
    handle: "Let's get in touch",
    icon: Mail,
    url: "mailto:sanskargavali54@gmail.com",
  },
  {
    name: "Diary",
    handle: "My personal writing space",
    icon: BookOpen,
    url: "https://dearsilence.ai.studio",
  },
];

// PROJECTS
const projects = [
  {
    number: "01",
    category: "PERSONAL PROJECT",
    title: "Dear Silence.",
    description:
      "A digital home for poetry, letters, shayari and everything left unsaid. An experience inspired by the feeling of opening an old handwritten diary.",
    technologies: ["React", "TypeScript", "Vite", "Supabase"],
    link: "https://dearsilence.ai.studio/",
    icon: Code2,
  },
  {
    number: "02",
    category: "WOMEN'S SAFETY",
    title: "Abhaya",
    description:
      "A women's safety Progressive Web Application featuring SOS assistance, location sharing, safe places and emergency reporting.",
    technologies: ["React", "TypeScript", "Supabase", "PWA"],
    link: "https://abhaya-seafty.lovable.app",
    icon: Shield,
  },
];

// PHOTO COLLECTIONS
// Paths match the actual files inside public/images.
const photoCollections = [
  {
    category: "Night Sky",
    images: ["/images/night-sky/stars1.jpg"],
  },
  {
    category: "Nature",
    images: [
      "/images/nature/2.png",
      "/images/nature/3.png",
      "/images/nature/5.png",
      "/images/nature/6.png",
      "/images/nature/7.png",
      "/images/nature/8.png",
      "/images/nature/sweet.png",
      "/images/nature/tulip.png",
    ],
  },
  {
    category: "Moments",
    images: [
      "/images/moments/4.png",
      "/images/moments/9.png",
      "/images/moments/butter.png",
    ],
  },
];

function App() {
  const [showCamera, setShowCamera] = useState(false);
  const [selectedCollection, setSelectedCollection] = useState(null);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const activeCollection = photoCollections.find(
    (collection) => collection.category === selectedCollection
  );
  const activeImages = activeCollection?.images ?? [];
  const lightboxIsOpen =
    lightboxIndex !== null && activeImages.length > 0;

  const showPreviousPhoto = () => {
    setLightboxIndex((current) =>
      current === null
        ? 0
        : (current - 1 + activeImages.length) % activeImages.length
    );
  };

  const showNextPhoto = () => {
    setLightboxIndex((current) =>
      current === null
        ? 0
        : (current + 1) % activeImages.length
    );
  };

  useEffect(() => {
    if (!lightboxIsOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setLightboxIndex(null);
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        setLightboxIndex((current) =>
          current === null
            ? 0
            : (current - 1 + activeImages.length) % activeImages.length
        );
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        setLightboxIndex((current) =>
          current === null
            ? 0
            : (current + 1) % activeImages.length
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIsOpen, activeImages.length]);

  return (
    <main className="site-shell min-h-screen text-white selection:bg-violet-300 selection:text-black">

      {/* NAVIGATION */}
      <nav className="site-nav mx-auto flex max-w-5xl items-center justify-between px-5 py-5 sm:px-7">
        <a href="#" className="text-xl font-bold tracking-tight">
          sanskar<span className="text-violet-400">.</span>
        </a>

        <div className="flex items-center gap-4 text-xs text-zinc-400 sm:gap-7 sm:text-sm">
          <a href="#projects" className="transition hover:text-white">
            Projects
          </a>

          <a href="#photography" className="transition hover:text-white">
            Photography
          </a>

          <a href="#about" className="transition hover:text-white">
            About
          </a>
        </div>
      </nav>

      {/* MAIN PROFILE CARD */}
      <section className="linktree-card mx-auto mt-5 w-[min(100%-28px,1000px)] rounded-3xl border border-violet-500/25 px-5 py-8 sm:px-9 sm:py-10">

        <div className="flex items-center justify-between">
          <p className="text-xs tracking-[0.22em] text-amber-400">
            MY SPACE
          </p>

          <span className="online-pill">
            <span />
            ONLINE
          </span>
        </div>

        {/* PROFILE */}
      <div className="profile-intro mx-auto mt-7 max-w-xl text-center">
          <div className="profile-ring mx-auto mb-4">
            <img
              src="/images/profile.jpg"
              alt="Sanskar"
              className="profile-image h-full w-full rounded-full object-cover object-[center_30%]"
            />
          </div>

         
          <h1>Hey, I'm Sanskar.</h1>

          <p>
          Developer · Photographer · Poetry Writer
          </p>

          <p>
          I capture what eyes see, write what hearts feel,
          <br />
          and think about what words cannot explain. 🌙
          </p>

          <p>
          Building things, capturing moments, exploring technology
          <br />
          and finding stories in silence.
          </p>
        </div>

        {/* SOCIAL LINKS */}
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-7">
          {socialLinks.map((social) => {
            const Icon = social.icon;

            return (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className="linktree-link group flex min-w-0 flex-col items-center justify-center gap-2 rounded-xl border border-violet-500/30 px-2 py-4 text-center"
              >
                <Icon size={21} className="text-violet-300" />

                <span className="text-xs font-semibold text-white">
                  {social.name}
                </span>

                <ArrowUpRight
                  size={14}
                  className="text-amber-400 transition group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>
            );
          })}
        </div>

        {/* PHOTOGRAPHY */}
        <div
          id="photography"
          className="mt-8 rounded-2xl border border-white/10 bg-black/20 p-4 sm:p-5"
        >
          <div className="mb-4 flex items-center justify-between">
            <div>
              <p className="text-[10px] tracking-[0.22em] text-amber-400">
                PHOTOGRAPHY
              </p>

              <h2 className="mt-1 text-lg font-semibold">
                Through my lens.
              </h2>
            </div>

            <Camera size={22} className="text-violet-300" />
          </div>

          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {photoCollections.map((collection) => {
              const Icon =
                collection.category === "Night Sky"
                  ? Camera
                  : collection.category === "Nature"
                    ? Aperture
                    : Sparkles;

              return (
                <button
                  key={collection.category}
                  type="button"
                  onClick={() => {
                    setSelectedCollection(collection.category);
                    setShowCamera(true);
                  }}
                  className="photo-card flex min-h-32 flex-col items-center justify-center rounded-2xl border border-violet-500/25 p-5 text-center"
                >
                  <Icon size={30} className="mb-3 text-amber-400" />

                  <span className="font-semibold text-white">
                    {collection.category}
                  </span>

                  <span className="mt-1 text-xs text-zinc-400">
                    {collection.images.length} photographs · Explore
                  </span>
                </button>
              );
            })}
          </div>

          <p className="mt-3 text-center text-xs text-zinc-500">
            A little collection of moments captured through my lens.
          </p>
        </div>
      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="mx-auto w-[min(100%-28px,720px)] px-1 py-14"
      >
        <div className="mb-5 flex items-end justify-between">
          <div>
            <p className="mb-2 text-[10px] tracking-[0.22em] text-amber-400">
              WHAT I'VE BEEN BUILDING
            </p>

            <h2 className="text-2xl font-semibold">
              Selected projects.
            </h2>
          </div>

          <Code2 className="text-violet-400" />
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {projects.map((project) => {
            const Icon = project.icon;

            return (
              <article
                key={project.number}
                className="project-card rounded-2xl border border-zinc-800 p-5"
              >
                <div className="mb-7 flex items-center justify-between">
                  <span className="text-xs text-zinc-500">
                    {project.number}
                  </span>

                  <Icon size={21} className="text-violet-400" />
                </div>

                <p className="mb-2 text-[10px] tracking-widest text-amber-400">
                  {project.category}
                </p>

                <h3 className="text-lg font-semibold">
                  {project.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-zinc-400">
                  {project.description}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="mx-auto w-[min(100%-28px,720px)] pb-12"
      >
        <div className="about-card rounded-2xl border border-violet-500/20 p-6 sm:p-8">
          <UserRound size={24} className="mb-4 text-amber-400" />

          <p className="mb-2 text-[10px] tracking-[0.22em] text-violet-300">
            A LITTLE ABOUT ME
          </p>

          <h2 className="text-2xl font-semibold">
            Curious by nature.
          </h2>

          <p className="mt-3 text-sm leading-7 text-zinc-400">
            I'm Sanskar, a Computer Engineering student interested in
            software development, emerging technology and creative work.
            This is my little corner of the internet where I share what
            I build, what I capture and what I discover.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="mx-auto flex w-[min(100%-28px,720px)] flex-col gap-3 border-t border-zinc-800 py-7 text-xs text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
        <a href="#" className="text-base font-bold text-white">
          sanskar<span className="text-violet-400">.</span>
        </a>

        <p>
          Built with curiosity. © {new Date().getFullYear()} Sanskar.
        </p>

        <a
          href="mailto:sanskargavali54@gmail.com"
          className="flex items-center gap-2 transition hover:text-white"
        >
          <Mail size={14} />
          Get in touch
        </a>
      </footer>

      {/* INDEPENDENT PHOTO COLLECTION POPUPS */}
      {showCamera && (
        <div
          className="camera-overlay"
          onClick={() => {
            setLightboxIndex(null);
            setShowCamera(false);
            setSelectedCollection(null);
          }}
        >
          <div
            className="camera-window"
            onClick={(event) => event.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="camera-gallery-title"
          >
            <button
              type="button"
              className="camera-close"
              onClick={() => {
                setLightboxIndex(null);
                setShowCamera(false);
                setSelectedCollection(null);
              }}
              aria-label="Close camera collection"
            >
              <X size={22} />
            </button>

            {!selectedCollection ? (
              <>
                <div className="camera-animation">
                  <div className="camera-body">
                    <Camera size={54} strokeWidth={1.3} />

                    <div className="camera-lens">
                      <Aperture size={36} />
                    </div>
                  </div>

                  <div className="camera-flash" />
                </div>

                <p className="camera-eyebrow">THROUGH MY LENS</p>

                <h2 id="camera-gallery-title" className="camera-heading">
                  My Camera Collection<span>.</span>
                </h2>

                <p className="camera-description">
                  Choose a collection to explore.
                </p>

                <div className="camera-collection-menu">
                  {photoCollections.map((collection) => (
                    <button
                      key={collection.category}
                      type="button"
                      className="camera-collection-option"
                      onClick={() =>
                        setSelectedCollection(collection.category)
                      }
                    >
                      <span>{collection.category}</span>

                      <span className="camera-collection-count">
                        {collection.images.length} photos
                      </span>

                      <span aria-hidden="true">→</span>
                    </button>
                  ))}
                </div>
              </>
            ) : (
              <>
                <button
                  type="button"
                  className="camera-back"
                  onClick={() => {
                    setLightboxIndex(null);
                    setSelectedCollection(null);
                  }}
                >
                  ← Back to collections
                </button>

                <p className="camera-eyebrow">THROUGH MY LENS</p>

                <h2 id="camera-gallery-title" className="camera-heading">
                  {selectedCollection}<span>.</span>
                </h2>

                <p className="camera-description">
                  Every frame has a story. Every moment has a memory.
                </p>

                <div className="camera-photo-grid">
                  {activeImages.map((image, index) => (
                    <button
                      key={image}
                      type="button"
                      className="camera-photo-button"
                      onClick={() => setLightboxIndex(index)}
                      aria-label={`Open ${selectedCollection} photo ${index + 1}`}
                    >
                      <img
                        src={image}
                        alt={`${selectedCollection} photo ${index + 1}`}
                        className="camera-photo"
                        loading="lazy"
                      />
                      <span className="camera-photo-hint">VIEW PHOTO</span>
                    </button>
                  ))}
                </div>
              </>
            )}

            <p className="gallery-note">
              Every photograph holds a memory.
            </p>
          </div>
        </div>
      )}

      {/* INTERACTIVE FULL-SCREEN PHOTO VIEWER */}
      {lightboxIsOpen && (
        <div
          className="photo-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`${selectedCollection} photo viewer`}
          onClick={() => setLightboxIndex(null)}
        >
          <button
            type="button"
            className="photo-lightbox-close"
            onClick={() => setLightboxIndex(null)}
            aria-label="Close photo viewer"
          >
            <X size={24} />
          </button>

          {activeImages.length > 1 && (
            <>
              <button
                type="button"
                className="photo-lightbox-nav photo-lightbox-prev"
                onClick={(event) => {
                  event.stopPropagation();
                  showPreviousPhoto();
                }}
                aria-label="Previous photo"
              >
                <ChevronLeft size={28} />
              </button>

              <button
                type="button"
                className="photo-lightbox-nav photo-lightbox-next"
                onClick={(event) => {
                  event.stopPropagation();
                  showNextPhoto();
                }}
                aria-label="Next photo"
              >
                <ChevronRight size={28} />
              </button>
            </>
          )}

          <div
            className="photo-lightbox-content"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              key={activeImages[lightboxIndex]}
              src={activeImages[lightboxIndex]}
              alt={`${selectedCollection} photo ${lightboxIndex + 1}`}
              className="photo-lightbox-image"
            />
            <p className="photo-lightbox-caption">
              {selectedCollection} · {lightboxIndex + 1} / {activeImages.length}
            </p>
          </div>
        </div>
      )}
    </main>
  );
}

export default App;