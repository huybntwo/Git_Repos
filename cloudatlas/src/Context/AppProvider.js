import React from 'react'
import useFirestore from '../hooks/useFirestore';
import { AuthContext } from './AuthProvider';

export const AppContext = React.createContext();

//children is props
export default function AppProvider({children}) {
    //tạo một state isaddroomdisable ở đây, mức global để có thể tắt mở Modal tạo phòng
    const [isAddRoomVisible, setIsAddRoomVisible] = React.useState(false);
    const [isInviteMembersVisible, setIsInviteMembersVisible] = React.useState(false);
    const [selectedRoomId, setSelectedRoomId] = React.useState('');

    //return id of current user
    const {
        user:{
        uid
      }} = React.useContext(AuthContext);
      // console.log({uid})
    /**
     * collection 'rooms' have:
     * name:'room name'
     * description:'mo ta'
     * members:[uid1, uid2,...]
     */
    //các giá trị của đối số condition của hàm useFirestore là một tham chiếu
    //nên mỗi lần component RoomList này re-render lại thì sẽ làm thay đổi condition
    //từ đó sẽ làm useEffect bên trong useFirestore chạy lại
    //để tránh điều đó ta sử dụng useMemo(cho value) hoặc useCallback(cho function)

    const roomsCondition = React.useMemo(() => {
        return{
            fieldName: 'members',
            operator:'array-contains',
            compareValue: uid
        }
    },[uid])
    //các component khác muốn lấy danh sách rooms của một user đều phải sử dụng components useFirestore
    //điều này làm lãng phí vì useFirestore luôn luôn được cập nhật => cần một kho chung để lưu trữ các giá trị của rooms
    //=> useContextt
    const rooms = useFirestore('rooms',roomsCondition)
    console.log({rooms})

    //
    const selectedRoom = React.useMemo(
      () => 
      rooms.find((room) => room.id === selectedRoomId) || {}
    ,[rooms,selectedRoomId]);

    const usersCondition = React.useMemo(() => {
      return{
          fieldName: 'uid',
          operator:'in',
          compareValue: selectedRoom.members
        }
      },[selectedRoom.members])
    const members = useFirestore('users', usersCondition);



    


  return (
    //value is props
    <AppContext.Provider value={{
      members,
      rooms, 
      isAddRoomVisible, 
      setIsAddRoomVisible, 
      selectedRoomId, 
      setSelectedRoomId, 
      selectedRoom,
      isInviteMembersVisible, 
      setIsInviteMembersVisible,
      }}>
        {children}
    </AppContext.Provider>
  )
}
