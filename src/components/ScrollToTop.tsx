import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Resets window scroll to the top whenever the route pathname changes.
 * Without this, React Router preserves scroll position across navigations,
 * so clicking a footer link on the home page opens the next page already
 * scrolled to the bottom.
 *
 * Mount once inside <BrowserRouter>. Returns nothing.
 */
export const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);
  return null;
};
