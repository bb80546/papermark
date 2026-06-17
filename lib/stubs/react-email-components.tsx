import * as React from "react";

const stub: React.FC<Record<string, unknown>> = ({ children }) =>
  React.createElement(React.Fragment, null, children as React.ReactNode);

export const Html = stub;
export const Head = stub;
export const Body = stub;
export const Preview = stub;
export const Section = stub;
export const Container = stub;
export const Text = stub;
export const Heading = stub;
export const Button = stub;
export const Hr = stub;
export const Img = stub;
export const Link = stub;
export const Tailwind = stub;
export const Row = stub;
export const Column = stub;
export async function render(_el: React.ReactElement): Promise<string> {
  return "";
}
