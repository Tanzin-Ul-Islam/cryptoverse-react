import React from 'react'
import { Route, Link, Switch } from 'react-router-dom'
import { Layout, Typography, Space } from 'antd';
import "./app.css";
import { Navbar, Homepage, Exchanges, CryptoCurrencies, CryptoDetails, News } from './components';
export default function App() {
    return (
        <div className='app'>
            <div className='navbar'>
                <Navbar />
            </div>
            <div className='main'>
                <Layout>
                    <div className='route'>
                        <Switch>
                            <Route exact path="/"><Homepage /></Route>
                            <Route exact path="/exchanges"><Exchanges /></Route>
                            <Route exact path="/crypto-currencies"><CryptoCurrencies /></Route>
                            <Route exact path="/crypto-details/:coinId"><CryptoDetails /></Route>
                            <Route exact path="/news"><News /></Route>
                        </Switch>
                    </div>
                </Layout>

                <div className='footer'>
                    <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>
                        Cryptoverse<br />
                        All rights reserved
                    </Typography.Title>
                    <Space>
                        <Link to='/'>Home</Link>
                        <Link to='/exchanges'>Exchanges</Link>
                        <Link to='/crypto-currencies'>Cryptocurrencies</Link>
                        <Link to="/news">News</Link>
                    </Space>
                </div>
            </div>
        </div>
    )
}
