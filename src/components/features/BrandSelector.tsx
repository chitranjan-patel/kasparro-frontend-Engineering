'use client';

import { useAppStore } from '@/store/app-store';
import { ChevronDown } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
import brandsData from '@/data/brands.json';
import type { Brand } from '@/types';

const brands = brandsData.brands as Brand[];

export function BrandSelector() {
    const { selectedBrandId, setSelectedBrand } = useAppStore();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const selectedBrand = brands.find((b) => b.id === selectedBrandId) || brands[0];

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                dropdownRef.current &&
                event.target instanceof Node &&
                !dropdownRef.current.contains(event.target)
            ) {
                setIsOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-3 px-4 py-2.5 bg-white dark:bg-surface-900 border border-surface-200 dark:border-surface-800 rounded-lg hover:bg-surface-50 dark:hover:bg-surface-800 transition-colors min-w-[200px]"
            >
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-accent-purple flex items-center justify-center text-white font-bold text-sm">
                    {selectedBrand.name.charAt(0)}
                </div>
                <div className="flex-1 text-left">
                    <div className="text-sm font-medium text-surface-900 dark:text-white">
                        {selectedBrand.name}
                    </div>
                    <div className="text-xs text-surface-500">{selectedBrand.domain}</div>
                </div>
                <ChevronDown
                    className={cn('w-4 h-4 text-surface-500 transition-transform', isOpen && 'rotate-180')}
                />
            </button>

            {isOpen && (
                <div className="absolute top-full left-0 right-0 mt-2 py-2 bg-white dark:bg-surface-900 border border-surface-200 dark:border-surface-800 rounded-lg shadow-lg z-50">
                    {brands.map((brand) => (
                        <button
                            key={brand.id}
                            onClick={() => {
                                setSelectedBrand(brand.id);
                                setIsOpen(false);
                            }}
                            className={cn(
                                'w-full flex items-center gap-3 px-4 py-2.5 hover:bg-surface-50 dark:hover:bg-surface-800 transition-colors',
                                brand.id === selectedBrandId && 'bg-primary-50 dark:bg-primary-900/20'
                            )}
                        >
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-accent-purple flex items-center justify-center text-white font-bold text-sm">
                                {brand.name.charAt(0)}
                            </div>
                            <div className="flex-1 text-left">
                                <div className="text-sm font-medium text-surface-900 dark:text-white">
                                    {brand.name}
                                </div>
                                <div className="text-xs text-surface-500">{brand.domain}</div>
                            </div>
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
