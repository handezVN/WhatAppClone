import React from 'react'
import {FlatList, ImageBackground, Text} from 'react-native';
import {useRoute} from '@react-navigation/native';
import chatRoomData from '../Data/Chats';
import ChatMessage from '../components/ChatsMessage';
import InputBox from '../components/InputBox';
const ChatRoomScreen = () =>{

    const route = useRoute();

    return (
        <ImageBackground style={{width:'100%',height:'100%'}} source={require('../assets/images/BG.png')}>
        <FlatList
            data={chatRoomData.messages}
            renderItem={({item}) => <ChatMessage message={item} />}
            inverted
        />
            <InputBox/>
        </ImageBackground>
    )
}

export default ChatRoomScreen;