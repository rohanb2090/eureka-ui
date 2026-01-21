import { useState } from 'react';
import { Surface } from '../../components/Surface';
import { Button } from '../../components/Button';
import { LineChart } from '../../components/LineChart';
import { AreaChart } from '../../components/AreaChart';
import { PieChart, DonutChart } from '../../components/PieChart';
import { Table } from '../../components/Table';
import { Skeleton } from '../../components/Skeleton';
import { ToastProvider, useToast } from '../../components/Toast';
import { useElementSize } from '../../hooks/useElementSize';
import { MetricCard } from '../../components/MetricCard';
import { GaugeChart } from '../../components/GaugeChart';
import { MeterChart } from '../../components/MeterChart';
import { ProgressRing } from '../../components/ProgressRing';
import { HorizontalBarChart, StackedBarChart } from '../../components/BarChart';
import { ScatterPlot } from '../../components/ScatterPlot';
import { Modal } from '../../components/Modal';
import { Badge } from '../../components/Badge';
import { Tabs, TabsList, TabsTrigger } from '../../components/Tabs';
import { Avatar } from '../../components/Avatar';

// Mock Data
const REVENUE_DATA = [
    { x: 'Jan', y: 4000 }, { x: 'Feb', y: 3000 }, { x: 'Mar', y: 2000 },
    { x: 'Apr', y: 2780 }, { x: 'May', y: 1890 }, { x: 'Jun', y: 2390 },
    { x: 'Jul', y: 4490 },
];

const MARKET_SHARE_DATA = [
    { label: 'Enterprise', value: 45, color: 'var(--color-medium-slate-blue)' },
    { label: 'Mid-Market', value: 30, color: 'var(--color-periwinkle)' },
    { label: 'SMB', value: 25, color: 'var(--color-celadon)' },
];

const ENGAGEMENT_TREND = [
    { x: 'Week 1', y: 400 }, { x: 'Week 2', y: 600 }, { x: 'Week 3', y: 550 },
    { x: 'Week 4', y: 800 }, { x: 'Week 5', y: 720 }, { x: 'Week 6', y: 950 },
];

const REVENUE_BREAKDOWN = [
    {
        label: 'Q1',
        values: [
            { id: 'q1-x', label: 'Product X', value: 400 },
            { id: 'q1-y', label: 'Product Y', value: 300 },
            { id: 'q1-z', label: 'Product Z', value: 200 }
        ]
    },
    {
        label: 'Q2',
        values: [
            { id: 'q2-x', label: 'Product X', value: 500 },
            { id: 'q2-y', label: 'Product Y', value: 450 },
            { id: 'q2-z', label: 'Product Z', value: 300 }
        ]
    },
    {
        label: 'Q3',
        values: [
            { id: 'q3-x', label: 'Product X', value: 600 },
            { id: 'q3-y', label: 'Product Y', value: 500 },
            { id: 'q3-z', label: 'Product Z', value: 400 }
        ]
    },
];

const REGIONAL_DATA = [
    { label: 'Americas', value: 45 },
    { label: 'EMEA', value: 38 },
    { label: 'APAC', value: 28 },
    { label: 'LATAM', value: 15 },
];

const PERFORMANCE_POINTS = [
    { x: 10, y: 20, size: 5, label: 'A' },
    { x: 40, y: 50, size: 10, label: 'B' },
    { x: 80, y: 90, size: 8, label: 'C' },
    { x: 60, y: 30, size: 12, label: 'D' },
];

const RECENT_TRANSACTIONS = [
    { id: '1', user: 'John Doe', amount: '$120.00', status: 'Completed', date: '2023-01-01' },
    { id: '2', user: 'Jane Smith', amount: '$250.50', status: 'Pending', date: '2023-01-02' },
    { id: '3', user: 'Bob Johnson', amount: '$75.00', status: 'Completed', date: '2023-01-03' },
];

const COLUMNS = [
    { id: 'user', header: 'User' },
    { id: 'amount', header: 'Amount' },
    {
        id: 'status',
        header: 'Status',
        render: (row: { status: string }) => {
            const variant = row.status === 'Completed' ? 'success' : row.status === 'Pending' ? 'warning' : 'neutral';
            return <Badge label={row.status} variant={variant} size="sm" />;
        }
    },
];

const DashboardContent = ({ isLoading = false }: { isLoading?: boolean }) => {
    const { show } = useToast();
    const [revenueRef, { width: revenueWidth }] = useElementSize();
    const [engagementRef, { width: engagementWidth }] = useElementSize();
    const [regionalRef, { width: regionalWidth }] = useElementSize();
    const [healthRef, { width: healthWidth }] = useElementSize();
    const [scatterRef, { width: scatterWidth }] = useElementSize();
    const [drillDownOpen, setDrillDownOpen] = useState(false);
    const [showGridLines, setShowGridLines] = useState(false);
    const [selectedMetric, setSelectedMetric] = useState<string | null>(null);

    const handleMetricClick = (label: string) => {
        setSelectedMetric(label);
        setDrillDownOpen(true);
    };

    if (isLoading) {
        return (
            <div className="p-8 space-y-6">
                <div className="flex justify-between items-center mb-8">
                    <Skeleton className="h-10 w-48" />
                    <Skeleton className="h-10 w-32" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[...Array(4)].map((_, i) => (
                        <Skeleton key={i} className="h-32" />
                    ))}
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <Skeleton className="h-80" />
                    <Skeleton className="h-80" />
                </div>
                <Skeleton className="h-64" />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-bg-page text-text-primary transition-colors duration-200">
            {/* Top Navigation */}
            <header className="bg-bg-surface border-b border-border-subtle px-8 py-4 flex justify-between items-center sticky top-0 z-10">
                <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-action-primary flex items-center justify-center text-action-text-on-primary font-bold text-xl">E</div>
                    <h1 className="text-xl font-bold">Eureka Enterprise</h1>
                </div>
                <div className="flex items-center gap-6">
                    <div className="flex gap-2">
                        <Button variant="ghost" size="sm">Docs</Button>
                        <Button variant="ghost" size="sm">Support</Button>
                    </div>
                    <div className="w-8 h-8">
                        <Avatar fallback="JD" size="md" className="cursor-pointer hover:border-action-primary transition-colors" />
                    </div>
                </div>
            </header>

            <main className="p-8 max-w-[1600px] mx-auto space-y-10">
                {/* Header Section */}
                <div className="flex justify-between items-center">
                    <div>
                        <h2 className="text-3xl font-bold">Executive Overview</h2>
                        <p className="text-text-secondary mt-1">Real-time performance metrics and regional analytics.</p>
                    </div>
                    <div className="flex gap-3">
                        <Button variant="secondary" onClick={() => setShowGridLines(!showGridLines)}>
                            {showGridLines ? 'Hide Grid' : 'Show Grid'}
                        </Button>
                        <Button variant="secondary" onClick={() => show({ message: 'Syncing data...', severity: 'info' })}>Refresh Data</Button>
                        <Button>Export Analytics</Button>
                    </div>
                </div>
                {/* Key Metrics Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <MetricCard
                        label="Total Revenue"
                        value="$1,284,500"
                        trend={{ value: '+12.5%', direction: 'up' }}
                        onClick={() => handleMetricClick('Total Revenue')}
                    />
                    <MetricCard
                        label="Active Subscriptions"
                        value="42,890"
                        trend={{ value: '+4.2%', direction: 'up' }}
                        onClick={() => handleMetricClick('Active Subscriptions')}
                    />
                    <MetricCard
                        label="System Healthy"
                        value="99.98%"
                        trend={{ value: 'Stable', direction: 'neutral' }}
                    />
                    <MetricCard
                        label="Open Security Issues"
                        value="12"
                        trend={{ value: '-3', direction: 'down' }}
                    />
                </div>

                {/* Main Insights Grid */}
                <div className="grid grid-cols-12 gap-8">
                    {/* Revenue Timeline */}
                    <Surface variant="card" className="col-span-12 xl:col-span-8 p-8 flex flex-col gap-6 shadow-sm border border-border-subtle">
                        <div className="flex flex-row justify-between items-start mb-2">
                            <h3 className="text-xl font-bold whitespace-nowrap">Revenue Projections</h3>
                            <Tabs defaultValue="month" className="ml-auto">
                                <TabsList>
                                    <TabsTrigger value="day">Day</TabsTrigger>
                                    <TabsTrigger value="month">Month</TabsTrigger>
                                    <TabsTrigger value="year">Year</TabsTrigger>
                                </TabsList>
                            </Tabs>
                        </div>
                        <div ref={revenueRef} className="min-h-[350px] flex-1 w-full flex justify-center items-center">
                            {revenueWidth > 0 && (
                                <LineChart
                                    data={REVENUE_DATA}
                                    width={revenueWidth}
                                    height={350}
                                    smooth
                                    showGrid={showGridLines}
                                    showYAxis={showGridLines}
                                />
                            )}
                        </div>
                    </Surface>

                    {/* Regional & Health Section */}
                    <div className="col-span-12 xl:col-span-4 space-y-8">
                        <Surface variant="card" className="p-8 shadow-sm border border-border-subtle">
                            <h3 className="text-lg font-bold mb-6">Regional Performance</h3>
                            <div ref={regionalRef} className="w-full">
                                {regionalWidth > 0 && (
                                    <HorizontalBarChart
                                        data={REGIONAL_DATA}
                                        width={regionalWidth}
                                        height={240}
                                        showLabels={true}
                                        showGrid={showGridLines}
                                    />
                                )}
                            </div>
                        </Surface>

                        <Surface variant="card" className="p-8 shadow-sm border border-border-subtle flex flex-col items-center">
                            <h3 className="text-lg font-bold mb-4 w-full text-left">Internal Health</h3>
                            <div ref={healthRef} className="flex flex-col xl:flex-row items-center justify-between gap-4 w-full">
                                <GaugeChart
                                    value={72}
                                    label="CPU"
                                    size={Math.min(160, Math.max(120, healthWidth * 0.4))}
                                />
                                <div className="flex flex-col items-center gap-2">
                                    <ProgressRing value={85} size="lg" label="SLA" />
                                    <span className="text-xs text-text-secondary uppercase tracking-wider font-bold">Uptime</span>
                                </div>
                            </div>
                            <div className="w-full mt-6 space-y-4 text-left">
                                <MeterChart label="Memory" value={45} thresholds={[{ value: 80, color: 'var(--status-critical)' }]} />
                                <MeterChart label="Storage" value={88} thresholds={[{ value: 85, color: 'var(--status-critical)' }]} />
                            </div>
                        </Surface>
                    </div>
                </div>

                {/* Secondary Data Hub */}
                <div className="grid grid-cols-12 gap-8">
                    {/* Engagement Area Chart */}
                    <Surface variant="card" className="col-span-12 xl:col-span-8 p-8 flex flex-col gap-6 shadow-sm border border-border-subtle">
                        <h3 className="text-xl font-bold whitespace-nowrap">Engagement Trends</h3>
                        <div ref={engagementRef} className="min-h-[300px] flex-1 w-full flex justify-center items-center">
                            {engagementWidth > 0 && (
                                <AreaChart
                                    data={ENGAGEMENT_TREND}
                                    width={engagementWidth}
                                    height={300}
                                    smooth
                                    fillOpacity={0.15}
                                    showGrid={showGridLines}
                                    showYAxis={showGridLines}
                                />
                            )}
                        </div>
                    </Surface>

                    <div className="col-span-12 xl:col-span-4 space-y-8">
                        {/* Market Distribution Pie */}
                        <Surface variant="card" className="p-8 shadow-sm border border-border-subtle flex flex-col items-center">
                            <h3 className="text-lg font-bold mb-6 w-full">Market Distribution</h3>
                            <div className="flex-1 flex items-center justify-center">
                                <PieChart data={MARKET_SHARE_DATA} size={180} />
                            </div>
                        </Surface>

                        {/* Recent Transactions Table */}
                        <Surface variant="card" className="p-8 shadow-sm border border-border-subtle overflow-hidden flex flex-col">
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="text-lg font-bold">Security Audit Log</h3>
                                <Button variant="ghost" size="sm">View Detail</Button>
                            </div>
                            <div className="flex-1 overflow-auto">
                                <Table data={RECENT_TRANSACTIONS} columns={COLUMNS} />
                            </div>
                        </Surface>
                    </div>
                </div>

                {/* Scatter Analysis Row */}
                <div className="grid grid-cols-12 gap-8">
                    <Surface variant="card" className="col-span-12 p-8 shadow-sm border border-border-subtle">
                        <h3 className="text-lg font-bold mb-6">User Retention vs Engagement Analysis</h3>
                        <div ref={scatterRef} className="h-[300px] flex justify-center w-full">
                            {scatterWidth > 0 && (
                                <ScatterPlot data={PERFORMANCE_POINTS} width={scatterWidth} height={300} showGrid={showGridLines} showYAxis={showGridLines} />
                            )}
                        </div>
                    </Surface>
                </div>
            </main>

            {/* Drill-down Modal */}
            <Modal
                isOpen={drillDownOpen}
                onClose={() => setDrillDownOpen(false)}
                title={`${selectedMetric || 'Metric'} - Detailed Analysis`}
                size="lg"
                footer={<Button onClick={() => setDrillDownOpen(false)}>Close Analysis</Button>}
            >
                <div className="space-y-8">
                    <p className="text-text-secondary text-sm">
                        Showing granular breakdowns and seasonal trends for the selected lifecycle metric.
                    </p>

                    <div className="grid grid-cols-2 gap-4">
                        <MetricCard label="Projected Peak" value="$540,000" />
                        <MetricCard label="Contribution" value="68.4%" trend={{ value: '+12%', direction: 'up' }} />
                    </div>

                    <div className="space-y-4">
                        <h4 className="font-bold text-text-primary">Quarterly Performance Breakdown</h4>
                        <div className="h-[200px] bg-bg-subtle p-4 flex items-center justify-center">
                            <StackedBarChart
                                data={REVENUE_BREAKDOWN}
                                width={500}
                                height={200}
                                showGrid={false}
                            />
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h4 className="font-bold text-text-primary">Engagement Source</h4>
                        <div className="flex justify-center p-4">
                            <DonutChart
                                data={[
                                    { label: 'Direct', value: 45 },
                                    { label: 'Referral', value: 30 },
                                    { label: 'Social', value: 25 }
                                ]}
                                size={180}
                            />
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export interface DashboardProps {
    /**
     * Whether the dashboard is in a loading state
     */
    isLoading?: boolean;
}

export const Dashboard = (props: DashboardProps) => {
    return (
        <ToastProvider>
            <DashboardContent {...props} />
        </ToastProvider>
    );
};
