import { useEffect } from "react";

interface Meta {
  /** Page-specific title. The site name is appended automatically unless `bareTitle` is true. */
  title: string;
  description: string;
  /** Absolute URL (without origin). e.g. "/search?from=S0&to=S1" */
  canonicalPath?: string;
  /** Optional og:image URL (relative or absolute). */
  ogImage?: string;
  /** Defaults to "website". Use "article" for individual schedule pages. */
  ogType?: "website" | "article";
  /** Optional structured-data JSON-LD object. Stringified into a script tag. */
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
  /** Locale to set on og:locale and html lang/dir. Defaults inferred from caller. */
  locale?: "ar_EG" | "en_US";
  /** When true, do not append the site-name suffix to the title. */
  bareTitle?: boolean;
}

const SITE_ORIGIN = "https://egypt-trains.com";
const SITE_NAME_AR = "مواعيد قطارات مصر";
const SITE_NAME_EN = "Egypt Trains";
const DEFAULT_OG_IMAGE = `${SITE_ORIGIN}/icon-512.png`;

function setMeta(name: string, content: string, attr: "name" | "property" = "name") {
  let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setLink(rel: string, href: string) {
  let el = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

const JSONLD_ID = "page-jsonld";

function siteSuffix(locale?: Meta["locale"]) {
  return locale === "en_US" ? SITE_NAME_EN : SITE_NAME_AR;
}

export function useMeta(meta: Meta) {
  useEffect(() => {
    const fullTitle = meta.bareTitle
      ? meta.title
      : `${meta.title} | ${siteSuffix(meta.locale)}`;
    document.title = fullTitle;
    setMeta("description", meta.description);

    setMeta("og:title", fullTitle, "property");
    setMeta("og:description", meta.description, "property");
    setMeta("og:type", meta.ogType ?? "website", "property");
    setMeta("og:site_name", SITE_NAME_AR, "property");
    if (meta.locale) setMeta("og:locale", meta.locale, "property");

    const ogImg = meta.ogImage
      ? meta.ogImage.startsWith("http")
        ? meta.ogImage
        : `${SITE_ORIGIN}${meta.ogImage}`
      : DEFAULT_OG_IMAGE;
    setMeta("og:image", ogImg, "property");
    setMeta("twitter:image", ogImg);

    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", fullTitle);
    setMeta("twitter:description", meta.description);

    const canonicalPath = meta.canonicalPath ?? window.location.pathname + window.location.search;
    setLink("canonical", `${SITE_ORIGIN}${canonicalPath}`);
    setMeta("og:url", `${SITE_ORIGIN}${canonicalPath}`, "property");

    // Sync html lang/dir to current locale (helps screen readers + search engines)
    if (meta.locale) {
      const isAr = meta.locale === "ar_EG";
      document.documentElement.lang = isAr ? "ar" : "en";
      document.documentElement.dir = isAr ? "rtl" : "ltr";
    }

    // JSON-LD structured data (page-specific, separate from the global one in index.html)
    let scriptEl = document.getElementById(JSONLD_ID) as HTMLScriptElement | null;
    if (meta.jsonLd) {
      if (!scriptEl) {
        scriptEl = document.createElement("script");
        scriptEl.id = JSONLD_ID;
        scriptEl.type = "application/ld+json";
        document.head.appendChild(scriptEl);
      }
      scriptEl.text = JSON.stringify(meta.jsonLd);
    } else if (scriptEl) {
      scriptEl.remove();
    }
  }, [
    meta.title,
    meta.description,
    meta.canonicalPath,
    meta.ogImage,
    meta.ogType,
    meta.locale,
    meta.bareTitle,
    JSON.stringify(meta.jsonLd),
  ]);
}
