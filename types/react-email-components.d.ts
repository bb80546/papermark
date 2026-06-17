declare module "@react-email/components" {
  import * as React from "react";
  type AnyProps = Record<string, unknown>;
  export const Html: React.FC<AnyProps>;
  export const Head: React.FC<AnyProps>;
  export const Body: React.FC<AnyProps>;
  export const Preview: React.FC<AnyProps>;
  export const Section: React.FC<AnyProps>;
  export const Container: React.FC<AnyProps>;
  export const Text: React.FC<AnyProps>;
  export const Heading: React.FC<AnyProps>;
  export const Button: React.FC<AnyProps>;
  export const Hr: React.FC<AnyProps>;
  export const Img: React.FC<AnyProps>;
  export const Link: React.FC<AnyProps>;
  export const Tailwind: React.FC<AnyProps>;
  export const Row: React.FC<AnyProps>;
  export const Column: React.FC<AnyProps>;
  export const render: (element: React.ReactElement) => Promise<string>;
}
