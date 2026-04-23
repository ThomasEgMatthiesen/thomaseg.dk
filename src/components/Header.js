import { GitHubIcon, LinkedInIcon, CodePenIcon } from "@/components/icons"

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-base-100/80 backdrop-blur-md border-b border-base-content/10">
      <div className="max-w-7-xl mx-auto px-6 xl:px-24 h-16 flex items-center justify-between">
        <h1 className="text-lg font-bold tracking-tight">Thomas Eg Matthiesen</h1>
        <nav className="flex gap-1">
          <a href="https://github.com/ThomasEgMatthiesen" target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-square btn-ghost" title="GitHub">
            <GitHubIcon />
          </a>
          <a href="https://www.linkedin.com/in/thomas-eg/" target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-square btn-ghost" title="LinkedIn">
            <LinkedInIcon />
          </a>
          <a href="https://codepen.io/ThomasEgMatthiesen" target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-square btn-ghost" title="CodePen">
            <CodePenIcon />
          </a>
        </nav>
      </div>
    </header>
  )
}
