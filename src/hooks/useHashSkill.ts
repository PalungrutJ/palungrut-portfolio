import { useCallback, useEffect, useState } from 'react';
import type { SkillId } from '@/types';
import { skills, defaultSkillId } from '@/data/skills';

const validIds = new Set<SkillId>(skills.map((s) => s.id));

function readHash(): SkillId | null {
  const raw = window.location.hash.replace('#', '') as SkillId;
  return validIds.has(raw) ? raw : null;
}

/**
 * Keeps the active skill in sync with the URL hash (#sql, #erp, …).
 * Panel-type skills own the hash; scroll-type nodes (projects, resume)
 * navigate but do not become the persistent active panel.
 */
export function useHashSkill() {
  const [activeSkill, setActiveSkill] = useState<SkillId>(
    () => readHash() ?? defaultSkillId,
  );

  useEffect(() => {
    const onHashChange = () => {
      const next = readHash();
      if (next) setActiveSkill(next);
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const selectSkill = useCallback((id: SkillId) => {
    setActiveSkill(id);
    if (window.location.hash !== `#${id}`) {
      history.replaceState(null, '', `#${id}`);
    }
  }, []);

  return { activeSkill, selectSkill };
}
