import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { changeTheme } from '@modules/header/slice'
import { RootState } from '@redux/store'
import { AppHeader } from '@modules/header'
import { CardsList } from '@modules/cards-list/cards-list'
import styled from 'styled-components'

const ToDo = () => {
    const dispatch = useDispatch()

    const theme = useSelector(
        (state: RootState) => state.headerSlice.themeColor,
    )
    const { uid } = useSelector((state: RootState) => state.userSlice)

    React.useEffect(() => {
        dispatch(changeTheme(localStorage.getItem('theme') || ''))
    }, [])

    if (!uid) return <Navigate to="/todo-v2/" replace />

    return (
        <Container bg={theme}>
            <AppHeader />
            <CardsList />
        </Container>
    )
}

export default ToDo

const Container = styled.div<{ bg: string }>`
    width: 100vw;
    height: 100vh;
    background-color: ${(props) => props.bg};
`
