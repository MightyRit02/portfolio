// no @Injectable, just an interface
export interface Project {
  _id?: string;
  title: string;
  description: string;
  image?: string;
  technologies?: string[];
  link?: string;
  video?: string;
}
