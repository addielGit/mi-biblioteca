import React from 'react';
import {
  EyeOutlined,
  BookOutlined,
  PlusOutlined,
} from '@ant-design/icons';

import Icon from '@ant-design/icons';

import { Menu } from 'antd';
import { Link } from 'react-router-dom';

const MenuApp = () => {
  return (
    <Menu
      theme="dark"
      mode="inline"
      defaultSelectedKeys={['1']}
    >
      <Menu.Item key="1">
        <Icon component={BookOutlined} />
        <span>
          <Link to={'/'}>Catálogo</Link>
        </span>
      </Menu.Item>

      <Menu.Item key="2">
        <Icon component={PlusOutlined} />
        <span>
          <Link to={'/newBook'}>Añadir ejemplar</Link>
        </span>
      </Menu.Item>

      <Menu.Item key="3">
        <Icon component={EyeOutlined} />
        <span>
          <Link to={'/about'}>Acerca de</Link>
        </span>

      </Menu.Item>
    </Menu>
  );
};

export default MenuApp;






