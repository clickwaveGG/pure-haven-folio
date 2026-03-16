import { useNavigate, useLocation } from "react-router-dom";
import { useCallback, useRef, useEffect } from "react";

/**
 * Safely navigates back. Tracks if user navigated within the app.
 * If not (direct access), falls back to the given path.
 */
export function useSafeBack(fallback = "/") {
  const navigate = useNavigate();
  const location = useLocation();
  const hasNavigated = useRef(false);

  useEffect(() => {
    // After the first render, any location change means the user navigated within the app
    return () => {
      hasNavigated.current = true;
    };
  }, [location.key]);

  return useCallback(() => {
    // Check if there's meaningful history (more than just the current entry)
    if (window.history.state?.idx > 0) {
      navigate(-1);
    } else {
      navigate(fallback);
    }
  }, [navigate, fallback]);
}
