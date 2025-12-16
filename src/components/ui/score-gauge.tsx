'use client';

import { cn, getScoreColor } from '@/lib/utils';

interface ScoreGaugeProps {
    score: number;
    maxScore?: number;
    size?: 'sm' | 'md' | 'lg';
    showLabel?: boolean;
    label?: string;
    className?: string;
}

export function ScoreGauge({
    score,
    maxScore = 100,
    size = 'md',
    showLabel = true,
    label,
    className,
}: ScoreGaugeProps) {
    const percentage = (score / maxScore) * 100;
    const circumference = 2 * Math.PI * 45;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    const sizes = {
        sm: { width: 60, fontSize: 'text-lg', labelSize: 'text-xs' },
        md: { width: 100, fontSize: 'text-2xl', labelSize: 'text-sm' },
        lg: { width: 140, fontSize: 'text-4xl', labelSize: 'text-base' },
    };

    const { width, fontSize, labelSize } = sizes[size];
    const scoreColor = getScoreColor(score);

    return (
        <div className={cn('flex flex-col items-center', className)}>
            <div className="relative" style={{ width, height: width }}>
                <svg
                    className="transform -rotate-90"
                    width={width}
                    height={width}
                    viewBox="0 0 100 100"
                >
                    {/* Background circle */}
                    <circle
                        cx="50"
                        cy="50"
                        r="45"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="8"
                        className="text-surface-200 dark:text-surface-800"
                    />
                    {/* Progress circle */}
                    <circle
                        cx="50"
                        cy="50"
                        r="45"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="8"
                        strokeLinecap="round"
                        className={scoreColor}
                        style={{
                            strokeDasharray: circumference,
                            strokeDashoffset,
                            transition: 'stroke-dashoffset 0.5s ease-out',
                        }}
                    />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className={cn('font-bold', fontSize, scoreColor)}>{score}</span>
                </div>
            </div>
            {showLabel && label && (
                <span className={cn('mt-2 text-surface-500 dark:text-surface-400', labelSize)}>
                    {label}
                </span>
            )}
        </div>
    );
}
