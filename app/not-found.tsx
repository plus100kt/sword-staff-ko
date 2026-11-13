import Link from 'next/link';
export default function NotFound(){return <div className="empty"><span>✧</span><h1>가이드를 찾을 수 없어요.</h1><p>주소가 바뀌었거나 아직 작성되지 않은 글입니다.</p><Link className="hero-action" href="/guides">가이드 목록으로 →</Link></div>;}
