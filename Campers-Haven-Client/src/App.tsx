import { Outlet } from "react-router-dom";
import NavBar from "./shared/NavBar";
// import { Layout } from "antd";
// import { Content, Footer } from "antd/es/layout/layout";

function App() {
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
    // <Layout>
    //   <NavBar />
    //   <Content>
    //     <Outlet />
    //   </Content>
    //   <Footer>Footer</Footer>
    // </Layout>
  );
}

export default App;
