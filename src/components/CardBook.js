import React, { useState } from 'react';
import {
  EditOutlined,
  DeleteOutlined,
  ExclamationCircleFilled,
} from '@ant-design/icons';
import { Avatar, Card, Tooltip, Modal, } from 'antd';

import FormBook from './FormBook';
import { showDeleteConfirm } from '../utils';
import {
  updateBooks,
} from '../api/utils';


const { Meta } = Card;
const { confirm } = Modal;

const CardBook = (props) => {

  const { id, title, description, srcImg } = props;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = (data) => {
    setIsModalOpen(false);
    console.log("Data", data)

    updateBooks(id, data)
    // console.log(`Editado el ejemplar ${id}`);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Card
        style={{ maxWidth: '15rem', marginBottom: '1rem' }}
        cover={
          <img
            alt="example"
            src={srcImg}
          />
        }
        actions={[
          <Tooltip placement="top" title="Editar ejemplar">
            <EditOutlined key="edit" onClick={showModal} />
          </Tooltip>,
          <Tooltip placement="top" title="Eliminar ejemplar">
            <DeleteOutlined
              key="delete"
              onClick={() => showDeleteConfirm(confirm, <ExclamationCircleFilled />, id)}
            />
          </Tooltip>,
        ]}
      >
        <Meta
          avatar={<Avatar src={srcImg} />}
          title={title}
          description={description}
        />
      </Card>

      <Modal
        title={`Editar ejemplar ${title}`}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <FormBook
          initialValues={{}}
          handleOk={handleOk}
        />
      </Modal>
    </>
  );
};

export default CardBook;
