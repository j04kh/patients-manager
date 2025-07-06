import { isValidUrl } from "../../../utils/patients";

/**
 * Method used to validate Website URL input in the patient form
 */
export function validateWebsite(value: string): boolean | string {
  const isValid = isValidUrl(value);

  if (!isValid) return "Website should be a valid URL"

  return isValid;
}

/**
 * Initial values for the create patient form
 */
export const INITIAL_VALUES = {
  id: "",
  name: "",
  website: "",
  description: "",
  avatar: "",
}