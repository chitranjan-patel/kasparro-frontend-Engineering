'use client';

import { useAppStore } from '@/store/app-store';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ScoreGauge } from '@/components/ui/score-gauge';
import {
    AlertTriangle,
    AlertCircle,
    Info,
    Lightbulb,
    TrendingUp,
    TrendingDown,
    Minus,
} from 'lucide-react';
import { cn, getSeverityColor, getPriorityColor } from '@/lib/utils';
import auditData from '@/data/audit-modules.json';
import type { AuditModule } from '@/types';

const modules = auditData.modules as AuditModule[];

export function AuditModuleDetail() {
    const { selectedModuleId } = useAppStore();
    const module = modules.find((m) => m.id === selectedModuleId) || modules[0];

    if (!module) {
        return (
            <div className="flex items-center justify-center h-full text-surface-500">
                Select a module to view details
            </div>
        );
    }

    const getTrendIcon = (trend?: string) => {
        switch (trend) {
            case 'up':
                return <TrendingUp className="w-4 h-4 text-green-500" />;
            case 'down':
                return <TrendingDown className="w-4 h-4 text-red-500" />;
            default:
                return <Minus className="w-4 h-4 text-surface-400" />;
        }
    };

    const getSeverityIcon = (severity: string) => {
        switch (severity) {
            case 'critical':
                return <AlertTriangle className="w-4 h-4" />;
            case 'warning':
                return <AlertCircle className="w-4 h-4" />;
            default:
                return <Info className="w-4 h-4" />;
        }
    };

    return (
        <div className="space-y-6">
            {/* Header */}
            <Card>
                <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                        <div className="flex-1">
                            <CardTitle className="text-2xl">{module.name}</CardTitle>
                            <CardDescription className="text-base mt-2">
                                {module.description}
                            </CardDescription>
                        </div>
                        <ScoreGauge score={module.score} size="lg" label="Score" />
                    </div>
                </CardHeader>
            </Card>

            {/* Key Insights */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <TrendingUp className="w-5 h-5 text-primary-500" />
                        Key Insights
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {module.insights.map((insight) => (
                            <div
                                key={insight.id}
                                className="bg-surface-50 dark:bg-surface-800 rounded-lg p-4"
                            >
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-sm text-surface-500 dark:text-surface-400">
                                        {insight.title}
                                    </span>
                                    {getTrendIcon(insight.trend)}
                                </div>
                                <div className="text-2xl font-bold text-surface-900 dark:text-white">
                                    {insight.value}
                                </div>
                                {insight.description && (
                                    <p className="text-xs text-surface-500 dark:text-surface-400 mt-1">
                                        {insight.description}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>

            {/* Issues */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <AlertCircle className="w-5 h-5 text-yellow-500" />
                        Issues & Flags
                        <Badge variant="outline" className="ml-2">
                            {module.issues.length}
                        </Badge>
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-3">
                        {module.issues.map((issue) => (
                            <div
                                key={issue.id}
                                className={cn(
                                    'flex items-start gap-3 p-4 rounded-lg border',
                                    getSeverityColor(issue.severity)
                                )}
                            >
                                {getSeverityIcon(issue.severity)}
                                <div>
                                    <h4 className="font-medium text-surface-900 dark:text-white">
                                        {issue.title}
                                    </h4>
                                    <p className="text-sm text-surface-600 dark:text-surface-400 mt-1">
                                        {issue.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>

            {/* Recommendations */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Lightbulb className="w-5 h-5 text-accent-cyan" />
                        Recommendations
                        <Badge variant="outline" className="ml-2">
                            {module.recommendations.length}
                        </Badge>
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        {module.recommendations.map((rec) => (
                            <div
                                key={rec.id}
                                className="bg-surface-50 dark:bg-surface-800 rounded-lg p-4"
                            >
                                <div className="flex items-start justify-between gap-4 mb-2">
                                    <h4 className="font-medium text-surface-900 dark:text-white">
                                        {rec.title}
                                    </h4>
                                    <Badge className={cn('capitalize', getPriorityColor(rec.priority))}>
                                        {rec.priority}
                                    </Badge>
                                </div>
                                <p className="text-sm text-surface-600 dark:text-surface-400 mb-2">
                                    {rec.description}
                                </p>
                                <div className="flex items-center gap-2 text-sm text-primary-500">
                                    <TrendingUp className="w-4 h-4" />
                                    <span>{rec.impact}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
