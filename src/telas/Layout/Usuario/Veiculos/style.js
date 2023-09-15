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
        marginTop: 200,
        marginBottom:20,
        fontWeight:"bold"
    },

    itemList: {
        width:170,
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
    }   
})
export default styles