'use client';

import { useAppStore } from '@/store/app-store';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { ScoreGauge } from '@/components/ui/score-gauge';
import { Badge } from '@/components/ui/badge';
import { Eye, Shield, Search, Clock } from 'lucide-react';
import { formatRelativeTime, getStatusColor } from '@/lib/utils';
import dashboardData from '@/data/dashboard.json';
import type { DashboardSnapshot } from '@/types';

const dashboards = dashboardData.dashboards as Record<string, DashboardSnapshot>;

export function SnapshotCards() {
    const { selectedBrandId } = useAppStore();
    const snapshot = dashboards[selectedBrandId || 'brand-1'];

    if (!snapshot) return null;

    const metrics = [
        {
            id: 'ai-visibility',
            title: 'AI Visibility Score',
            value: snapshot.aiVisibilityScore,
            icon: Eye,
            description: 'Overall AI search visibility',
        },
        {
            id: 'trust',
            title: 'Trust / E-E-A-T Score',
            value: snapshot.eeeatScore,
            icon: Shield,
            description: 'Experience, Expertise, Authority, Trust',
        },
        {
            id: 'keywords',
            title: 'Keyword Coverage',
            value: snapshot.keywordCoverage,
            icon: Search,
            description: `${snapshot.nonBrandedKeywords} non-branded keywords`,
        },
    ];

    return (
        <div className="space-y-6">
            {/* Status Banner */}
            <Card className="overflow-hidden">
                <div className="bg-gradient-to-r from-primary-600 to-accent-purple p-6">
                    <div className="flex flex-wrap items-center justify-between gap-4">
                        <div>
                            <h2 className="text-xl font-semibold text-white mb-1">
                                Brand Health Overview
                            </h2>
                            <p className="text-primary-100">
                                Your AI-SEO performance at a glance
                            </p>
                        </div>
                        <Badge
                            variant={
                                snapshot.overallHealth === 'excellent'
                                    ? 'success'
                                    : snapshot.overallHealth === 'good'
                                        ? 'success'
                                        : snapshot.overallHealth === 'moderate'
                                            ? 'warning'
                                            : 'danger'
                            }
                            className="capitalize text-sm px-3 py-1"
                        >
                            {snapshot.overallHealth}
                        </Badge>
                    </div>
                </div>
                <CardContent className="p-6">
                    <div className="flex items-center gap-2 text-sm text-surface-500 dark:text-surface-400">
                        <Clock className="w-4 h-4" />
                        <span>Last audit: {formatRelativeTime(snapshot.lastAuditDate)}</span>
                    </div>
                </CardContent>
            </Card>

            {/* Metric Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {metrics.map((metric) => {
                    const Icon = metric.icon;
                    return (
                        <Card key={metric.id} className="hover:shadow-lg transition-shadow">
                            <CardHeader className="pb-2">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-lg bg-primary-500/10 flex items-center justify-center">
                                        <Icon className="w-5 h-5 text-primary-500" />
                                    </div>
                                    <CardTitle className="text-base">{metric.title}</CardTitle>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="flex items-center justify-between">
                                    <ScoreGauge score={metric.value} size="md" showLabel={false} />
                                    <div className="text-right">
                                        <p className="text-sm text-surface-500 dark:text-surface-400">
                                            {metric.description}
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    );
                })}
            </div>
        </div>
    );
}
