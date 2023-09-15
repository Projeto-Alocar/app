

import { Image} from 'react-native'
import styles from "./styles"

export default function ImageViewer({ placeholderImageSource, selectedImage }) {
  if(selectedImage){
    const imageSource = selectedImage !== null
      ? { uri: selectedImage }
      : placeholderImageSource;
  
    return <Image source={imageSource} style={styles.image} />;
  }else{
    return <Image source={require('../../../assets/img/add-image.png')} style={styles.image} />;
  }
    
  }
  