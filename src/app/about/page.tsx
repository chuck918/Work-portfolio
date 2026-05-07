import { About } from "@/components/About";
import { Counters } from "@/components/Counters";
import { ContactCTA } from "@/components/ContactCTA";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <About />
      
      {/* Unique History Section from about.html */}
      <section className="py-24 px-10 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12">
          <div className="md:w-1/3">
            <h2 className="text-lg uppercase tracking-[5px] font-medium mb-12 relative after:content-[''] after:absolute after:-bottom-4 after:left-0 after:w-16 after:h-1 after:bg-primary">
              History
            </h2>
            <p className="text-black/70">
              Established in 2014, Nazir began as a small design studio with a passion for minimalist architecture. Over the years, we have grown into a multi-disciplinary firm, delivering award-winning projects across Europe and North America. Our journey is defined by a relentless pursuit of excellence and a deep respect for the environments we shape.
            </p>
          </div>
          <div className="md:w-2/3">
             <div className="space-y-4">
               {[
                 { title: "Why choose me?", content: "We prioritize your vision and combine it with our technical expertise to create spaces that are both beautiful and functional. Our collaborative approach ensures that every project is a true reflection of our clients' aspirations." },
                 { title: "What I do?", content: "We specialize in residential, commercial, and interior design, providing a seamless experience from concept to completion. Our services include site analysis, conceptual design, and full construction management." },
                 { title: "My Specialties", content: "Our specialties include sustainable building practices, modern minimalism, and heritage restoration. we ensure every project is unique, enduring, and deeply connected to its context." }
               ].map((item, i) => (
                 <details key={i} className="group border border-gray-100 bg-zinc-50 rounded-sm">
                   <summary className="flex justify-between items-center p-4 cursor-pointer font-medium uppercase text-xs tracking-widest list-none group-open:bg-black group-open:text-white transition-colors">
                     {item.title}
                     <span className="text-xl group-open:rotate-45 transition-transform">+</span>
                   </summary>
                   <div className="p-4 text-sm text-black/70 bg-white">
                     {item.content}
                   </div>
                 </details>
               ))}
             </div>
          </div>
        </div>
      </section>

      <Counters />
      <ContactCTA />
    </div>
  );
}
