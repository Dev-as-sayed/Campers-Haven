import { Outlet } from "react-router-dom";
import NavBar from "./shared/NavBar";
import { Layout } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";

function App() {
  return (
    <Layout>
      <Header className="">
        <NavBar />
      </Header>
      <Content>
        <Outlet />
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  );
}

export default App;
