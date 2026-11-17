export const metadata = { title: '출처·운영 안내' };

export default function About() {
  return <article className="article about">
    <div className="eyebrow">ABOUT THIS HANDBOOK</div>
    <h1>해외 공략을 읽고,<br/>한국어로 정리합니다.</h1>
    <p className="article-summary">소드노트는 소드 x 스태프를 위한 비공식 한국어 팬 가이드입니다.</p>
    <section><h2>현재 게시물</h2>
      <p>2026년 11월 17일 확인한 Valkyrie 가이드 목록의 10개 게시물을 주제별 한국어 핵심 정리로 제공합니다. 기존 편집 노트 8개는 게시 목록과 상세 페이지에서 내렸습니다.</p>
      <p>음식, 시즌 2 준비, 리세마라, 성장 팁, 뽑기·천장, 대보물찾기, 운명의 열매, DPS 테스트, 공허 균열, 파트너 육성을 다룹니다.</p>
    </section>
    <section><h2>저자와 원문</h2>
      <p>Valkyrie에 수록된 각 글의 원문 출처는 EOG.GG입니다. 글마다 원저자, 원문 게시일, 확인일과 직접 원문 링크를 표시합니다. 한국어 본문은 핵심 내용을 선별해 요약·재구성한 글이며, 원문 전문·이미지·실험 표를 그대로 옮긴 전체 번역본은 아닙니다.</p>
      <a href="https://valkyrie.tips/guides" target="_blank" rel="noreferrer">Valkyrie 가이드 목록 ↗</a>
    </section>
    <section><h2>한국 서버에 적용할 때</h2>
      <p>확률, 천장, 이벤트 회차, 레벨 조건과 직업 평가는 각 원문의 해외판 기준입니다. 한국 서버의 일정·번역·패치와 다를 수 있으므로 게임 내 설명을 먼저 확인하세요. 원문 확인일은 원문 게시일이나 한국판 검증일을 뜻하지 않습니다.</p>
    </section>
    <section><h2>저장한 글과 업데이트</h2>
      <p>게시물은 파일로 관리하며 원문과 실시간으로 동기화하지 않습니다. 북마크는 현재 브라우저에만 저장됩니다. 삭제된 글의 북마크는 목록과 개수에서 제외됩니다. 회원가입, 광고, 외부 분석 도구는 없습니다.</p>
    </section>
  </article>;
}
