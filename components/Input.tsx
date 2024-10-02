import { View, Text, TextInput, KeyboardTypeOptions } from "react-native";

interface InputProps {
    onChangeText: (name: string) => void;
    type: KeyboardTypeOptions;
    label: string;
    placeholder: string;
    value?: string;
}

export function Input(props: InputProps){
    return (
        <View>
            <Text>{props.label}</Text>
            <TextInput
                value={props.value}
                placeholder={props.placeholder}
                style={{
                    borderColor: "black",
                    borderWidth: 1,
                    padding: 10,
                    borderRadius: 8,
                }}
                keyboardType={props.type}
                onChangeText={props.onChangeText}
            />
        </View>
    );
}