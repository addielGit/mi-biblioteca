import React from 'react';
import isEqual from "lodash/isEqual";
import { useForm } from 'react-hook-form';
import { Form, Input, Alert } from 'antd';

const FormBook = (props) => {

  const { initialValues = {}, handleOk } = props;

  // const [form] = Form.useForm();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    handleOk(data);
  }

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
      // form={form}
      // layout="vertical"
      // initialValues={initialValues}
      >
        <Form.Item label="Título" required >
          <input status={errors.title ? 'error' : ''} placeholder="Título" {...register('title', {
            required: true,
            maxLength: 10
          })} />
        </Form.Item>
        {
          isEqual(errors.title?.type, 'required') &&
          <div>
            <Alert message='Campo requerido' type="error" showIcon />
          </div>
        }
        {
          isEqual(errors.title?.type, 'maxLength') &&
          <div>
            <Alert message='El campo debe tener menos de 10 caracteres' type="error" showIcon />
          </div>
        }

        <Form.Item
          label="Descripción"
          required
        >
          <input status={errors.description ? 'error' : ''} placeholder="descripción" {...register('description', {
            required: true,
            maxLength: 10
          })} />
        </Form.Item>
        {
          isEqual(errors.description?.type, 'required') &&
          <div>
            <Alert message='Campo requerido' type="error" showIcon />
          </div>
        }
        {
          isEqual(errors.description?.type, 'maxLength') &&
          <div>
            <Alert message='El campo debe tener menos de 10 caracteres' type="error" showIcon />
          </div>
        }

        <Input type="submit" value="Enviar" />

      </form>
    </>
  );
};

export default FormBook;
