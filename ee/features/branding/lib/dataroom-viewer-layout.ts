import { z } from "zod";

export type DataroomViewerHeaderStyle = "SPLIT" | "NOTION" | "DEFAULT" | null;
export type DataroomCardLayout = "GRID" | "LIST" | "COMPACT" | null;
export type DataroomViewerLayoutPreset = string | null;

export const DataroomViewerHeaderStyleSchema = z
  .enum(["SPLIT", "NOTION", "DEFAULT"])
  .nullable();

export const DataroomCardLayoutSchema = z
  .enum(["GRID", "LIST", "COMPACT"])
  .nullable();

export const DataroomViewerLayoutPresetSchema = z.string().nullable();

export function asDataroomViewerHeaderStyle(
  value: unknown,
): DataroomViewerHeaderStyle {
  if (value === "SPLIT" || value === "NOTION" || value === "DEFAULT")
    return value;
  return null;
}

export function asDataroomCardLayout(value: unknown): DataroomCardLayout {
  if (value === "GRID" || value === "LIST" || value === "COMPACT") return value;
  return null;
}

export const CARD_LAYOUT_OPTIONS: DataroomCardLayout[] = [
  "GRID",
  "LIST",
  "COMPACT",
];

export function inferDataroomViewerLayoutPreset(
  _brand: unknown,
): DataroomViewerLayoutPreset {
  return null;
}
