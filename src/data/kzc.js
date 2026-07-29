// Centralized KZC business data — sourced from kzc-logistics.com
export const company = {
  name: "KZC Logistics & Solutions LLC",
  shortName: "KZC",
  tagline: "Reliable. Efficient. Professional.",
  phone: "+1 (832) 292-7088",
  phoneRaw: "+18322927088",
  email: "kzcgroup@kzc-logistics.com",
  address: {
    line1: "4600 Duke Street",
    city: "Alexandria",
    state: "VA",
    zip: "22304",
    country: "USA",
  },
  addressFull: "4600 Duke Street, Alexandria, VA 22304, USA",
  logo: "https://kzc-logistics.com/images/logo.png",
  founder: { name: "Abdul Kabir Dawoodzai", role: "Founder & CEO", photo: "https://kzc-logistics.com/images/KzcFounder.jpg" },
  hq: "Alexandria, Virginia — serving the greater DMV, the East Coast, and clients worldwide.",
  mapQuery: "4600 Duke Street Alexandria VA 22304",
};

export const services = [
  {
    id: "logistics", title: "Logistics & Delivery", icon: "Plane",
    summary: "Reliable local and international delivery — safe, on-time transport of packages, goods, and equipment with customized logistics planning.",
    img: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=1600",
    benefits: ["On-time, every time", "Full shipment visibility", "Domestic & international reach"],
    projects: ["Last-mile delivery for e-commerce retailers", "International cargo and equipment shipping", "Warehouse distribution and fulfillment"],
    highlights: ["Air, ocean & road freight", "Real-time tracking", "Customs brokerage", "Warehousing & storage"],
    gallery: [
      "https://images.unsplash.com/photo-1553413077-190dd305871c?w=1200",
      "https://images.unsplash.com/photo-1577416412292-747c6607f055?w=1200",
      "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=1200",
    ],
  },
  {
    id: "moving", title: "Moving & Relocation", icon: "Move",
    summary: "Professional moving services for homes, offices, and businesses — packing, loading, transport, and setup with careful, efficient handling.",
    img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=1600",
    benefits: ["Stress-free moving", "Professional movers", "Furniture & equipment handling"],
    projects: ["Office relocations and setup", "Residential home moves", "Equipment and furniture transfers"],
    highlights: ["Local & long-distance", "Packing & unpacking", "Furniture assembly", "Storage solutions"],
    gallery: [
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200",
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200",
    ],
  },
  {
    id: "labor", title: "Skilled & General Labor Supply", icon: "Users",
    summary: "Short- or long-term staffing for businesses. General labor for moving, loading, and support — skilled workers for specialized projects.",
    img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600",
    benefits: ["Right people, right time", "Flexible duration", "Specialized expertise"],
    projects: ["Construction labor crews", "Warehouse staffing and support", "Event setup and breakdown crews"],
    highlights: ["Skilled tradesmen", "General labor", "Short or long-term", "Background-checked"],
    gallery: [
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200",
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200",
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200",
    ],
  },
  {
    id: "painting", title: "Interior & Exterior Painting", icon: "Paintbrush",
    summary: "Interior and exterior painting for homes and businesses. High-quality finishes with flexible scheduling for any project size.",
    img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1600",
    benefits: ["Flawless finishes", "Premium materials", "Durable, long-lasting results"],
    projects: ["Commercial interior repaints", "Exterior building painting", "Specialty and custom finishes"],
    highlights: ["Interior & exterior", "Color consultation", "Surface preparation", "Quality assurance"],
    gallery: [
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200",
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200",
    ],
  },
  {
    id: "maintenance", title: "Property Maintenance", icon: "Building2",
    summary: "General repairs, cleaning, and seasonal upkeep. Customized maintenance plans for residential and commercial properties.",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600",
    benefits: ["Preventive & reactive", "Certified professionals", "Customized plans"],
    projects: ["Seasonal property upkeep", "Routine repair programs", "Commercial facility maintenance"],
    highlights: ["General repairs", "Seasonal maintenance", "Cleaning services", "Emergency response"],
    gallery: [
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200",
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200",
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200",
    ],
  },
  {
    id: "handyman", title: "Handyman Services", icon: "Wrench",
    summary: "Reliable handyman services for repairs, installations, and general fixes around your home or business — professional, prompt, and dependable.",
    img: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1600",
    benefits: ["Prompt, reliable service", "Skilled professionals", "Versatile capability"],
    projects: ["Home repairs and installations", "Business fixture and maintenance", "General fix-it tasks and improvements"],
    highlights: ["Repairs & fixes", "Installations", "Carpentry & plumbing", "Door & window service"],
    gallery: [
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200",
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200",
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200",
    ],
  },
  {
    id: "waste", title: "Waste Removal & Cleanup", icon: "Trash2",
    summary: "Junk and debris removal for homes and businesses, construction site cleanup, and eco-friendly disposal and recycling.",
    img: "https://images.unsplash.com/photo-1516900557547-7c88245fda29?w=1600",
    benefits: ["Fast, thorough removal", "Eco-friendly disposal", "Construction cleanup"],
    projects: ["Home junk and clutter removal", "Post-construction site cleanup", "Commercial waste management"],
    highlights: ["Junk & debris removal", "Construction cleanup", "Recycling & disposal", "Same-day service"],
    gallery: [
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200",
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200",
    ],
  },
  {
    id: "procurement", title: "Procurement & Supply Chain", icon: "Boxes",
    summary: "Strategic sourcing, contract management, supplier coordination, and on-time delivery via our Procure360 platform.",
    img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1600",
    benefits: ["Strategic sourcing", "Cost optimization", "On-time delivery"],
    projects: ["Industrial equipment sourcing", "Materials procurement programs", "Supply chain optimization"],
    highlights: ["Strategic sourcing", "Contract management", "Supplier coordination", "Procure360 platform"],
    gallery: [
      "https://images.unsplash.com/photo-1553413077-190dd305871c?w=1200",
      "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=1200",
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200",
    ],
  },
  {
    id: "fleet", title: "Fleet & Equipment Management", icon: "Truck",
    summary: "Vehicle sales, leasing, maintenance, and telematics — flexible solutions for government and commercial operations.",
    img: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1600",
    benefits: ["Full lifecycle support", "GSA-compliant", "Proactive maintenance"],
    projects: ["Federal agency fleet programs", "Commercial fleet acquisition", "Telematics and GPS integration"],
    highlights: ["Sales & leasing", "Maintenance programs", "Telematics & GPS", "Compliance management"],
    gallery: [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200",
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200",
      "https://images.unsplash.com/photo-1577416412292-747c6607f055?w=1200",
    ],
  },
  {
    id: "custom", title: "Business Support Solutions", icon: "Briefcase",
    summary: "Tailored logistics and support packages. Flexible services to meet unique client needs, with a dedicated team.",
    img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1600",
    benefits: ["Tailored packages", "Dedicated teams", "Flexible contracts"],
    projects: ["Integrated facility support", "Multi-service business programs", "Custom logistics and staffing packages"],
    highlights: ["Multi-service packages", "Dedicated account management", "Custom solutions", "Flexible terms"],
    gallery: [
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200",
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200",
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200",
    ],
  },
];

export const shippingServices = [
  { title: "Air Freight", summary: "Express and standard air cargo for time-sensitive shipments worldwide." },
  { title: "Ocean Freight", summary: "FCL and LCL container shipping with competitive rates and reliable schedules." },
  { title: "Road Freight", summary: "FTL and LTL trucking across North America with real-time tracking." },
  { title: "Project Logistics", summary: "Specialized transport for oversized, heavy-lift, and complex project cargo." },
  { title: "Warehousing", summary: "Strategic storage and distribution facilities with inventory management." },
  { title: "Customs Brokerage", summary: "Expert customs clearance and compliance for smooth border crossings." },
];

export const industries = [
  { name: "Commercial", img: "https://kzc-logistics.com/images/CommercialIndustry.jpg" },
  { name: "Residential", img: "https://kzc-logistics.com/images/Residential.jpg" },
  { name: "Industrial", img: "https://kzc-logistics.com/images/Industrial.jpg" },
  { name: "Government", img: "https://kzc-logistics.com/images/Government.jpg" },
  { name: "Transportation", img: "https://kzc-logistics.com/images/Transportation.jpg" },
  { name: "Retail", img: "https://kzc-logistics.com/images/Retail.jpg" },
];

export const procurementIndustries = [
  { name: "Oil & Gas", summary: "Specialized equipment, spare parts, and materials for upstream, midstream, and downstream operations." },
  { name: "Power & Energy", summary: "Procurement solutions for power generation, transmission, and renewable energy projects." },
  { name: "Construction", summary: "Building materials, heavy equipment, and construction supplies for projects of all sizes." },
  { name: "Manufacturing", summary: "Raw materials, components, and machinery for manufacturing operations." },
  { name: "Government", summary: "GSA-compliant procurement services for federal, state, and local government agencies." },
  { name: "Defense", summary: "Specialized procurement for defense contractors and military applications." },
];

export const fleetCategories = [
  { name: "Commercial Vehicles", summary: "Trucks, vans, and delivery vehicles for business operations.", img: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1200" },
  { name: "Passenger Vehicles", summary: "Sedans, SUVs, and executive vehicles for personnel transport.", img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200" },
  { name: "Specialized Equipment", summary: "Construction equipment, utility vehicles, and specialty units.", img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200" },
];
export const fleetServices = ["Fleet Planning", "Maintenance", "Telematics", "Compliance"];

export const projects = [
  { title: "Port of Virginia Operations", location: "Norfolk, Virginia", category: "Logistics", summary: "Comprehensive logistics support for container handling and distribution operations at one of the busiest ports on the East Coast.", img: "https://images.unsplash.com/photo-1577416412292-747c6607f055?w=1200" },
  { title: "Federal Agency Fleet Program", location: "Washington, D.C.", category: "Fleet Management", summary: "Full-service fleet management for a federal agency including vehicle acquisition, maintenance, and telematics integration.", img: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1200" },
  { title: "Industrial Equipment Sourcing", location: "Houston, Texas", category: "Procurement", summary: "Strategic procurement of heavy machinery and industrial equipment for a major energy sector client.", img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200" },
  { title: "Commercial Building Support", location: "Alexandria, Virginia", category: "Construction", summary: "Skilled labor supply and logistics support for a major commercial construction project in the DMV area.", img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200" },
  { title: "E-Commerce Fulfillment Center", location: "Maryland", category: "Logistics", summary: "End-to-end logistics solutions for a high-volume e-commerce fulfillment operation with next-day delivery capabilities.", img: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=1200" },
  { title: "Municipal Fleet Optimization", location: "Richmond, Virginia", category: "Fleet Management", summary: "Complete fleet optimization program for city vehicles including maintenance scheduling and fuel management.", img: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=1200" },
];

export const testimonials = [
  { quote: "KZC provided exceptional logistics support for our construction project. On-time, professional, and reliable.", author: "Construction Manager", location: "TX" },
  { quote: "Their labor supply team was exactly what we needed. Skilled workers who got the job done right.", author: "Warehouse Director", location: "VA" },
  { quote: "Fast, efficient waste removal services. KZC made our cleanup project stress-free.", author: "Property Owner", location: "MD" },
];

export const values = ["Reliability", "Quality", "Integrity", "Customer Focus"];
export const processSteps = [
  { n: "01", title: "Consultation", summary: "We listen to your needs and understand your requirements." },
  { n: "02", title: "Planning", summary: "Our team creates a customized solution for your project." },
  { n: "03", title: "Execution", summary: "We deliver professional services with precision and care." },
  { n: "04", title: "Follow-Up", summary: "We ensure your complete satisfaction with our work." },
];

export const whyChooseUs = [
  { title: "Global Reach", summary: "Services across the United States and international destinations.", icon: "Globe" },
  { title: "Proven Experience", summary: "Years of expertise in logistics and business solutions.", icon: "Award" },
  { title: "Flexible Packages", summary: "Customized solutions tailored to your specific needs.", icon: "Layers" },
  { title: "Reliable Support", summary: "A dedicated team available to assist you every step of the way.", icon: "Headset" },
];

export const partners = [
  { name: "UNOPS", img: "https://kzc-logistics.com/images/unops.jpg" },
  { name: "UNAMA", img: "https://kzc-logistics.com/images/UNAMA.jpg" },
  { name: "USMBC", img: "https://kzc-logistics.com/images/USMBC.jpg" },
];

export const ecoMotion = {
  name: "EcoMotion by KZC",
  summary: "Our commitment to sustainable procurement practices and environmental responsibility — sustainable sourcing, carbon footprint reduction, green supply chains, and electric vehicle integration.",
  stats: [
    { value: 500, suffix: "+", label: "EV Units Deployed" },
    { value: 30, suffix: "%", label: "Carbon Reduction" },
    { value: 100, suffix: "+", label: "Green Suppliers" },
    { value: 50, suffix: "M+", label: "Miles Tracked" },
  ],
};

export const globalStats = [
  { value: 100, suffix: "+", label: "Countries Served" },
  { value: 50, suffix: "M+", label: "Miles Tracked" },
  { value: 500, suffix: "+", label: "EV Units Deployed" },
  { value: 24, suffix: "/7", label: "Dedicated Support" },
];

export const mission = "To provide exceptional logistics, maintenance, and support services that exceed client expectations through reliability, professionalism, and a commitment to continuous improvement.";
export const vision = "To be the leading provider of integrated logistics and business solutions, recognized for our innovation, integrity, and the lasting relationships we build with our clients.";
export const history = "KZC Logistics & Solutions LLC began with a simple idea — to help businesses move smarter, operate cleaner, and grow faster. Starting with small delivery services and labor support, we expanded into maintenance, property support, fleet assistance, and nationwide logistics. Over the years, our team has supported construction companies, government contractors, commercial facilities, and private clients across multiple states. Today, KZC stands as a multi-service partner built on professionalism, flexibility, and consistent performance — positioning us for continued growth in the U.S. and beyond.";

export const timeline = [
  { year: "Founding", title: "A simple idea", summary: "KZC begins with small delivery services and labor support in Alexandria, Virginia." },
  { year: "Expansion", title: "Broadening the toolkit", summary: "Added property maintenance, waste removal, and custom business solutions." },
  { year: "Growth", title: "Nationwide logistics", summary: "Supported construction firms, government contractors, and commercial facilities across multiple states." },
  { year: "Today", title: "Multi-service partner", summary: "Procurement, fleet, and integrated logistics — built on professionalism, flexibility, and consistent performance." },
];

// Leadership & team — only the founder is named on the live site; remaining roles use elegant placeholders.
export const team = {
  founder: { name: "Abdul Kabir Dawoodzai", role: "Founder & CEO", photo: "https://kzc-logistics.com/images/KzcFounder.jpg" },
  leadership: [
    { role: "Chief Operating Officer", placeholder: true },
    { role: "Chief Financial Officer", placeholder: true },
  ],
  execution: [
    { role: "Project Manager", placeholder: true },
    { role: "Senior Engineer", placeholder: true },
    { role: "Quality Assurance Lead", placeholder: true },
  ],
  operations: [
    { role: "Logistics Manager", placeholder: true },
    { role: "Warehouse Lead", placeholder: true },
    { role: "Operations Coordinator", placeholder: true },
  ],
};

export const nav = {
  company: [
    { label: "About Us", to: "/about" },
    { label: "Our Story", to: "/our-story" },
    { label: "Leadership", to: "/leadership" },
    { label: "Meet the Team", to: "/team" },
    { label: "Careers", to: "/careers" },
  ],
  services: [
    { label: "All Services", to: "/services" },
    { label: "Industries We Serve", to: "/industries" },
    { label: "Fleet & Equipment", to: "/fleet" },
    { label: "Procurement & Supply Chain", to: "/services#procurement" },
    { label: "Shipping & Logistics", to: "/services#shipping" },
  ],
  work: [
    { label: "Projects", to: "/projects" },
    { label: "Testimonials", to: "/testimonials" },
    { label: "Gallery", to: "/gallery" },
    { label: "Blog & News", to: "/blog" },
    { label: "FAQ", to: "/faq" },
  ],
  engage: [
    { label: "Contact", to: "/contact" },
    { label: "Request a Quote", to: "/quote" },
    { label: "Track a Shipment", to: "/tracking" },
  ],
};