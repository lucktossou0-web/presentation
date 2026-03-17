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
  Cone,
  Cylinder,
  Environment 
} from "@react-three/drei";
import * as THREE from "three";
import { Globe, UserPlus, HardHat, Rocket } from "lucide-react";

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
    hiwTitle: "Comment ça marche",
    hiw1: "Créez votre compte",
    hiw1Sub: "Inscription simple et rapide",
    hiw2: "Choisissez votre profil",
    hiw2Sub: "Client, artisan ou fournisseur",
    hiw3: "Vivez l'expérience",
    hiw3Sub: "Gérez vos projets en toute fluidité",
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
    hiwTitle: "How it works",
    hiw1: "Create your account",
    hiw1Sub: "Quick and easy registration",
    hiw2: "Choose your profile",
    hiw2Sub: "Client, artisan, or supplier",
    hiw3: "Live the experience",
    hiw3Sub: "Manage your projects seamlessly",
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

const BlueprintWalls = () => (
  <group position={[0, 0, 0.02]}>
    {/* Outer Walls */}
    <Box args={[10, 0.1, 0.1]} position={[0, 4, 0]}><meshBasicMaterial color="#ffffff" /></Box>
    <Box args={[10, 0.1, 0.1]} position={[0, -4, 0]}><meshBasicMaterial color="#ffffff" /></Box>
    <Box args={[0.1, 8, 0.1]} position={[-5, 0, 0]}><meshBasicMaterial color="#ffffff" /></Box>
    <Box args={[0.1, 8, 0.1]} position={[5, 0, 0]}><meshBasicMaterial color="#ffffff" /></Box>

    {/* Inner Rooms */}
    <Box args={[4, 0.1, 0.1]} position={[-3, 0, 0]}><meshBasicMaterial color="#ffffff" /></Box>
    <Box args={[0.1, 4, 0.1]} position={[-1, 2, 0]}><meshBasicMaterial color="#ffffff" /></Box>
    <Box args={[0.1, 3, 0.1]} position={[2, -2.5, 0]}><meshBasicMaterial color="#ffffff" /></Box>
    <Box args={[3, 0.1, 0.1]} position={[3.5, -1, 0]}><meshBasicMaterial color="#ffffff" /></Box>
    <Box args={[0.1, 2, 0.1]} position={[1, 3, 0]}><meshBasicMaterial color="#ffffff" /></Box>
    <Box args={[2, 0.1, 0.1]} position={[2, 2, 0]}><meshBasicMaterial color="#ffffff" /></Box>

    {/* Doors (gaps filled with background color) */}
    <Box args={[0.8, 0.11, 0.12]} position={[-1, 0, 0]}><meshBasicMaterial color="#0f172a" /></Box>
    <Box args={[0.11, 0.8, 0.12]} position={[2, -1.5, 0]}><meshBasicMaterial color="#0f172a" /></Box>
    <Box args={[0.8, 0.11, 0.12]} position={[0, -4, 0]}><meshBasicMaterial color="#0f172a" /></Box>

    {/* Measurements / Details */}
    <Box args={[1, 0.05, 0.02]} position={[-3, 4.3, 0]}><meshBasicMaterial color="#93c5fd" /></Box>
    <Box args={[0.05, 1, 0.02]} position={[-5.3, 2, 0]}><meshBasicMaterial color="#93c5fd" /></Box>
    <Box args={[0.5, 0.05, 0.02]} position={[2, 2.3, 0]}><meshBasicMaterial color="#93c5fd" /></Box>
    <Box args={[0.8, 0.05, 0.02]} position={[3.5, -1.3, 0]}><meshBasicMaterial color="#93c5fd" /></Box>
  </group>
);

const Solution3D = () => {
  const group = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (group.current) {
      group.current.rotation.z = state.clock.elapsedTime * 0.05;
      group.current.rotation.x = -Math.PI / 3 + Math.sin(state.clock.elapsedTime * 0.2) * 0.05;
      group.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.1) * 0.05;
    }
  });

  return (
    <group ref={group} position={[0, 0, -8]} scale={[1.5, 1.5, 1.5]}>
      <Float speed={1} rotationIntensity={0.05} floatIntensity={0.2}>
        {/* Main Blueprint Board */}
        <Box args={[20, 14, 0.05]}>
          <meshStandardMaterial color="#0f172a" roughness={0.9} />
        </Box>
        
        {/* Grid lines */}
        <group position={[0, 0, 0.03]}>
          {Array.from({ length: 21 }).map((_, i) => (
            <Box key={`v-${i}`} args={[0.02, 14, 0.01]} position={[-10 + i, 0, 0]}>
              <meshBasicMaterial color="#1e3a8a" transparent opacity={0.5} />
            </Box>
          ))}
          {Array.from({ length: 15 }).map((_, i) => (
            <Box key={`h-${i}`} args={[20, 0.02, 0.01]} position={[0, -7 + i, 0]}>
              <meshBasicMaterial color="#1e3a8a" transparent opacity={0.5} />
            </Box>
          ))}
        </group>

        {/* Floor Plan Lines */}
        <BlueprintWalls />

        {/* 3D Wireframe Building Emerging from the Blueprint */}
        <group position={[0, 0, 0]}>
          {/* Base Building */}
          <Box args={[6, 4, 3]} position={[-1, 1, 1.5]}>
            <meshStandardMaterial color="#60a5fa" wireframe transparent opacity={0.6} />
          </Box>
          {/* Roof */}
          <Cone args={[4.5, 3, 4]} position={[-1, 1, 4.5]} rotation={[Math.PI/4, 0, 0]}>
            <meshStandardMaterial color="#93c5fd" wireframe transparent opacity={0.8} />
          </Cone>
          {/* Secondary structure */}
          <Box args={[3, 3, 2]} position={[3.5, -1.5, 1]}>
            <meshStandardMaterial color="#3b82f6" wireframe transparent opacity={0.5} />
          </Box>
        </group>

        {/* Floating elements (rulers, pencils, etc.) */}
        <Float speed={2} rotationIntensity={0.5} floatIntensity={1} position={[6, 4, 1]}>
          {/* Stylized Pencil */}
          <group rotation={[0, 0, Math.PI / 4]}>
            <Cylinder args={[0.1, 0.1, 3, 6]}>
              <meshStandardMaterial color="#fbbf24" roughness={0.6} />
            </Cylinder>
            <Cone args={[0.1, 0.3, 6]} position={[0, -1.65, 0]} rotation={[Math.PI, 0, 0]}>
              <meshStandardMaterial color="#fcd34d" />
            </Cone>
            <Cone args={[0.03, 0.1, 6]} position={[0, -1.75, 0]} rotation={[Math.PI, 0, 0]}>
              <meshStandardMaterial color="#1e293b" />
            </Cone>
          </group>
        </Float>

        <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5} position={[-7, -4, 0.5]}>
          {/* Stylized Ruler */}
          <Box args={[0.5, 4, 0.05]} rotation={[0, 0, Math.PI / 6]}>
            <meshStandardMaterial color="#e2e8f0" metalness={0.5} roughness={0.2} />
          </Box>
        </Float>
      </Float>
    </group>
  );
};

const HowItWorks3D = () => {
  const group = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });
  return (
    <group ref={group} position={[0, 0, -5]}>
      {/* Construction Cone */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1} position={[-4, -2, 0]}>
        <Cone args={[1, 2, 16]}>
          <meshStandardMaterial color="#f97316" roughness={0.5} wireframe />
        </Cone>
      </Float>
      {/* Concrete Block 1 */}
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5} position={[3, -1, -2]}>
        <Box args={[2, 1, 1]}>
          <meshStandardMaterial color="#9ca3af" roughness={0.8} wireframe />
        </Box>
      </Float>
      {/* Concrete Block 2 */}
      <Float speed={1.8} rotationIntensity={0.3} floatIntensity={0.8} position={[2, 1, -1]}>
        <Box args={[2, 1, 1]}>
          <meshStandardMaterial color="#9ca3af" roughness={0.8} wireframe />
        </Box>
      </Float>
      {/* Steel Beam / Pillar */}
      <Float speed={1.2} rotationIntensity={0.8} floatIntensity={1.2} position={[-2, 2, -3]}>
        <Cylinder args={[0.2, 0.2, 4, 16]} rotation={[0, 0, Math.PI / 4]}>
          <meshStandardMaterial color="#eab308" metalness={0.8} roughness={0.2} wireframe />
        </Cylinder>
      </Float>
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
    <Float position={[-6, 2, -5]} speed={1.5} rotationIntensity={1.5}><Box args={[2, 2, 2]}><meshStandardMaterial color="#10b981" wireframe/></Box></Float>
    <Float position={[-3, -3, -4]} speed={2} rotationIntensity={1.5}><Octahedron args={[2]}><meshStandardMaterial color="#ffffff" wireframe/></Octahedron></Float>
    <Float position={[0, 3, -6]} speed={1.2} rotationIntensity={1.5}><Dodecahedron args={[2]}><meshStandardMaterial color="#10b981" wireframe/></Dodecahedron></Float>
    <Float position={[3, -2, -4]} speed={2.5} rotationIntensity={1.5}><Icosahedron args={[2]}><meshStandardMaterial color="#ffffff" wireframe/></Icosahedron></Float>
    <Float position={[6, 2, -5]} speed={1.8} rotationIntensity={1.5}><Torus args={[1.2, 0.4, 16, 32]}><meshStandardMaterial color="#10b981" wireframe/></Torus></Float>
  </group>
);

const ThankYou3D = () => {
  const group = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <group ref={group} position={[0, -1.5, -5]}>
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={2} />
      {/* Mason Worker */}
      <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
        <group position={[0, 1, 0]}>
          {/* Body */}
          <Cylinder args={[0.6, 0.6, 1.5, 16]} position={[0, 0, 0]}>
            <meshStandardMaterial color="#f97316" roughness={0.8} /> {/* Orange vest */}
          </Cylinder>
          {/* Head */}
          <Sphere args={[0.4, 32, 32]} position={[0, 1.1, 0]}>
            <meshStandardMaterial color="#fcd34d" roughness={0.5} /> {/* Skin tone */}
          </Sphere>
          {/* Hard Hat */}
          <Sphere args={[0.42, 32, 32, 0, Math.PI * 2, 0, Math.PI / 2]} position={[0, 1.15, 0]}>
            <meshStandardMaterial color="#eab308" roughness={0.3} /> {/* Yellow hat */}
          </Sphere>
          {/* Hard Hat Brim */}
          <Cylinder args={[0.5, 0.5, 0.05, 32]} position={[0, 1.15, 0]}>
            <meshStandardMaterial color="#eab308" roughness={0.3} />
          </Cylinder>
          
          {/* Arm holding trowel */}
          <group position={[0.7, 0.2, 0]} rotation={[0, 0, Math.PI / 4]}>
            <Cylinder args={[0.15, 0.15, 0.8, 16]} position={[0, -0.4, 0]}>
              <meshStandardMaterial color="#f97316" roughness={0.8} />
            </Cylinder>
            {/* Hand */}
            <Sphere args={[0.15, 16, 16]} position={[0, -0.8, 0]}>
              <meshStandardMaterial color="#fcd34d" roughness={0.5} />
            </Sphere>
            {/* Trowel */}
            <group position={[0, -1, 0]} rotation={[0, 0, -Math.PI / 4]}>
              <Cylinder args={[0.05, 0.05, 0.4, 8]} position={[0, 0, 0]}>
                <meshStandardMaterial color="#78350f" roughness={0.9} /> {/* Handle */}
              </Cylinder>
              <Box args={[0.3, 0.02, 0.4]} position={[0.15, -0.2, 0]}>
                <meshStandardMaterial color="#9ca3af" metalness={0.8} roughness={0.2} /> {/* Blade */}
              </Box>
            </group>
          </group>
        </group>
      </Float>

      {/* Brick Wall being built */}
      <group position={[-2, -0.5, 1]}>
        <Box args={[1, 0.4, 0.5]} position={[0, 0, 0]}><meshStandardMaterial color="#b91c1c" roughness={0.9} /></Box>
        <Box args={[1, 0.4, 0.5]} position={[1.1, 0, 0]}><meshStandardMaterial color="#b91c1c" roughness={0.9} /></Box>
        <Box args={[1, 0.4, 0.5]} position={[2.2, 0, 0]}><meshStandardMaterial color="#b91c1c" roughness={0.9} /></Box>
        
        <Box args={[1, 0.4, 0.5]} position={[0.55, 0.45, 0]}><meshStandardMaterial color="#b91c1c" roughness={0.9} /></Box>
        <Box args={[1, 0.4, 0.5]} position={[1.65, 0.45, 0]}><meshStandardMaterial color="#b91c1c" roughness={0.9} /></Box>
        
        <Box args={[1, 0.4, 0.5]} position={[1.1, 0.9, 0]}><meshStandardMaterial color="#b91c1c" roughness={0.9} /></Box>
      </group>
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

const HowItWorks = ({ lang }: { lang: 'fr' | 'en' }) => {
  const steps = [
    { title: t[lang].hiw1, sub: t[lang].hiw1Sub, icon: UserPlus, color: "text-emerald-400", border: "border-emerald-500/30", bg: "bg-emerald-900/20" },
    { title: t[lang].hiw2, sub: t[lang].hiw2Sub, icon: HardHat, color: "text-fuchsia-400", border: "border-fuchsia-500/30", bg: "bg-fuchsia-900/20" },
    { title: t[lang].hiw3, sub: t[lang].hiw3Sub, icon: Rocket, color: "text-blue-400", border: "border-blue-500/30", bg: "bg-blue-900/20" }
  ];
  return (
    <Section className="bg-zinc-900" canvas={<HowItWorks3D />}>
      <Title>{t[lang].hiwTitle}</Title>
      <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 w-full max-w-6xl relative">
        {/* Connecting line for desktop */}
        <div className="hidden md:block absolute top-1/2 left-10 right-10 h-0.5 bg-white/10 -z-10 transform -translate-y-1/2" />
        
        {steps.map((step, i) => {
          const Icon = step.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              className="flex-1 flex flex-col items-center text-center bg-black/60 backdrop-blur-md p-8 rounded-3xl border border-white/5 relative"
            >
              <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 border ${step.border} ${step.bg} ${step.color}`}>
                <Icon size={32} strokeWidth={1.5} />
              </div>
              <div className={`absolute -top-4 -right-4 w-10 h-10 rounded-full border flex items-center justify-center font-mono text-lg ${step.border} ${step.bg} ${step.color}`}>
                {i + 1}
              </div>
              <h3 className="text-2xl font-light tracking-tight text-white/90 mb-3">{step.title}</h3>
              <p className="text-sm font-light tracking-widest text-white/50 uppercase">{step.sub}</p>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
};

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
  const members = ["CHANCE", "GOUDAYI", "AMEGAH", "YANIS", "GERMAIN"];
  return (
    <Section className="bg-zinc-950" canvas={<Team3D />}>
      <Title>{t[lang].teamTitle}</Title>
      <div className="flex flex-wrap justify-center gap-6 md:gap-10 w-full max-w-6xl">
        {members.map((name, i) => (
          <motion.div
            key={name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center justify-center bg-black/40 backdrop-blur-md px-8 py-8 rounded-3xl border border-white/10 min-w-[220px] hover:bg-white/5 transition-colors duration-500"
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
      <HowItWorks lang={lang} />
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
