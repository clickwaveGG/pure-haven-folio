import { useNavigate } from "react-router-dom";
import { useCallback } from "react";

/**
 * Safely navigates back. If there's no history (e.g. direct link),
 * falls back to the given path (default: "/").
 */
export function useSafeBack(fallback = "/") {
  const navigate = useNavigate();

  return useCallback(() => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate(fallback);
    }
  }, [navigate, fallback]);
}
