import { portfolioData } from "@/lib/data/portfolio";
import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export async function generateStaticParams() {
    return portfolioData.blog.map((post) => ({
        slug: post.slug.current,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const post = portfolioData.blog.find((p) => p.slug.current === slug);
    if (!post) {
        return {
            title: "Blog Post Not Found",
        };
    }
    return {
        title: `${post.title} | Adrian Avila Molina`,
        description: post.excerpt,
    };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = portfolioData.blog.find((p) => p.slug.current === slug);

    if (!post) {
        notFound();
    }

    return (
        <article className="py-24 px-6 max-w-3xl mx-auto min-h-screen">
            <Link
                href="/#blog"
                className="group text-muted-foreground hover:text-primary mb-8 inline-flex items-center gap-2 text-sm font-medium transition-colors"
            >
                <span className="group-hover:-translate-x-1 transition-transform">←</span> Back to Journal
            </Link>

            <header className="mb-12 text-center">
                <div className="flex justify-center mb-6">
                    {post.category && (
                        <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                            {post.category}
                        </span>
                    )}
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">{post.title}</h1>
                <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
                    <time dateTime={post.publishedAt}>
                        {new Date(post.publishedAt).toLocaleDateString("en-US", {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                        })}
                    </time>
                    <span>•</span>
                    <span>{post.readTime} min read</span>
                </div>
            </header>

            {post.featuredImage && (
                <div className="relative aspect-video mb-12 rounded-xl overflow-hidden bg-muted">
                    <Image
                        src={post.featuredImage}
                        alt={post.title}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
            )}

            <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-a:text-primary prose-img:rounded-xl">
                {post.content ? (
                    <PortableText value={post.content} />
                ) : (
                    <p className="text-xl leading-relaxed text-muted-foreground">{post.excerpt}</p>
                )}
            </div>
        </article>
    );
}
