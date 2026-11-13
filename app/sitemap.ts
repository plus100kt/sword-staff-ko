import type { MetadataRoute } from 'next';
import {guides} from '@/lib/guides';
export default function sitemap():MetadataRoute.Sitemap {const base=process.env.NEXT_PUBLIC_SITE_URL;if(!base)return [];return ['/guides','/glossary','/about',...guides.map(g=>`/guides/${g.slug}`)].map(path=>({url:new URL(path,base).href}));}
