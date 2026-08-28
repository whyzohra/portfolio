import type { EngineeringProject } from '@/types/portfolio';

/**
 * A single typed project "lead" : the distinct visual opening for each featured
 * case study. Content is keyed by slug so each project gets its own process
 * narrative and pacing, while the render stays one small, shared component
 * (variant styling lives in `.project-lead--<slug>` in globals.css).
 */
interface LeadVariant {
  nodes: string[];
  note: string;
}

const VARIANTS: Record<string, LeadVariant> = {
  'zero-trust-ai-identity': {
    nodes: ['LOGIN', 'BEHAVIOUR', 'PROCESS EVIDENCE', 'TEMPORAL MODEL', 'TRUST / RISK EVIDENCE'],
    note: 'The session continues while identity evidence evolves after login.',
  },
  'compiler-autotuning': {
    nodes: ['SOURCE LOOP', 'FEATURES', 'MODEL', 'TRANSFORMATION', 'PERFORMANCE'],
    note: 'Tiling · unrolling · vectorisation · OpenMP',
  },
  'automated-literature-review-rag': {
    nodes: ['QUERY', 'RETRIEVAL', 'RERANKING', 'GENERATION', 'EVALUATION'],
    note: 'Retrieval and generation are evaluated as one connected workflow.',
  },
  'neural-reconstruction-heritage': {
    nodes: ['SOURCE IMAGES', 'CAMERA RECONSTRUCTION', 'NERF', 'NOVEL VIEWS'],
    note: 'Multi-view imagery · COLMAP · neural rendering',
  },
  'simmind-cognitive-simulation': {
    nodes: ['PLANNER', 'EXECUTOR', 'CRITIC', 'COORDINATOR', 'STATE DIFF'],
    note: 'Memory, state and decisions remain inspectable across iterations.',
  },
  'us-pce-inflation-forecasting': {
    nodes: ['1 MONTH · R² 0.97', '3 MONTHS · R² 0.89', '6 MONTHS · R² 0.69'],
    note: 'N-HiTS horizon comparison · RMSE ≈ 0.14-0.41',
  },
};

export function ProjectLead({ project }: { project: EngineeringProject }) {
  const lead = VARIANTS[project.slug];
  if (!lead) return null;
  return (
    <section className={`project-lead project-lead--${project.slug}`} aria-label="Project process overview">
      <div>
        {lead.nodes.map((node, index) => (
          <span key={node}>
            <b>{String(index + 1).padStart(2, '0')}</b>
            {node}
          </span>
        ))}
      </div>
      <p className="eyebrow">{lead.note}</p>
    </section>
  );
}
