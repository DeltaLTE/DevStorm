import TopNav from '@/app/ui/home/topnav';

export default function Layout({ children }: { children:
React.ReactNode }) {
    return (
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
            <TopNav />
            <div className="flex-grow md:overflow-y-auto ">
                {children}
            </div>
        </div>
    );
}