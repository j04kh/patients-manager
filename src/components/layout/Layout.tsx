import Header from "./Header";
import Sidebar from "./Sidebar";

interface Props {
  children: React.ReactElement;
}

export default function Layout({ children }: Props) {
  return (
    <div className="relative flex min-h-screen w-full">
      <Sidebar />
      <div className="relative flex h-0 min-h-screen flex-1 flex-col overflow-hidden bg-white">
        <Header />
        <main className="flex h-full w-full flex-1 flex-col overflow-y-auto bg-[#fafafa] p-4 sm:p-6 sm:pb-0 lg:overflow-hidden">
          {children}
        </main>
      </div>
    </div>
  );
}
