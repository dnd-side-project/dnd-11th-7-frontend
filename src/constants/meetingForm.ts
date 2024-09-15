export const meetingStepNames = [
  '카테고리',
  '모임이름',
  '일정수집기한',
  '모임인원수',
  '익명여부',
  '일정입력마감기한',
] as const;

export const categories = [
  '학교',
  '친구',
  '팀플',
  '회의',
  '스터디',
  '취미',
  '봉사',
  '기타',
] as const;

export const categoryIdMap: Record<(typeof categories)[number], number> = {
  학교: 1,
  친구: 2,
  팀플: 3,
  회의: 4,
  스터디: 5,
  취미: 6,
  봉사: 7,
  기타: 8,
} as const;
