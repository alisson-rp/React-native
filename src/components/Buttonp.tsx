import React from "react";
import { Text, TouchableOpacity } from "react-native";

import { styles } from "@/styles/styles"

interface ButtonProps
  extends React.ComponentPropsWithoutRef<typeof TouchableOpacity>{
  label: string;
  labelClasses?: string;
}

const Buttonp = ({ label,
    labelClasses,
    className,
    ...props }: ButtonProps) => {
    return(
        <TouchableOpacity style={styles.button}{...props}>
            <Text style={styles.textButton}>{label}</Text>
        </TouchableOpacity>
    )
}

export default Buttonp