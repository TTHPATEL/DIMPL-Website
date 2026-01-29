import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";

export default function RootLayout() {
  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <div className="bg-background text-foreground transition-colors flex flex-col">
        {/* <Navigation /> */}
        <Header />
      </div>
      <main className="flex-1  overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}
