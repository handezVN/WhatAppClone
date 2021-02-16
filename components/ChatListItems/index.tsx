import React from "react";
import styles from "./style";
import { Image, Text, View , TouchableWithoutFeedback} from "react-native";
import { ChatRoom } from "../../types";
import {useNavigation} from '@react-navigation/native'
export type ChartListItemProps = {
  chatRoom: ChatRoom;
};
var dateFormat = require('dateformat');
const ChartListItem = (props: ChartListItemProps) => {
  const { chatRoom } = props;
  const user = chatRoom.users[1];
  var day=dateFormat(new Date(chatRoom.lastMessage.createdAt), "dd/mm/yyyy");

  const navigation = useNavigation();

  const onclick = () =>{
    navigation.navigate('ChatRoom',{
              id: chatRoom.id,
              name: user.name,
            
            });
  }
  return (
    <TouchableWithoutFeedback onPress={onclick}>
    <View style={styles.container}>
      <View style={styles.leftcontainer}>
        <Image
          style={styles.avarta}
          source={{
            uri: user.imageUri,
          }}
        />
        <View style={styles.midcontainer}>
          <Text style={styles.username}>{user.name}</Text>
          <Text numberOfLines={1} style={styles.lastMessage}>{chatRoom.lastMessage.content}</Text>
        </View>
      </View>
          
      <Text style={styles.time}>
           {day}
      </Text>
      
    </View>
    </TouchableWithoutFeedback>
  );
};

export default ChartListItem;
