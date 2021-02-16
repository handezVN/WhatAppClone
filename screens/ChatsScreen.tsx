import * as React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import ChatListItem from '../components/ChatListItems';
import ChatRooms from '../Data/ChatRooms';
export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        style={{width:'100%'}}
        data={ChatRooms}
        renderItem={({item}) =>  <ChatListItem chatRoom = {item}/>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
