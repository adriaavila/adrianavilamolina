"use client";

import { useState, useTransition } from "react";
import { submitContactForm } from "@/app/actions/submit-contact-form";
import { portfolioSiteContent, type SiteLocale } from "@/lib/data/site-content";

type ContactFormProps = {
  locale?: SiteLocale;
  variant?: "default" | "minimal";
};

export function ContactForm({
  locale = "en",
  variant = "default",
}: ContactFormProps) {
  const content = portfolioSiteContent[locale];
  const [isPending, startTransition] = useTransition();
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);

    startTransition(async () => {
      const result = await submitContactForm(formData);

      if (result.success) {
        setStatus({
          type: "success",
          message:
            locale === "es"
              ? "Gracias. Tu mensaje fue recibido correctamente."
              : "Thanks. Your message was received successfully.",
        });
        // Reset the form
        (e.target as HTMLFormElement).reset();
        // Clear success message after 5 seconds
        setTimeout(() => {
          setStatus({ type: null, message: "" });
        }, 5000);
      } else {
        setStatus({
          type: "error",
          message:
            result.error ||
            (locale === "es"
              ? "Algo salió mal. Inténtalo de nuevo."
              : "Something went wrong. Please try again."),
        });
      }
    });
  };

  const isMinimal = variant === "minimal";
  const wrapperClassName = isMinimal
    ? "border-l border-border/70 pl-0 lg:pl-8"
    : "rounded-[2rem] border border-border/60 bg-card/76 p-6 shadow-[0_18px_60px_-38px_rgba(31,28,25,0.38)] sm:p-8";
  const fieldClassName = isMinimal
    ? "w-full border-0 border-b border-border/70 bg-transparent px-0 py-3 text-sm text-foreground transition-[border-color,box-shadow,color] placeholder:text-muted-foreground/70 focus-visible:border-primary focus-visible:outline-none @md/form:text-base"
    : "w-full rounded-[1.2rem] border border-border/70 bg-background/92 px-4 py-3 text-sm text-foreground transition-[border-color,box-shadow,background-color] placeholder:text-muted-foreground/70 focus-visible:border-primary/40 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/10 @md/form:text-base";
  const textareaClassName = isMinimal
    ? "w-full resize-none border-0 border-b border-border/70 bg-transparent px-0 py-3 text-sm text-foreground transition-[border-color,box-shadow,color] placeholder:text-muted-foreground/70 focus-visible:border-primary focus-visible:outline-none @md/form:text-base"
    : "w-full resize-none rounded-[1.4rem] border border-border/70 bg-background/92 px-4 py-3 text-sm text-foreground transition-[border-color,box-shadow,background-color] placeholder:text-muted-foreground/70 focus-visible:border-primary/40 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/10 @md/form:text-base";
  const buttonClassName = isMinimal
    ? "inline-flex w-full items-center justify-center rounded-full border border-primary/40 bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-[background-color,transform,border-color,box-shadow,opacity] hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/10 disabled:cursor-not-allowed disabled:opacity-60 @md/form:text-base"
    : "inline-flex w-full items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-[background-color,transform,box-shadow,opacity] hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/15 disabled:cursor-not-allowed disabled:opacity-60 @md/form:text-base";

  return (
    <div className={`@container/form ${wrapperClassName}`}>
      <div className="space-y-3">
        <div className="text-xs font-semibold uppercase tracking-[0.24em] text-primary/80">
          {content.contact.eyebrow}
        </div>
        <h3
          className={`font-[family:var(--font-display)] text-3xl text-foreground @md/form:text-4xl ${
            isMinimal ? "max-w-sm" : ""
          }`}
        >
          {content.contact.formTitle}
        </h3>
        <p
          className={`text-sm leading-7 text-muted-foreground @md/form:text-base ${
            isMinimal ? "max-w-md" : ""
          }`}
        >
          {content.contact.formDescription}
        </p>
      </div>

      {status.type && (
        <div
          aria-live="polite"
          className={`mt-6 rounded-[1.2rem] border px-4 py-3 text-sm ${
            status.type === "success"
              ? "border-emerald-500/20 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300"
              : "border-red-500/20 bg-red-500/10 text-red-700 dark:text-red-300"
          }`}
        >
          {status.message}
        </div>
      )}

      <form
        className="mt-6 space-y-4 @md/form:space-y-5"
        onSubmit={handleSubmit}
      >
        <div className="grid gap-4 @lg/form:grid-cols-2">
          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-sm font-medium text-foreground"
            >
              {locale === "es" ? "Nombre" : "Name"}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              autoComplete="name"
              className={fieldClassName}
              placeholder={locale === "es" ? "Tu nombre…" : "Your name…"}
              required
              disabled={isPending}
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-foreground"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              autoComplete="email"
              spellCheck={false}
              className={fieldClassName}
              placeholder="your.email@example.com"
              required
              disabled={isPending}
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="subject"
            className="mb-2 block text-sm font-medium text-foreground"
          >
            {locale === "es" ? "Asunto" : "Subject"}
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            autoComplete="off"
            className={fieldClassName}
            placeholder={
              locale === "es"
                ? "¿Qué necesitas construir…?"
                : "What do you need to build…?"
            }
            required
            disabled={isPending}
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="mb-2 block text-sm font-medium text-foreground"
          >
            {locale === "es" ? "Mensaje" : "Message"}
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            autoComplete="off"
            className={textareaClassName}
            placeholder={
              locale === "es"
                ? "Cuéntame la idea, el objetivo y en qué etapa estás…"
                : "Tell me about the idea, the goal, and the stage you're in…"
            }
            required
            disabled={isPending}
          />
        </div>

        <button type="submit" disabled={isPending} className={buttonClassName}>
          {isPending
            ? locale === "es"
              ? "Enviando…"
              : "Sending…"
            : locale === "es"
              ? "Enviar Brief"
              : "Send Brief"}
        </button>
      </form>
    </div>
  );
}
