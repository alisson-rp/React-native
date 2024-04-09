import { styles } from "@/styles/styles";
import { theme } from "@/theme";
import { View, TextInput, ViewProps, TextInputProps} from "react-native"


function Inputp({ children }: ViewProps) {
    return <View style={styles.input}>{children}</View>
}

function Field({secureTextEntry, ...rest}: TextInputProps) {
    return <TextInput 
    style={styles.textInput}
    secureTextEntry={secureTextEntry}
    placeholderTextColor={theme.colors.green_500}
    {...rest}
    />
}

Inputp.Field = Field;
export { Inputp }