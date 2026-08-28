export const PROJECT_IMAGE_BY_TITLE: Record<string, string> = {
  'Cold-Chain Dynamic Freshness Timer Engine': 'mlloopoptselector.jpg',
  'Container State Resolution and Deviation Processing Engine': 'mlloopoptselector.jpg',
  'In-Memory Columnar Storage Engine Prototype': 'xv6_project.jpg',
  'Drone-Based Intelligent System for Apple Orchard Management': 'space_nav_project.jpg',
  'Autonomous Vehicle / Object Detection': 'multimodal_project.jpg',
  'MeetMind AI': 'llm_research_project.jpg',
  'Atlas – Traffic Intelligence Platform': 'inflation_project.jpg',
};

export const projectImage = (title: string) =>
  `/projects/archive/${PROJECT_IMAGE_BY_TITLE[title] ?? 'mlloopoptselector.jpg'}`;
