import React, { useState, useEffect } from 'react';
import map from "lodash/map";
import { Route, Routes } from "react-router-dom";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';
import { Layout, theme, Col, Row, notification } from 'antd';

import MenuApp from './components/MenuApp';
import CardBook from './components/CardBook';
import FormBook from './components/FormBook';

import About from './containers/About';
import { getBooks } from './api/utils';

import logo from './logo.svg';
import portada1 from './assets/img/portada1.webp';

const { Header, Sider, Content } = Layout;

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [books, setBooks] = useState();
  const [api, contextHolder] = notification.useNotification();

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  useEffect(() => {
    // UTILS
    // LISTADO DE LIBROS
    // getBooks(api, URL_BASE, setBooks);

    // CREA UN LIBRO
    // createBooks(api, URL_BASE, setBooks, {
    //   id: 20,
    //   title: "El Quinto Infierno 20",
    //   description: "Description del libro El Quinto Infierno 20"
    // });

    // ACTUALIZA UN LIBRO
    // updateBooks(api, URL_BASE, setBooks, 20, {
    //   title: "El Quinto Infierno 20 fue editado",
    //   description: "Description del libro El Quinto Infierno 20 fue editado"
    // });

    // ELIMINA UN LIBRO
    // deleteBooks(api, URL_BASE, setBooks, 2);

    // API --------------------------------------------------
    // LISTADO DE LIBROS
    getBooks(api, setBooks);

    // CREA UN LIBRO
    // createBooks(URL_BASE, {
    //   id: 20,
    //   title: "El Quinto Infierno 20",
    //   description: "Description del libro El Quinto Infierno 20"
    // });

    // ACTUALIZA UN LIBRO
    // updateBooks(URL_BASE, 9, {
    //   title: "El Quinto Infierno 9 fue editado",
    //   description: "Description del libro El Quinto Infierno 9 fue editado"
    // });

    // ELIMINA UN LIBRO
    // deleteBooks(URL_BASE, 2);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Layout>
        {contextHolder}
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <img
            className="logo"
            alt="logo"
            src={logo}
          />
          <MenuApp />
        </Sider>
        <Layout className="site-layout">
          <Header style={{ padding: 0, background: colorBgContainer }}>
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: () => setCollapsed(!collapsed),
            })}
          </Header>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
              background: colorBgContainer,
            }}
          >
            <Routes>
              <Route path='/' element={
                <Row>
                  {books && map(books, (book) => {
                    return (
                      <Col key={book.id} span={8}>
                        <CardBook
                          id={book.id}
                          title={book.title}
                          description={book.description}
                          srcImg={portada1}
                        />
                      </Col>
                    )
                  })}
                </Row>
              } />
              <Route path='/newBook' element={<FormBook />} />
              <Route path='about' element={<About />} />
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default App;






