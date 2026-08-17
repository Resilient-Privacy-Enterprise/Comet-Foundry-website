import { DEV_TOOLS } from './devTools';
import { LEARNING } from './learning';
import { AI_ML } from './aiMl';
import { DESIGN } from './design';
import { HARDWARE } from './hardware';
import { BUSINESS } from './business';
import { Resource, ResourceCategory } from './types';

export type { Resource, ResourceCategory, ResourceTag } from './types';
export { CATEGORY_DISPLAY, RESOURCE_TYPE_DISPLAY, TAG_DISPLAY } from './types';

// Combined array of all resources
export const ALL_RESOURCES: Resource[] = [
  ...DEV_TOOLS,
  ...LEARNING,
  ...AI_ML,
  ...DESIGN,
  ...HARDWARE,
  ...BUSINESS,
];

// Group resources by category
export const RESOURCES_BY_CATEGORY: Record<ResourceCategory, Resource[]> = {
  dev: DEV_TOOLS,
  learning: LEARNING,
  'ai-ml': AI_ML,
  design: DESIGN,
  hardware: HARDWARE,
  business: BUSINESS,
};

// Helper function to get resources by category
export const getResourcesByCategory = (category: ResourceCategory): Resource[] => {
  return RESOURCES_BY_CATEGORY[category] || [];
};

// Helper function to filter resources by tags
export const filterResourcesByTags = (resources: Resource[], tags: string[]): Resource[] => {
  if (tags.length === 0) return resources;
  return resources.filter(resource =>
    tags.every(tag => resource.tags.includes(tag as any))
  );
};

// Helper function to search resources
export const searchResources = (resources: Resource[], query: string): Resource[] => {
  const lowerQuery = query.toLowerCase();
  return resources.filter(resource =>
    resource.name.toLowerCase().includes(lowerQuery) ||
    resource.description.toLowerCase().includes(lowerQuery) ||
    (resource.github?.repo.toLowerCase().includes(lowerQuery) ?? false)
  );
};

// Get all unique tags from all resources
export const getAllTags = (): string[] => {
  const tags = new Set<string>();
  ALL_RESOURCES.forEach(resource => {
    resource.tags.forEach(tag => tags.add(tag));
  });
  return Array.from(tags).sort();
};

// Get resource count by category
export const getResourceCount = (category: ResourceCategory): number => {
  return RESOURCES_BY_CATEGORY[category].length;
};
