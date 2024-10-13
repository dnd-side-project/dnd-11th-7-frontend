/*
 * 숫자와 영문자만 허용하는 정규식
 */
export const englishAndNumberRegex = (str: string): boolean => {
  return /^[a-zA-Z0-9]+$/.test(str);
};

/**
 * NOTE: 비회원도 접근 가능한 페이지(isUnauthorizedUserAccessibleUrl)지만 로그인 유도를 위해 Login 페이지로 리다이렉트됐을 때,
 * `비회원으로 시작하기` 버튼 노출이 필요함
 *
 * 로그인 완료 후 리다이렉트할 url이 비회원 허용 페이지인지 확인하기 위해 url을 정규식으로 검사함
 * 비회원 허용 페이지에는 [/:uuid/new (일정 입력), ...]가 있음
 */
export const isUnauthorizedUserAccessibleUrlRegExp = [/^\/[A-Za-z\d]{8}\/new$/];
