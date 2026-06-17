export function useLogoTone(_src: string | null | undefined) {
  return {
    tone: "dark" as const,
    imgProps: {} as React.ImgHTMLAttributes<HTMLImageElement>,
  };
}

import React from "react";
