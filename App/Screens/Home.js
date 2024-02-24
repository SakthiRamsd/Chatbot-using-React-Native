import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Home() {

    const myImg = require('./../Assets/Images/chatbot1.png')
    const navigation=useNavigation();

    return (
        <View>
            <Image source={myImg}
                style={{ marginTop: 50, height: 300, width: 300, borderBottomLeftRadius: 15, borderBottomRightRadius: 33, borderTopLeftRadius: 15, marginLeft: 50 }} />

            <View style={{ backgroundColor: '#66ccff', marginLeft: 10, height: 65, width: 200, justifyContent: 'center', borderBottomLeftRadius: 25, borderTopRightRadius: 10, borderBottomRightRadius: 10, marginTop: 40, borderWidth: 0.5,borderBottomWidth:2 }}>
                <Text style={{ textAlign: 'center', color: 'white', fontSize: 18, fontWeight: '500' }}>I'm Eleven</Text>
            </View>

            <View style={{ backgroundColor: '#66ccff', marginLeft: 150, height: 65, width: 200, justifyContent: 'center', borderBottomLeftRadius: 5, borderBottomRightRadius: 25, borderTopLeftRadius: 5, marginTop: 40, borderWidth: 0.5,borderBottomWidth:2  }}>
                <Text style={{ textAlign: 'center', color: 'white', fontSize: 18, fontWeight: '500' }}>How Can I Help You?</Text>
            </View>

            <TouchableOpacity onPress={()=>navigation.navigate('chat')} style={{ backgroundColor: '#66ccff', marginTop: 40, marginLeft: 10, height: 65, width: 200, justifyContent: 'center', borderBottomLeftRadius: 25, borderTopRightRadius: 5, borderBottomRightRadius: 5, borderWidth: 0.5,display:'flex',flexDirection:'row', alignItems:'center',gap:6 ,borderBottomWidth:2 }}>
            <Entypo name="chat" size={25} color="white" />
                <Text style={{ textAlign: 'center', color: 'white', fontSize: 18, fontWeight: '500' }}>Chat Here!</Text>
            </TouchableOpacity>
        </View>
    )
}

