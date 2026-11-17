import data from '@/content/guides.json';
export type Guide = {
  slug: string; title: string; englishTitle: string; category: string; summary: string;
  tags: string[]; featured: boolean; minutes: number; updated: string;
  sourceAuthor: string; sourcePublished: string;
  sections: { id: string; title: string; paragraphs: string[]; tips?: string[] }[];
  sources: { title: string; url: string }[];
};
export const guides: Guide[] = data;
export const categories = ['전체', '초보자', '성장·재화', '직업·전투', '판타몬·파트너', '탐험', '이벤트·시즌'];
export const glossary = [
  ['현자', 'Sage', '회복·소환·지속 피해 계열'],
  ['주술사', 'Sorcerer', '직접 원소 공격 계열'],
  ['피콜라', 'Sylvaerie', '공격력·속도 지원 판타몬'],
  ['바위룡', 'Terragon', '적 공격력 감소 판타몬'],
  ['철하피', 'Armopi', '방어·보호막 판타몬'],
  ['아스트라', 'Luminium', '유료 재화'],
  ['루나', 'Dawnium', '일상 성장과 거래에 사용하는 재화'],
  ['숲의 나라', 'Verdantglade', '초반 탐험 지역'],
  ['바위의 나라', 'Cinder Ridge', '숲의 나라 다음 지역'],
];
