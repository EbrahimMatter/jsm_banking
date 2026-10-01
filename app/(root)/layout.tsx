import Sidebar from "@/components/ui/Sidebar";
import Image from "next/image";
import logo from "../../public/icons/logo.svg";
import MobileNavbar from "@/components/ui/MobileNavbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = { firstName: "Adrian", lastName: "JSM" };
  return (
    <main className="flex h-screen w-full font-inter">
      <Sidebar user={loggedIn} />
      <div className="flex size-full flex-col">
        <div className="root-layout">
          <Image src={logo} alt="menu image" width={30} height={30} />
          <div>
            <MobileNavbar user={loggedIn} />
          </div>
        </div>
        {children}
      </div>
    </main>
  );
}
