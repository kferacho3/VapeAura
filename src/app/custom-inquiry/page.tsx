/* src/app/custom-inquiry/page.tsx */
import InquiryForm from "@/components/homePage/InquiryForm";
export const metadata = { title: "Custom Inquiry | VapeAura" };

export default function CustomInquiryPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-neptune-light/10 p-6">
      <div className="bg-black/80 p-10 rounded-3xl text-steam space-y-6 w-full max-w-2xl">
        <h1 className="text-4xl font-extrabold text-amber-400 text-center">
          Tell us what you need
        </h1>
        <p className="text-center">
          We can source almost anything — fill out the form and we’ll reply
          within the hour.
        </p>
        <InquiryForm />
      </div>
    </main>
  );
}
