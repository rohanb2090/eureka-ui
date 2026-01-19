import { Surface } from '../../components/Surface';
import { Button } from '../../components/Button';
import { AreaChart } from '../../components/AreaChart';
import { BarChart } from '../../components/BarChart';
import { Table } from '../../components/Table';
import { Skeleton } from '../../components/Skeleton';
import { ToastProvider, useToast } from '../../components/Toast';
import { useElementSize } from '../../hooks/useElementSize';

// Mock Data
const REVENUE_DATA = [
    { x: 'Jan', y: 4000 },
    { x: 'Feb', y: 3000 },
    { x: 'Mar', y: 2000 },
    { x: 'Apr', y: 2780 },
    { x: 'May', y: 1890 },
    { x: 'Jun', y: 2390 },
    { x: 'Jul', y: 3490 },
];

const SALES_DATA = [
    { label: 'Electronics', value: 1200 },
    { label: 'Clothing', value: 900 },
    { label: 'Books', value: 500 },
    { label: 'Home', value: 300 },
];

const RECENT_TRANSACTIONS = [
    { id: '1', user: 'John Doe', amount: '$120.00', status: 'Completed', date: '2023-01-01' },
    { id: '2', user: 'Jane Smith', amount: '$250.50', status: 'Pending', date: '2023-01-02' },
    { id: '3', user: 'Bob Johnson', amount: '$75.00', status: 'Completed', date: '2023-01-03' },
    { id: '4', user: 'Alice Brown', amount: '$430.00', status: 'Failed', date: '2023-01-04' },
];

const COLUMNS = [
    { id: 'user', header: 'User' },
    { id: 'amount', header: 'Amount' },
    { id: 'status', header: 'Status' },
    { id: 'date', header: 'Date' },
];

const DashboardContent = ({ isLoading = false }: { isLoading?: boolean }) => {
    const { show } = useToast();
    const [revenueRef, { width: revenueWidth }] = useElementSize();
    const [salesRef, { width: salesWidth }] = useElementSize();

    if (isLoading) {
        return (
            <div className="p-8 space-y-6">
                <div className="flex justify-between items-center mb-8">
                    <Skeleton className="h-10 w-48" />
                    <Skeleton className="h-10 w-32" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[...Array(4)].map((_, i) => (
                        <Skeleton key={i} className="h-32 rounded-lg" />
                    ))}
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <Skeleton className="h-80 rounded-lg" />
                    <Skeleton className="h-80 rounded-lg" />
                </div>
                <Skeleton className="h-64 rounded-lg" />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-bg-page text-text-primary transition-colors duration-200">
            {/* Top Navigation */}
            <header className="bg-bg-surface border-b border-border-subtle px-4 md:px-8 py-4 flex justify-between items-center sticky top-0 z-10 transition-colors duration-200">
                <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-action-primary rounded-lg flex items-center justify-center text-action-text-on-primary font-bold">E</div>
                    <h1 className="text-lg md:text-xl font-bold text-text-primary">Eureka Dashboard</h1>
                </div>
                <div className="flex items-center gap-4">
                    <Button variant="ghost" onClick={() => show({ message: 'Notifications cleared', severity: 'info' })}>
                        Notifications
                    </Button>
                    <div className="w-8 h-8 rounded-full bg-bg-subtle border border-border-default" />
                </div>
            </header>

            <main className="p-4 md:p-8 max-w-7xl mx-auto space-y-8">
                {/* Stats Row */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <h2 className="text-2xl font-bold text-text-primary">Overview</h2>
                    <Button onClick={() => show({ message: 'Report downloaded successfully', severity: 'success' })}>
                        Download Report
                    </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { label: 'Total Revenue', value: '$45,231.89', change: '+20.1%', trend: 'up' },
                        { label: 'Subscriptions', value: '+2350', change: '+180.1%', trend: 'up' },
                        { label: 'Sales', value: '+12,234', change: '+19%', trend: 'up' },
                        { label: 'Active Now', value: '+573', change: '+201', trend: 'up' },
                    ].map((stat, i) => (
                        <Surface key={i} className="p-6">
                            <div className="flex flex-col gap-2">
                                <span className="text-sm font-medium text-text-secondary">{stat.label}</span>
                                <span className="text-2xl font-bold text-text-primary">{stat.value}</span>
                                <span className="text-xs text-status-success font-medium">{stat.change} from last month</span>
                            </div>
                        </Surface>
                    ))}
                </div>

                {/* Charts Row */}
                <div className="grid grid-cols-1 lg:grid-cols-7 gap-6">
                    <Surface className="lg:col-span-4 p-6 flex flex-col gap-4 min-w-0">
                        <h3 className="text-lg font-semibold text-text-primary mb-4">Revenue Over Time</h3>
                        <div ref={revenueRef} className="h-[300px] w-full overflow-x-auto pb-4">
                            {revenueWidth > 0 && (
                                <AreaChart
                                    data={REVENUE_DATA}
                                    width={Math.max(revenueWidth, 500)}
                                    height={300}
                                />
                            )}
                        </div>
                    </Surface>
                    <Surface className="lg:col-span-3 p-6 flex flex-col gap-4 min-w-0">
                        <h3 className="text-lg font-semibold text-text-primary mb-4">Sales by Category</h3>
                        <div ref={salesRef} className="h-[300px] w-full overflow-x-auto pb-4">
                            {salesWidth > 0 && (
                                <BarChart
                                    data={SALES_DATA}
                                    width={Math.max(salesWidth, 400)}
                                    height={300}
                                />
                            )}
                        </div>
                    </Surface>
                </div>

                {/* Recent Transactions */}
                <Surface className="p-6 min-w-0">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-lg font-semibold text-text-primary">Recent Transactions</h3>
                        <Button variant="secondary" size="sm">View All</Button>
                    </div>
                    <div className="w-full overflow-x-auto">
                        <Table data={RECENT_TRANSACTIONS} columns={COLUMNS} />
                    </div>
                </Surface>
            </main>
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
