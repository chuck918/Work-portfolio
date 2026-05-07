import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-24 px-10 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <span className="text-[10px] uppercase tracking-[5px] text-gray-400 mb-4 block font-medium">
              Get in Touch
            </span>
            <h2 className="text-lg uppercase tracking-[5px] font-medium mb-12 relative after:content-[''] after:absolute after:-bottom-4 after:left-0 after:w-16 after:h-1 after:bg-primary">
              Contact Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="space-y-12">
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-black/5 flex items-center justify-center text-primary rounded-sm">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-xs uppercase tracking-widest font-semibold mb-2">Email</h3>
                  <p className="text-black/60">hello@nazir.com</p>
                </div>
              </div>
              
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-black/5 flex items-center justify-center text-primary rounded-sm">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-xs uppercase tracking-widest font-semibold mb-2">Address</h3>
                  <p className="text-black/60">123 Minimalism Way, Design District, London, W1 4AZ</p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-black/5 flex items-center justify-center text-primary rounded-sm">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="text-xs uppercase tracking-widest font-semibold mb-2">Phone</h3>
                  <p className="text-black/60">+44 20 7946 0123</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input 
                  type="text" 
                  placeholder="Name" 
                  className="w-full p-4 bg-zinc-50 border border-transparent focus:border-primary outline-none text-sm transition-colors"
                />
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="w-full p-4 bg-zinc-50 border border-transparent focus:border-primary outline-none text-sm transition-colors"
                />
              </div>
              <input 
                type="text" 
                placeholder="Subject" 
                className="w-full p-4 bg-zinc-50 border border-transparent focus:border-primary outline-none text-sm transition-colors"
              />
              <textarea 
                rows={6} 
                placeholder="Message" 
                className="w-full p-4 bg-zinc-50 border border-transparent focus:border-primary outline-none text-sm transition-colors resize-none"
              />
              <button className="px-8 py-4 bg-black text-white text-xs uppercase tracking-widest hover:bg-primary hover:text-black transition-all font-medium">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
