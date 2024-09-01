// Defining the types for each data block with inputType and value

export type Field = {
  inputType:
    | "text"
    | "textarea"
    | "select"
    | "number"
    | "calendar"
    | "email"
    | "phone"
    | "url"
    | "radio"
    | "checkbox";
  value: string | number | boolean;
  label: string;
  options?: string[]; // For select, radio, and checkbox inputs
};

type SummaryData = {
  email: Field;
  phone: Field;
  address: Field;
  website: Field;
};

export const summaryData: SummaryData = {
  email: { inputType: "email", value: "johndoe@gmail.com", label: "Email" },
  phone: { inputType: "phone", value: "2064461128", label: "Phone Number" },
  address: { inputType: "textarea", value: "San Francisco", label: "Address" },
  website: { inputType: "url", value: "Linkedin", label: "Website" },
};

type Skills = {
  name: Field;
};

export const skillsData: Skills[] = [
  {
    name: { inputType: "text", value: "", label: "Skill" },
  },
];

type Contact = {
  firstname: Field;
  lastname: Field;
  position: Field;
  description: Field;
};

export const contactData: Contact = {
  firstname: { inputType: "text", value: "JOHN", label: "First Name" },
  lastname: { inputType: "text", value: "DOE", label: "Last Name" },
  position: {
    inputType: "text",
    value: "Frontend Developer",
    label: "Position",
  },
  description: { inputType: "textarea", value: "", label: "Description" },
};

type Education = {
  institution: Field;
  degree: Field;
  startDate: Field;
  endDate: Field;
  gpa: Field;
  honors: Field;
};

export const educationData: Education = {
  institution: {
    inputType: "text",
    value: "Stanford University",
    label: "Institution",
  },
  degree: { inputType: "text", value: "Bachelor's Degree", label: "Degree" },
  startDate: {
    inputType: "calendar",
    value: "03/2020",
    label: "Start Date",
  },
  endDate: { inputType: "calendar", value: "07/2024", label: "End Date" },
  gpa: { inputType: "number", value: "GPA: 3.8", label: "GPA" },
  honors: {
    inputType: "textarea",
    value: "Dean's List",
    label: "Honors & Awards",
  },
};

export type Experience = {
  company: Field;
  position: Field;
  startDate: Field;
  endDate: Field;
  description: Field;
  responsibilities: Field;
  city: Field;
};

export const experienceData: Experience[] = [
  {
    company: { inputType: "text", value: "", label: "Company" },
    position: { inputType: "text", value: "", label: "Position" },
    city: { inputType: "textarea", value: "", label: "City" },
    startDate: { inputType: "calendar", value: "", label: "Start Date" },
    endDate: { inputType: "calendar", value: "", label: "End Date" },
    description: { inputType: "textarea", value: "", label: "Description" },
    responsibilities: {
      inputType: "textarea",
      value: "",
      label: "Responsibilities",
    },
  },
];

export type ResumeData = {
  contact: typeof contactData;
  summary: typeof summaryData;
  skills: typeof skillsData;
  education: typeof educationData;
  experience: typeof experienceData;
};
