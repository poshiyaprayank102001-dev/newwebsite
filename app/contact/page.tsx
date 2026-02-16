import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import ContactDetails from "@/components/ContactDetails";

export const metadata: Metadata = {
    title: "Contact Us | Bint Website",
    description: "Get in touch with us for inquiries about our products and services.",
};

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-black flex flex-col items-center justify-center pt-32 pb-20 px-6 md:px-12 lg:px-24">
            <div className="w-full max-w-[1400px]">

                {/* Header Section */}
                <div className="mb-20 text-center space-y-4">
                    <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
                        Contact Us
                    </h1>
                    <p className="text-lg md:text-xl text-neutral-400 font-light max-w-2xl mx-auto">
                        Join us on next chapter
                    </p>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
                    {/* Left Column: Form */}
                    <div className="w-full order-2 lg:order-1">
                        <ContactForm />
                    </div>

                    {/* Right Column: Details */}
                    <div className="w-full order-1 lg:order-2 lg:sticky lg:top-40">
                        <ContactDetails />
                    </div>
                </div>

            </div>
        </div>
    );
}
