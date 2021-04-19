import React, { useState, Fragment } from 'react'
import { Button, Layout, Menu, Switch } from 'antd'
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    SettingOutlined
} from '@ant-design/icons'
import '../../styles/styles.scss'
import './dashboard.scss'
import { Footer } from 'antd/lib/layout/layout'
import ReportsTable from '../Tables/ReportsTable'
import CustomersTable from '../Tables/CustomersTable'
import ProductsTable from '../Tables/ProductsTable'
const { Header, Sider, Content } = Layout


const Dashboard = ({ history }) => {
    const [TableA, setTableA] = useState(true)
    const [TableB, setTableB] = useState(false)
    const [TableC, setTableC] = useState(false)
    const [collapsed, setCollapsed] = useState(false)
    const [themetoggle, setThemeToggle] = useState(false)
    const [theme, setTheme] = useState('light')
    const changeTheme = value => {
        setThemeToggle(!themetoggle)
        setTheme(themetoggle ? 'light' : 'dark')
    }

    const toggle = () => {
        setCollapsed(!collapsed)
    }
    const showReportsTable = () => {
        setTableA(true)
        setTableB(false)
        setTableC(false)
    }
    const showCustomersTable = () => {
        setTableA(false)
        setTableB(true)
        setTableC(false)
    }
    const showProductsTable = () => {
        setTableA(false)
        setTableB(false)
        setTableC(true)
    }
    const logoutFun = () => {
        history.push('/')
    }
    return (
        <div
            className={theme === 'light' ? 'lightTheme' : 'darkTheme'}>
            <Layout theme={theme}>
                <Sider style={{ position: 'relative' }} trigger={null} collapsible collapsed={collapsed}>
                    <Header className="header">
                        <div className="logo" />
                    </Header>
                    <Menu theme={theme} mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1" icon={<UserOutlined />} onClick={showReportsTable}>
                            Reports
                        </Menu.Item>
                        <Menu.Item key="2" icon={<VideoCameraOutlined />} onClick={showCustomersTable}>
                            Customers
            </Menu.Item>
                        <Menu.Item key="3" icon={<UploadOutlined />} onClick={showProductsTable}>
                            Products
            </Menu.Item>
                        {collapsed ?
                            <Fragment>
                                <Menu.Item key="4" icon={<SettingOutlined />} onClick={logoutFun}>
                                    Logout
                 </Menu.Item>
                            </Fragment>
                            : <Footer className='logout_footer'>
                                <Button onClick={logoutFun}>Logout</Button>
                            </Footer>}
                    </Menu>

                </Sider>
                <Layout className="site-layout">
                    <Header className="site-layout-background" style={{ padding: 0 }}>
                        {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                            className: 'trigger',
                            onClick: toggle,
                        })}
                        <Switch
                            className='theme_switch'
                            // checked={theme}
                            onChange={changeTheme}
                            checkedChildren='Dark'
                            unCheckedChildren='Light'>
                        </Switch>
                    </Header>
                    <Content
                        className='site-layout-background content_height'
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            minHeight: 480
                        }}>
                        {TableA && <ReportsTable />}
                        {TableB && <CustomersTable />}
                        {TableC && <ProductsTable />}

                    </Content>
                </Layout>
            </Layout>
        </div >
    )
}

export default Dashboard
