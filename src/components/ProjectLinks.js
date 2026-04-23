import { Code2, ExternalLink, Clapperboard } from "lucide-react"

export default function ProjectLinks({ code, video, link }) {
  if (!code && !video && !link) return null

  return (
    <div className="absolute bottom-3 right-3 flex gap-3">
      {code && (
        <a href={code} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-square bg-base-100/80 hover:bg-base-100 border border-base-content/80 backdrop-blur-sm shadow-none" title="Se kode">
          <Code2 size={16} />
        </a>
      )}
      {video && (
        <a href={video} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-square bg-base-100/80 hover:bg-base-100 border border-base-content/80 backdrop-blur-sm shadow-none" title="Se video">
          <Clapperboard size={16} />
        </a>
      )}
      {link && (
        <a href={link} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-square bg-base-100/80 hover:bg-base-100 border border-base-content/80 backdrop-blur-sm shadow-none" title="Se mere">
          <ExternalLink size={16} />
        </a>
      )}
    </div>
  )
}
