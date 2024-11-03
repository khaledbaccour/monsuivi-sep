import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';

export default function Title() {
    return (
        <View style={styles.cont}>
            <Image source={require('@/assets/images/Asset 1.png')} style={{ width: 100, height: 100 }} />
            <Text style={styles.title}>ScléroTrack</Text>
        </View>
        
    );
}

const styles = StyleSheet.create({
    cont: {

        flexDirection: 'row',
        fontSize: 24,
        fontWeight: 'bold',
        color: '#222',
        fontFamily: 'Garet',
        marginTop: 10,
        marginBottom: 20,
    },
    title:{
        marginTop: 30,
        fontSize: 26,
        marginBottom: 40,
        color: '#222',
        fontFamily: 'Lobster',
    }
}); 