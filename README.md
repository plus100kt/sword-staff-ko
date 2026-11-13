# 소드노트

소드 x 스태프 한국어 팬 가이드의 첫 버전. Next.js App Router, React, TypeScript로 작성했습니다.

## 현재 구현

- 한국어 편집 노트 8개와 정적 상세 페이지
- 한국어·영문명 검색, 카테고리 필터, 정렬, 검색 결과 없음 처리
- 브라우저 로컬 북마크
- 한·영 용어집, 글별 목차·관련 글·외부 참고 링크
- 반응형 레이아웃, 기본 메타데이터, robots 및 선택적 sitemap
- GitHub Actions 빌드 검사와 Vercel 설정

이 프로젝트는 Valkyrie 사이트의 전체 복사본이나 원문 전체 번역본이 아닙니다. UI와 코드는 새로 구현했으며 본문은 독립 편집 노트입니다. 게임 DB, 지도 이미지, 원문 자동 수집·동기화, 회원가입은 포함하지 않습니다. 원문 전체 번역과 이미지 재사용을 추가할 때는 원저작자의 이용 조건·허락 범위를 확인하고 저자·원문·확인일을 기록하세요.

## 실행

Node.js 22 이상이 필요합니다.

```sh
npm ci
npm run dev
```

브라우저에서 http://localhost:3000 을 엽니다.

```sh
npm test
npm run typecheck
npm run build
npm start
```

## 콘텐츠 편집

`content/guides.json`에 글을 추가하거나 수정하세요. `slug`는 영문 소문자·숫자·하이픈으로 고유하게 작성합니다. 제목·분류·요약·태그·날짜·본문 섹션·참고 링크를 같은 구조로 입력하면 목록과 상세 페이지에 반영됩니다. 섹션 `id`도 글 안에서 고유해야 합니다. 분류와 용어집은 `lib/guides.ts`에서 관리합니다.

한국판 명칭과 서버별 수치는 게임 내 안내와 대조해야 합니다. 편집 날짜는 해외 원문 갱신일을 의미하지 않습니다. `minutes`는 편집자가 설정하는 예상 읽기 시간입니다.

## GitHub에 올리기

새 저장소를 만든 뒤 프로젝트 폴더에서 실행합니다. 원격 주소는 본인의 실제 저장소 주소로 바꾸세요. 인증 토큰이나 `.env.local`은 커밋하지 마세요.

```sh
git init -b main
git add .
git commit -m "Build Korean Sword x Staff guide"
git remote add origin https://github.com/YOUR_NAME/YOUR_REPOSITORY.git
git push -u origin main
```

## Vercel 배포

1. Vercel에서 **Add New → Project**로 GitHub 저장소를 가져옵니다.
2. Framework Preset은 **Next.js**, Root Directory는 이 프로젝트 루트입니다.
3. 기본 설치·빌드 명령을 사용합니다. `vercel.json`에 `npm ci`, `npm run build`가 지정되어 있습니다.
4. 환경 변수 `NEXT_PUBLIC_SITE_URL`에 실제 공개 주소(예: `https://your-project.vercel.app`)를 입력하고 배포합니다.
5. 첫 배포 이후 주소를 설정했다면 재배포합니다. 이 값이 있어야 sitemap에 실제 공개 URL이 생성됩니다.

API 키나 외부 DB는 필요하지 않습니다. GitHub 연결 이후 `main`에 푸시하면 Vercel의 Git 연동으로 자동 배포할 수 있습니다.

## 출처

구성 참고: https://valkyrie.tips/guides

개별 참고 링크는 각 글의 `sources`에 기록되어 있습니다. 이 프로젝트는 Valkyrie 또는 게임 운영사와 제휴하지 않은 비공식 팬 프로젝트입니다.
