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
import Table from '../Tables/Table'
// import useWindowDimensions from '../Window Dimension/useWindowDimensions'
// const Table = React.lazy(() => import('../Tables/Table'))
const { Header, Sider, Content } = Layout


const Dashboard = () => {
    // const { width } = useWindowDimensions()
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
    return (
        <div
            className={theme === 'light' ? 'lightTheme' : 'darkTheme'}>
            <Layout theme={theme}>
                <Sider style={{ position: 'relative' }} trigger={null} collapsible collapsed={collapsed}>
                    <Header className="header">
                        <div className="logo" />
                    </Header>
                    <Menu theme={theme} mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1" icon={<UserOutlined />}>
                            Open
                        </Menu.Item>
                        <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                            nav 2
            </Menu.Item>
                        <Menu.Item key="3" icon={<UploadOutlined />}>
                            nav 3
            </Menu.Item>
                        {collapsed ?
                            <Fragment>
                                {/* <Menu> */}
                                <Menu.Item key="4" icon={<SettingOutlined />}>
                                    Logout
                 </Menu.Item>
                                {/* </Menu> */}
                            </Fragment>
                            : <Footer className='logout_footer'>
                                <Button>Logout</Button>
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
                            checkedChildren='dark'
                            unCheckedChildren='light'>
                        </Switch>
                    </Header>
                    <Content
                        className='site-layout-background content_height'
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            minHeight: 470
                        }}>
                        <Table />
                    </Content>
                </Layout>
            </Layout>
        </div >
    )
}

export default Dashboard

// import React, { Fragment, useState } from 'react'
// import { Menu, Switch } from 'antd'
// import { MailOutlined, AppstoreOutlined, SettingOutlined, Layout } from '@ant-design/icons'

// const { SubMenu } = Menu

// const Dashboard = () => {
//     const [theme, settheme] = useState('dark')
//     const [collapsed, setCollapsed] = useState(false)

//     const [current, setcurrent] = useState('1')
//     const changeTheme = value => {
//         settheme(value ? 'dark' : 'light',)
//     }
//     const handleClick = e => {
//         console.log('click ', e)
//         setcurrent(e.key)
//     }
//     const toggle = () => {
//         setCollapsed(!collapsed)
//     }
//     return (
//         <Fragment>
//             <div>
//                 <Layout>
//                     <Switch
//                         checked={theme === 'dark'}
//                         onChange={changeTheme}
//                         checkedChildren="Dark"
//                         unCheckedChildren="Light"
//                     />
//                     <br />
//                     <br />
//                     <Sider trigger={null} collapsible collapsed={collapsed}>

//                         <Menu
//                             theme={theme}
//                             onClick={handleClick}
//                             style={{ width: 256 }}
//                             defaultOpenKeys={['sub1']}
//                             selectedKeys={[current]}
//                             mode="inline"
//                         >
//                             <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
//                                 <Menu.Item key="1">Option 1</Menu.Item>
//                                 <Menu.Item key="2">Option 2</Menu.Item>
//                                 <Menu.Item key="3">Option 3</Menu.Item>
//                                 <Menu.Item key="4">Option 4</Menu.Item>
//                             </SubMenu>
//                             <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Navigation Two">
//                                 <Menu.Item key="5">Option 5</Menu.Item>
//                                 <Menu.Item key="6">Option 6</Menu.Item>
//                                 <SubMenu key="sub3" title="Submenu">
//                                     <Menu.Item key="7">Option 7</Menu.Item>
//                                     <Menu.Item key="8">Option 8</Menu.Item>
//                                 </SubMenu>
//                             </SubMenu>
//                             <SubMenu key="sub4" icon={<SettingOutlined />} title="Navigation Three">
//                                 <Menu.Item key="9">Option 9</Menu.Item>
//                                 <Menu.Item key="10">Option 10</Menu.Item>
//                                 <Menu.Item key="11">Option 11</Menu.Item>
//                                 <Menu.Item key="12">Option 12</Menu.Item>
//                             </SubMenu>
//                         </Menu>
//                     </Sider>
//                     <Layout className="site-layout">
//                         <Header className="site-layout-background" style={{ padding: 0 }}>
//                             {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
//                                 className: 'trigger',
//                                 onClick: toggle,
//                             })}
//                         </Header>
//                         <Content
//                             theme={theme}
//                             className="site-layout-background content_height"
//                             style={{
//                                 margin: '24px 16px',
//                                 padding: 24,
//                                 minHeight: 470
//                             }}
//                         >
//                             Content
//           </Content>
//                     </Layout>
//                 </Layout>

//             </div>
//         </Fragment>
//     )
// }

// export default Dashboard

// class Dashboard extends React.Component {
//     state = {
//         theme: 'dark',
//         current: '1',
//     };

//     changeTheme = value => {
//         this.setState({
//             theme: value ? 'dark' : 'light',
//         })
//     };

//     handleClick = e => {
//         console.log('click ', e)
//         this.setState({
//             current: e.key,
//         })
//     };

//     render() {
//         return (
//             <>
//                 <Switch
//                     checked={this.state.theme === 'dark'}
//                     onChange={this.changeTheme}
//                     checkedChildren="Dark"
//                     unCheckedChildren="Light"
//                 />
//                 <br />
//                 <br />
//                 <Menu
//                     theme={this.state.theme}
//                     onClick={this.handleClick}
//                     style={{ width: 256 }}
//                     defaultOpenKeys={['sub1']}
//                     selectedKeys={[this.state.current]}
//                     mode="inline"
//                 >
//                     <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
//                         <Menu.Item key="1">Option 1</Menu.Item>
//                         <Menu.Item key="2">Option 2</Menu.Item>
//                         <Menu.Item key="3">Option 3</Menu.Item>
//                         <Menu.Item key="4">Option 4</Menu.Item>
//                     </SubMenu>
//                     <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Navigation Two">
//                         <Menu.Item key="5">Option 5</Menu.Item>
//                         <Menu.Item key="6">Option 6</Menu.Item>
//                         <SubMenu key="sub3" title="Submenu">
//                             <Menu.Item key="7">Option 7</Menu.Item>
//                             <Menu.Item key="8">Option 8</Menu.Item>
//                         </SubMenu>
//                     </SubMenu>
//                     <SubMenu key="sub4" icon={<SettingOutlined />} title="Navigation Three">
//                         <Menu.Item key="9">Option 9</Menu.Item>
//                         <Menu.Item key="10">Option 10</Menu.Item>
//                         <Menu.Item key="11">Option 11</Menu.Item>
//                         <Menu.Item key="12">Option 12</Menu.Item>
//                     </SubMenu>
//                 </Menu>
//             </>
//         )
//     }
// }
// export default Dashboard