import React from "react";

export function useLogoTone(_src: string | null | undefined): {
  tone: "light" | "dark";
  imgProps: React.ImgHTMLAttributes<HTMLImageElement>;
} {
  return { tone: "dark", imgProps: {} };
}
