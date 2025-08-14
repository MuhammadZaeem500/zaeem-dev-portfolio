import Image from "next/image";
// import aboutImg from "../../../../_assests/Me.JPG"; // replace with your image path
import aboutImg from "../../../../_assests/Me.JPG";

export default function AboutMe() {
  return (
    <section className="bg-black text-white py-16 px-6 md:px-12 lg:px-24 flex flex-col md:flex-row items-center md:items-start gap-10">
      
      {/* Image */}
      <div className="relative w-full md:w-1/3 h-80 md:h-[400px] flex-shrink-0">
        <Image
          src={aboutImg}
          alt="Muhammad Zaeem"
          className="object-cover rounded-lg"
          fill
        />
      </div>

      {/* Text Content */}
      <div className="flex-1 space-y-6">
        {/* Stats */}
        <div className="flex gap-6 flex-wrap">
          <div className="bg-gray-900 p-4 rounded-lg text-center">
            <h2 className="text-3xl font-bold">10+</h2>
            <p className="text-gray-400 text-sm">Projects Completed</p>
          </div>
          <div className="bg-gray-900 p-4 rounded-lg text-center">
            <h2 className="text-3xl font-bold">1</h2>
            <p className="text-gray-400 text-sm">Years of Experience</p>
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
          Front-End Developer @ The Dev Corporate | Now a Freelancer
        </h1>

        {/* Description */}
        <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
          As a Front-End Developer at The Dev Corporate, I built responsive and
          dynamic web applications using React, Next.js, Redux, Tailwind CSS and Material UI.
          Now freelancing, I help clients create optimized, interactive
          interfaces.
        </p>

        <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
          I specialize in building scalable front-end architectures, implementing
          modern UI/UX designs, and ensuring seamless integration with backend
          services. My focus is on creating high-performance, maintainable, and
          visually appealing applications.
        </p>

        
      </div>
    </section>
  );
}
