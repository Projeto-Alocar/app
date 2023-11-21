import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        height: "100%",
        width: "100%",
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#FFFFFF"
    },
    tx:{
        fontSize: 20,
        fontWeight:"bold",
        paddingLeft:10
    },
    txtTitulo:{
        fontSize:25,
        marginBottom:20,
        fontWeight:"bold"
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
        margin:5
    },
    numInput:{
        margin:5
    },
    errorMessage:{
        position:'absolute',
        fontSize:12,
        color:"red",
        fontWeight:"bold",
        alignSelf:'flex-end',
        marginTop:10,
        right:10
    },
})
export default styles