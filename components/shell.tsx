'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
const links = [['/guides','가이드','▤'],['/glossary','한·영 용어집','◈'],['/about','출처·운영 안내','↗']];
export function Shell({children}: {children: React.ReactNode}) {
  const path = usePathname(); const [open,setOpen] = useState(false);
  return <><header className="topbar"><Link href="/guides" className="brand"><span className="brand-mark">✦</span><span>소드노트<small>SWORD × STAFF · KR</small></span></Link>
    <span className="top-caption">게임은 가볍게, 선택은 똑똑하게.</span><a className="source-top" href="https://valkyrie.tips/guides" target="_blank" rel="noreferrer">해외 가이드 ↗</a>
    <button className="menu-button" aria-label="메뉴" aria-expanded={open} onClick={()=>setOpen(!open)}>☰</button></header>
    <div className="app-layout"><aside className={open?'sidebar open':'sidebar'}><p className="nav-label">ADVENTURER’S HANDBOOK</p><nav aria-label="주 메뉴">{links.map(([href,label,icon])=><Link key={href} href={href} className={path.startsWith(href)?'active':''} aria-current={path.startsWith(href)?'page':undefined} onClick={()=>setOpen(false)}><span>{icon}</span>{label}</Link>)}</nav>
      <div className="sidebar-note"><span className="status-dot"/>한국어 가이드 프로젝트<p>영문명도 함께 확인하고,<br/>내 서버에 맞춰 선택하세요.</p><Link href="/glossary">헷갈리는 이름 찾기 →</Link></div>
      <div className="sidebar-bottom">UNOFFICIAL FAN PROJECT<br/><span>Valkyrie와 독립적으로 운영됩니다.</span></div></aside>
    <main id="main">{children}</main></div></>;
}
