import * as React from 'react';
import {View, TouchableOpacity, Text, Image} from 'react-native';
import Translatescreen from './translatescreen';

export default class Welcomescreen extends React.Component{
    render(){
        return(
            <View>
                <Image
                    style ={{marginTop: 300, alignSelf: 'center'}}
                    source = {require('../logo.png')}
                />
                
            </View>
        )
    }
}
