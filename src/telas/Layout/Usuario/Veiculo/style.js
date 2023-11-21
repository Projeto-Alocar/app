import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
        height: "100%",
        width: "100%",
        alignItems: 'center',
        backgroundColor: "#FFFFFF"
    },
    Vimg:{
        backgroundColor:"green",
        width:"100%",
        height:200,
        alignSelf:"center",
        alignItems:"center",
        position:"absolute",
        top:10
    },
    imgVert:{
        width:"100%",
        height:"100%",
    },
    txtInfo:{
        top:150,
        fontSize: 20,
        fontWeight: "bold",
    },
    txtTitulo:{
        top:215,
        fontSize:25,
        fontWeight:"bold",
        alignSelf:"flex-start",
        left:20,
    },
    Vinfo:{
        top:80,
        alignSelf:"flex-start",
        left:20
    },
    imgHori:{
        margin: 5,
        width:150,
        height:120,
        backgroundColor:'#4EAF50',
    },
    VimgHori:{
        marginTop:250,
        flexDirection:'row',
    },
    txBtn:{
        fontSize: 20,
        fontWeight:"bold"
    },
    btn:{
        width: 300,
        height: 50,
        backgroundColor: '#4EAF50',
        borderRadius: 50,
        alignItems:"center",
        justifyContent:"center",
        margin:15
    },
})
export default styles