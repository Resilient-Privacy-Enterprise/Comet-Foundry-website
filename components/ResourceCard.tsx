import { Resource, CATEGORY_DISPLAY, RESOURCE_TYPE_DISPLAY, TAG_DISPLAY } from '@/lib/resources';

function getActionLabel(resource: Resource): string {
  if (resource.github) return 'Clone on GitHub';
  if (resource.type === 'github-repo') return 'View on GitHub';
  if (resource.type === 'tool') return 'Download / Visit';
  if (resource.type === 'tutorial') return 'Watch Tutorial';
  if (resource.type === 'course') return 'Start Course';
  if (resource.type === 'guide') return 'Read Guide';
  if (resource.type === 'alternative') return 'Try Free';
  return 'Learn More';
}

export default function ResourceCard({ resource }: { resource: Resource }) {
  const actionLabel = getActionLabel(resource);

  return (
    <article className="resource-card">
      <div className="resource-header">
        <div className="resource-type-badge">{RESOURCE_TYPE_DISPLAY[resource.type]}</div>
        <div className="resource-title-section">
          <h3>{resource.name}</h3>
          <span className="resource-category">{CATEGORY_DISPLAY[resource.category]}</span>
        </div>
      </div>

      <p className="resource-description">{resource.description}</p>

      <div className="resource-tags">
        {resource.tags.map(tag => (
          <span key={tag} className="tag">
            {TAG_DISPLAY[tag]}
          </span>
        ))}
      </div>

      <div className="resource-footer">
        <a
          href={resource.url}
          target="_blank"
          rel="noopener noreferrer"
          className="resource-link"
        >
          {actionLabel} →
        </a>
      </div>
    </article>
  );
}
