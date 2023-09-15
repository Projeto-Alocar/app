import { LinearGradient } from 'expo-linear-gradient'
import styles from './style'

export default function BackgroundGradient(){
    return(
        <LinearGradient
            style={styles.background}
            colors={['#004AAD','#CB6CE6']}>
        </LinearGradient>
    )
}
