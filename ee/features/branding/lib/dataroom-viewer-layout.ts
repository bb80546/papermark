export type DataroomViewerHeaderStyle = "light" | "dark" | "custom" | null;
export type DataroomCardLayout = "grid" | "list" | null;

export function asDataroomViewerHeaderStyle(
  value: unknown,
): DataroomViewerHeaderStyle {
  if (value === "light" || value === "dark" || value === "custom") return value;
  return null;
}

export function asDataroomCardLayout(value: unknown): DataroomCardLayout {
  if (value === "grid" || value === "list") return value;
  return null;
}
