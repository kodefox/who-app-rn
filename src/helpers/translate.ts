type ParamsObject = {
  [key: string]: unknown;
};

// This matches words inside curly braces.
const PLACEHOLDER = /\{(\w+)\}/g;

// This function doesn't do anything right now, but it will in future
// lookup the correct string from somewhere.
export function t(input: string, params?: ParamsObject): string {
  if (params) {
    return input.replace(PLACEHOLDER, (match: string, word: string) =>
      params[word] != null ? String(params[word]) : match,
    );
  } else {
    return input;
  }
}
