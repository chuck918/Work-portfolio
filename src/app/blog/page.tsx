import { Blog } from "@/components/Blog";
import { ContactCTA } from "@/components/ContactCTA";

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Blog />
      <ContactCTA />
    </div>
  );
}
