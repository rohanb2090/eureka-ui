/**
 * System Preview Page
 * 
 * Purpose: Visual validation of the Enterprise Design System
 * Audience: Designers, engineers, stakeholders
 * 
 * This page demonstrates:
 * - Design tokens in use
 * - Component variants and states
 * - Layout patterns
 * - Accessibility patterns
 */

import { Button } from '../components/Button';

export function SystemPreview() {
    return (
        <div className="min-h-screen bg-[var(--bg-page)] p-8">
            <div className="max-w-7xl mx-auto space-y-16">
                {/* Page Header */}
                <header className="border-b border-[var(--border-default)] pb-8">
                    <h1 className="text-4xl font-bold text-[var(--text-primary)] mb-2">
                        Enterprise Design System
                    </h1>
                    <p className="text-[var(--text-secondary)]">
                        Visual preview and validation of design tokens, components, and patterns
                    </p>
                </header>

                {/* Section 1: Typography Matrix */}
                <section>
                    <SectionHeader
                        title="Typography System"
                        description="Text hierarchy, weights, and semantic usage"
                    />

                    <div className="bg-[var(--bg-surface)] rounded-[var(--radius-md)] p-8 border border-[var(--border-default)] space-y-6">
                        {/* Headings */}
                        <div className="space-y-4">
                            <h1 className="text-4xl font-bold text-[var(--text-primary)]">
                                Heading 1 - Page Title
                            </h1>
                            <h2 className="text-3xl font-semibold text-[var(--text-primary)]">
                                Heading 2 - Section Title
                            </h2>
                            <h3 className="text-2xl font-semibold text-[var(--text-primary)]">
                                Heading 3 - Subsection
                            </h3>
                            <h4 className="text-xl font-medium text-[var(--text-primary)]">
                                Heading 4 - Card Header
                            </h4>
                        </div>

                        {/* Body Text */}
                        <div className="space-y-2 pt-4 border-t border-[var(--border-subtle)]">
                            <p className="text-base text-[var(--text-primary)]">
                                Body Text (Primary) - Base font size, primary emphasis. Used for main content and standard interface text.
                            </p>
                            <p className="text-base text-[var(--text-secondary)]">
                                Body Text (Secondary) - Base font size, secondary emphasis. Used for supporting details and metadata.
                            </p>
                            <p className="text-sm text-[var(--text-muted)]">
                                Small Text (Muted) - Reduced font size, muted emphasis. Used for helper text, timestamps, and annotations.
                            </p>
                            <p className="text-xs text-[var(--text-disabled)]">
                                Extra Small (Disabled) - Minimal size and emphasis. Used for disabled states and footnotes.
                            </p>
                        </div>

                        {/* Monospace */}
                        <div className="pt-4 border-t border-[var(--border-subtle)]">
                            <code className="font-mono text-sm text-[var(--text-primary)] bg-[var(--bg-subtle)] px-2 py-1 rounded">
                                Monospace - Code, IDs, API keys
                            </code>
                        </div>
                    </div>
                </section>

                {/* Section 2: Surface & Elevation Matrix */}
                <section>
                    <SectionHeader
                        title="Surface & Elevation"
                        description="Background layers, containers, and elevation hierarchy"
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Page Background */}
                        <div className="bg-[var(--bg-page)] border-2 border-dashed border-[var(--border-default)] rounded-[var(--radius-md)] p-6">
                            <h4 className="text-sm font-medium text-[var(--text-secondary)] mb-2">Page Background</h4>
                            <p className="text-xs text-[var(--text-muted)]">--bg-page</p>
                        </div>

                        {/* Surface */}
                        <div className="bg-[var(--bg-surface)] border border-[var(--border-default)] rounded-[var(--radius-md)] p-6">
                            <h4 className="text-sm font-medium text-[var(--text-primary)] mb-2">Surface (Card/Panel)</h4>
                            <p className="text-xs text-[var(--text-muted)]">--bg-surface</p>
                        </div>

                        {/* Subtle */}
                        <div className="bg-[var(--bg-subtle)] border border-[var(--border-subtle)] rounded-[var(--radius-md)] p-6">
                            <h4 className="text-sm font-medium text-[var(--text-primary)] mb-2">Subtle (Inset)</h4>
                            <p className="text-xs text-[var(--text-muted)]">--bg-subtle</p>
                        </div>

                        {/* Elevated */}
                        <div className="bg-[var(--bg-elevated)] border border-[var(--border-default)] rounded-[var(--radius-md)] p-6 shadow-lg">
                            <h4 className="text-sm font-medium text-[var(--text-primary)] mb-2">Elevated (Overlay)</h4>
                            <p className="text-xs text-[var(--text-muted)]">--bg-elevated + elevation</p>
                        </div>
                    </div>
                </section>

                {/* Section 3: Button Matrix */}
                <section>
                    <SectionHeader
                        title="Button System"
                        description="All button variants, sizes, and states"
                    />

                    <div className="bg-[var(--bg-surface)] rounded-[var(--radius-md)] p-8 border border-[var(--border-default)] space-y-8">
                        {/* Variants */}
                        <div>
                            <h4 className="text-sm font-medium text-[var(--text-secondary)] mb-4">Variants</h4>
                            <div className="flex flex-wrap gap-4">
                                <Button variant="primary">Primary</Button>
                                <Button variant="secondary">Secondary</Button>
                                <Button variant="destructive">Destructive</Button>
                                <Button variant="ghost">Ghost</Button>
                            </div>
                        </div>

                        {/* Sizes */}
                        <div className="pt-4 border-t border-[var(--border-subtle)]">
                            <h4 className="text-sm font-medium text-[var(--text-secondary)] mb-4">Sizes</h4>
                            <div className="flex flex-wrap items-center gap-4">
                                <Button size="sm" variant="primary">Small</Button>
                                <Button size="md" variant="primary">Medium (Default)</Button>
                                <Button size="lg" variant="primary">Large</Button>
                            </div>
                        </div>

                        {/* States */}
                        <div className="pt-4 border-t border-[var(--border-subtle)]">
                            <h4 className="text-sm font-medium text-[var(--text-secondary)] mb-4">States</h4>
                            <div className="flex flex-wrap gap-4">
                                <Button variant="primary">Default</Button>
                                <Button variant="primary" isDisabled>Disabled</Button>
                                <Button variant="primary" isLoading>Loading</Button>
                            </div>
                        </div>

                        {/* With Icons */}
                        <div className="pt-4 border-t border-[var(--border-subtle)]">
                            <h4 className="text-sm font-medium text-[var(--text-secondary)] mb-4">With Icons</h4>
                            <div className="flex flex-wrap gap-4">
                                <Button
                                    variant="secondary"
                                    leftIcon={<span>→</span>}
                                >
                                    With Left Icon
                                </Button>
                                <Button
                                    variant="secondary"
                                    rightIcon={<span>→</span>}
                                >
                                    With Right Icon
                                </Button>
                            </div>
                        </div>

                        {/* Full Width */}
                        <div className="pt-4 border-t border-[var(--border-subtle)]">
                            <h4 className="text-sm font-medium text-[var(--text-secondary)] mb-4">Layout</h4>
                            <Button variant="primary" fullWidth>Full Width Button</Button>
                        </div>
                    </div>
                </section>

                {/* Section 4: Form Controls Preview */}
                <section>
                    <SectionHeader
                        title="Form Controls"
                        description="Input, select, checkbox, radio, and switch components"
                    />

                    <div className="bg-[var(--bg-surface)] rounded-[var(--radius-md)] p-8 border border-[var(--border-default)] space-y-6">
                        {/* Text Input */}
                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-[var(--text-primary)]">
                                Text Input
                            </label>
                            <input
                                type="text"
                                placeholder="Enter text..."
                                className="w-full h-[var(--spacing-3xl)] px-[var(--spacing-md)] bg-[var(--bg-surface)] border border-[var(--border-default)] rounded-[var(--radius-md)] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--border-focus)] focus:border-transparent"
                            />
                        </div>

                        {/* Select */}
                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-[var(--text-primary)]">
                                Select Dropdown
                            </label>
                            <select className="w-full h-[var(--spacing-3xl)] px-[var(--spacing-md)] bg-[var(--bg-surface)] border border-[var(--border-default)] rounded-[var(--radius-md)] text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--border-focus)]">
                                <option>Option 1</option>
                                <option>Option 2</option>
                                <option>Option 3</option>
                            </select>
                        </div>

                        {/* Checkbox */}
                        <div className="space-y-3">
                            <label className="flex items-center gap-3 cursor-pointer">
                                <input
                                    type="checkbox"
                                    className="w-4 h-4 rounded border-[var(--border-default)] text-[var(--action-primary)] focus:ring-2 focus:ring-[var(--border-focus)]"
                                />
                                <span className="text-sm text-[var(--text-primary)]">Checkbox option</span>
                            </label>
                            <label className="flex items-center gap-3 cursor-pointer">
                                <input
                                    type="checkbox"
                                    defaultChecked
                                    className="w-4 h-4 rounded border-[var(--border-default)] text-[var(--action-primary)] focus:ring-2 focus:ring-[var(--border-focus)]"
                                />
                                <span className="text-sm text-[var(--text-primary)]">Checked checkbox</span>
                            </label>
                        </div>

                        {/* Radio */}
                        <div className="space-y-3">
                            <label className="flex items-center gap-3 cursor-pointer">
                                <input
                                    type="radio"
                                    name="demo"
                                    className="w-4 h-4 border-[var(--border-default)] text-[var(--action-primary)] focus:ring-2 focus:ring-[var(--border-focus)]"
                                />
                                <span className="text-sm text-[var(--text-primary)]">Radio option 1</span>
                            </label>
                            <label className="flex items-center gap-3 cursor-pointer">
                                <input
                                    type="radio"
                                    name="demo"
                                    defaultChecked
                                    className="w-4 h-4 border-[var(--border-default)] text-[var(--action-primary)] focus:ring-2 focus:ring-[var(--border-focus)]"
                                />
                                <span className="text-sm text-[var(--text-primary)]">Radio option 2</span>
                            </label>
                        </div>
                    </div>
                </section>

                {/* Section 5: Feedback Preview */}
                <section>
                    <SectionHeader
                        title="Feedback Components"
                        description="Inline alerts, toasts, and empty states"
                    />

                    <div className="space-y-6">
                        {/* Inline Alerts */}
                        <div className="space-y-4">
                            <h4 className="text-sm font-medium text-[var(--text-secondary)]">Inline Alerts</h4>

                            <InlineAlertDemo severity="info" title="Information" message="This is an informational message for the user." />
                            <InlineAlertDemo severity="success" title="Success" message="Operation completed successfully." />
                            <InlineAlertDemo severity="warning" title="Warning" message="Please review this cautionary notice." />
                            <InlineAlertDemo severity="error" title="Error" message="An error occurred. Please try again." />
                        </div>

                        {/* Empty State */}
                        <div className="pt-4">
                            <h4 className="text-sm font-medium text-[var(--text-secondary)] mb-4">Empty State</h4>
                            <div className="bg-[var(--bg-surface)] border border-[var(--border-default)] rounded-[var(--radius-md)] p-12 text-center">
                                <div className="max-w-md mx-auto space-y-4">
                                    <div className="text-4xl text-[var(--text-muted)]">📭</div>
                                    <h3 className="text-lg font-semibold text-[var(--text-primary)]">No items found</h3>
                                    <p className="text-sm text-[var(--text-secondary)]">
                                        Get started by creating your first item.
                                    </p>
                                    <Button variant="primary">Create Item</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 6: Loading & Skeleton Preview */}
                <section>
                    <SectionHeader
                        title="Loading States"
                        description="Spinners and skeleton placeholders"
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Loading Button */}
                        <div className="bg-[var(--bg-surface)] border border-[var(--border-default)] rounded-[var(--radius-md)] p-6">
                            <h4 className="text-sm font-medium text-[var(--text-secondary)] mb-4">Loading Button</h4>
                            <Button variant="primary" isLoading>Processing...</Button>
                        </div>

                        {/* Skeleton */}
                        <div className="bg-[var(--bg-surface)] border border-[var(--border-default)] rounded-[var(--radius-md)] p-6">
                            <h4 className="text-sm font-medium text-[var(--text-secondary)] mb-4">Skeleton Loader</h4>
                            <div className="space-y-3">
                                <div className="h-4 bg-[var(--bg-subtle)] rounded animate-pulse" />
                                <div className="h-4 bg-[var(--bg-subtle)] rounded animate-pulse w-3/4" />
                                <div className="h-4 bg-[var(--bg-subtle)] rounded animate-pulse w-1/2" />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

/**
 * Section Header Component
 */
function SectionHeader({ title, description }: { title: string; description: string }) {
    return (
        <div className="mb-6">
            <h2 className="text-2xl font-semibold text-[var(--text-primary)] mb-2">{title}</h2>
            <p className="text-sm text-[var(--text-secondary)]">{description}</p>
        </div>
    );
}

/**
 * Inline Alert Demo Component
 */
function InlineAlertDemo({
    severity,
    title,
    message,
}: {
    severity: 'info' | 'success' | 'warning' | 'error';
    title: string;
    message: string;
}) {
    const severityConfig = {
        info: { icon: 'ℹ️', bg: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-800' },
        success: { icon: '✓', bg: 'bg-green-50', border: 'border-green-200', text: 'text-green-800' },
        warning: { icon: '⚠️', bg: 'bg-yellow-50', border: 'border-yellow-200', text: 'text-yellow-800' },
        error: { icon: '✕', bg: 'bg-red-50', border: 'border-red-200', text: 'text-red-800' },
    };

    const config = severityConfig[severity];

    return (
        <div className={`${config.bg} border ${config.border} rounded-[var(--radius-md)] p-4 flex gap-3`} role="alert">
            <span className="flex-shrink-0" aria-hidden="true">{config.icon}</span>
            <div className="flex-1">
                <h5 className={`font-medium ${config.text} mb-1`}>{title}</h5>
                <p className={`text-sm ${config.text}`}>{message}</p>
            </div>
        </div>
    );
}
