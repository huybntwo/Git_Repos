import React from 'react'
import { Form, Modal, Input} from 'antd'
import { AppContext } from '../../Context/AppProvider'
import { addDocument } from '../../firebase/services';
import { AuthContext } from '../../Context/AuthProvider';


export default function AddRoomModal() {
    const {isAddRoomVisible, setIsAddRoomVisible} = React.useContext(AppContext);
    const {user: {uid}} = React.useContext(AuthContext)
    //Form of antd
    const [form] = Form.useForm();

    const handleOk = () => {

        //add new room to firestore

        console.log({formData: form.getFieldValue()});
        addDocument('rooms',{...form.getFieldValue(), members:[uid]})
        setIsAddRoomVisible(false)
        //reset form
        form.resetFields();
    }

    const handleCancel = () => {


         //reset form
         form.resetFields();
        setIsAddRoomVisible(false)
    }


  return (
    <div>
        <Modal
            title='Create room'
            visible={isAddRoomVisible}
            onOk={handleOk}
            onCancel={handleCancel}
        >
            <Form form={form} layout='vertical'>
                <Form.Item label='Name Room' name='name' >
                    <Input placeholder='Enter name room' />
                </Form.Item>
                <Form.Item label='About' name='description' >
                    <Input.TextArea placeholder='Enter about...' />
                </Form.Item>
            </Form>
        </Modal>
    </div>
  )
}
