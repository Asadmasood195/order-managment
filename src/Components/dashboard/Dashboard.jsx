import React, { useState } from 'react'
import { Layout, Menu } from 'antd'
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
} from '@ant-design/icons'
import './dashboard.scss'

const { Header, Sider, Content } = Layout
const Dashboard = () => {
    const [collapsed, setCollapsed] = useState(false)
    const [theme, setTheme] = useState('light')
    const changeTheme = value => {
        setTheme({
            theme: value ? 'light' : 'dark',
        })
    }
    const toggle = () => {
        setCollapsed({
            collapsed: !collapsed,
        })
    }
    return (
        <div>
            <Layout>
                <Sider trigger={null} collapsible collapsed={collapsed}>
                    <div className="logo" />
                    <Menu theme={theme} mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1" icon={<UserOutlined />}>
                            nav 1
            </Menu.Item>
                        <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                            nav 2
            </Menu.Item>
                        <Menu.Item key="3" icon={<UploadOutlined />}>
                            nav 3
            </Menu.Item>
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Header className="site-layout-background" style={{ padding: 0 }}>
                        {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                            className: 'trigger',
                            onClick: toggle,
                        })}
                    </Header>
                    <Content
                        className="site-layout-background content_height"
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            minHeight: 470
                        }}
                    >
                        Content
          </Content>
                </Layout>
            </Layout>
        </div>
    )
}

export default Dashboard

