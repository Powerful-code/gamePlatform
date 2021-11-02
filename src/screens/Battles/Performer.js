import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {TextComponent} from './../../components/atoms'
import swordBg from './../../assets/img/swordbg.png'
import { Product } from '../../components/templates';
const Performer = ({navigation}) => {
    return (
        <View style={{flex: 1, backgroundColor: '#121B24'}}>
            {/* <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Image source={swordBg}/>
                <TextComponent style={{fontSize: 16, color: '#414950', marginTop: 50 }} text="Вы пока не участвовали в сражениях"/>
            </View> */}
            <Product navigation={navigation} navigationLink="MyBattlesDetails" status/>
            <Product navigation={navigation} navigationLink="MyBattlesDetails" status/>
        </View>
    );
}

const styles = StyleSheet.create({})

export default Performer;
