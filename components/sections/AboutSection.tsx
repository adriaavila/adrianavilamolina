import Link from "next/link";
import { portfolioData } from "@/lib/data/portfolio";

export function AboutSection() {
  const profile = portfolioData.profile;

  if (!profile) {
    return null;
  }

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground">Get to know me better</p>
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          {profile.fullBio && (
            <div className="space-y-4">
              {profile.fullBio.map((block: any, index: number) => {
                if (block._type === 'block') {
                  // Handle list items
                  if (block.listItem) {
                    return (
                      <ul key={block._key || index} className="list-disc list-inside space-y-2 mb-4 text-muted-foreground">
                        <li>
                          {block.children.map((child: any) => child.text).join('')}
                        </li>
                      </ul>
                    )
                  }
                  // Handle normal paragraphs
                  return (
                    <p key={block._key || index} className="text-muted-foreground leading-relaxed">
                      {block.children.map((child: any) => {
                        if (child.marks && child.marks.includes('strong')) {
                          return <strong key={child._key} className="font-semibold text-foreground">{child.text}</strong>
                        }
                        return child.text;
                      })}
                    </p>
                  )
                }
                return null;
              })}
            </div>
          )}
        </div>

        {/* Stats - using Years of Experience as a stat if others are missing */}
        {/* The new data doesn't have a 'stats' array explicitly in the same format, 
            but we can use what we have or placeholder. 
            For now, let's omit if not present or map if we add it to data.
            I'll check if I added stats to portfolioData. I did not explicitly add 'stats' array.
            I will comment this out for now to avoid errors, or add stats to portfolioData.
        */}
        {/* 
        {profile.stats && profile.stats.length > 0 && (
          <div className="@container mt-12 pt-12 border-t">
            <div className="grid grid-cols-2 @lg:grid-cols-4 gap-6">
              {profile.stats.map((stat: any, idx: number) => (
                <div
                  key={`${stat.label}-${idx}`}
                  className="@container/stat text-center"
                >
                  <div className="text-3xl @md/stat:text-4xl font-bold text-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-xs @md/stat:text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        */}
      </div>
    </section>
  );
}
