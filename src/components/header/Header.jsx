import css from "./Header.module.css"


const Header = (props) => {
    return (
       <header className={css.wrapper}>
            <h1>Todos ({props.compleatTodos} / {props.todos})</h1>
       </header>
    )
}

export default Header;