export const clinic = {
  doctorName: "Dr. Ahmed Al-Sabah",
  specialty: "Consultant Internal Medicine",
  clinicName: "Kuwait Wellness Clinic",
  location: "Salmiya, Kuwait",
  address: "Salem Al Mubarak Street, Salmiya, Hawalli Governorate, Kuwait",
  phone: "+965 0000 0000",
  phoneRaw: "+96500000000",
  whatsapp: "+965 0000 0000",
  whatsappRaw: "96500000000",
  email: "appointments@kuwaitwellness.clinic",
  hours: [
    { day: "Sunday – Thursday", time: "9:00 AM – 9:00 PM" },
    { day: "Saturday", time: "10:00 AM – 6:00 PM" },
    { day: "Friday", time: "Closed" },
  ],
  languages: ["Arabic", "English", "Hindi", "Urdu"],
};

export const services = [
  { icon: "Stethoscope", title: "General Consultation", desc: "Comprehensive evaluations for adults with personalized care plans." },
  { icon: "HeartPulse", title: "Cardiac Screening", desc: "ECG, blood pressure monitoring, and preventive heart health assessments." },
  { icon: "Activity", title: "Diabetes Management", desc: "Long-term care, lifestyle guidance, and continuous glucose monitoring." },
  { icon: "Microscope", title: "Lab & Diagnostics", desc: "On-site blood work, urinalysis, and rapid results from accredited labs." },
  { icon: "Syringe", title: "Vaccinations & Travel", desc: "Adult immunizations, flu shots, and travel medicine consultations." },
  { icon: "ShieldCheck", title: "Executive Health Check", desc: "Premium full-body checkups designed for busy professionals." },
];

export const testimonials = [
  { name: "Fatima A.", text: "Dr. Ahmed took the time to listen and explain everything in Arabic and English. The clinic feels calm and professional.", role: "Patient, Salmiya" },
  { name: "Rajesh K.", text: "Excellent diabetes care. Friendly staff who speak Hindi made my family feel at home.", role: "Patient, Hawalli" },
  { name: "Sarah M.", text: "Booked online, seen on time, and received truly attentive care. Highly recommend.", role: "Patient, Kuwait City" },
];

export const faqs = [
  { q: "How do I book an appointment?", a: "You can book directly through our website form, by phone, or via WhatsApp. Most appointments are confirmed within one hour during working hours." },
  { q: "Which insurance providers do you accept?", a: "We accept most major Kuwait insurance providers including GIG, AXA, Bupa Arabia, and Al Ahleia. Please contact us to confirm your specific plan." },
  { q: "What languages does the doctor speak?", a: "Dr. Ahmed Al-Sabah and our staff speak Arabic, English, Hindi, and Urdu to ensure clear communication with every patient." },
  { q: "Do you offer same-day appointments?", a: "Yes, same-day appointments are often available. Call or WhatsApp us for urgent slots." },
  { q: "What payment methods are accepted?", a: "We accept cash, KNET, all major credit cards, and direct billing for partnered insurance providers." },
];

export const insurers = ["GIG", "AXA", "Bupa", "Al Ahleia", "MetLife", "NLGIC"];
