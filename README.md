# Adrian Avila Molina - Portfolio & Vibecoding Journal

A personal portfolio and journal focused on "Vibecoding" — building high-leverage B2B solutions and AI-driven products with a clear mind and optimized flow.

This project represents my digital twin, showcasing my journey from Industrial Engineering to Full-Stack Development and Business Intelligence.

## 🚀 About Me & The Project

I am a **Full-Stack Developer, Business Intelligence Developer, and Data Analyst** with a passion for optimizing systems.
This website showcases:
- **Professional Experience:** My work in BI, Data Analytics, and Web Development.
- **Projects:** Examples of high-leverage B2B solutions and SaaS products.
- **Vibecoding Journal:** My thoughts on flow state, productivity, and the "Vibecoding" lifestyle.
- **AI Twin:** An intelligent chat interface that can answer questions about my background (powered by OpenAI).

## 🛠️ Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS, Framer Motion for animations.
- **Data Source:** Local Data (`lib/data/portfolio.ts`).
  - *Note: Originally based on Sanity CMS, this project has been migrated to use local data for simplicity and performance.*
- **Authentication:** Clerk (for admin/protected routes if applicable).
- **AI Integration:** OpenAI ChatKit.

## 📦 Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Installation

1.  **Clone the repository:**
    ```bash
    git clone <your-repo-url>
    cd ai-portfolio-adrianavilamolina
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Environment Variables:**
    Create a `.env.local` file with the necessary keys (Clerk, OpenAI).
    ```env
    # Clerk
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=...
    CLERK_SECRET_KEY=...

    # OpenAI (for AI Twin)
    OPENAI_API_KEY=...
    ```

4.  **Run the development server:**
    ```bash
    npm run dev
    ```

    Open [http://localhost:3000](http://localhost:3000) with your browser.

## 📝 Managing Content

The core content of this portfolio is now managed locally.

**Drafting & Editing:**
- Open `lib/data/portfolio.ts`.
- Update the `profile`, `experience`, `education`, `skills`, or `projects` objects.
- Changes reflect instantly in development.

## 📁 Project Structure

- `app/`: Next.js App Router pages and layouts.
- `components/`: Reusable React components.
- `lib/data/`: **Source of Truth** for portfolio content (`portfolio.ts`).
- `Data/`: Legacy Sanity data dumps (kept for reference).

---

*Original template by Sonny Sangha (Next-Gen Portfolio).*
