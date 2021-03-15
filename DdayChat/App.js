import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native';

export default class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.settingView}>
                    <TouchableOpacity>
                        <Image source={require('./icon/setting.png')}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.ddayView}>
                    <Text>
                        마감까지
                    </Text>
                    <Text>
                        D-123
                    </Text>
                    <Text>
                        2021년 11월 11일
                    </Text>
                </View>
                <View style={styles.chatView}>
                    <ScrollView>

                    </ScrollView>
                    <TextInput/>
                    <TouchableOpacity>
                        <Text>
                            전송
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    settingView: {
        flex: 1,
        backgroundColor: 'red',
    },
    ddayView: {
        flex: 6,
        backgroundColor: 'green',
    },
    chatView: {
        flex: 6,
        backgroundColor: 'blue',
    },
});