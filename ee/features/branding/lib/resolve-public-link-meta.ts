export type ResolvedPublicLinkMeta = {
  enableCustomMetatag: boolean;
  metaTitle: string | null;
  metaDescription: string | null;
  metaImage: string | null;
  metaFavicon: string;
};

export function resolvePublicLinkMeta(params: {
  link: {
    enableCustomMetatag: boolean;
    metaTitle?: string | null;
    metaDescription?: string | null;
    metaImage?: string | null;
    metaFavicon?: string | null;
  };
  teamBrand?: {
    customLinkPreviewEnabled?: boolean | null;
    linkPreviewTitle?: string | null;
    linkPreviewDescription?: string | null;
    linkPreviewImage?: string | null;
    linkPreviewFavicon?: string | null;
  } | null;
  dataroomBrand?: {
    customLinkPreviewEnabled?: boolean | null;
    linkPreviewTitle?: string | null;
    linkPreviewDescription?: string | null;
    linkPreviewImage?: string | null;
    linkPreviewFavicon?: string | null;
  } | null;
  defaultTitle: string;
}): ResolvedPublicLinkMeta {
  const { link, teamBrand, dataroomBrand, defaultTitle } = params;

  if (link.enableCustomMetatag) {
    return {
      enableCustomMetatag: true,
      metaTitle: link.metaTitle ?? defaultTitle,
      metaDescription: link.metaDescription ?? null,
      metaImage: link.metaImage ?? null,
      metaFavicon: link.metaFavicon ?? "/favicon.ico",
    };
  }

  const brand = dataroomBrand ?? teamBrand;
  if (brand?.customLinkPreviewEnabled) {
    return {
      enableCustomMetatag: true,
      metaTitle: brand.linkPreviewTitle ?? defaultTitle,
      metaDescription: brand.linkPreviewDescription ?? null,
      metaImage: brand.linkPreviewImage ?? null,
      metaFavicon: brand.linkPreviewFavicon ?? "/favicon.ico",
    };
  }

  return {
    enableCustomMetatag: false,
    metaTitle: null,
    metaDescription: null,
    metaImage: null,
    metaFavicon: "/favicon.ico",
  };
}
