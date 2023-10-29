import { View, Text, StyleSheet, StatusBar } from "react-native"
import styled from "styled-components/native";

import { UserCircle } from "phosphor-react-native";
interface HeaderProps {
    title: string;
    children: React.ReactNode;
}

const Container = styled.View`
    width: 100%;
    align-items: center;
    gap: 8px;
    background-color: transparent;
    padding-top: ${StatusBar.currentHeight + 8}px;
    display: flex;
    flex-direction: row;
`
export const Header = (props: HeaderProps) => {


    return (
        <Container>
            {props.children}
            <UserCircle size={64} />
        </Container>
    )
}
