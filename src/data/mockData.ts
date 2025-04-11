import { Company, Job } from "@/types";
import { v4 as uuidv4 } from "uuid";

export const companies: Company[] = [
  {
    id: uuidv4(),
    name: "TechCorp",
    description: "TechCorp is a leading technology company specializing in innovative software solutions for businesses of all sizes. With a focus on cutting-edge technologies and user-friendly interfaces, we help organizations streamline their operations and achieve their digital transformation goals.",
    website: "https://techcorp.example.com",
    location: "San Francisco, CA",
    size: "1000-5000 employees",
    industry: "Technology",
    logo: "https://images.unsplash.com/photo-1549921296-3b0f9a35af35?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    founded: 2005
  },
  {
    id: uuidv4(),
    name: "FinanceHub",
    description: "FinanceHub is a financial technology company revolutionizing the way people manage their money. Our platform provides intuitive tools for budgeting, investing, and financial planning, making financial wellness accessible to everyone.",
    website: "https://financehub.example.com",
    location: "New York, NY",
    size: "500-1000 employees",
    industry: "FinTech",
    logo: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    founded: 2012
  },
  {
    id: uuidv4(),
    name: "HealthPlus",
    description: "HealthPlus is dedicated to improving healthcare outcomes through innovative technology solutions. Our digital health platform connects patients with providers, streamlines medical records, and leverages data analytics to enhance patient care.",
    website: "https://healthplus.example.com",
    location: "Boston, MA",
    size: "100-500 employees",
    industry: "Healthcare",
    logo: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    founded: 2015
  },
  {
    id: uuidv4(),
    name: "GreenEnergy",
    description: "GreenEnergy is at the forefront of the renewable energy revolution. We develop sustainable energy solutions that help businesses and communities reduce their carbon footprint while saving on energy costs.",
    website: "https://greenenergy.example.com",
    location: "Austin, TX",
    size: "50-100 employees",
    industry: "Renewable Energy",
    logo: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    founded: 2018
  },
  {
    id: uuidv4(),
    name: "EduTech",
    description: "EduTech is transforming education through technology. Our learning platforms and tools make education more accessible, engaging, and effective for students of all ages and backgrounds.",
    website: "https://edutech.example.com",
    location: "Chicago, IL",
    size: "100-500 employees",
    industry: "Education Technology",
    logo: "https://images.unsplash.com/photo-1503428593586-e225b39bddfe?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    founded: 2010
  }
];

export const jobs: Job[] = [
  {
    id: uuidv4(),
    title: "Senior Frontend Developer",
    company: "TechCorp",
    companyId: companies[0].id,
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$120,000 - $150,000",
    description: "We're looking for a Senior Frontend Developer to join our team and help build beautiful, responsive web applications. You'll work closely with designers and backend developers to create seamless user experiences.",
    requirements: [
      "5+ years of experience with React, Vue, or Angular",
      "Strong understanding of JavaScript, HTML, and CSS",
      "Experience with responsive design and cross-browser compatibility",
      "Knowledge of modern frontend build tools",
      "Bachelor's degree in Computer Science or related field"
    ],
    postedAt: "2023-05-15T10:30:00Z",
    logo: companies[0].logo
  },
  {
    id: uuidv4(),
    title: "Data Scientist",
    company: "FinanceHub",
    companyId: companies[1].id,
    location: "Remote",
    type: "Full-time",
    salary: "$130,000 - $160,000",
    description: "Join our data science team to develop machine learning models that power our financial prediction and recommendation engines. You'll analyze large datasets and create algorithms that help our users make better financial decisions.",
    requirements: [
      "3+ years of experience in data science or machine learning",
      "Proficiency in Python and data analysis libraries (Pandas, NumPy, etc.)",
      "Experience with machine learning frameworks (TensorFlow, PyTorch, etc.)",
      "Strong statistical knowledge",
      "Master's or PhD in Computer Science, Statistics, or related field"
    ],
    postedAt: "2023-05-10T14:45:00Z",
    logo: companies[1].logo
  },
  {
    id: uuidv4(),
    title: "Product Manager",
    company: "HealthPlus",
    companyId: companies[2].id,
    location: "Boston, MA",
    type: "Full-time",
    salary: "$110,000 - $140,000",
    description: "We're seeking a Product Manager to lead the development of our digital health platform. You'll work with cross-functional teams to define product strategy, gather requirements, and deliver features that improve healthcare outcomes.",
    requirements: [
      "3+ years of product management experience",
      "Experience in healthcare or health tech preferred",
      "Strong analytical and problem-solving skills",
      "Excellent communication and stakeholder management abilities",
      "Bachelor's degree required, MBA preferred"
    ],
    postedAt: "2023-05-08T09:15:00Z",
    logo: companies[2].logo
  },
  {
    id: uuidv4(),
    title: "Renewable Energy Engineer",
    company: "GreenEnergy",
    companyId: companies[3].id,
    location: "Austin, TX",
    type: "Full-time",
    salary: "$90,000 - $120,000",
    description: "Join our engineering team to design and implement renewable energy solutions for commercial and residential applications. You'll work on projects involving solar, wind, and other clean energy technologies.",
    requirements: [
      "Degree in Electrical, Mechanical, or Environmental Engineering",
      "2+ years of experience in renewable energy",
      "Knowledge of energy storage systems",
      "Familiarity with energy efficiency standards and regulations",
      "Strong problem-solving skills"
    ],
    postedAt: "2023-05-05T11:20:00Z",
    logo: companies[3].logo
  },
  {
    id: uuidv4(),
    title: "Curriculum Developer",
    company: "EduTech",
    companyId: companies[4].id,
    location: "Chicago, IL",
    type: "Part-time",
    salary: "$40 - $60 per hour",
    description: "We're looking for a Curriculum Developer to create engaging educational content for our online learning platform. You'll design lessons, activities, and assessments that align with educational standards and promote student engagement.",
    requirements: [
      "Teaching experience or background in education",
      "Strong content development skills",
      "Familiarity with educational technology",
      "Excellent writing and communication abilities",
      "Bachelor's degree in Education or related field"
    ],
    postedAt: "2023-05-03T13:10:00Z",
    logo: companies[4].logo
  }
];