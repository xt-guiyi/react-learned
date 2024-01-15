import './App.scss'
import { Outlet} from 'react-router-dom'
import { Layout } from 'antd';
import Left from './component/Left';

function App() {
  const { Header, Footer, Sider, Content } = Layout;
  const headerStyle: React.CSSProperties = {
    textAlign: 'center',
    color: '#fff',
    height: 64,
    paddingInline: 50,
    lineHeight: '64px',
    backgroundColor: '#001529',
  };
  
  const contentStyle: React.CSSProperties = {
    textAlign: 'center',
    minHeight: 120,
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: 'white',
    overflowY: 'auto'
  };
  
  const siderStyle: React.CSSProperties = {
    textAlign: 'center',
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#3ba0e9',
  };
  
  const footerStyle: React.CSSProperties = {
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#7dbcea',
  };
  return (
    <>
     <Layout className='layout-container'>
      <Sider style={siderStyle}><Left /></Sider>
      <Layout>
        <Header style={headerStyle}>布局页面1</Header>
        <Content style={contentStyle}><Outlet  /></Content>
        <Footer style={footerStyle}>Footer</Footer>
      </Layout>
    </Layout>
     
    </>
  )
}

export default App
