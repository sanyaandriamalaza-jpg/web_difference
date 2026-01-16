import Image from "next/image";

export default function Header() {
  return (
    <div className="relative flex w-1/2 justify-center items-center px-4 py-6 sm:py-8 md:pt-12">
      {/* Effet brillant autour du header */}
      <div className="absolute inset-0 flex justify-center">
        <div
          className="h-[5px] w-[95%] max-w-2xl rounded-3xl bg-white blur-xl opacity-20 sm:h-[90px]"
          style={{
            boxShadow:
              "0 0 10px rgba(0, 255, 136, 0.4), 0 0 10px rgba(0, 255, 136, 0.2)",
          }}
        />
      </div>

      {/* Barre blanche avec bordure verte */}
      <div
        className="relative z-10 flex w-full items-center justify-center gap-2 rounded-full bg-white px-2 py-4 shadow-xl sm:gap-3 sm:rounded-full sm:px-6 sm:py-4"
        style={{
          boxShadow:
            "0 0 20px rgba(0, 255, 136, 0.3), 0 0 40px rgba(0, 255, 136, 0.15)",
        }}
      >
        <div className="flex shrink-0 items-center justify-center">
          <Image
            src="/images/logo_bulle.png"
            alt="Logo"
            width={24}
            height={24}
            className="h-5 w-5 sm:h-6 sm:w-6"
            priority
          />
        </div>
        <h2 className="text-lg font-bold uppercase tracking-tight text-black/70 sm:text-xl md:text-xl lg:text-xl">
          Créer un site web{" "}
          <span className="underline decoration-2 underline-offset-2">
            vraiment{" "}
          </span>
          unique
        </h2>
      </div>
    </div>
  );
}
