import Image from "next/image";

export function PhoneShowcase() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="absolute w-[300px] h-[400px] md:w-[250px] md:h-[420px] rounded-full blur-3xl animate-spin-slow bg-title-gradient"></div>

      <div className="relative w-[250px] h-[400px] bg-gray-900 rounded-3xl overflow-hidden transform -rotate-6 shadow-2xl z-10">
        <div className="absolute inset-2 bg-white rounded-2xl overflow-hidden">
          <div className="relative w-full h-full flex flex-col items-center justify-center bg-gray-100">
            <Image
              src={"/img/Logo.svg"}
              alt="App Logo"
              width={100}
              height={100}
              className="w-1/2 h-auto object-contain"
            />
          </div>
        </div>

        <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-black rounded-full"></div>

        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-black rounded-full"></div>

        <div className="absolute top-12 right-[-4px] w-1 h-8 bg-black rounded"></div>
        <div className="absolute top-24 right-[-4px] w-1 h-12 bg-black rounded"></div>

        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gray-300 rounded-full"></div>
      </div>
    </div>
  );
}
