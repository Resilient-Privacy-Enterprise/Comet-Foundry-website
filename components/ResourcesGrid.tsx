'use client';

import { useMemo } from 'react';
import { Resource, filterResourcesByTags, searchResources, ResourceCategory } from '@/lib/resources';
import ResourceCard from './ResourceCard';

interface ResourcesGridProps {
  resources: Resource[];
  searchQuery: string;
  selectedCategory: ResourceCategory | null;
  selectedTags: string[];
}

export default function ResourcesGrid({
  resources,
  searchQuery,
  selectedCategory,
  selectedTags,
}: ResourcesGridProps) {
  const filteredResources = useMemo(() => {
    let result = [...resources];

    // Filter by category
    if (selectedCategory) {
      result = result.filter(r => r.category === selectedCategory);
    }

    // Filter by tags
    if (selectedTags.length > 0) {
      result = filterResourcesByTags(result, selectedTags);
    }

    // Search
    if (searchQuery) {
      result = searchResources(result, searchQuery);
    }

    return result;
  }, [resources, selectedCategory, selectedTags, searchQuery]);

  if (filteredResources.length === 0) {
    return (
      <div className="resources-grid empty">
        <div className="empty-state">
          <p>No resources found matching your filters.</p>
          <p className="empty-hint">Try adjusting your search or filters.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="resources-grid">
      {filteredResources.map(resource => (
        <ResourceCard key={resource.id} resource={resource} />
      ))}
    </div>
  );
}
