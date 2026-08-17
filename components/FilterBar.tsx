'use client';

import { useState } from 'react';
import { ResourceCategory, CATEGORY_DISPLAY, TAG_DISPLAY } from '@/lib/resources';

const CATEGORIES: ResourceCategory[] = ['dev', 'learning', 'ai-ml', 'design', 'hardware', 'business'];

const TAGS = [
  'free',
  'free-tier',
  'api',
  'course',
  'tool',
  'beginner',
  'intermediate',
  'advanced',
  'quick',
  'short-course',
  'full-program',
];

interface FilterBarProps {
  onCategoryChange: (category: ResourceCategory | null) => void;
  onTagsChange: (tags: string[]) => void;
  onClearAll: () => void;
}

export default function FilterBar({ onCategoryChange, onTagsChange, onClearAll }: FilterBarProps) {
  const [selectedCategory, setSelectedCategory] = useState<ResourceCategory | null>(null);
  const [selectedTags, setSelectedTags] = useState<Set<string>>(new Set());

  const handleCategoryClick = (category: ResourceCategory) => {
    const newCategory = selectedCategory === category ? null : category;
    setSelectedCategory(newCategory);
    onCategoryChange(newCategory);
  };

  const handleTagToggle = (tag: string) => {
    const newTags = new Set(selectedTags);
    if (newTags.has(tag)) {
      newTags.delete(tag);
    } else {
      newTags.add(tag);
    }
    setSelectedTags(newTags);
    onTagsChange(Array.from(newTags));
  };

  const handleClearAll = () => {
    setSelectedCategory(null);
    setSelectedTags(new Set());
    onClearAll();
  };

  const hasFilters = selectedCategory !== null || selectedTags.size > 0;

  return (
    <aside className="filter-bar">
      <div className="filter-section">
        <div className="filter-header">
          <h3>Filter</h3>
          {hasFilters && (
            <button onClick={handleClearAll} className="clear-all-btn">
              Clear all
            </button>
          )}
        </div>

        <div className="filter-group">
          <h4>Category</h4>
          <div className="category-chips">
            {CATEGORIES.map(category => (
              <button
                key={category}
                onClick={() => handleCategoryClick(category)}
                className={`chip ${selectedCategory === category ? 'active' : ''}`}
                aria-pressed={selectedCategory === category}
              >
                {CATEGORY_DISPLAY[category]}
              </button>
            ))}
          </div>
        </div>

        <div className="filter-group">
          <h4>Tags</h4>
          <div className="tag-checkboxes">
            {TAGS.map(tag => (
              <label key={tag} className="tag-checkbox">
                <input
                  type="checkbox"
                  checked={selectedTags.has(tag)}
                  onChange={() => handleTagToggle(tag)}
                  aria-label={`Filter by ${TAG_DISPLAY[tag]}`}
                />
                <span>{TAG_DISPLAY[tag]}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}
