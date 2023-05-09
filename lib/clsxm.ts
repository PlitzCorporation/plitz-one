import clsx, { ClassValue } from 'clsx';

/** Merge classes with tailwind-merge with clsx full feature */
export default function clsxm(...classes: ClassValue[]) {
  return clsx(...classes);
}
