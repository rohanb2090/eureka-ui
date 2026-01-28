import {
    LayoutDashboard,
    Users,
    Calendar,
    Activity,
    Settings,
    LogOut,
    Bell,
    Search,
    Plus,
    Stethoscope,
    Clock,
    ChevronRight,
    MoreVertical,
    ClipboardList
} from 'lucide-react';
import { Surface } from '../../components/Surface';
import { Button } from '../../components/Button';
import { LineChart } from '../../components/LineChart';
import { HorizontalBarChart } from '../../components/BarChart';
import { DonutChart } from '../../components/PieChart';
import { MetricCard } from '../../components/MetricCard';
import { Avatar } from '../../components/Avatar';
import { Badge } from '../../components/Badge';
import { Select } from '../../components/Select';
import { useElementSize } from '../../hooks/useElementSize';
import { cn } from '../../utils/cn';
import { Skeleton } from '../../components/Skeleton';

// --- Mock Data ---

const PATIENT_FLOW_DATA = [
    { x: '8am', y: 12 }, { x: '9am', y: 28 }, { x: '10am', y: 45 },
    { x: '11am', y: 38 }, { x: '12pm', y: 25 }, { x: '1pm', y: 30 },
    { x: '2pm', y: 42 }, { x: '3pm', y: 35 }, { x: '4pm', y: 20 },
    { x: '5pm', y: 15 },
];

const DIAGNOSIS_DATA = [
    { label: 'General Checkup', value: 35 },
    { label: 'Pediatrics', value: 28 },
    { label: 'Cardiology', value: 15 },
    { label: 'Dermatology', value: 12 },
    { label: 'Orthopedics', value: 10 },
];

const DEMOGRAPHICS_DATA = [
    { label: 'Adults', value: 55, color: 'var(--chart-1)' },
    { label: 'Children', value: 30, color: 'var(--chart-2)' },
    { label: 'Seniors', value: 15, color: 'var(--chart-3)' },
];

const APPOINTMENTS = [
    { id: 1, time: '09:30 AM', patient: 'Sarah Johnson', type: 'Checkup', doctor: 'Dr. Smith', status: 'In Progress' },
    { id: 2, time: '10:00 AM', patient: 'Michael Chen', type: 'Follow-up', doctor: 'Dr. Lee', status: 'Waiting' },
    { id: 3, time: '10:15 AM', patient: 'Emily Davis', type: 'Lab Results', doctor: 'Dr. Smith', status: 'Checked In' },
    { id: 4, time: '10:45 AM', patient: 'Robert Wilson', type: 'Consultation', doctor: 'Dr. Patel', status: 'Scheduled' },
    { id: 5, time: '11:00 AM', patient: 'Jessica Brown', type: 'Vaccination', doctor: 'Dr. Lee', status: 'Scheduled' },
];

// --- Components ---

const Sidebar = () => {
    const navItems = [
        { icon: LayoutDashboard, label: 'Overview', active: true },
        { icon: Users, label: 'Patients', active: false },
        { icon: Calendar, label: 'Appointments', active: false },
        { icon: ClipboardList, label: 'Prescriptions', active: false },
        { icon: Activity, label: 'Analytics', active: false },
        { icon: Settings, label: 'Settings', active: false },
    ];

    return (
        <aside className="w-64 bg-bg-surface border-r border-border-default flex flex-col h-screen sticky top-0">
            <div className="p-6 flex items-center gap-3">
                <div className="w-8 h-8 bg-action-primary rounded-lg flex items-center justify-center text-action-text-on-primary">
                    <Stethoscope size={20} />
                </div>
                <span className="font-bold text-lg text-text-primary tracking-tight">Eureka Care</span>
            </div>

            <nav className="flex-1 px-4 py-4 space-y-1">
                {navItems.map((item) => (
                    <button
                        key={item.label}
                        className={cn(
                            "w-full flex items-center gap-3 px-4 py-3 rounded-md text-sm font-medium transition-colors",
                            item.active
                                ? "bg-action-primary/10 text-action-primary"
                                : "text-text-secondary hover:bg-bg-subtle hover:text-text-primary"
                        )}
                    >
                        <item.icon size={18} />
                        {item.label}
                    </button>
                ))}
            </nav>

            <div className="p-4 border-t border-border-subtle">
                <div className="flex items-center gap-3 p-2 rounded-md hover:bg-bg-subtle cursor-pointer transition-colors">
                    <Avatar fallback="Dr" size="md" className="bg-action-secondary text-action-primary" />
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-text-primary truncate">Dr. Alex Morgan</p>
                        <p className="text-xs text-text-secondary truncate">Chief Physician</p>
                    </div>
                    <LogOut size={16} className="text-text-tertiary" />
                </div>
            </div>
        </aside>
    );
};

const MetricSection = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
            label="Appointments Today"
            value="42"
            trend={{ value: '+8', direction: 'up' }}
        />
        <MetricCard
            label="Waiting Room"
            value="12"
            trend={{ value: 'Peak', direction: 'neutral' }}
        />
        <MetricCard
            label="Avg. Wait Time"
            value="14m"
            trend={{ value: '-2m', direction: 'up' }} // Improvement
        />
        <MetricCard
            label="Daily Revenue"
            value="$8,450"
            trend={{ value: '+12%', direction: 'up' }}
        />
    </div>
);

const AppointmentRow = ({ appointment }: { appointment: typeof APPOINTMENTS[0] }) => {
    const getStatusVariant = (status: string) => {
        switch (status) {
            case 'In Progress': return 'info';
            case 'Waiting': return 'warning';
            case 'Checked In': return 'success';
            default: return 'neutral';
        }
    };

    return (
        <div className="flex items-center justify-between p-4 bg-bg-surface border border-border-subtle rounded-lg hover:border-border-strong transition-colors group">
            <div className="flex items-center gap-4">
                <div className="flex flex-col items-center justify-center w-12 h-12 bg-bg-subtle rounded-lg">
                    <Clock size={16} className="text-text-tertiary mb-1" />
                    <span className="text-xs font-bold text-text-secondary">{appointment.time.split(' ')[0]}</span>
                </div>
                <div>
                    <h4 className="text-sm font-bold text-text-primary">{appointment.patient}</h4>
                    <span className="text-xs text-text-secondary">{appointment.type} • {appointment.doctor}</span>
                </div>
            </div>
            <div className="flex items-center gap-4">
                <Badge label={appointment.status} variant={getStatusVariant(appointment.status)} />
                <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <MoreVertical size={16} />
                </Button>
            </div>
        </div>
    );
};

export interface DashboardProps {
    isLoading?: boolean;
}

export const Dashboard = ({ isLoading = false }: DashboardProps) => {
    const [patientFlowRef, { width: flowWidth }] = useElementSize();
    const [diagnosisRef, { width: diagnosisWidth }] = useElementSize();

    if (isLoading) {
        return (
            <div className="min-h-screen bg-bg-page flex">
                <div className="w-64 bg-bg-surface border-r border-border-subtle p-6 space-y-4">
                    <Skeleton className="h-8 w-32" />
                    <div className="space-y-2 mt-8">
                        {[...Array(5)].map((_, i) => <Skeleton key={i} className="h-10 w-full" />)}
                    </div>
                </div>
                <div className="flex-1 p-8 space-y-8">
                    <div className="flex justify-between">
                        <Skeleton className="h-10 w-48" />
                        <Skeleton className="h-10 w-32" />
                    </div>
                    <div className="grid grid-cols-4 gap-6">
                        {[...Array(4)].map((_, i) => <Skeleton key={i} className="h-32" />)}
                    </div>
                    <div className="grid grid-cols-3 gap-6">
                        <Skeleton className="h-80 col-span-2" />
                        <Skeleton className="h-80 col-span-1" />
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-bg-page flex font-sans text-text-primary">
            <Sidebar />

            <main className="flex-1 min-w-0 overflow-auto">
                {/* Header */}
                <header className="px-8 py-5 border-b border-border-subtle bg-bg-surface sticky top-0 z-10 flex justify-between items-center">
                    <div>
                        <h1 className="text-2xl font-bold text-text-primary">Dashboard</h1>
                        <div className="flex items-center gap-2 text-sm text-text-secondary mt-1">
                            <span>Overview</span>
                            <ChevronRight size={14} />
                            <span>Clinic Analytics</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="relative hidden md:block">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-text-tertiary" size={16} />
                            <input
                                type="text"
                                placeholder="Search patients..."
                                className="pl-10 pr-4 py-2 bg-bg-subtle border-none rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-action-primary w-64 transition-all"
                            />
                        </div>
                        <button className="relative p-2 text-text-secondary hover:bg-bg-subtle rounded-full transition-colors">
                            <Bell size={20} />
                            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-status-error rounded-full border border-bg-surface" />
                        </button>
                        <Button className="flex items-center gap-2">
                            <Plus size={16} className="shrink-0" />
                            New Appointment
                        </Button>
                    </div>
                </header>

                <div className="p-8 max-w-7xl mx-auto space-y-8">
                    {/* Metrics */}
                    <MetricSection />

                    {/* Main Content Grid */}
                    <div className="grid grid-cols-12 gap-8">
                        {/* Patient Flow Chart */}
                        <div className="col-span-12 lg:col-span-8 space-y-6">
                            <Surface variant="card" className="p-6 border border-border-subtle shadow-sm">
                                <div className="flex items-center justify-between mb-6">
                                    <div>
                                        <h3 className="text-lg font-bold">Patient Flow Analytics</h3>
                                        <p className="text-sm text-text-secondary">Hourly footfall vs capacity</p>
                                    </div>
                                    <div className="w-32">
                                        <Select
                                            options={[
                                                { label: 'Today', value: 'today' },
                                                { label: 'Yesterday', value: 'yesterday' },
                                                { label: 'Last Week', value: 'last_week' },
                                            ]}
                                            placeholder="Today"
                                            size="sm"
                                        />
                                    </div>
                                </div>
                                <div ref={patientFlowRef} className="h-[300px] w-full flex justify-center">
                                    {flowWidth > 0 && (
                                        <LineChart
                                            data={PATIENT_FLOW_DATA}
                                            width={flowWidth}
                                            height={300}
                                            smooth
                                            showGrid
                                        />
                                    )}
                                </div>
                            </Surface>

                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-lg font-bold">Upcoming Appointments</h3>
                                    <Button variant="ghost" size="sm" className="text-action-primary">View All</Button>
                                </div>
                                <div className="space-y-3">
                                    {APPOINTMENTS.map(apt => (
                                        <AppointmentRow key={apt.id} appointment={apt} />
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Side Panel: Demographics & Diagnosis */}
                        <div className="col-span-12 lg:col-span-4 space-y-6">
                            <Surface variant="card" className="p-6 border border-border-subtle shadow-sm flex flex-col items-center">
                                <h3 className="text-lg font-bold mb-2 w-full text-left">Patient Demographics</h3>
                                <p className="text-sm text-text-secondary w-full text-left mb-6">Age distribution today</p>

                                <DonutChart
                                    data={DEMOGRAPHICS_DATA}
                                    size={180}
                                    showLabels={false}
                                />
                                <div className="grid grid-cols-3 gap-2 w-full mt-6">
                                    {DEMOGRAPHICS_DATA.map((item, i) => (
                                        <div key={i} className="text-center p-2 rounded-lg bg-bg-subtle">
                                            <span className="block text-xs text-text-secondary">{item.label}</span>
                                            <span className="block font-bold text-lg">{item.value}%</span>
                                        </div>
                                    ))}
                                </div>
                            </Surface>

                            <Surface variant="card" className="p-6 border border-border-subtle shadow-sm">
                                <h3 className="text-lg font-bold mb-6">Common Diagnoses</h3>
                                <div ref={diagnosisRef} className="w-full">
                                    {diagnosisWidth > 0 && (
                                        <HorizontalBarChart
                                            data={DIAGNOSIS_DATA}
                                            width={diagnosisWidth}
                                            height={250}
                                            showLabels
                                        />
                                    )}
                                </div>
                            </Surface>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};
