export default function HeroSection() {
  return (
    <section className="bg-black text-white flex flex-col items-center justify-center min-h-screen px-6 py-12 text-center">
      
      {/* Big Title */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-snug md:leading-tight">
        Crafting <span className="text-white">Digital</span> Experiences
        <br className="hidden sm:block" />
        with Co<span className="text-white">&amp; Creativity</span>
      </h1>

      {/* Description */}
      <p className="mt-6 max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-4xl text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
        Full Stack Engineer with 3+ years of experience at The Dev Corporate,
        repeatedly promoted from Associate Software Engineer to Senior Software
        Engineer in under 3 years. Led system redesigns for handling peak
        traffic, implementing horizontal scaling, sharded databases, and
        failover mechanisms, ensuring 99.99% uptime SLA. Automated tests and
        deployments through CI/CD pipelines using GitHub Actions, reducing
        manual deployment efforts by 90%. Experienced in building and optimizing
        front-end applications using React and Next.js, ensuring seamless
        integration with backend services. Integrated n8n for workflow
        automation and external service orchestration, enabling dynamic,
        event-driven operations across multiple platforms.
      </p>

      {/* Buttons */}
      <div className="mt-8 flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
        <button className="bg-white text-black px-6 py-3 rounded-md font-semibold hover:bg-gray-200 transition">
          View My Work
        </button>
        <button className="bg-black border border-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-black transition">
          Contact Me
        </button>
      </div>
    </section>
  );
}
