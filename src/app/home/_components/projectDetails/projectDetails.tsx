"use client";

export default function ProjectDetails() {
  return (
    <section className="bg-black text-white p-8 rounded-xl space-y-8">
      
      {/* Key Implementations */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Key Implementations</h2>
        <ul className="space-y-3 list-disc list-inside text-gray-300">
          <li>
            <strong>Optimized Search with Elasticsearch</strong> – Implemented full-text search, typo tolerance, and relevance-based ranking, allowing users to find polls by title, description, and topic, even handling misspellings.
          </li>
          <li>
            <strong>Intelligent Poll Recommendation System</strong> – Built a personalized recommendation engine based on user interactions, hashtags, and poll titles to boost engagement.
          </li>
          <li>
            <strong>Auto-Poll Generation with GPT</strong> – Developed an AI-powered feature that automatically generates polls based on a given prompt, streamlining poll creation.
          </li>
          <li>
            <strong>Real-Time Engagement with WebSockets</strong> – Enabled live poll updates, notifications, and chat messaging for seamless user interaction.
          </li>
          <li>
            <strong>Scalable Backend with NestJS & PostgreSQL</strong> – Designed a robust, modular architecture ensuring efficient API performance and database management.
          </li>
          <li>
            <strong>Optimized Caching & Performance</strong> – Integrated lazy caching strategies, reducing redundant database queries and improving response times.
          </li>
          <li>
            <strong>Secure Authentication & Authorization</strong> – Implemented JWT-based authentication, OAuth login, and RBAC (Role-Based Access Control) to ensure data security.
          </li>
          <li>
            <strong>User Follow/Following System</strong> – Designed a social networking model allowing users to follow others, view followed users’ polls, and receive real-time updates on new polls and activities.
          </li>
        </ul>
      </div>

      {/* Technical Stack */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Technical Stack</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          
          <div>
            <h3 className="font-semibold mb-2">Frontend</h3>
            <div className="flex flex-wrap gap-2">
              {["Next.js", "Redux", "TailwindCSS", "Socket.io-client"].map((item) => (
                <span key={item} className="bg-gray-800 px-3 py-1 rounded-full text-sm">{item}</span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Backend</h3>
            <div className="flex flex-wrap gap-2">
              {["Node.js", "NestJS", "Socket.io", "PostgreSQL", "Prisma", "Redis", "Elasticsearch"].map((item) => (
                <span key={item} className="bg-gray-800 px-3 py-1 rounded-full text-sm">{item}</span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Storage</h3>
            <div className="flex flex-wrap gap-2">
              {["AWS S3", "Cloudinary"].map((item) => (
                <span key={item} className="bg-gray-800 px-3 py-1 rounded-full text-sm">{item}</span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Real-time Features</h3>
            <div className="flex flex-wrap gap-2">
              {["Socket.io", "WebSocket", "Redis"].map((item) => (
                <span key={item} className="bg-gray-800 px-3 py-1 rounded-full text-sm">{item}</span>
              ))}
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
