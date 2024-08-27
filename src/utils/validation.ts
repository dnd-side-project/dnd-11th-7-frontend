export type ValidState = {
  isValid: true;
};
export type InvalidState = {
  isValid: false;
  message?: string;
};

export const createIsValidInstance: () => ValidState = () => ({ isValid: true });
export const createIsInvalidInstance: (message?: string) => InvalidState = (message) => ({
  isValid: false,
  message,
});
