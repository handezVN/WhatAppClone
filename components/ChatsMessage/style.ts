import {StyleSheet} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const styles= StyleSheet.create({
    container:{
        padding:10,
    },
    messageBox:{
        marginRight:50,
        borderRadius:10,
        padding:10,
    },
    name:{
        color: Colors.light.tint,
        fontWeight:"bold",
    },
    message:{

    },
    time:{
        alignSelf:'flex-end',
        color:'gray',
    },
});

export default styles;