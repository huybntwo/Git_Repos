import React from 'react'
import {Row, Col, Button, Typography} from 'antd';
import { auth } from '../../firebase/config'
import { signInWithPopup, FacebookAuthProvider } from 'firebase/auth';
import { addDocument, generateKeywords } from '../../firebase/services'



const {Title} = Typography;
//in antd, grid have 24 col
//grid in antd based on flexbox
//chung ta muon su dung cac thong tin cua users cho toan bo cac components khac
//thi chung ta su dung tinh nang contextAPI, giup cho chung ta khong can truyen du lieu tu components cha cho components con thong qua props
//chi can khai bao o provider, thi cac components con se truy xuat duoc cac du lieu chung ta truyen vao trong provider nay
const fbProvider = new FacebookAuthProvider();


export default function Login() {
    
    const handleFbLogin = async() => {
        const {_tokenResponse, user} = await signInWithPopup(auth,fbProvider);
        //({data}) to have title is data
        // console.log({_tokenResponse, user});
        if(_tokenResponse.isNewUser){
                addDocument('users', {
                    displayName: user.displayName,
                    email: user.email,
                    photoURL: user.photoURL,
                    uid:user.uid,
                    providerId: user.providerId,
                    keywords: generateKeywords(user.displayName)
                })
        }
    };


  return (
    <div>
        <Row justify='center' style={{ height: 800}}>
            <Col span={8}>
                <Title style={{ textAlign:'center'}} level={3}>
                    Fun Chat
                </Title>
                <Button style={{width: '100%', marginBottom: 5}}>
                    Log in by Google
                </Button>
                <Button style={{width: '100%'}} onClick={handleFbLogin}>
                    Log in by Facebook
                </Button>
            </Col>
        </Row>
    </div>
  )
}
