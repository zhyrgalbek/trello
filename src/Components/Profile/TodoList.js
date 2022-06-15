import styled from "styled-components";


function KolonkaAdd(){
    return (
        <KolonkaAddBlock>Добавить карточку</KolonkaAddBlock>
    )
}

const KolonkaAddBlock = styled.button`
    background-color: #fff;
    text-align: left;
    padding: 10px;
    border-radius: 5px;
    width: 100%;
    border: none;
    cursor: pointer;
`;

function KolonkaItem(){
    return (
        <KolonkaItemBlock>
            Hello world
        </KolonkaItemBlock>
    )
}

const KolonkaItemBlock = styled.div`
    background-color: #fff;
    text-align: left;
    padding: 10px;
    border-radius: 5px;
    margin-bottom: 10px;
`;

function TodoKolonka(props){
    return (
        <KolonkaBlock>
            <KolonkaHader>{props.header}</KolonkaHader>
            <KolonkaItem />
            <KolonkaAdd />
        </KolonkaBlock>
    )
}

const KolonkaHader = styled.h2`
    font-size: 1.2rem;
    color: #51617A;
    margin: 0;
    font-weight: bold;
    text-align: left;
    padding: 10px;
`;

const KolonkaBlock = styled.div`
    border-radius: 5px;
    padding: 8px;
    background-color: #EBECF0;
    /* height: 200px; */
    width: 300px;
`;

function TodoList(){
    return (
        <TodoListBlock>
            <TodoKolonka header="Hello world"/>
        </TodoListBlock>
    )
}
export default TodoList;

const TodoListBlock = styled.div`
    margin-top: 20px;
    margin-left: 20px;
`;