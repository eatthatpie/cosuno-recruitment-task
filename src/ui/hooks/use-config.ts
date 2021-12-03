export function useConfig() {
  const apiHost = process.env.REACT_APP_API_HOST;
  const debounceTimeout = parseInt(process.env.REACT_APP_DEBOUNCE_TIMEOUT || "200");

  return { apiHost, debounceTimeout };
}
