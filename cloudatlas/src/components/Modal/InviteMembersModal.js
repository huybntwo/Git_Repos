import React from 'react'
import { Form, Modal, Spin, Select, Avatar} from 'antd'
import { AppContext } from '../../Context/AppProvider'
import { AuthContext } from '../../Context/AuthProvider';
import { debounce } from 'lodash';
import { db } from '../../firebase/config';
import {
    collection,
    query,
    orderBy,
    where,
    limit,
    getDocs,
    doc,
    updateDoc,
  } from "firebase/firestore";


//debounce tức là tạo độ trễ khi người dùng nhập từ khoá tìm kiếm,
//tránh việc call API nhiều lần
//truyen mot API vao Selct, khi cos su thay doi API se lay ra danh sach cac user tuong ung
//voi noi dung ta nhap o o tim kiem

function DebounceSelect({fetchOptions, debounceTimeout = 300,...props }){
    //flag to check if get data from firebase
    const [fetching, setFetching] = React.useState(false);
    const [options, setOptions] = React.useState([]);

    //call API
    const debounceFetcher =  React.useMemo(() => {
        const loadOptions = (value) => {
            //truoc khi load option moi thi reset option cu
            setOptions([]);
            setFetching(true);
            //Promises
            fetchOptions(value, props.curMembers).then(newOptions => {
                setOptions(newOptions);
                setFetching(false);
                // console.log({newOptions})
            })
            
        }

        return debounce(loadOptions, debounceTimeout)
    },[debounceTimeout, fetchOptions])


    return (
        <Select
            labelInValue
            filterOption={false}
            onSearch={debounceFetcher}
            notFoundContent={ fetching ? <Spin size='small'/> : null}
            {...props}
        >
            {
                //option[{label, value, photoURL}]
                //use map() then need key
                options.map((opt) => (
                    <Select.Option key={opt.value} value={opt.value} title={opt.label}>
                        <Avatar size='small' src={opt.photoURL}>
                            {opt.photoURL? '': opt.label?.charAt(0)?.toUpperCase()}
                        </Avatar>
                        {`${opt.label}`}
                    </Select.Option>
                ))
            }
        </Select>
    )

}
//chi can lay cac user chua co trong room
async function fetchUserList(search, curMembers){
    const q = query(collection(db, 'users'),where('keywords','array-contains', search),orderBy('displayName'), limit(20))
    const querySnapshot = await getDocs(q);
    return (
            querySnapshot.docs.map(doc => ({
                label: doc.data().displayName,
                value: doc.data().uid,
                photoURL: doc.data().photoURL
            })).filter(opt => !curMembers.includes(opt.value))
    );
}


export default function InviteMembersModal() {
    const {isInviteMembersVisible, setIsInviteMembersVisible, selectedRoomId, selectedRoom} = React.useContext(AppContext);
    const [value, setValue] = React.useState([]);
    //Form of antd
    const [form] = Form.useForm();

    const handleOk = async () => {
        //reset form
        form.resetFields();

        //update members in current rooms
        const roomRef = doc(db,'rooms',selectedRoomId);
        await updateDoc(roomRef,{
            members:[...selectedRoom.members, ...value.map(val => val.value)]
        })

        setIsInviteMembersVisible(false);
    }

    const handleCancel = () => {


         //reset form
         form.resetFields();
         setIsInviteMembersVisible(false)
    }

    console.log({value})


  return (
    <div>
        <Modal
            title='Create room'
            visible={isInviteMembersVisible}
            onOk={handleOk}
            onCancel={handleCancel}
        >
            <Form form={form} layout='vertical'>
                <DebounceSelect
                    mode='multiple'
                    label='Name of members'
                    value={value}
                    placeholder='Enter name of member'
                    fetchOptions={fetchUserList}
                    onChange={newValue => setValue(newValue)}
                    style={{width: '100%'}}
                    curMembers={selectedRoom.members}
                />
            </Form>
        </Modal>
    </div>
  )
}
