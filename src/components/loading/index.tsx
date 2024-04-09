import { ActivityIndicator } from "react-native"
import { styles } from '@/styles/styles'

export function Loading() {
    return (
        <ActivityIndicator style={styles.loading}/>
    )
}