'use client';

import React, { useState } from 'react';
import { ArchitectureStage } from '../types/portfolio';
import { motion, AnimatePresence } from 'framer-motion';

interface InteractivePipelineProps {
  stages: ArchitectureStage[];
  title?: string;
}

export const InteractivePipeline: React.FC<InteractivePipelineProps> = ({
  stages,
  title = 'SYSTEM ARCHITECTURE PIPELINE',
}) => {
  const [activeStageId, setActiveStageId] = useState<string | null>(stages[0]?.id || null);

  const activeStage = stages.find((s) => s.id === activeStageId) || stages[0];

  return (
    <div className="my-10 border-y border-[var(--border-subtle)] py-6 md:py-8 transition-all duration-700">
      <div className="flex items-center justify-between pb-6 mb-8 border-b border-[var(--border-subtle)]">
        <h4 className="font-mono text-xs tracking-widest text-[var(--text-muted)] uppercase">
          01 / ARCHITECTURE DIAGRAM: {title}
        </h4>
        <span className="font-mono text-[10px] tracking-widest text-[var(--text-muted)] uppercase hidden sm:inline">
          INTERACTIVE STAGE EXPLORER
        </span>
      </div>

      {/* Stage Nodes Flow */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3 relative">
        {stages.map((stage, idx) => {
          const isActive = activeStageId === stage.id;
          return (
            <button
              key={stage.id}
              onClick={() => setActiveStageId(stage.id)}
              onMouseEnter={() => setActiveStageId(stage.id)}
              aria-pressed={isActive}
              className={`relative p-4 text-left border transition-all duration-500 flex flex-col justify-between min-h-[110px] ${
                isActive
                  ? 'border-[var(--text-main)] bg-[var(--bg-card)] shadow-sm'
                  : 'border-[var(--border-subtle)] opacity-70 hover:opacity-100 hover:border-[var(--border-strong)]'
              }`}
            >
              {/* Connector indicator for desktop */}
              {idx < stages.length - 1 && (
                <div className="hidden md:block absolute -right-2 top-1/2 transform -translate-y-1/2 z-10">
                  <div className="w-1.5 h-1.5 rotate-45 border-t border-r border-[var(--text-muted)]" />
                </div>
              )}

              <div>
                <span className="font-mono text-[10px] tracking-widest text-[var(--text-muted)] block mb-1">
                  0{idx + 1}
                </span>
                <h5 className="font-mono text-xs font-semibold tracking-wide text-[var(--text-main)] leading-snug">
                  {stage.name}
                </h5>
              </div>

              <p className="text-[11px] text-[var(--text-muted)] line-clamp-2 mt-2 leading-tight">
                {stage.description}
              </p>

              {/* Active Subtle Bottom Line */}
              {isActive && (
                <motion.div
                  layoutId="activePipelineIndicator"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-[var(--text-main)]"
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Detail Explanation Panel */}
      <div className="mt-6 pt-6 border-t border-[var(--border-subtle)] min-h-[100px]">
        <AnimatePresence mode="wait">
          {activeStage && (
            <motion.div
              key={activeStage.id}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.3 }}
              className="space-y-2"
            >
              <div className="flex items-center space-x-3">
                <span className="font-mono text-xs text-[var(--accent-color)] font-semibold uppercase">
                  [{activeStage.name}] SPECIFICATION:
                </span>
                <span className="font-mono text-xs text-[var(--text-muted)]">{activeStage.description}</span>
              </div>
              <p className="text-xs sm:text-sm text-[var(--text-main)] leading-relaxed font-sans max-w-3xl">
                {activeStage.detail}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
