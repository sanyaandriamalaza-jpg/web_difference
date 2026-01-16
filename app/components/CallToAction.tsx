"use client";

import Image from "next/image";
import { FaCalendar, FaArrowDown } from "react-icons/fa6";

export default function CallToAction() {
  return (
    <div className="relative flex flex-col items-center gap-6 px-4 pb-8 md:flex-row md:justify-center md:gap-4">
      {/* Annotation manuscrite "Un ptit click ?" */}
      <div className="absolute -left-6 top-16 hidden  md:block lg:-left-8">
        <Image
          src="/images/un petit click.png"
          alt="Un ptit click ?"
          width={150}
          height={100}
          className="h-auto w-auto"
          style={{ maxWidth: "150px", height: "auto" }}
          priority
        />
      </div>
      {/* Bouton Prendre RDV avec dégradé */}
      <button
        className="group relative flex items-center gap-3 rounded-2xl px-8 py-4 text-black font-bold text-lg transition-all duration-300 hover:scale-105 md:px-10 md:py-5"
        style={{
          background: "linear-gradient(135deg,rgb(215, 230, 223) 0%, #31d8b4 100%)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = "0 6px 30px rgba(0, 255, 136, 0.6), 0 0 60px rgba(0, 255, 136, 0.3)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = "0 4px 20px rgba(0, 255, 136, 0.4), 0 0 40px rgba(0, 255, 136, 0.2)";
        }}
      >
        <FaCalendar size={20} />
        <span>Prendre RDV</span>
      </button>

      {/* Bouton Découvrir nos projets avec bordure */}
      <button className="flex items-center gap-3 rounded-2xl border-2 border-green-primary/50 px-8 py-4 font-semibold text-green-primary/50 transition-all duration-300 hover:border-green-primary hover:bg-green-primary/10 hover:shadow-lg md:px-10 md:py-5">
        <span>Découvrir nos projets</span>
        <FaArrowDown size={20} className="animate-bounce"/>
      </button>
    </div>
  );
}
