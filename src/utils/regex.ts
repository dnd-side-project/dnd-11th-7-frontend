/*
 * 숫자와 영문자만 허용하는 정규식
 */
export const englishAndNumberRegex = (str: string): boolean => {
  return /^[a-zA-Z0-9]+$/.test(str);
};
