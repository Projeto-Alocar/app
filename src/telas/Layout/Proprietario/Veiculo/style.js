import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
        height: "100%",
        width: "100%",
        alignItems: 'center',
        justifyContent: 'center',
    },
    txtTitulo:{
        fontSize:25,
        fontWeight:"bold"
    },
    title: {
        marginTop:0,
        width:"100%",
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"row",
        margin:20
    },
    imgTitle: {
        width:35,
        height:35,
    },
    touchBtn: {
        margin:5
    },
    icons: {
        position:"absolute",
        flexDirection:"row",
        right:10
    },
    imgVert:{
        width:300,
        height:230,
        backgroundColor:'red'
    },
    imgHori:{
        margin: 5,
        width:140,
        height:120,
        backgroundColor:'red',
        marginBottom:20
    },
    txtInfo:{
        fontSize: 20,
        fontWeight: "bold",

    },
    txBtn:{
        fontSize: 20,
        fontWeight:"bold"
    },
    btn:{
        width: 300,
        height: 50,
        backgroundColor: '#5271FF',
        borderRadius: 50,
        alignItems:"center",
        justifyContent:"center",
        margin:15
    },
    
})
export default styles