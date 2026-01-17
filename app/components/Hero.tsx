export default function Hero() {
  return (
    <div className="flex flex-col relative items-center text-center px-4 py-8 md:py-12">
      <div className="fixed lg:left-80 lg:bottom-110 md:bottom-64 md:left-14 mb-8 max-w-3xl px-4 sm:mb-10  sm:px-6 lg:mb-6 lg:px-8">
        <h1 className="text-md font-bold w-6xl flex flex-col leading-[1.2] text-white sm:text-md md:text-2xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
          <p>
            Votre <span className="text-green-primary">site</span> doit{" "}
            <span className="text-green-primary">donner envie</span> de
          </p>{" "}
          <p>
            <span className="text-green-primary">rester</span>, pas de{" "}
            <span className="relative inline-block">
              <span className="text-green-primary">revenir</span> en
              <span className="absolute left-0 top-1/2 w-full h-[3px] sm:h-[4px] md:h-[5px] lg:h-[6px] bg-black -translate-y-1/2 transform "></span>
            </span>
          </p>
          <p className="relative ">
            <span className="text-green-primary"> arrière</span> 
            <span className="h-2 w-2 rounded-full bg-white absolute top-8.5"></span>
            <span className="absolute left-0 top-1/2 w-full h-[3px] sm:h-[4px] md:h-[5px] lg:h-[6px] bg-black -translate-y-1/2 transform "></span>
          </p>
        </h1>
      </div>

      <div className="mt-14 lg:mt-44 max-w-3xl  flex flex-col text-sm leading-relaxed text-white/90 md:mt-32 md:text-sm lg:text-xl">
        <p>Design moderne, SEO solide, Suivi complet :</p>
        <p>
          on construit un site qui retient vos visiteurs et vous apporte des
          résultats.
        </p>
      </div>
    </div>
  );
}
