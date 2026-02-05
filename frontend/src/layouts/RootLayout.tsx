import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";

export default function RootLayout() {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
}
