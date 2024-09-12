import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export const baseUrl = `${process.env.NEXT_PUBLIC_PRODEV_HUB_BACKEND_ROOT_URL}`;

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
