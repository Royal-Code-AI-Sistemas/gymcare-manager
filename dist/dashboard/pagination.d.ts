export interface PaginationProps {
    page: number;
    totalPages: number;
    onChange: (page: number) => void;
    className?: string;
}
export declare function Pagination({ page, totalPages, onChange, className, }: PaginationProps): import("react").JSX.Element | null;
