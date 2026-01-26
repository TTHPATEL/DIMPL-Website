import { Outlet } from "react-router-dom";
import Header from "../component/Header";

export default function RootLayout() {
  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <div className="bg-background text-foreground transition-colors h-24 flex flex-col">
        {/* <Navigation /> */}
        <Header />
      </div>
      <main className="mb-8 flex-1  overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}
