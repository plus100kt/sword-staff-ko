import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
const guides = JSON.parse(readFileSync(new URL('../content/guides.json', import.meta.url), 'utf8'));

test('공개 글의 경로·목차가 고유하고 출처·저자·확인일이 있다', () => {
  assert.equal(new Set(guides.map(g => g.slug)).size, guides.length);
  for (const guide of guides) {
    assert.match(guide.slug, /^[a-z0-9-]+$/);
    assert.ok(guide.title && guide.summary && guide.sections.length && guide.sourceAuthor);
    assert.match(guide.updated, /^\d{4}-\d{2}-\d{2}$/);
    assert.match(guide.sourcePublished, /^\d{4}-\d{2}-\d{2}$/);
    assert.equal(new Set(guide.sections.map(s => s.id)).size, guide.sections.length);
    for (const section of guide.sections) {
      assert.ok(section.title && section.paragraphs.length);
      assert.match(section.id, /^[a-z0-9-]+$/);
      assert.notEqual(section.id, 'sources');
    }
    for (const source of guide.sources) assert.equal(new URL(source.url).protocol, 'https:');
    assert.ok(guide.sources.some(source => source.url === `https://eog.gg/games/sword-x-staff/guides/${guide.slug}/`));
  }
});

test('Valkyrie 수록 10개 주제로 교체되고 기존 8개 글은 내려갔다', () => {
  const expected = ['food-guide', 'season-2-prep', 'reroll-guide', 'important-tips', 'gacha-and-pity', 'grand-treasure-hunt', 'destiny-fruit', 'dps-dummy-test', 'void-rifts', 'companion-upgrade'];
  assert.deepEqual(guides.map(g => g.slug).sort(), expected.sort());
  for (const retired of ['getting-started', 'currency', 'sage', 'fantomon', 'companions', 'maps', 'cart', 'reading-guides']) {
    assert.ok(!guides.some(guide => guide.slug === retired));
  }
});

test('홈의 실제 추천 링크가 교체된 가이드로 연결된다', () => {
  const component = readFileSync(new URL('../components/guide-explorer.tsx', import.meta.url), 'utf8');
  const slugs = [...component.matchAll(/href="\/guides\/([a-z0-9-]+)"/g)].map(match => match[1]);
  assert.equal(slugs.length, 3);
  for (const slug of slugs) assert.ok(guides.some(guide => guide.slug === slug), slug);
});
