import coursesJson from "@/data/courses.json";
import type { Course } from "./types";

const courses = coursesJson as unknown as Course[];

export function getAllCourses(): Course[] {
  return courses;
}

export function getCoursesByCategory(category: Course["category"]): Course[] {
  return courses.filter((c) => c.category === category);
}

export function getCourse(category: string, slug: string): Course | undefined {
  return courses.find((c) => c.category === category && c.slug === slug);
}

export function getAllCourseParams(): { category: string; slug: string }[] {
  return courses.map((c) => ({ category: c.category, slug: c.slug }));
}

export const categoryLabels: Record<Course["category"], string> = {
  sap: "SAP Courses",
  technology: "Technology Courses",
  combo: "Combo Programs",
};
