import { Dictionary } from "@/types/dictionary";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function isDictionary(obj: any): obj is Dictionary {
  return (
    obj &&
    typeof obj === "object" &&
    "form" in obj &&
    "howYouKnowOptions" in obj &&
    "howToHelpOptions" in obj
  );
}
