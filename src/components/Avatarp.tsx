import { Image, ImageProps, Text, View } from "react-native"

const variants = {
    size: {
        medium: { width: 120, height: 120, borderRadius: 18 },
        large: { width: 100, height: 100, borderRadius: 32 },
    },
    text: {
        medium: { fontSize: 24 },
        large: { fontSize: 32 },
    },
}
type Props ={
    name: string
    image?: ImageProps | null
    variant?: "medium" | "large"
}

export function Avatarp({ image, name, variant = "medium" }: Props) {
    return (
        <View>
            {image ? (
                <Image source={image} style={variants.size[variant]}/>
            ) : (
                <View>
                    <Text style={variants.text[variant]}>{name[0]}</Text>
                </View>
            )}
        </View>
    )
}