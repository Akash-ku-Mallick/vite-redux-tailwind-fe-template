export function formatPhoneNumber(number: string): string {
  const cleaned = number.trim();

  if (cleaned.startsWith('+1') && cleaned.length > 2) {
    return `${cleaned.slice(0, 2)} ${cleaned.slice(2)}`;
  }

  return number; // return original if not +1 or too short
}
