"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Calendar, Clock, CheckCircle2, ArrowRight } from "lucide-react";

function ContactFormContent() {
  const searchParams = useSearchParams();
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "shopify",
    budget: "$5k - $10k",
    details: ""
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  // Auto-select based on query params
  useEffect(() => {
    const serviceParam = searchParams.get("service");
    const packageParam = searchParams.get("package");

    if (serviceParam) {
      const lower = serviceParam.toLowerCase();
      if (lower.includes("shopify")) setFormData(prev => ({ ...prev, service: "shopify" }));
      else if (lower.includes("wordpress")) setFormData(prev => ({ ...prev, service: "wordpress" }));
      else if (lower.includes("react") || lower.includes("next")) setFormData(prev => ({ ...prev, service: "nextjs" }));
      else if (lower.includes("design") || lower.includes("ui")) setFormData(prev => ({ ...prev, service: "uiux" }));
      else if (lower.includes("seo")) setFormData(prev => ({ ...prev, service: "seo" }));
      else if (lower.includes("marketing")) setFormData(prev => ({ ...prev, service: "marketing" }));
      else if (lower.includes("automation")) setFormData(prev => ({ ...prev, service: "automation" }));
      else if (lower.includes("android") || lower.includes("mobile")) setFormData(prev => ({ ...prev, service: "android" }));
    }

    if (packageParam) {
      if (packageParam === "starter") {
        setFormData(prev => ({ ...prev, budget: "< $2k", details: "Interested in the Starter package." }));
      } else if (packageParam === "growth") {
        setFormData(prev => ({ ...prev, budget: "$2k - $5k", details: "Interested in the Growth package." }));
      } else if (packageParam === "scale") {
        setFormData(prev => ({ ...prev, budget: "$10k+", details: "Interested in the Scale package." }));
      }
    }
  }, [searchParams]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: "",
        email: "",
        company: "",
        service: "shopify",
        budget: "$5k - $10k",
        details: ""
      });
    }, 5000);
  };

  // Calendar Booking States
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const dates = [
    { label: "Mon", num: "13", full: "Monday, July 13" },
    { label: "Tue", num: "14", full: "Tuesday, July 14" },
    { label: "Wed", num: "15", full: "Wednesday, July 15" },
    { label: "Thu", num: "16", full: "Thursday, July 16" },
    { label: "Fri", num: "17", full: "Friday, July 17" }
  ];

  const times = ["10:00 AM", "11:30 AM", "2:00 PM", "3:30 PM", "5:00 PM"];

  const handleBookStrategy = () => {
    if (selectedDate && selectedTime) {
      setBookingConfirmed(true);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
      
      {/* Form Section (7 Columns) */}
      <div className="lg:col-span-7 bg-[#121214] border border-[#1F1F23] rounded-3xl p-8 shadow-xl relative overflow-hidden">
        <AnimatePresence mode="wait">
          {!formSubmitted ? (
            <motion.form
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onSubmit={handleFormSubmit}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-white">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    className="bg-[#0A0A0B] text-white border border-[#1F1F23] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-white">Work Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@company.com"
                    className="bg-[#0A0A0B] text-white border border-[#1F1F23] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="company" className="text-xs font-semibold uppercase tracking-wider text-white">Company Name</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Acme Corp"
                    className="bg-[#0A0A0B] text-white border border-[#1F1F23] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="service" className="text-xs font-semibold uppercase tracking-wider text-white">Service Interested In</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="bg-[#0A0A0B] text-white border border-[#1F1F23] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors appearance-none"
                  >
                    <option value="shopify">Shopify Development</option>
                    <option value="wordpress">WordPress Development</option>
                    <option value="nextjs">Next.js & React App Development</option>
                    <option value="uiux">UI/UX Design</option>
                    <option value="seo">SEO Optimization</option>
                    <option value="marketing">Performance Marketing</option>
                    <option value="automation">Automation & AI Workflows</option>
                    <option value="android">Android / Mobile App Development</option>
                    <option value="other">Other / Custom scope</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="budget" className="text-xs font-semibold uppercase tracking-wider text-white">Estimated Budget Range</label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  className="bg-[#0A0A0B] text-white border border-[#1F1F23] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors appearance-none"
                >
                  <option value="< $2k">Under $2,000</option>
                  <option value="$2k - $5k">$2,000 - $5,000</option>
                  <option value="$5k - $10k">$5,000 - $10,000</option>
                  <option value="$10k+">$10,000 or above</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="details" className="text-xs font-semibold uppercase tracking-wider text-white">Project Details & Goals</label>
                <textarea
                  id="details"
                  name="details"
                  rows={5}
                  required
                  value={formData.details}
                  onChange={handleInputChange}
                  placeholder="Tell us about your brand, what you need built, and target launch timelines..."
                  className="bg-[#0A0A0B] text-white border border-[#1F1F23] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center gap-2 justify-center px-8 py-4 rounded-xl text-sm font-semibold text-white bg-accent hover:bg-accent-hover transition-colors shadow-lg shadow-accent/15"
              >
                Send Message
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.form>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center justify-center text-center py-16"
            >
              <CheckCircle2 className="w-16 h-16 text-[#10B981] mb-6" />
              <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
              <p className="text-[#8E8E93] text-sm max-w-sm">
                Thank you for reaching out. A partner from the Byteloom team will review your inquiry and email you within 24 hours.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Side Panel & Calendar Scheduler (5 Columns) */}
      <div className="lg:col-span-5 space-y-8">
        
        {/* Contact Info Card */}
        <div className="bg-[#121214] border border-[#1F1F23] rounded-3xl p-8 space-y-6">
          <h3 className="text-lg font-bold text-white tracking-tight">Direct Contacts</h3>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-[#0A0A0B] border border-[#1F1F23] flex items-center justify-center text-accent">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs text-[#8E8E93] block">Email Us</span>
                <a href="mailto:hello@byteloom.com" className="text-sm font-medium text-white hover:text-accent transition-colors">
                  hello@byteloom.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-[#0A0A0B] border border-[#1F1F23] flex items-center justify-center text-[#10B981]">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs text-[#8E8E93] block">Call Us</span>
                <span className="text-sm font-medium text-white">
                  +91 XX XXX XXXXX
                </span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-[#0A0A0B] border border-[#1F1F23] flex items-center justify-center text-purple-400">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs text-[#8E8E93] block">Our Office</span>
                <span className="text-sm font-medium text-white">
                  Mumbai, India
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Simulated Calendly Scheduler */}
        <div className="bg-[#121214] border border-[#1F1F23] rounded-3xl p-8 space-y-6 relative overflow-hidden">
          <div className="flex items-center gap-3">
            <Calendar className="w-5 h-5 text-accent animate-pulse" />
            <h3 className="text-lg font-bold text-white tracking-tight">Book a Strategy Call</h3>
          </div>

          {!bookingConfirmed ? (
            <div className="space-y-6">
              {/* Date Selector */}
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#8E8E93] block mb-3">
                  1. Select Date (July 2026)
                </span>
                <div className="grid grid-cols-5 gap-2">
                  {dates.map((date) => (
                    <button
                      key={date.num}
                      onClick={() => {
                        setSelectedDate(date.full);
                        setBookingConfirmed(false);
                      }}
                      className={`flex flex-col items-center p-2.5 rounded-xl border text-center transition-all ${
                        selectedDate === date.full
                          ? "bg-accent border-accent text-white"
                          : "bg-[#0A0A0B] border-[#1F1F23] hover:border-[#2E2E35] text-[#8E8E93]"
                      }`}
                    >
                      <span className="text-[10px] uppercase font-semibold">{date.label}</span>
                      <span className="text-sm font-bold mt-1">{date.num}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Time Selector */}
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#8E8E93] block mb-3">
                  2. Select Time (IST)
                </span>
                <div className="grid grid-cols-2 gap-2">
                  {times.map((time) => (
                    <button
                      key={time}
                      onClick={() => {
                        setSelectedTime(time);
                        setBookingConfirmed(false);
                      }}
                      className={`flex items-center gap-2 p-3 rounded-xl border text-left text-xs transition-all ${
                        selectedTime === time
                          ? "bg-accent border-accent text-white"
                          : "bg-[#0A0A0B] border-[#1F1F23] hover:border-[#2E2E35] text-[#8E8E93]"
                      }`}
                    >
                      <Clock className="w-3.5 h-3.5" />
                      <span className="font-semibold">{time}</span>
                    </button>
                  ))}
                </div>
              </div>

              <button
                disabled={!selectedDate || !selectedTime}
                onClick={handleBookStrategy}
                className="w-full text-center py-3.5 rounded-xl text-xs font-semibold text-white bg-accent hover:bg-accent-hover transition-colors shadow-lg shadow-accent/10 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Book 30-Min Zoom Session
              </button>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-6"
            >
              <CheckCircle2 className="w-12 h-12 text-[#10B981] mx-auto mb-4" />
              <h4 className="font-bold text-white text-sm mb-1">Session Scheduled!</h4>
              <p className="text-xs text-[#8E8E93] max-w-xs mx-auto mb-4">
                Your call is booked for <strong>{selectedTime}</strong> on <strong>{selectedDate}</strong>. A Zoom invite has been sent to your email.
              </p>
              <button
                onClick={() => {
                  setBookingConfirmed(false);
                  setSelectedDate(null);
                  setSelectedTime(null);
                }}
                className="text-xs font-semibold text-accent hover:text-white transition-colors"
              >
                Reschedule Session
              </button>
            </motion.div>
          )}
        </div>

      </div>

    </div>
  );
}

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main className="bg-[#0A0A0B] min-h-screen pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          {/* Suspense boundary for useSearchParams Client Component */}
          <Suspense fallback={
            <div className="flex items-center justify-center py-32 text-[#8E8E93]">
              <span className="w-6 h-6 border-2 border-accent border-t-transparent rounded-full animate-spin mr-3" />
              Loading scheduler...
            </div>
          }>
            <ContactFormContent />
          </Suspense>
        </div>
      </main>

      <Footer />
    </>
  );
}
