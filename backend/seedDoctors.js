import mongoose from 'mongoose';
import dotenv from 'dotenv';
import doctorModel from './models/doctorModel.js';

dotenv.config();

const doctors = [
    {
    name: "Dr. Aakash Mehra",
    email: "aakash.mehra@example.com",
    password: "123456",
    image: "https://cdn.pixabay.com/photo/2017/08/06/00/15/people-2587315_1280.jpg",
    speciality: "Cardiologist",
    degree: "MBBS, MD (Cardiology)",
    experience: "12 years",
    about: "Experienced cardiologist with a passion for preventive heart care.",
    available: true,
    fees: 1200,
    slots_booked: {},
    address: {
      city: "Delhi",
      state: "Delhi",
      country: "India",
      pincode: "110001"
    },
    date: Date.now()
  },
  {
    name: "Dr. Sneha Kapoor",
    email: "sneha.kapoor@example.com",
    password: "123456",
    image: "https://cdn.pixabay.com/photo/2017/09/25/13/12/doctor-2788826_1280.jpg",
    speciality: "Dermatologist",
    degree: "MBBS, MD (Dermatology)",
    experience: "9 years",
    about: "Skilled in treating skin and hair-related issues with a holistic approach.",
    available: true,
    fees: 800,
    slots_booked: {},
    address: {
      city: "Mumbai",
      state: "Maharashtra",
      country: "India",
      pincode: "400001"
    },
    date: Date.now()
  },
  {
    name: "Dr. Rahul Verma",
    email: "rahul.verma@example.com",
    password: "123456",
    image: "https://cdn.pixabay.com/photo/2015/11/03/09/03/doctor-1028147_1280.jpg",
    speciality: "Neurologist",
    degree: "MBBS, DM (Neurology)",
    experience: "15 years",
    about: "Dedicated neurologist treating a wide range of brain and nervous system disorders.",
    available: true,
    fees: 1500,
    slots_booked: {},
    address: {
      city: "Bengaluru",
      state: "Karnataka",
      country: "India",
      pincode: "560001"
    },
    date: Date.now()
  },
  {
    name: "Dr. Priya Sharma",
    email: "priya.sharma@example.com",
    password: "123456",
    image: "https://cdn.pixabay.com/photo/2016/11/14/04/39/doctor-1821212_1280.jpg",
    speciality: "Gynecologist",
    degree: "MBBS, MS (Gynecology)",
    experience: "10 years",
    about: "Women’s health expert focused on holistic reproductive care.",
    available: true,
    fees: 1000,
    slots_booked: {},
    address: {
      city: "Chandigarh",
      state: "Chandigarh",
      country: "India",
      pincode: "160017"
    },
    date: Date.now()
  },
  {
    name: "Dr. Aman Singh",
    email: "aman.singh@example.com",
    password: "123456",
    image: "https://cdn.pixabay.com/photo/2016/03/27/22/22/doctor-1281273_1280.jpg",
    speciality: "Orthopedic Surgeon",
    degree: "MBBS, MS (Orthopedics)",
    experience: "14 years",
    about: "Specialist in treating bone and joint disorders.",
    available: true,
    fees: 1100,
    slots_booked: {},
    address: {
      city: "Lucknow",
      state: "Uttar Pradesh",
      country: "India",
      pincode: "226001"
    },
    date: Date.now()
  },
  {
    name: "Dr. Riya Deshmukh",
    email: "riya.deshmukh@example.com",
    password: "123456",
    image: "https://cdn.pixabay.com/photo/2021/01/29/20/12/woman-5962478_1280.jpg",
    speciality: "Pediatrician",
    degree: "MBBS, MD (Pediatrics)",
    experience: "7 years",
    about: "Caring pediatrician dedicated to children's health and well-being.",
    available: true,
    fees: 700,
    slots_booked: {},
    address: {
      city: "Nagpur",
      state: "Maharashtra",
      country: "India",
      pincode: "440001"
    },
    date: Date.now()
  },
  {
    name: "Dr. Arjun Nair",
    email: "arjun.nair@example.com",
    password: "123456",
    image: "https://cdn.pixabay.com/photo/2015/11/03/09/03/doctor-1028147_1280.jpg",
    speciality: "ENT Specialist",
    degree: "MBBS, MS (ENT)",
    experience: "10 years",
    about: "Expert in treating ear, nose, and throat problems.",
    available: true,
    fees: 900,
    slots_booked: {},
    address: {
      city: "Kochi",
      state: "Kerala",
      country: "India",
      pincode: "682001"
    },
    date: Date.now()
  },
  {
    name: "Dr. Meera Iyer",
    email: "meera.iyer@example.com",
    password: "123456",
    image: "https://cdn.pixabay.com/photo/2016/11/14/04/39/doctor-1821212_1280.jpg",
    speciality: "Psychiatrist",
    degree: "MBBS, MD (Psychiatry)",
    experience: "8 years",
    about: "Mental health specialist focused on holistic psychological care.",
    available: true,
    fees: 1000,
    slots_booked: {},
    address: {
      city: "Pune",
      state: "Maharashtra",
      country: "India",
      pincode: "411001"
    },
    date: Date.now()
  },
  {
    name: "Dr. Karan Gupta",
    email: "karan.gupta@example.com",
    password: "123456",
    image: "https://cdn.pixabay.com/photo/2017/08/06/00/15/people-2587315_1280.jpg",
    speciality: "Dentist",
    degree: "BDS, MDS",
    experience: "11 years",
    about: "Smile makeover specialist with a decade of dental experience.",
    available: true,
    fees: 600,
    slots_booked: {},
    address: {
      city: "Indore",
      state: "Madhya Pradesh",
      country: "India",
      pincode: "452001"
    },
    date: Date.now()
  },
  {
    name: "Dr. Naina Joshi",
    email: "naina.joshi@example.com",
    password: "123456",
    image: "https://cdn.pixabay.com/photo/2021/01/29/20/12/woman-5962478_1280.jpg",
    speciality: "Endocrinologist",
    degree: "MBBS, MD (Endocrinology)",
    experience: "6 years",
    about: "Hormone specialist managing diabetes, thyroid, and metabolic disorders.",
    available: true,
    fees: 950,
    slots_booked: {},
    address: {
      city: "Jaipur",
      state: "Rajasthan",
      country: "India",
      pincode: "302001"
    },
    date: Date.now()
  },
  {
    name: "Dr. Anil Reddy",
    email: "anil.reddy@example.com",
    password: "123456",
    image: "https://cdn.pixabay.com/photo/2016/03/27/22/22/doctor-1281273_1280.jpg",
    speciality: "Urologist",
    degree: "MBBS, MCH (Urology)",
    experience: "13 years",
    about: "Specialist in kidney and urinary system health.",
    available: true,
    fees: 1300,
    slots_booked: {},
    address: {
      city: "Hyderabad",
      state: "Telangana",
      country: "India",
      pincode: "500001"
    },
    date: Date.now()
  },
  {
    name: "Dr. Pooja Patil",
    email: "pooja.patil@example.com",
    password: "123456",
    image: "https://cdn.pixabay.com/photo/2016/11/14/04/39/doctor-1821212_1280.jpg",
    speciality: "Radiologist",
    degree: "MBBS, MD (Radiology)",
    experience: "9 years",
    about: "Expert in diagnostic imaging and non-invasive procedures.",
    available: true,
    fees: 1000,
    slots_booked: {},
    address: {
      city: "Nashik",
      state: "Maharashtra",
      country: "India",
      pincode: "422001"
    },
    date: Date.now()
  },
  {
    name: "Dr. Manav Chauhan",
    email: "manav.chauhan@example.com",
    password: "123456",
    image: "https://cdn.pixabay.com/photo/2015/11/03/09/03/doctor-1028147_1280.jpg",
    speciality: "Oncologist",
    degree: "MBBS, DM (Oncology)",
    experience: "16 years",
    about: "Cancer specialist with a focus on modern treatment and compassion.",
    available: true,
    fees: 2000,
    slots_booked: {},
    address: {
      city: "Ahmedabad",
      state: "Gujarat",
      country: "India",
      pincode: "380001"
    },
    date: Date.now()
  },
  {
    name: "Dr. Ishita Rao",
    email: "ishita.rao@example.com",
    password: "123456",
    image: "https://cdn.pixabay.com/photo/2021/01/29/20/12/woman-5962478_1280.jpg",
    speciality: "General Physician",
    degree: "MBBS",
    experience: "5 years",
    about: "Family doctor offering primary care and lifestyle advice.",
    available: true,
    fees: 500,
    slots_booked: {},
    address: {
      city: "Bhopal",
      state: "Madhya Pradesh",
      country: "India",
      pincode: "462001"
    },
    date: Date.now()
  }
];

const seedDoctors = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        await doctorModel.deleteMany(); // clear old entries
        await doctorModel.insertMany(doctors);
        console.log('✅ Doctor data inserted!');
        process.exit();
    } catch (error) {
        console.error('❌ Error seeding doctor data:', error);
        process.exit(1);
    }
};

seedDoctors();
