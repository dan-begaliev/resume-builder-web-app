type ContactData = {
  firstname: string;
  lastname: string;
};
export const contactData: ContactData = {
  firstname: "",
  lastname: "",
};

type SummaryData = {
  title: string;
  description: string;
};

export const summaryData: SummaryData = {
  title: "",
  description: "",
};

type Skills = {
  name: string;
  level: number;
};

export const skillsData: Skills[] = [
  {
    name: "",
    level: 0,
  },
];

type Education = {
  institution: string;
  degree: string;
  startDate: string;
  endDate: string;
};
export const educationData: Education[] = [
  {
    institution: "",
    degree: "",
    startDate: "",
    endDate: "",
  },
];

type Experience = {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string;
};

export const experienceData: Experience[] = [
  {
    company: "",
    position: "",
    startDate: "",
    endDate: "",
    description: "",
  },
];
