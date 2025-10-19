const AUTH_STORAGE_KEY = "net-authenticated";

const isBrowser = typeof window !== "undefined" && typeof window.localStorage !== "undefined";

export const isAuthenticated = (): boolean => {
  if (!isBrowser) {
    return false;
  }

  return window.localStorage.getItem(AUTH_STORAGE_KEY) === "true";
};

export const setAuthenticated = (value: boolean) => {
  if (!isBrowser) {
    return;
  }

  if (value) {
    window.localStorage.setItem(AUTH_STORAGE_KEY, "true");
  } else {
    window.localStorage.removeItem(AUTH_STORAGE_KEY);
  }
};

export const clearAuthentication = () => {
  setAuthenticated(false);
};
