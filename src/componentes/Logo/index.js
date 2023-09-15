import { Image } from 'react-native'

export default function Logo(props){
    return(
        <Image
            source ={require('../../../assets/img/icon.png')}
            fadeDuration={0}
            style={{ width: props.w, height: props.h,marginTop: props.top, alignSelf: 'center' }}
        ></Image>
    )
}