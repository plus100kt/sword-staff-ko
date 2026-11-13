import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const guides=JSON.parse(readFileSync(new URL('../content/guides.json',import.meta.url),'utf8'));
test('공개 글의 경로와 목차 앵커가 고유하고 모든 출처가 HTTPS다',()=>{
 assert.equal(new Set(guides.map(g=>g.slug)).size,guides.length);
 for(const g of guides){assert.match(g.slug,/^[a-z0-9-]+$/);assert.ok(g.title&&g.summary&&g.sections.length&&g.sources.length);assert.equal(new Set(g.sections.map(s=>s.id)).size,g.sections.length);for(const s of g.sections){assert.ok(s.title&&s.paragraphs.length);assert.match(s.id,/^[a-z0-9-]+$/);}for(const s of g.sources)assert.equal(new URL(s.url).protocol,'https:');}
});
test('홈의 추천 링크가 실제 가이드로 연결된다',()=>{for(const slug of ['getting-started','currency','sage'])assert.ok(guides.some(g=>g.slug===slug));});
