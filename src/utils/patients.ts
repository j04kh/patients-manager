
/**
 * Given a full name, returns the name with each word capitalized and the remaining letters in lowercase.
 * @param name - The patient's full name
 * @returns The full name with each word capitalized.
 */
export function capitalizeName(name: string): string {
  return name
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

/**
 * Validates whether the given value is a valid website URL for a patient's website.
 * It does not verify if the website is reachable or exists.
 * @param value - The patient's website URL as a string.
 * @returns True if the string is a valid URL format, otherwise false.
 */
export function isValidUrl(value: string): boolean {
  try {
    new URL(value);
    return true;
  } catch {
    return false;
  }
}

/**
 * Formats the patient's description.
 * Returns a default prompt if the description is empty or contains only whitespaces.
 * @param value - The patient's description as a string.
 * @returns The trimmed description or a default message if empty.
 */
export function formatPatientDescription(value: string): string {
  if (!value.trim().length) return "Click edit to add a description."
  return value.trim();
}