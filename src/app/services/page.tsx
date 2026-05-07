import { Services } from "@/components/Services";
import { Counters } from "@/components/Counters";
import { ContactCTA } from "@/components/ContactCTA";

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Services />
      <Counters />
      <ContactCTA />
    </div>
  );
}
