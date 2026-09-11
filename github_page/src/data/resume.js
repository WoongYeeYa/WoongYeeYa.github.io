// 실제 경력, 학력, 연락처를 이 파일에서 채워 주세요. 빈 배열은 '작성 예정'으로 표시합니다.
export const resume = {
  name: '조영웅',
  handle: 'WoongYeeYa',
  headline: '끊임없이 성장하는 개발자',
  summary: '프로젝트를 만들며 배운 점과 시행착오를 남깁니다. 작은 개선도 꾸준히 기록하고, 나중에 다시 꺼내 볼 수 있는 형태로 정리해 갑니다.',
  github: 'https://github.com/WoongYeeYa',
  email: 'arhyun08311101@gmail.com',
  // 숙련도 대신 현재 프로젝트에서 사용한 기술을 표시합니다.
  skills: [
    { name: 'Frontend', items: ['React', 'JavaScript', 'HTML', 'CSS'] },
    { name: 'Tools & Platform', items: ['Vite', 'GitHub Pages', 'ESLint'] },
  ],
  // 예: { period: '2024.03 – 2026.02', title: '회사명 · 역할', description: '담당 업무와 성과' }
  experience: [],
  // 예: { period: '2020.03 – 2024.02', title: '학교명 · 전공', description: '학위 또는 교육 내용' }
  education: [],
  projects: [
    {
      title: '개인 블로그 · 공부 기록',
      description: '배움과 문제 해결 과정을 정리하는 개인 사이트입니다. 카테고리별 글 탐색과 여섯 항목으로 구성한 공부 기록 상세 화면을 제공합니다.',
      tags: ['React', 'Vite', 'CSS'],
      url: 'https://github.com/WoongYeeYa/WoongYeeYa.github.io',
    },
  ],
}
