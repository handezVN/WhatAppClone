import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        width:"100%",
        justifyContent:'space-between',
        padding:10,
      },
      avarta: {
        width: 60,
        height: 60,
        marginRight:10,
        borderRadius:50,
      },
      leftcontainer:{
        flexDirection:'row',
      },
      username:{
          fontWeight:'bold',
          fontSize:16,
      },
      lastMessage:{
        fontSize:16,
        color:'gray',
      }
      , time:{
        fontSize:16,
        color:'gray',
      },
      midcontainer:{
          justifyContent:'space-around',
      }

});

export default styles;