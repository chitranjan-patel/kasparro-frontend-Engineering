'use client';

import { useAppStore } from '@/store/app-store';
import {
    Eye,
    FileText,
    Award,
    Settings,
    Building2,
    TrendingUp,
    Link as LinkIcon,
} from 'lucide-react';
import { cn, getScoreColor } from '@/lib/utils';
import auditData from '@/data/audit-modules.json';
import type { AuditModule } from '@/types';

const modules = auditData.modules as AuditModule[];

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    Eye,
    FileText,
    Award,
    Settings,
    Building2,
    TrendingUp,
    Link: LinkIcon,
};

export function AuditModuleList() {
    const { selectedModuleId, setSelectedModule } = useAppStore();

    return (
        <div className="bg-white dark:bg-surface-900 rounded-xl border border-surface-200 dark:border-surface-800 overflow-hidden h-full">
            <div className="p-4 border-b border-surface-200 dark:border-surface-800">
                <h2 className="font-semibold text-surface-900 dark:text-white">
                    Audit Modules
                </h2>
                <p className="text-sm text-surface-500 dark:text-surface-400 mt-1">
                    Select a module to view details
                </p>
            </div>
            <div className="divide-y divide-surface-200 dark:divide-surface-800">
                {modules.map((module) => {
                    const Icon = iconMap[module.icon] || Eye;
                    const isSelected = module.id === selectedModuleId;

                    return (
                        <button
                            key={module.id}
                            onClick={() => setSelectedModule(module.id)}
                            className={cn(
                                'w-full flex items-center gap-4 p-4 text-left transition-colors',
                                isSelected
                                    ? 'bg-primary-50 dark:bg-primary-900/20'
                                    : 'hover:bg-surface-50 dark:hover:bg-surface-800'
                            )}
                        >
                            <div
                                className={cn(
                                    'w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0',
                                    isSelected ? 'bg-primary-500' : 'bg-surface-100 dark:bg-surface-800'
                                )}
                            >
                                <Icon
                                    className={cn(
                                        'w-5 h-5',
                                        isSelected ? 'text-white' : 'text-surface-600 dark:text-surface-400'
                                    )}
                                />
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between gap-2">
                                    <span
                                        className={cn(
                                            'font-medium truncate',
                                            isSelected
                                                ? 'text-primary-600 dark:text-primary-400'
                                                : 'text-surface-900 dark:text-white'
                                        )}
                                    >
                                        {module.shortName}
                                    </span>
                                    <span className={cn('text-sm font-semibold', getScoreColor(module.score))}>
                                        {module.score}
                                    </span>
                                </div>
                                <div className="flex items-center gap-2 mt-1">
                                    <div className="flex-1 h-1.5 bg-surface-200 dark:bg-surface-700 rounded-full overflow-hidden">
                                        <div
                                            className={cn('h-full rounded-full transition-all',
                                                module.score >= 75 ? 'bg-green-500' :
                                                    module.score >= 60 ? 'bg-yellow-500' :
                                                        module.score >= 40 ? 'bg-orange-500' : 'bg-red-500'
                                            )}
                                            style={{ width: `${module.score}%` }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </button>
                    );
                })}
            </div>
        </div>
    );
}
