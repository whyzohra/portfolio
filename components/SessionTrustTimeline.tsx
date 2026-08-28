'use client';

import { useState } from 'react';

const evidence = [
  ['USER BEHAVIOUR', 'Interaction patterns continue after the initial identity check.'],
  ['PROCESS ACTIVITY', 'Executed processes provide additional session evidence.'],
  ['TEMPORAL EVIDENCE', 'Patterns are interpreted across time rather than as isolated events.'],
  ['TRUST / RISK EVIDENCE', 'Changing evidence can inform an adaptive, interpretable assessment.'],
] as const;

export function SessionTrustTimeline() {
  const [active,setActive]=useState(0);
  return (
    <div className="session-trust" aria-label="Evidence available between login and session end">
      <div className="session-trust__axis"><strong>LOGIN</strong><span aria-hidden="true"><i style={{width:`${((active+1)/evidence.length)*100}%`}} /></span><strong>SESSION END</strong></div>
      <div className="session-trust__evidence">
        {evidence.map(([label,description],index)=><button key={label} type="button" aria-pressed={active===index} onFocus={()=>setActive(index)} onMouseEnter={()=>setActive(index)} onClick={()=>setActive(index)}><span>{String(index+1).padStart(2,'0')}</span><strong>{label}</strong><small>{description}</small></button>)}
      </div>
    </div>
  );
}
