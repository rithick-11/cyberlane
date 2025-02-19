import { useEffect, useState } from "react";
import BgContainer from "../components/BgContainer";
import Container from "../components/Container";
import useDataStore from "../store/dataStore";
import CountCard from "../components/CountCard";

const Dashboard = () => {
  const { getVistCount, onLogin, isLogin } = useDataStore();
  const [password, setPassword] = useState("");

  useEffect(() => {
    getVistCount();
  }, [isLogin]);

  if (!isLogin) {
    return (
      <div>
        <BgContainer />
        <Container>
          <div className="h-screen flex justify-center items-center">
            <div className="bg-white w-lg h-40 flex flex-col items-center justify-center gap-2.5">
              <h1>Enter password</h1>
              <input
                type="text"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                className="border p-2 rounded"
                placeholder="password"
              />
              <button
                className="bg-amber-400 px-4 py-2 rounded cursor-pointer"
                onClick={() => {
                  onLogin(password);
                }}
              >
                Login
              </button>
            </div>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="text-white py-3">
      <BgContainer />
      <Container>
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <CountCard />
      </Container>
    </div>
  );
};

export default Dashboard;
