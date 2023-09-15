import { StyleSheet} from "react-native"

const styles = StyleSheet.create({
    container: {
        height: "100%",
        width: "100%",
        alignItems: 'center',
        justifyContent: 'center',
    },
    tx:{
        fontSize: 20,
        fontWeight:"bold",
        paddingLeft:10
    },
    txInput:{
        width: 300,
        height: 50,
        backgroundColor: '#5271FF',
        borderRadius: 8,
        marginBottom: 0,
        padding: 10,
        fontSize: 20,
    },
    picker:{
        backgroundColor: '#5271FF',
        marginBottom: 30,
        marginTop: 20,
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
        marginBottom:10
    },
    errorMessage:{
        fontSize:12,
        color:"red",
        fontWeight:"bold",
        paddingLeft:10,
    },
    
});

export default styles