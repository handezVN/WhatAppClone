import {StyleSheet} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const styles= StyleSheet.create({
   container:{
    flexDirection:'row',
    margin:10,
    shadowColor:'black',
    alignItems:'flex-end',
   },
   maincontainer:{
    flexDirection:'row',
    backgroundColor:'white',
    padding:10,
    borderRadius:25,
    marginRight:10,
    flex:1,
    shadowColor:'black',
    alignItems:'flex-end',
   },
   bottonContainer:{
       backgroundColor:'white',
       borderRadius:50,
       width:50,
       height:50,
       justifyContent:'center',
       alignItems:'center',
   },
   textInput:{
       flex:1,
       marginHorizontal:10,
   },
   icons:{
        marginHorizontal:5,
   }
});

export default styles;