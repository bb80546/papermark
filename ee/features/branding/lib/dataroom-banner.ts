export type DataroomBannerKind = "image" | "video" | "youtube" | "none";

type ClassifiedBanner =
  | { kind: "none"; src: null; youtubeId?: undefined }
  | { kind: "image" | "video"; src: string; youtubeId?: undefined }
  | { kind: "youtube"; src: string; youtubeId: string };

export function classifyDataroomBanner(
  src: string | null | undefined,
): ClassifiedBanner {
  if (!src) return { kind: "none", src: null };
  const youtubeMatch = src.match(
    /(?:youtube\.com\/watch\?v=|youtu\.be\/)([A-Za-z0-9_-]{11})/,
  );
  if (youtubeMatch) return { kind: "youtube", src, youtubeId: youtubeMatch[1] };
  if (src.match(/\.(mp4|webm|ogg|mov)(\?|$)/i)) return { kind: "video", src };
  return { kind: "image", src };
}
