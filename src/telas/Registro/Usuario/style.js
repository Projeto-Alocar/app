import { StyleSheet} from "react-native"

const styles = StyleSheet.create({
    container: {
        height: "100%",
        width: "100%",
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#FFFFFF"
    },
    tx:{
        fontSize: 18,
        fontWeight:"bold"
    },
    txInput:{
        width: 300,
        height: 45,
        backgroundColor: '#FFFFFF',
        borderColor: "#626262",
        borderRadius: 50,
        borderWidth: 2,
        padding: 10,
        fontSize: 20,
    },
    Vtx:{
        flexDirection:'row', 
        justifyContent:'space-between'
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
        width: 150,
        height: 50,
        backgroundColor: '#4EAF50',
        borderRadius: 50,
        alignItems:"center",
        justifyContent:"center",
        alignSelf:"center"
    },
    errorMessage:{
        alignSelf:"flex-end",
        textAlign:"right",
        fontSize:12,
        color:"red",
        fontWeight:"bold"
    },
    
});

export default styles