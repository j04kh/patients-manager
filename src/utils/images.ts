/**
 * Path to fallback avatar image.
 */
export const FALLBACK_IMG_PATH = "/images/default-avatar.png";

/**
 * Replaces a broken image source with a fallback image.
 * Used in an <img> tag's onError handler to handle invalid image URLs.
 * @param e - The image load error event.
 */
export function handleImageError(e: React.SyntheticEvent<HTMLImageElement, Event>) {
  e.currentTarget.onerror = null;
  e.currentTarget.src = FALLBACK_IMG_PATH;
}