import * as Font from 'expo-font'

export async function boot() {
    await Font.loadAsync({
        'open-bold': require('../assets/font/OpenSans-Bold.ttf'),
        'open-reg': require('../assets/font/OpenSans-Regular.ttf')
    })
}