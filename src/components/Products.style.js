import { Dimensions, StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    container:{
        flex: 1,
        width:'100%',
        padding:10
    },
    cardContainer:{
        width:'100%',
        height:330,
        backgroundColor:'whitesmoke',
        borderRadius:10,
        justifyContent:'space-around',
        marginBottom:30,
        padding:6
        
    },
    productTitle:{
        fontSize:20,
        fontWeight:'bold'
    },
    productImage:{
        alignSelf:'center',
        height:Dimensions.get('window').height/4,
        width:160,
        borderRadius:8,
    },
    productPrice:{
        color:'grey'
    }
})
