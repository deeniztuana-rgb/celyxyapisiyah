import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import type { Post } from '@/data/blog';
import { formatDate } from '@/data/blog';

export function BlogCard({ post, priority = false }: { post: Post; priority?: boolean }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col overflow-hidden border border-line bg-white transition-all duration-500 ease-premium hover:-translate-y-1 hover:shadow-[0_24px_60px_-30px_rgba(11,11,11,0.35)]"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={post.cover}
          alt={post.title}
          fill
          priority={priority}
          className="object-cover transition-transform duration-700 ease-premium group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-3 text-xs text-text-muted">
          <span className="font-medium uppercase tracking-[0.14em] text-ink">
            {post.category}
          </span>
          <span className="h-1 w-1 rounded-full bg-accent" />
          <span>{formatDate(post.date)}</span>
        </div>
        <h3 className="mt-4 font-display text-lg font-semibold leading-snug tracking-tight text-ink">
          {post.title}
        </h3>
        <p className="mt-3 line-clamp-2 flex-1 text-sm leading-relaxed text-text-muted">
          {post.excerpt}
        </p>
        <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-ink">
          Devamını Oku
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
        </span>
      </div>
    </Link>
  );
}
