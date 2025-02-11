import Header from "@/components/layout/Header";
import "../styles/main.scss";
import { ToastContainer } from "react-toastify";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden">
        <Header />
        <ToastContainer />
        {children}
      </body>
    </html>
  );
}
