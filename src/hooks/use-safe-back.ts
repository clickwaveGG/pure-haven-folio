import { useNavigate } from "react-router-dom";
import { useCallback } from "react";

/**
 * Safely navigates back. Uses React Router's history index
 * to determine if there's real navigation history.
 * If not (direct access), falls back to the given path.
 */
export function useSafeBack(fallback = "/") {
  const navigate = useNavigate();

  return useCallback(() => {
    // React Router stores the history index in state
    const idx = window.history.state?.idx;
    if (typeof idx === "number" && idx > 0) {
      navigate(-1);
    } else {
      navigate(fallback);
    }
  }, [navigate, fallback]);
}
