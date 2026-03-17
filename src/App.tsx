/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useRef } from "react";
import { motion } from "motion/react";
import { Canvas, useFrame } from "@react-three/fiber";
import { 
  Float, 
  MeshDistortMaterial, 
  Stars, 
  TorusKnot, 
  Box, 
  Cylinder, 
  Sphere, 
  Torus,
  Icosahedron,
  Octahedron,
  Dodecahedron,
  Environment 
} from "@react-three/drei";
import * as THREE from "three";
import { Globe } from "lucide-react";

// --- TRANSLATIONS ---
const t = {
  fr: {
    heroSub: "Construire en toute sécurité.",
    probTitle: "Le Problème",
    prob1: "Prestataires non fiables",
    prob2: "Matériaux inaccessibles",
    solTitle: "Notre Solution",
    solClient: "Client",
    solMat: "Matériaux",
    solOuv: "Artisans",
    whyTitle: "Pourquoi Maintenant ?",
    why1: "Tourisme",
    why2: "Digitalisation",
    why3: "Forte Demande",
    bmTitle: "Modèle Économique",
    bm1: "Commissions",
    bm1Sub: "Sur les transactions",
    bm2: "Abonnements",
    bm2Sub: "Pour les professionnels",
    bm3: "Logistique",
    bm3Sub: "Services de livraison",
    marketTitle: "Taille du Marché",
    market1: "+19.6%",
    market1Sub: "Croissance",
    market2: "5.9%",
    market2Sub: "Du PIB",
    market3: "1.44 Md $",
    market3Sub: "Valeur",
    gtmTitle: "Stratégie",
    gtm1: "1. Artisans & Fournisseurs",
    gtm2: "2. Clients Finaux",
    visTitle: "Notre Vision",
    vis1: "Digitaliser le BTP en Afrique",
    teamTitle: "L'Équipe",
    thanks: "MERCI",
    ready: "L'avenir commence ici."
  },
  en: {
    heroSub: "Build safely.",
    probTitle: "The Problem",
    prob1: "Unreliable Providers",
    prob2: "Inaccessible Materials",
    solTitle: "Our Solution",
    solClient: "Client",
    solMat: "Materials",
    solOuv: "Workers",
    whyTitle: "Why Now?",
    why1: "Tourism",
    why2: "Digitalization",
    why3: "High Demand",
    bmTitle: "Business Model",
    bm1: "Commissions",
    bm1Sub: "On transactions",
    bm2: "Subscriptions",
    bm2Sub: "For professionals",
    bm3: "Logistics",
    bm3Sub: "Delivery services",
    marketTitle: "Market Size",
    market1: "+19.6%",
    market1Sub: "Growth",
    market2: "5.9%",
    market2Sub: "Of GDP",
    market3: "$1.44 Bn",
    market3Sub: "Value",
    gtmTitle: "Go To Market",
    gtm1: "1. Suppliers & Workers",
    gtm2: "2. End Clients",
    visTitle: "Our Vision",
    vis1: "Digitalize African Construction",
    teamTitle: "The Team",
    thanks: "THANK YOU",
    ready: "The future starts here."
  }
};

// --- 3D COMPONENTS ---

const Hero3D = () => {
  const mesh = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.y = state.clock.elapsedTime * 0.2;
      mesh.current.rotation.x = state.clock.elapsedTime * 0.1;
    }
  });
  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={2}>
      <Icosahedron ref={mesh} args={[3, 1]}>
        <meshStandardMaterial color="#10b981" wireframe />
      </Icosahedron>
    </Float>
  );
};

const Problem3D = () => (
  <Float speed={3} rotationIntensity={1} floatIntensity={2}>
    <Sphere args={[2, 64, 64]} position={[-3, 0, -2]}>
      <MeshDistortMaterial color="#7f1d1d" distort={0.6} speed={2} roughness={0.2} />
    </Sphere>
    <Sphere args={[1.5, 64, 64]} position={[3, 1, -4]}>
      <MeshDistortMaterial color="#991b1b" distort={0.5} speed={3} roughness={0.3} />
    </Sphere>
  </Float>
);

const Solution3D = () => {
  const group = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = state.clock.elapsedTime * 0.5;
      group.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
    }
  });
  return (
    <group ref={group}>
      <Box args={[2, 2, 2]}>
        <meshStandardMaterial color="#10b981" wireframe />
      </Box>
      <Box args={[1.9, 1.9, 1.9]}>
        <meshStandardMaterial color="#064e3b" transparent opacity={0.8} />
      </Box>
      
      {/* Orbiting spheres */}
      <group rotation={[0, 0, Math.PI / 4]}>
        <Sphere args={[0.4, 32, 32]} position={[4, 0, 0]}>
          <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.5} />
        </Sphere>
      </group>
      <group rotation={[0, Math.PI / 3, -Math.PI / 4]}>
        <Sphere args={[0.4, 32, 32]} position={[4, 0, 0]}>
          <meshStandardMaterial color="#10b981" emissive="#10b981" emissiveIntensity={0.5} />
        </Sphere>
      </group>
      <group rotation={[Math.PI / 2, 0, Math.PI / 6]}>
        <Sphere args={[0.4, 32, 32]} position={[4, 0, 0]}>
          <meshStandardMaterial color="#10b981" emissive="#10b981" emissiveIntensity={0.5} />
        </Sphere>
      </group>
    </group>
  );
};

const WhyNow3D = () => (
  <group>
    <Float speed={2} position={[-4, 0, -3]} rotationIntensity={2}><Torus args={[1.5, 0.4, 16, 32]}><meshStandardMaterial color="#ffffff" wireframe/></Torus></Float>
    <Float speed={2.5} position={[4, 2, -5]} rotationIntensity={2}><Box args={[2, 2, 2]}><meshStandardMaterial color="#10b981" wireframe/></Box></Float>
    <Float speed={1.5} position={[0, -3, -2]} rotationIntensity={2}><Sphere args={[1.5, 16, 16]}><meshStandardMaterial color="#064e3b" wireframe/></Sphere></Float>
  </group>
);

const BusinessModel3D = () => {
  const group = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = state.clock.elapsedTime * 0.3;
      group.current.rotation.x = state.clock.elapsedTime * 0.2;
    }
  });
  return (
    <group ref={group}>
      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <Octahedron args={[2, 0]}>
          <meshStandardMaterial color="#10b981" wireframe />
        </Octahedron>
      </Float>
      <Torus args={[3, 0.1, 16, 100]} rotation={[Math.PI / 2, 0, 0]}>
        <meshStandardMaterial color="#064e3b" />
      </Torus>
      <Torus args={[3, 0.1, 16, 100]} rotation={[0, Math.PI / 2, 0]}>
        <meshStandardMaterial color="#064e3b" />
      </Torus>
    </group>
  );
};

const MarketSize3D = () => (
  <group position={[0, -3, -4]}>
    <Float speed={2} floatIntensity={0.5}>
      <Cylinder args={[0.8, 0.8, 3, 32]} position={[-4, 1.5, 0]}>
        <meshStandardMaterial color="#064e3b" metalness={0.8} roughness={0.2} />
      </Cylinder>
    </Float>
    <Float speed={2} floatIntensity={0.5}>
      <Cylinder args={[0.8, 0.8, 6, 32]} position={[0, 3, 0]}>
        <meshStandardMaterial color="#047857" metalness={0.8} roughness={0.2} />
      </Cylinder>
    </Float>
    <Float speed={2} floatIntensity={0.5}>
      <Cylinder args={[0.8, 0.8, 9, 32]} position={[4, 4.5, 0]}>
        <meshStandardMaterial color="#10b981" metalness={0.8} roughness={0.2} />
      </Cylinder>
    </Float>
  </group>
);

const GoToMarket3D = () => {
  const ref = useRef<THREE.Group>(null);
  useFrame((state) => {
    if(ref.current) ref.current.rotation.z = state.clock.elapsedTime * 0.2;
  });
  return (
    <group ref={ref}>
      <Float position={[-3, 0, 0]}><Box args={[1.5,1.5,1.5]}><meshStandardMaterial color="#10b981" wireframe/></Box></Float>
      <Float position={[3, 0, 0]}><Sphere args={[1.2, 32, 32]}><meshStandardMaterial color="#ffffff" wireframe/></Sphere></Float>
      {/* Connecting particles */}
      {[...Array(7)].map((_, i) => (
        <Sphere key={i} args={[0.15]} position={[-2.25 + i * 0.75, 0, 0]}>
          <meshStandardMaterial color="#ffffff" emissive="#ffffff" />
        </Sphere>
      ))}
    </group>
  );
};

const Vision3D = () => {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if(ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.5;
      ref.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });
  return (
    <Float>
      <TorusKnot ref={ref} args={[2, 0.6, 128, 32]}>
        <meshStandardMaterial color="#10b981" emissive="#064e3b" metalness={0.9} roughness={0.1} />
      </TorusKnot>
    </Float>
  );
};

const Team3D = () => (
  <group>
    <Float position={[-5, 2, -4]} speed={2} rotationIntensity={2}><Box args={[2, 2, 2]}><meshStandardMaterial color="#10b981" wireframe/></Box></Float>
    <Float position={[-2, -3, -3]} speed={2.5} rotationIntensity={2}><Octahedron args={[2]}><meshStandardMaterial color="#ffffff" wireframe/></Octahedron></Float>
    <Float position={[2, 3, -5]} speed={1.5} rotationIntensity={2}><Dodecahedron args={[2]}><meshStandardMaterial color="#10b981" wireframe/></Dodecahedron></Float>
    <Float position={[5, -2, -4]} speed={3} rotationIntensity={2}><Icosahedron args={[2]}><meshStandardMaterial color="#ffffff" wireframe/></Icosahedron></Float>
  </group>
);

const ThankYou3D = () => {
  const ref = useRef<THREE.Group>(null);
  useFrame((state) => {
    if(ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.1;
      ref.current.rotation.z = state.clock.elapsedTime * 0.05;
    }
  });
  return (
    <group ref={ref}>
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={2} />
      <Float>
        <Sphere args={[3, 64, 64]}>
          <meshStandardMaterial color="#000000" metalness={1} roughness={0} />
        </Sphere>
      </Float>
    </group>
  );
};

// --- REUSABLE COMPONENTS ---
const Section = ({ children, canvas, className = "" }: { children: React.ReactNode, canvas?: React.ReactNode, className?: string }) => (
  <section className={`min-h-screen flex flex-col items-center justify-center p-8 relative overflow-hidden ${className}`}>
    {canvas && (
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 10]} intensity={1} />
          {canvas}
          <Environment preset="city" />
        </Canvas>
      </div>
    )}
    <div className="z-10 w-full flex flex-col items-center">
      {children}
    </div>
  </section>
);

const Title = ({ children }: { children: React.ReactNode }) => (
  <motion.h2 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className="text-4xl md:text-7xl font-black mb-20 tracking-tighter text-center text-white/90 drop-shadow-2xl"
  >
    {children}
  </motion.h2>
);

// --- PAGES ---

const Hero = ({ lang }: { lang: 'fr' | 'en' }) => (
  <Section className="bg-black" canvas={<Hero3D />}>
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-900/20 rounded-full blur-[120px] pointer-events-none" />
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      className="z-10 flex flex-col items-center bg-black/40 backdrop-blur-sm p-12 rounded-[3rem] border border-white/5"
    >
      <h1 className="text-6xl md:text-[9rem] font-black tracking-tighter leading-none text-center bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40">
        BUILD<br/>CONNECT<br/>AFRICA
      </h1>
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="mt-12 text-2xl md:text-4xl font-light tracking-widest text-emerald-400/80 uppercase"
      >
        {t[lang].heroSub}
      </motion.p>
    </motion.div>
  </Section>
);

const Problem = ({ lang }: { lang: 'fr' | 'en' }) => (
  <Section className="bg-zinc-950" canvas={<Problem3D />}>
    <Title>{t[lang].probTitle}</Title>
    <div className="flex flex-col md:flex-row gap-16 md:gap-32 w-full max-w-6xl justify-center items-center">
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="flex flex-col items-center text-center group bg-black/40 backdrop-blur-md p-10 rounded-3xl border border-red-900/30"
      >
        <h3 className="text-2xl md:text-4xl font-light text-white/80">{t[lang].prob1}</h3>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="flex flex-col items-center text-center group bg-black/40 backdrop-blur-md p-10 rounded-3xl border border-red-900/30"
      >
        <h3 className="text-2xl md:text-4xl font-light text-white/80">{t[lang].prob2}</h3>
      </motion.div>
    </div>
  </Section>
);

const Solution = ({ lang }: { lang: 'fr' | 'en' }) => (
  <Section className="bg-black" canvas={<Solution3D />}>
    <Title>{t[lang].solTitle}</Title>
    <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 w-full max-w-7xl">
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="text-3xl font-light text-white/60 bg-black/40 backdrop-blur-md px-8 py-4 rounded-full border border-white/10"
      >
        {t[lang].solClient}
      </motion.div>

      <div className="flex flex-col gap-12 md:gap-32 md:ml-24">
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-light text-white/60 bg-black/40 backdrop-blur-md px-8 py-4 rounded-full border border-white/10"
        >
          {t[lang].solMat}
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-3xl font-light text-white/60 bg-black/40 backdrop-blur-md px-8 py-4 rounded-full border border-white/10"
        >
          {t[lang].solOuv}
        </motion.div>
      </div>
    </div>
  </Section>
);

const WhyNow = ({ lang }: { lang: 'fr' | 'en' }) => (
  <Section className="bg-zinc-950" canvas={<WhyNow3D />}>
    <Title>{t[lang].whyTitle}</Title>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-24 w-full max-w-6xl">
      {[
        { text: t[lang].why1 },
        { text: t[lang].why2 },
        { text: t[lang].why3 }
      ].map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.2 }}
          className="flex flex-col items-center text-center bg-black/40 backdrop-blur-md p-10 rounded-3xl border border-white/10"
        >
          <h3 className="text-3xl md:text-5xl font-light tracking-tight text-white/90">{item.text}</h3>
        </motion.div>
      ))}
    </div>
  </Section>
);

const BusinessModel = ({ lang }: { lang: 'fr' | 'en' }) => (
  <Section className="bg-black" canvas={<BusinessModel3D />}>
    <Title>{t[lang].bmTitle}</Title>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-24 w-full max-w-6xl">
      {[
        { title: t[lang].bm1, sub: t[lang].bm1Sub },
        { title: t[lang].bm2, sub: t[lang].bm2Sub },
        { title: t[lang].bm3, sub: t[lang].bm3Sub }
      ].map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.2 }}
          className="flex flex-col items-center text-center bg-black/40 backdrop-blur-md p-10 rounded-3xl border border-emerald-900/30"
        >
          <h3 className="text-3xl md:text-4xl font-light tracking-tight text-white/90 mb-4">{item.title}</h3>
          <p className="text-lg md:text-xl font-light tracking-widest text-emerald-400/80 uppercase">{item.sub}</p>
        </motion.div>
      ))}
    </div>
  </Section>
);

const MarketSize = ({ lang }: { lang: 'fr' | 'en' }) => (
  <Section className="bg-black" canvas={<MarketSize3D />}>
    <Title>{t[lang].marketTitle}</Title>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-16 w-full max-w-7xl">
      {[
        { val: t[lang].market1, sub: t[lang].market1Sub },
        { val: t[lang].market2, sub: t[lang].market2Sub },
        { val: t[lang].market3, sub: t[lang].market3Sub }
      ].map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.2, duration: 0.8 }}
          className="flex flex-col items-center justify-center text-center bg-black/40 backdrop-blur-md p-10 rounded-3xl border border-emerald-900/30"
        >
          <span className="text-6xl md:text-8xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-emerald-400 to-emerald-900 mb-4">
            {item.val}
          </span>
          <span className="text-xl md:text-2xl font-light tracking-widest text-white/40 uppercase">
            {item.sub}
          </span>
        </motion.div>
      ))}
    </div>
  </Section>
);

const GoToMarket = ({ lang }: { lang: 'fr' | 'en' }) => (
  <Section className="bg-zinc-950" canvas={<GoToMarket3D />}>
    <Title>{t[lang].gtmTitle}</Title>
    <div className="flex flex-col md:flex-row gap-16 md:gap-32 w-full max-w-5xl justify-center items-center">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col items-center text-center bg-black/40 backdrop-blur-md p-10 rounded-3xl border border-emerald-900/30"
      >
        <h3 className="text-3xl md:text-4xl font-light text-white/90">{t[lang].gtm1}</h3>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="flex flex-col items-center text-center bg-black/40 backdrop-blur-md p-10 rounded-3xl border border-blue-900/30"
      >
        <h3 className="text-3xl md:text-4xl font-light text-white/90">{t[lang].gtm2}</h3>
      </motion.div>
    </div>
  </Section>
);

const Vision = ({ lang }: { lang: 'fr' | 'en' }) => (
  <Section className="bg-black" canvas={<Vision3D />}>
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-emerald-900/20 blur-[150px] pointer-events-none" />
    <Title>{t[lang].visTitle}</Title>
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="flex flex-col items-center text-center z-10 bg-black/40 backdrop-blur-md p-16 rounded-[3rem] border border-emerald-900/30"
    >
      <h3 className="text-4xl md:text-7xl font-light tracking-tight text-white/90 max-w-4xl leading-tight">
        {t[lang].vis1}
      </h3>
    </motion.div>
  </Section>
);

const Team = ({ lang }: { lang: 'fr' | 'en' }) => {
  const members = ["CHANCE", "GOUDAYI", "AMEGAH", "YANIS"];
  return (
    <Section className="bg-zinc-950" canvas={<Team3D />}>
      <Title>{t[lang].teamTitle}</Title>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 w-full max-w-6xl">
        {members.map((name, i) => (
          <motion.div
            key={name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex flex-col items-center bg-black/40 backdrop-blur-md p-8 rounded-3xl border border-white/10"
          >
            <h3 className="text-xl md:text-2xl font-light tracking-widest text-white/80">{name}</h3>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

const ThankYou = ({ lang }: { lang: 'fr' | 'en' }) => (
  <Section className="bg-black" canvas={<ThankYou3D />}>
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      className="text-center z-10 bg-black/40 backdrop-blur-md p-16 rounded-[3rem] border border-white/5"
    >
      <h2 className="text-7xl md:text-[12rem] font-black tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20 mb-8">
        {t[lang].thanks}
      </h2>
      <p className="text-2xl md:text-4xl font-light tracking-widest text-emerald-400/80 uppercase">
        {t[lang].ready}
      </p>
    </motion.div>
  </Section>
);

export default function App() {
  const [lang, setLang] = useState<'fr' | 'en'>('fr');

  return (
    <div className="font-sans bg-black text-white selection:bg-emerald-500/30 selection:text-white overflow-x-hidden">
      {/* Language Toggle */}
      <div className="fixed top-6 right-6 z-50">
        <button 
          onClick={() => setLang(lang === 'fr' ? 'en' : 'fr')}
          className="flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full text-sm font-medium tracking-widest transition-all cursor-pointer"
        >
          <Globe size={16} />
          {lang === 'fr' ? 'EN' : 'FR'}
        </button>
      </div>

      <Hero lang={lang} />
      <Problem lang={lang} />
      <Solution lang={lang} />
      <WhyNow lang={lang} />
      <BusinessModel lang={lang} />
      <MarketSize lang={lang} />
      <GoToMarket lang={lang} />
      <Vision lang={lang} />
      <Team lang={lang} />
      <ThankYou lang={lang} />
    </div>
  );
}
