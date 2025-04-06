import ProNav from '@/app/ui/home/pronav';

export default function Layout({ children }: { children:
React.ReactNode }) {
    return (
        <div className="flex h-screen flex-row md:flex-row md:overflow-hidden mt-20 bg-yellow-300">
            <ProNav />
            <div className="flex-grow md:overflow-y-auto ">
                {children}
            </div>
        </div>
    );
}