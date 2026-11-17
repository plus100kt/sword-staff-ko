import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { guides } from '@/lib/guides';

export function generateStaticParams() {
  return guides.map(guide => ({ slug: guide.slug }));
}

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = guides.find(item => item.slug === slug);
  return guide ? { title: guide.title, description: guide.summary } : {};
}

export default async function GuidePage({ params }: PageProps) {
  const { slug } = await params;
  const guide = guides.find(item => item.slug === slug);
  if (!guide) notFound();
  const related = guides.filter(item => item.slug !== slug)
    .sort((a, b) => Number(b.category === guide.category) - Number(a.category === guide.category))
    .slice(0, 3);

  return <>
    <div className="breadcrumb"><Link href="/guides">가이드</Link><span>/</span>{guide.category}</div>
    <div className="article-layout">
      <article className="article">
        <Link className="back" href="/guides">← 전체 가이드</Link>
        <div className="eyebrow muted">{guide.englishTitle}</div>
        <h1>{guide.title}</h1>
        <p className="article-summary">{guide.summary}</p>
        <div className="article-meta">
          <span>한국어 핵심 정리</span>
          <span>원문 확인 <time dateTime={guide.updated}>{guide.updated}</time></span>
          <span>{guide.minutes}분 읽기</span>
        </div>
        <div className="article-notice">
          <strong>원문: {guide.sourceAuthor}</strong> · 게시일 {guide.sourcePublished}<br/>
          Valkyrie에 수록된 해외 가이드의 핵심을 요약·재구성했습니다. 전체 번역이 아니며, 수치·일정·직업 평가는 원문의 해외판 기준입니다. 한국판에서는 게임 내 안내를 먼저 확인하세요.
        </div>
        {guide.sections.map(section => <section id={section.id} key={section.id}>
          <h2>{section.title}</h2>
          {section.paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
          {section.tips && <ul>{section.tips.map(tip => <li key={tip}>{tip}</li>)}</ul>}
        </section>)}
        <section id="sources" className="sources">
          <h2>출처와 원문</h2>
          <p>상세 계산·실험 결과·원문 전체 내용은 아래 자료에서 확인하세요.</p>
          {guide.sources.map(source => <a href={source.url} key={source.url} target="_blank" rel="noreferrer">
            {source.title}<span>원문 보기 ↗</span>
          </a>)}
        </section>
      </article>
      <aside className="toc">
        <p className="nav-label">이 글의 순서</p>
        {guide.sections.map((section, index) => <a key={section.id} href={`#${section.id}`}>
          <span>{String(index + 1).padStart(2, '0')}</span>{section.title}
        </a>)}
        <a href="#sources"><span>↗</span>출처와 원문</a>
        <div className="toc-note">이름이 헷갈린다면?<Link href="/glossary">한·영 용어집 →</Link></div>
      </aside>
    </div>
    <section className="related"><h2>이어서 읽기</h2><div>
      {related.map(item => <Link key={item.slug} href={`/guides/${item.slug}`}>
        <small>{item.category}</small><h3>{item.title} ↗</h3>
      </Link>)}
    </div></section>
  </>;
}
