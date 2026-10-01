import React from "react";
import Header from "@/components/ui/Header";
import TotalBalanceBox from "@/components/ui/TotalBalanceBox";
import RightSidebar from "@/components/ui/RightSidebar";

const Home = () => {
  const info = {
    firstName: "Adrian",
    lastName: "JSM",
    email: "test@gmail.com",
  };
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <Header
            type="greeting"
            user={info.firstName}
            title="Welcome"
            subtext="Access and manage your account and transaction efficiently"
          ></Header>
          <TotalBalanceBox
            accounts={[]}
            totalBanks={3}
            totalCurrentBalance={1250.35}
          />
        </header>
      </div>
      <RightSidebar user={info} transactions={[]} banks={[{}, {}]} />
    </section>
  );
};

export default Home;
