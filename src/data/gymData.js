import { Flame, Dumbbell, Zap, Activity } from 'lucide-react';

const gymData = {
    gymName: "SHAPER 2.0",
    tagline: "Pollachi’s Top-Rated Gym to Transform Your Body",
    phone: "+91 98765 43210",
    whatsapp: "919876543210",
    email: "join@shaper2.in",
    address: "Pollachi, Tamil Nadu",
    addressDetail: "95/2, Arutchelvar Dr. N. Mahalingam Rd, Pollachi, Tamil Nadu 642001",
    hoursWeekday: "Mon - Sat: 5:00 AM - 9:00 PM",
    hoursWeekend: "Sunday: 6:00 AM - 12:00 PM",
    mapsLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3920.926224826781!2d77.00650057504033!3d10.662834489479076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba837bbc0a39d7b%3A0xef50a68fb7b395ae!2sSHAPER%202.0%20-%20UNISEX%20GYM%20POLLACHI!5e0!3m2!1sen!2sin!4v1777127017408!5m2!1sen!2sin",

    hero: {
        titleWords: ['FORGE', 'YOUR', 'ULTIMATE'],
        highlight: 'PHYSIQUE',
        subtitle: "PowerFit brings world-class equipment and elite coaching to your neighborhood. Book a tour today and experience the difference."
    },

    services: [
        {
            title: "Weight Loss",
            desc: "Burn fat effectively",
            icon: Flame,
            color: "text-orange-500",
            gradient: "from-orange-500 to-red-600"
        },
        {
            title: "Muscle Gain",
            desc: "Build strong muscles",
            icon: Dumbbell,
            color: "text-primary",
            gradient: "from-red-500 to-red-700"
        },
        {
            title: "CrossFit HIIT",
            desc: "Functional diverse movements at high intensity",
            icon: Zap,
            color: "text-yellow-400",
            gradient: "from-yellow-400 to-orange-500"
        },
        {
            title: "Personal Training",
            desc: "1-on-1 coaching",
            icon: Activity,
            color: "text-blue-400",
            gradient: "from-blue-400 to-cyan-500"
        }
    ],

    pricing: [
        {
            name: "Classic Plan",
            price: "1499 Rs.",
            duration: "/ month",
            description: "Perfect for getting started.",
            features: ["Full Gym Floor Access", "Free Weights & Machines", "Clean Locker Facilities"],
            popular: false
        },
        {
            name: "Titan Pro",
            price: "3999 Rs.",
            duration: "/ quarter",
            description: "Our most popular membership.",
            features: ["Everything in Classic", "2 Group Classes Weekly", "1 Free PT Session / Month", "Basic Diet Plan"],
            popular: true
        },
        {
            name: "Elite VIP",
            price: "12999 Rs.",
            duration: "/ year",
            description: "For the serious achiever.",
            features: ["Everything in Titan Pro", "Unlimited Group Classes", "Monthly Body Composition", "VIP Priority Equipment Access"],
            popular: false
        }
    ],

    testimonials: [
        {
            name: "Arun S.",
            role: "Member for 2 years",
            content: "The best gym in the city hands down. The equipment is top-notch and the trainers actually care. Lost 10kg in 2 months!",
            rating: 5
        },
        {
            name: "Vikram K.",
            role: "Powerlifter",
            content: "Best gym in town! If you lift heavy, this is your place. Plenty of squat racks, deadlift platforms, and pure motivation.",
            rating: 5
        }
    ]
};

export default gymData;
