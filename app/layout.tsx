import type { Metadata } from 'next';
import Link from 'next/link';
import { Shell } from '@/components/shell';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: { default: '소드노트 — 소드 x 스태프 한국어 가이드', template: '%s | 소드노트' },
  description: '해외 공략과 한국판 용어를 연결하는 소드 x 스태프 비공식 한국어 가이드.',
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="ko"><body><a className="skip" href="#main">본문으로 이동</a><Shell>{children}</Shell>
    <footer><span>✦ 소드노트 <small>Valkyrie 가이드 한국어 정리</small></span><div><Link href="/about">출처·운영 안내</Link><a href="https://valkyrie.tips/guides" target="_blank" rel="noreferrer">Valkyrie 원문 ↗</a></div></footer>
  </body></html>;
}
