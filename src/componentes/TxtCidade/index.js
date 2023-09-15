import React from 'react'
import { Text } from "react-native";
import styles from './style';

export default function LayoutUsuario(props){
    return(
        <Text style={styles.txCidade}>{props.cidade}</Text>
    )
};