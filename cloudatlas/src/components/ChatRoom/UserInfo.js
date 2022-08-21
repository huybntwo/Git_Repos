import React from 'react'
import { Button, Avatar, Typography} from 'antd'
import styled from 'styled-components'
import { auth,  } from '../../firebase/config'
import { signOut } from 'firebase/auth'
import  { AuthContext } from '../../Context/AuthProvider'

const WrapperStyled = styled.div`
    display:flex;
    justify-content: space-between;
    padding: 12px 16px;
    border-bottom: 1px solid rgba(82,38,83);

    .username{
        color:white;
        margin-left:5px;
    }
`

export default function UserInfo() {
  // React.useEffect(() => {
  //   const ref = collection(db, 'users');
  //   //snapshot la du lieu thuan tu firebase, ...doc.data() la du lieu sau khi da convert
  //   //moi doc la mot record
  //   onSnapshot(ref, (snapshot) => {
  //     const datas = snapshot.docs.map(doc => ({
  //        ...doc.data(), 
  //        id: doc.id 
  //     }))
  //     console.log({datas, snapshot, doc: snapshot.docs})
  //   })
    
  // },[])

  const {
    user:{
    displayName,
    photoURL
  }} = React.useContext(AuthContext);
  // console.log({displayName, photoURL})

  return (
    <WrapperStyled>
        <div>
            <Avatar src={photoURL}>{photoURL ? '': displayName?.charAt(0)?.toUpperCase()}</Avatar>
            <Typography.Text className='username'>{displayName}</Typography.Text>
        </div>
        <Button ghost onClick={() => signOut(auth)}>
          Log out
        </Button>
    </WrapperStyled>
  )
}
