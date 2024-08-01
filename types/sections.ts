export type SEODataType = {
  title: string;
  author?: string;
  description?: string;
  image?: string;
  url?: string;
  keywords: string[];
};

// https://www.typescriptlang.org/docs/handbook/2/objects.html#index-signatures

export type SocialLinksType = {
  [link: string]: string;
};

// * HERO SECTION

export type GreetingsType = {
  name: string;
  title: string;
  description?: string;
  resumeLink?: string;
  styles?: {
    fontFamily: string;
  };
};


// * SKILLS SECTION

type SoftwareSkillType = {
  skillName: string;
  iconifyTag: string;
};

type SkillType = {
  title: string;
  lottieAnimationFile: string;
  skills: React.ReactNode[] | string[];
  softwareSkills: SoftwareSkillType[];
};

export type SkillsSectionType = {
  title: string;
  subTitle: string;
  data: {
    title: string;
    lottieAnimationFile: string;
    skills: (string | React.ReactNode)[];
    softwareSkills: {
      skillName: string;
      iconifyTag: string;
    }[];
  }[];
};


// * PROFICIENCY SECTION

export type SkillBarsType = {
  Stack: string;
  progressPercentage: string;
};

// * EDUCATION SECTION

export interface EducationType {
  schoolName: string;
  subHeader: string;
  desc?: string;
  grade?: string;
  descBullets?: string[];
  degree?: string;
  coursework?: string[];
  activities?: string[];
  date?: string;
}

export interface ExperienceType {
  company: string;
  date: string;
  title?: string;
  description?: string;
  companyLogo? : string;
  role?: string;
  desc?: string;
  descBullets?: string[];
}

// * PROJECT SECTION

export type ProjectType = {
  name: string;
  desc: string;
  github?: string;
  link?: string;
};

// * FEEDBACK SECTION


