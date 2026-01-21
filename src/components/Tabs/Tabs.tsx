import React, { createContext, useContext, useState } from 'react';
import { cn } from '../../utils/cn';

interface TabsContextValue {
    value: string;
    onValueChange: (value: string) => void;
}

const TabsContext = createContext<TabsContextValue | undefined>(undefined);

export interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
    defaultValue?: string;
    value?: string;
    onValueChange?: (value: string) => void;
}

export const Tabs = React.forwardRef<HTMLDivElement, TabsProps>(
    ({ className, defaultValue, value, onValueChange, children, ...props }, ref) => {
        const [localValue, setLocalValue] = useState(defaultValue || '');
        const currentValue = value !== undefined ? value : localValue;

        const handleValueChange = (newValue: string) => {
            if (value === undefined) {
                setLocalValue(newValue);
            }
            onValueChange?.(newValue);
        };

        return (
            <TabsContext.Provider value={{ value: currentValue, onValueChange: handleValueChange }}>
                <div ref={ref} className={cn("w-full", className)} {...props}>
                    {children}
                </div>
            </TabsContext.Provider>
        );
    }
);
Tabs.displayName = "Tabs";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface TabsListProps extends React.HTMLAttributes<HTMLDivElement> {
    _stub?: never;
}

export const TabsList = React.forwardRef<HTMLDivElement, TabsListProps>(
    ({ className, children, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(
                    "inline-flex h-10 items-center justify-center bg-bg-muted p-1 text-text-secondary border border-border-default",
                    className
                )}
                {...props}
            >
                {children}
            </div>
        );
    }
);
TabsList.displayName = "TabsList";

export interface TabsTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    value: string;
}

export const TabsTrigger = React.forwardRef<HTMLButtonElement, TabsTriggerProps>(
    ({ className, value, children, ...props }, ref) => {
        const context = useContext(TabsContext);
        if (!context) throw new Error("TabsTrigger must be used within a Tabs component");

        const isActive = context.value === value;

        return (
            <button
                ref={ref}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => context.onValueChange(value)}
                className={cn(
                    "inline-flex items-center justify-center whitespace-nowrap px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
                    isActive
                        ? "bg-bg-surface text-text-primary shadow-sm"
                        : "hover:bg-bg-subtle hover:text-text-primary",
                    className
                )}
                {...props}
            >
                {children}
            </button>
        );
    }
);
TabsTrigger.displayName = "TabsTrigger";

export interface TabsContentProps extends React.HTMLAttributes<HTMLDivElement> {
    value: string;
}

export const TabsContent = React.forwardRef<HTMLDivElement, TabsContentProps>(
    ({ className, value, children, ...props }, ref) => {
        const context = useContext(TabsContext);
        if (!context) throw new Error("TabsContent must be used within a Tabs component");

        if (context.value !== value) return null;

        return (
            <div
                ref={ref}
                role="tabpanel"
                className={cn(
                    "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                    className
                )}
                {...props}
            >
                {children}
            </div>
        );
    }
);
TabsContent.displayName = "TabsContent";
