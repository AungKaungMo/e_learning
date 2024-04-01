import React from "react";

export enum SelectedPage {
  Home = "home",
  About = "about",
  Courses = "courses",
  Testimonials = "testimonials",
  Project = "project",
  Reviews = "reviews",
  // ContactUs = "contactus",
}

export type MiniSectionTypes = {
  id: number;
  title: string;
  desc: string;
  card: string;
  icon: React.ReactNode;
};

export enum PopularCourseTypes {
  WebDesign = "webdesign",
  Development = "development",
  GraphicDesign = "graphicdesign",
  UiUxDesign = "uiuxdesign",
}

export type PopularCourseType = {
  id: number;
  name: string;
};

export type CourseDataTypes = {
  id: number;
  slug?: string;
  imageUrl: string;
  type: string;
  title: string;
  except?: string;
  description?: string;
  rating: number;
  duration: string;
  lecture: number;
  category: {
    id: number;
    name: string;
  };
};

export type ReviewerTypes = {
  id: number;
  image: string;
  name: string;
  position: string;
};

export type ProgressAboutTypes = {
  id: number;
  labelName: string;
  percentage: number;
};

export type TeamMembersTypes = {
  id: number;
  name: string;
  position: string;
  image: string;
  facebookLink: string;
  linkedinLink: string;
};

export type StudentProjectTypes = {
  id: number;
  imageUrl: string;
  type?: string;
  title: string;
  except?: string;
  description: string;
  categoryType: string[];
};

export type TestimonialTypes = {
  id: number;
  imageUrl: string;
  name: string;
  except: string;
  review: string;
  rating: number;
};

export type CourseDetailType = {
  id: number;
  categoryId: number;
  description: string;
  duration: string;
  except: string;
  imageUrl: string;
  lectures: number;
  price: number;
  rating: number;
  skill: string;
  slug: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  category: {
    id: number;
    name: string;
  }
}