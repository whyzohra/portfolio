export const PROJECT_IMAGE_BY_SLUG: Record<string, string> = {
  'cold-chain-dynamic-freshness-timer-engine': 'mlloopoptselector.jpg',
  'container-state-resolution-and-deviation-processing-engine': 'mlloopoptselector.jpg',
  'in-memory-columnar-storage-engine-prototype': 'xv6_project.jpg',
  'drone-based-intelligent-system-for-apple-orchard-management': 'space_nav_project.jpg',
  'autonomous-vehicle-object-detection': 'multimodal_project.jpg',
  'meetmind-ai': 'llm_research_project.jpg',
  'atlas-traffic-intelligence-platform': 'inflation_project.jpg',
  'smart-expense-tracker-api': 'mlloopoptselector.jpg',
  'ml-observability-dashboard': 'mlloopoptselector.jpg',
};

export const PROJECT_IMAGE_BY_TITLE: Record<string, string> = {
  'Cold-Chain Dynamic Freshness Timer Engine': 'mlloopoptselector.jpg',
  'Container State Resolution and Deviation Processing Engine': 'mlloopoptselector.jpg',
  'In-Memory Columnar Storage Engine Prototype': 'xv6_project.jpg',
  'Drone-Based Intelligent System for Apple Orchard Management': 'space_nav_project.jpg',
  'Autonomous Vehicle / Object Detection': 'multimodal_project.jpg',
  'MeetMind AI': 'llm_research_project.jpg',
  'Atlas – Traffic Intelligence Platform': 'inflation_project.jpg',
};

export const projectImage = (titleOrSlug: string) =>
  `/projects/archive/${PROJECT_IMAGE_BY_SLUG[titleOrSlug] ?? PROJECT_IMAGE_BY_TITLE[titleOrSlug] ?? 'mlloopoptselector.jpg'}`;
