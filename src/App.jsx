import { useEffect, useState } from "react";

import {
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import GemDetailPage from "./pages/GemDetailPage";
import JournalPage from "./pages/JournalPage";
import JournalPostPage from "./pages/JournalPostPage";

import { getGemstoneById } from "./data/gemstones";
import { getArticleBySlug } from "./data/articles";
import loaderLogo from "./assets/suranga-logo-mark.svg";

const SITE_URL = "https://surangagems.com";

const SOCIAL_IMAGE =
  `${SITE_URL}/images/og-suranga-gems.jpg`;

const PAGE_METADATA = {
  "/": {
    title:
      "Suranga Gems | Natural Gemstones from Madagascar & Sri Lanka",

    description:
      "Discover exceptional natural gemstones sourced through trusted relationships in Madagascar and Sri Lanka.",

    imageAlt:
      "Natural gemstones presented by Suranga Gems",
  },

  "/about": {
    title:
      "About Suranga Gems | Trust, Experience & Authenticity",

    description:
      "Discover the story of Suranga Gems and founder Suranga Weerasinghe, connecting Madagascar and Sri Lanka through trust, experience and lasting relationships.",

    imageAlt:
      "The story and founder of Suranga Gems",
  },

  "/contact": {
    title:
      "Contact Suranga Gems | Private Gemstone Enquiries",

    description:
      "Contact Suranga Gems for natural gemstone sourcing, private consultations, professional partnerships and general enquiries.",

    imageAlt:
      "Contact Suranga Gems for private gemstone enquiries",
  },

  "/journal": {
    title:
      "The Journal | Gemstone Guides by Suranga Gems",

    description:
      "Guides on buying, choosing and caring for natural sapphire, ruby and emerald from Suranga Gems.",

    imageAlt:
      "The Suranga Gems journal, gemstone guides and articles",
  },
};

function getMetadataForPath(pathname) {
  if (PAGE_METADATA[pathname]) {
    return PAGE_METADATA[pathname];
  }

  if (pathname.startsWith("/gems/")) {
    const slug = pathname.replace("/gems/", "");
    const gemstone = getGemstoneById(slug);

    if (gemstone) {
      return {
        title: `${gemstone.name} | Natural ${gemstone.origin} Gemstone | Suranga Gems`,
        description: gemstone.metaDescription,
        imageAlt: `${gemstone.name} natural gemstone from ${gemstone.origin}`,
      };
    }
  }

  if (pathname.startsWith("/journal/")) {
    const slug = pathname.replace("/journal/", "");
    const article = getArticleBySlug(slug);

    if (article) {
      return {
        title: article.metaTitle,
        description: article.metaDescription,
        imageAlt: article.title,
      };
    }
  }

  return PAGE_METADATA["/"];
}

function updateMetaTag({
  selector,
  attribute,
  value,
}) {
  let element =
    document.head.querySelector(selector);

  if (!element) {
    element = document.createElement("meta");

    const [attributeName, attributeValue] =
      selector
        .replace("meta[", "")
        .replace("]", "")
        .replaceAll('"', "")
        .split("=");

    element.setAttribute(
      attributeName,
      attributeValue
    );

    document.head.appendChild(element);
  }

  element.setAttribute(attribute, value);
}

function updateCanonicalLink(url) {
  let canonical =
    document.head.querySelector(
      'link[rel="canonical"]'
    );

  if (!canonical) {
    canonical = document.createElement("link");
    canonical.setAttribute("rel", "canonical");
    document.head.appendChild(canonical);
  }

  canonical.setAttribute("href", url);
}

function updatePageMetadata(pathname) {
  const metadata = getMetadataForPath(pathname);

  const pageUrl =
    pathname === "/"
      ? `${SITE_URL}/`
      : `${SITE_URL}${pathname}`;

  document.title = metadata.title;

  updateCanonicalLink(pageUrl);

  updateMetaTag({
    selector: 'meta[name="description"]',
    attribute: "content",
    value: metadata.description,
  });

  updateMetaTag({
    selector: 'meta[property="og:title"]',
    attribute: "content",
    value: metadata.title,
  });

  updateMetaTag({
    selector:
      'meta[property="og:description"]',
    attribute: "content",
    value: metadata.description,
  });

  updateMetaTag({
    selector: 'meta[property="og:url"]',
    attribute: "content",
    value: pageUrl,
  });

  updateMetaTag({
    selector: 'meta[property="og:image"]',
    attribute: "content",
    value: SOCIAL_IMAGE,
  });

  updateMetaTag({
    selector:
      'meta[property="og:image:alt"]',
    attribute: "content",
    value: metadata.imageAlt,
  });

  updateMetaTag({
    selector: 'meta[name="twitter:title"]',
    attribute: "content",
    value: metadata.title,
  });

  updateMetaTag({
    selector:
      'meta[name="twitter:description"]',
    attribute: "content",
    value: metadata.description,
  });

  updateMetaTag({
    selector: 'meta[name="twitter:image"]',
    attribute: "content",
    value: SOCIAL_IMAGE,
  });
}

function App() {
  const location = useLocation();

  const [isLoading, setIsLoading] =
    useState(true);

  /* Opening loader */

  useEffect(() => {
    const hasSeenLoader =
      window.sessionStorage.getItem("suranga-loader-seen");

    if (hasSeenLoader) {
      setIsLoading(false);
      return undefined;
    }

    const timer = window.setTimeout(() => {
      setIsLoading(false);
      window.sessionStorage.setItem(
        "suranga-loader-seen",
        "true"
      );
    }, 4800);

    return () => {
      window.clearTimeout(timer);
    };
  }, []);

  /* Gold scroll progress */

  useEffect(() => {
    const root = document.documentElement;

    const updateScrollProgress = () => {
      const scrollableHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

      const progress =
        scrollableHeight > 0
          ? window.scrollY / scrollableHeight
          : 0;

      root.style.setProperty(
        "--scroll-progress",
        String(Math.min(progress, 1))
      );
    };

    updateScrollProgress();

    window.addEventListener(
      "scroll",
      updateScrollProgress,
      {
        passive: true,
      }
    );

    window.addEventListener(
      "resize",
      updateScrollProgress
    );

    return () => {
      window.removeEventListener(
        "scroll",
        updateScrollProgress
      );

      window.removeEventListener(
        "resize",
        updateScrollProgress
      );

      root.style.removeProperty(
        "--scroll-progress"
      );
    };
  }, []);

  /* Page changes, SEO and reveal animations */

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });

    updatePageMetadata(location.pathname);

    const revealFrame =
      window.requestAnimationFrame(() => {
        const elements =
          document.querySelectorAll(
            "[data-reveal]"
          );

        const reducedMotion =
          window.matchMedia(
            "(prefers-reduced-motion: reduce)"
          ).matches;

        if (
          reducedMotion ||
          !("IntersectionObserver" in window)
        ) {
          elements.forEach((element) => {
            element.classList.add(
              "is-revealed"
            );
          });

          return;
        }

        const observer =
          new IntersectionObserver(
            (entries) => {
              entries.forEach((entry) => {
                if (!entry.isIntersecting) {
                  return;
                }

                entry.target.classList.add(
                  "is-revealed"
                );

                observer.unobserve(
                  entry.target
                );
              });
            },
            {
              threshold: 0.1,
              rootMargin:
                "0px 0px -5% 0px",
            }
          );

        elements.forEach((element) => {
          observer.observe(element);
        });

        window.__surangaRevealObserver =
          observer;
      });

    return () => {
      window.cancelAnimationFrame(
        revealFrame
      );

      window.__surangaRevealObserver?.disconnect();
    };
  }, [location.pathname]);

  return (
    <>
      <div
        className={`page-loader ${
          isLoading ? "is-visible" : ""
        }`}
        aria-hidden="true"
      >
        <div className="page-loader-mark">
  <div className="page-loader-copy">
    <div className="page-loader-brand">
      <img
        src={loaderLogo}
        alt=""
        className="page-loader-logo"
      />

      <span className="page-loader-name">
        Suranga Gems
      </span>
    </div>

    <span className="page-loader-line" />

    <div
      className="page-loader-words"
      aria-label="Natural, Rare, Timeless"
    >
      <span className="page-loader-word page-loader-word-natural">
        Natural
      </span>

      <span className="page-loader-word page-loader-word-rare">
        Rare
      </span>

      <span className="page-loader-word page-loader-word-timeless">
        Timeless
      </span>
    </div>
  </div>
</div>
          
      </div>

      <div
        className="scroll-progress"
        aria-hidden="true"
      />

      <div className="site-shell">
        <Navbar />

        <main>
          <Routes>
            <Route
              path="/"
              element={<HomePage />}
            />

            <Route
              path="/about"
              element={<AboutPage />}
            />

            <Route
              path="/contact"
              element={<ContactPage />}
            />

            <Route
              path="/gems/:slug"
              element={<GemDetailPage />}
            />

            <Route
              path="/journal"
              element={<JournalPage />}
            />

            <Route
              path="/journal/:slug"
              element={<JournalPostPage />}
            />

            <Route
              path="*"
              element={
                <Navigate
                  to="/"
                  replace
                />
              }
            />
          </Routes>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default App;