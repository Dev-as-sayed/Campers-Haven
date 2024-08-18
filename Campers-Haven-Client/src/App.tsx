import { Flex, Layout } from "antd";
import NavBar from "./shared/NavBar";

const { Header, Footer, Content } = Layout;

function App() {
  return (
    <Flex gap="middle" wrap>
      <Layout>
        <Header>
          <NavBar />
        </Header>
        <Content>Content</Content>
        <Footer>Footer</Footer>
      </Layout>
    </Flex>
  );
}

export default App;
