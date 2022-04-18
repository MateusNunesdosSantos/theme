import { useTheme } from '../../context'
import { Container, Nav } from './styles'

export function Header() {
    const { toggleTheme, theme } = useTheme()

    return (
        <Container>
            <Nav>
                <h1>Home</h1>
                <button onClick={toggleTheme}> Tema atual {theme.title} </button>
            </Nav>
        </Container>
    )
}