import { Work } from "@/components/Work";
import { ContactCTA } from "@/components/ContactCTA";

export default function WorkPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Work />
      <ContactCTA />
    </div>
  );
}
