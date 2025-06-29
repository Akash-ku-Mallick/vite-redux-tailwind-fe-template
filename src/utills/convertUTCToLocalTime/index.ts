export function convertUTCToLocalTime(
  utcDateString: string,
  options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  }
): string {
  try {
    // Always enforce Z if not present (optional safety)
    const normalized = utcDateString.endsWith('Z') ? utcDateString : `${utcDateString}Z`;
    const date = new Date(normalized);

    if (isNaN(date.getTime())) {
      throw new Error('Invalid date format');
    }

    const userLocale = typeof navigator !== 'undefined' ? navigator.language : 'en-US';
    const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    return new Intl.DateTimeFormat(userLocale, {
      ...options,
      timeZone: userTimeZone,
    }).format(date);
  } catch (error) {
    console.error('Invalid UTC date:', utcDateString, error);
    return utcDateString;
  }
}
