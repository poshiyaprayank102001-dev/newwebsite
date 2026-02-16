"use client";

import { motion } from "motion/react";
import { MapPin, Phone, Mail, Instagram, Linkedin, Twitter, Facebook } from "lucide-react";

export default function ContactDetails() {
    const contactInfo = [
        {
            icon: MapPin,
            label: "Office Address",
            value: "B-25 G.I.D.C. Industrial Estate, Jamnagar, Gujarat, India",
            href: "https://maps.google.com/?q=B-25+G.I.D.C.+Industrial+Estate",
        },
        {
            icon: Phone,
            label: "Phone",
            value: "+91 (0288) 2561342",
            href: "tel:+9102882561342",
        },
        {
            icon: Mail,
            label: "Email",
            value: "contact@bhattimpex.com",
            href: "mailto:contact@bhattimpex.com",
        },
    ];

    const socialLinks = [
        { icon: Linkedin, href: "#", label: "LinkedIn" },
        { icon: Twitter, href: "#", label: "Twitter" },
        { icon: Instagram, href: "#", label: "Instagram" },
        { icon: Facebook, href: "#", label: "Facebook" },
    ];

    return (
        <div className="space-y-12">
            <div className="space-y-8">
                <h3 className="text-2xl font-bold text-white">Get in Touch</h3>
                <div className="space-y-10">
                    {contactInfo.map((item, index) => (
                        <motion.a
                            key={index}
                            href={item.href}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ x: 5 }}
                            className="flex items-start gap-4 group"
                        >
                            <div className="p-3 bg-neutral-900 border border-neutral-800 rounded-lg group-hover:border-neutral-700 transition-colors">
                                <item.icon className="w-5 h-5 text-neutral-400 group-hover:text-white transition-colors" />
                            </div>
                            <div>
                                <p className="text-sm font-medium text-neutral-500 mb-1">{item.label}</p>
                                <p className="text-neutral-300 group-hover:text-white transition-colors leading-relaxed max-w-xs">
                                    {item.value}
                                </p>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>

            <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white">Follow Us</h3>
                <div className="flex gap-4">
                    {socialLinks.map((item, index) => (
                        <motion.a
                            key={index}
                            href={item.href}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3 + index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="p-4 bg-neutral-900 border border-neutral-800 rounded-lg hover:bg-neutral-800 hover:border-neutral-700 transition-all group"
                            aria-label={item.label}
                        >
                            <item.icon className="w-6 h-6 text-neutral-400 group-hover:text-white transition-colors" />
                        </motion.a>
                    ))}
                </div>
            </div>
        </div>
    );
}
