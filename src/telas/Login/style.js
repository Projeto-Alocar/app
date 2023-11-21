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
        fontSize: 22,
        fontWeight:"bold",
    },
    Vtx:{
        marginTop:10,
        flexDirection:'row', 
        justifyContent:'space-between'
    },
    txInput:{
        width: 300,
        height: 50,
        backgroundColor: '#FFFFFF',
        borderColor: "#626262",
        borderRadius: 50,
        borderWidth: 2,
        padding: 10,
        fontSize: 20,
    },
    txCad:{
        //fontFamily: 'Arial',
        fontSize:13
    },
    txCadClick:{
        //fontFamily: 'Arial',
        fontWeight:"bold",
        fontSize:13
    },
    vPicker:{
        backgroundColor: '#FFFFFF',
        borderColor: "#626262",
        borderRadius: 50,
        borderWidth: 2,
        marginBottom: 30,
        width:200,
        alignSelf:"center"
    },
    errorMessage:{
        alignSelf:"flex-end",
        textAlign:"right",
        fontSize:12,
        color:"red",
        fontWeight:"bold"
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
    Vcadastro:{
        alignSelf:"center",
        position:"absolute",
        bottom:10
    }
});

export default styles