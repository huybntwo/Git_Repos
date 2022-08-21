import React from 'react';
import styled from 'styled-components';
import { UserAddOutlined } from '@ant-design/icons';
import { Button, Tooltip, Avatar, Form, Input, Alert } from'antd'
import Message from './Message';
import { AppContext } from '../../Context/AppProvider';
import { addDocument } from '../../firebase/services';
import { AuthContext } from '../../Context/AuthProvider';
import useFirestore from '../../hooks/useFirestore';

const HeaderStyled = styled.div`
  display:flex;
  justify-content: space-between;
  height:56px;
  padding: 0 40px;
  align-items: center;
  border-bottom: 1px solid rgb(230,230,230);

  .header{
    &__info{
      display:flex;
      flex-direction: column;
      justify-content: center;
    }

    &__title{
      margin: 0;
      font-weight: bold;
    }

    $__description {
      font-size: 12px;
    }
  }

`;
//use syntax .div`` when tag element have not yet any style css
//use syntax .(Form) when this element already have style css and want to override some style css 
const ButtonGroupStyled = styled.div`
  display:flex;
  align-items: center
`;

const WrapperStyled = styled.div`
  height: 100vh;
`;
//56px is height of HeaderStyled
const ContentStyled = styled.div`
  height: calc(100% - 56px);
  display:flex;
  flex-direction: column;
  padding: 11px;
  justify-content: flex-end;
`;
//flex-grow have default = 0
const FormStyled = styled(Form)`
  display:flex;
  justify-content:space-between;
  align-items: center;
  padding: 2px 2px 2px 0;
  border: 1px solid rgb(230,230,230);
  border-radius: 2px;

  .ant-form-item{
    margin-bottom: 0;
    flex-grow: 1;
  }
`;
//overflow
const MessageListStyled = styled.div`
  max-height: 100%;
  overflow-y: auto;
`;
//search: 'Tun'
/**
 * 
 * db:collection'users'
 * {
 *  displayName: 'Tung Nguyen'
 *  keyWords: ['T', 'Tu', 'Tun','Tung'.....'N','Ng',...]
 * ...
 * }
 * 
 * 
 * 
 */
export default function ChatWindow() {

  const [inputValues, setInputValues] = React.useState('');
  const { selectedRoom, members, setIsInviteMembersVisible } = React.useContext(AppContext);
  const {user:{
    uid, photoURL, displayName
  }} = React.useContext(AuthContext)

  //Form of antd
  const [form] = Form.useForm();

  const inputRef = React.useRef(null);
  const messageListRef = React.useRef(null);

  const handleInputChange = (e) => {
    setInputValues(e.target.value)
  } 

  const handleOnSubmit = () => {
    addDocument('messages',{
      text: inputValues,
      uid,
      photoURL,
      roomId: selectedRoom.id,
      displayName
    })
    //
    form.resetFields(['messages']);
    // focus to input again after submit
    if (inputRef?.current) {
      setTimeout(() => {
        inputRef.current.focus();
      });
    }
  }

  const condition = React.useMemo(() => ({
      fieldName: 'roomId',
      operator: '==',
      compareValue: selectedRoom.id,
    }),[selectedRoom.id]);

  const messages = useFirestore('messages', condition);
  React.useEffect(() => {
    // scroll to bottom after message changed
    //messageListRef?.current <=> (messageListRef && messageListRef.length) ? messageListRef.current : {}
    if (messageListRef?.current) {
      messageListRef.current.scrollTop =
        messageListRef.current.scrollHeight + 50;
    }
  }, [messages]);

  return (
    <WrapperStyled>
      {selectedRoom.id ? (
        <>
        <HeaderStyled>
          <div className='header__info'>
            <p className='header__title'>{selectedRoom.name}</p>
            <span className='header_description'>{selectedRoom.description}</span>
          </div>
          <ButtonGroupStyled>
            <Button type='text' icon={<UserAddOutlined/>} onClick={() => setIsInviteMembersVisible(true)}>Invite+</Button>
            <Avatar.Group size='small' maxCount={5}>
              {
                members.map((member => 
                <Tooltip title={member.displayName} key={member.id}>
                    <Avatar src={member.photoURL}>{members.photoURL?'':member.displayName?.charAt(0)?.toUpperCase()}</Avatar>
                 </Tooltip>))
              }
            </Avatar.Group>
          </ButtonGroupStyled>
        </HeaderStyled>
        <ContentStyled>
          <MessageListStyled ref={messageListRef}>
              {
                messages.map(mes => <Message
                  key={mes.id}
                  text={mes.text}
                  photoURL={mes.photoURL}
                  displayName={mes.displayName}
                  createdAt={mes.createdAt}
                />)
              }
          </MessageListStyled>
          <FormStyled form={form}>
            <Form.Item name='messages'>
              <Input
              ref={inputRef}
              onChange={handleInputChange}
              onPressEnter={handleOnSubmit}
              bordered={false} 
              autoComplete="off" 
              placeholder='Enter your text...'
              />
            </Form.Item>
            <Button type='primary' onClick={handleOnSubmit}>Send</Button>
          </FormStyled>
        </ContentStyled>
        </>
      ): 
      <Alert
      message='Please choose room'
      type='info'
      showIcon
      style={{ margin: 5 }}
      closable
    />
      }
    </WrapperStyled>
  )
}
