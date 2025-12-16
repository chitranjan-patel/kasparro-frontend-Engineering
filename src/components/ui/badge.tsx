import { cn } from '@/lib/utils';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
    variant?: 'default' | 'success' | 'warning' | 'danger' | 'info' | 'outline';
    size?: 'sm' | 'md';
}

export function Badge({
    className,
    variant = 'default',
    size = 'md',
    children,
    ...props
}: BadgeProps) {
    const variants = {
        default: 'bg-surface-200 dark:bg-surface-800 text-surface-700 dark:text-surface-300',
        success: 'bg-green-500/10 text-green-500 border border-green-500/20',
        warning: 'bg-yellow-500/10 text-yellow-500 border border-yellow-500/20',
        danger: 'bg-red-500/10 text-red-500 border border-red-500/20',
        info: 'bg-blue-500/10 text-blue-400 border border-blue-500/20',
        outline: 'bg-transparent border border-surface-300 dark:border-surface-700 text-surface-600 dark:text-surface-400',
    };

    const sizes = {
        sm: 'text-xs px-2 py-0.5',
        md: 'text-xs px-2.5 py-1',
    };

    return (
        <span
            className={cn(
                'inline-flex items-center rounded-full font-medium',
                variants[variant],
                sizes[size],
                className
            )}
            {...props}
        >
            {children}
        </span>
    );
}
