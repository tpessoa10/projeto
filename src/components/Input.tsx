import { Formik } from "formik"
import { FormikValues, FormikHelpers } from "formik/dist/types"
import { NativeSyntheticEvent, Text, TextInputChangeEventData, TextInputEndEditingEventData, TextInputSubmitEditingEventData } from "react-native"
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view"
import styled from "styled-components/native"

interface InputProps{
    texto:string
    onChange?: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void
    value?: string
    submitEditing?: (e:NativeSyntheticEvent<TextInputSubmitEditingEventData>) => void
    onChangeText?: (e: string) => void
    onBlur?: () => void
    onEndEditing?:(e: NativeSyntheticEvent<TextInputEndEditingEventData>) => void
    defaultValue?: string
}

    const CampoInput = styled.TextInput`
        height: 40px;
        border-color: gray;
        border-width: 1px;
        border-radius: 5px;
        margin-bottom: 10px;
        margin-bottom: 20px;
    `
export const Input = ({texto, value, onChange, submitEditing, onEndEditing, onChangeText, onBlur, defaultValue}:InputProps) => {


    return (
        <>
        <Text>{texto}</Text>
        {texto === 'Senha' ? <CampoInput onChangeText={onChangeText} value={value} onSubmitEditing={submitEditing} secureTextEntry/> : <CampoInput value={value} 
        onSubmitEditing={submitEditing} onChangeText={onChangeText}/>}
        </>
    )
}