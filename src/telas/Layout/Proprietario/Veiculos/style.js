import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        height: "100%",
        width: "100%",
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#FFFFFF"
    },
    txtTitulo:{
        fontSize:25,
        marginBottom:20,
        fontWeight:"bold"
    },

    itemList: {
        width: 170,
        height:180,
        alignSelf:"center",
        alignItems: "center",
        backgroundColor: "#5271FF",
        padding:5,
        margin:10
    },
    txtList: {
        fontSize:20,
        textAlign:"center",
        fontWeight:"bold"
    },
    imgList: {
        width: '80%', 
        height: 120
    },
    title: {
        marginTop:200,
        width:"100%",
        alignItems:"center"
    },
    imgTitle: {
        position:"absolute",
        width:35,
        height:35,
        right:40
    },
    touchBtn: {
        position:"absolute",
        width:35,
        height:35,
        right:20
    }
})
export default styles