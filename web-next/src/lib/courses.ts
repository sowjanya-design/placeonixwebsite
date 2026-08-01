import fs from "node:fs";
import path from "node:path";
import coursesJson from "@/data/courses.json";
import type { Course } from "./types";

const courses = coursesJson as unknown as Course[];

// Course intro videos are dropped into public/ by hand per-course, so the
// JSON can reference a path before the file actually exists. Checked at
// build time (this only ever runs server-side) so pages never render a
// broken/empty <video> for a course that hasn't gotten its file yet.
export function publicFileExists(publicPath: string): boolean {
  try {
    return fs.existsSync(path.join(process.cwd(), "public", publicPath));
  } catch {
    return false;
  }
}

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
