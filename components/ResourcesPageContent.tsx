'use client';

import { useState } from 'react';
import { ALL_RESOURCES, ResourceCategory } from '@/lib/resources';
import SearchBar from './SearchBar';
import FilterBar from './FilterBar';
import ResourcesGrid from './ResourcesGrid';

export function ResourcesPageContent() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<ResourceCategory | null>(null);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const handleClearAll = () => {
    setSearchQuery('');
    setSelectedCategory(null);
    setSelectedTags([]);
  };

  return (
    <div className="resources-container">
      <FilterBar
        onCategoryChange={setSelectedCategory}
        onTagsChange={setSelectedTags}
        onClearAll={handleClearAll}
      />

      <div className="resources-content">
        <SearchBar onSearch={setSearchQuery} />

        <div className="results-info">
          <p className="mono" style={{ fontSize: '12px', color: 'var(--ink-soft)' }}>
            Showing results {selectedCategory || selectedTags.length > 0 || searchQuery ? '(filtered)' : '(all resources)'}
          </p>
        </div>

        <ResourcesGrid
          resources={ALL_RESOURCES}
          searchQuery={searchQuery}
          selectedCategory={selectedCategory}
          selectedTags={selectedTags}
        />
      </div>
    </div>
  );
}
