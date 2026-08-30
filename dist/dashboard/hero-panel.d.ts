import * as React from 'react';
export interface HeroStat {
    label: string;
    value: React.ReactNode;
}
export interface HeroPanelProps {
    title: string;
    /** Trecho do título que sai em lima (#D5FE4C). */
    lime?: string;
    description?: string;
    stats: HeroStat[];
    actions?: React.ReactNode;
    className?: string;
}
export declare function HeroPanel({ title, lime, description, stats, actions, className, }: HeroPanelProps): React.JSX.Element;
