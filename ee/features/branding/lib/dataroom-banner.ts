export type DataroomBannerKind = "image" | "video" | "none";

export function classifyDataroomBanner(src: string | null | undefined): {
  kind: DataroomBannerKind;
} {
  if (!src) return { kind: "none" };
  if (src.match(/\.(mp4|webm|ogg|mov)(\?|$)/i)) return { kind: "video" };
  return { kind: "image" };
}
