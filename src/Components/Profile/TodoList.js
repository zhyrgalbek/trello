import styled from "styled-components";
import TodoKolonka from "./TodoKolonka";
import BtnAdd from "./BtnAdd";
import InputHeaderKolonka from "./InputHeaderKolonka";
import { useState } from "react";
import BtnExit from "./BtnExit";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { KolonkaListAction } from "../../store/reducers/KolonkaListSlices";

function TodoList() {
    const [showInput, setShowInput] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const dispatch = useDispatch();
    const store = useSelector(state=>state.listItem);
    // console.log(store);

    const inputHandleChange = (e)=>{
        setInputValue(e.target.value);
    }

    const handleShow = ()=>{
        if(showInput){
            dispatch(KolonkaListAction.addKolonka({
                id: Math.random(),
                header: inputValue,
                items: []
            }));
            setInputValue('');
        } else {
            setShowInput(true);
        }
    }

    return (
        <TodoListBlock>
            {
                store.map((elem, index)=>{
                    return <TodoKolonka key={elem.id} index={index} header={elem.header} />
                })
            }
            <BtnCont>
                {
                    showInput && <InputHeaderKolonka value={inputValue} onChange={inputHandleChange} />
                }
                <BtnBlock>
                    <BtnAdd onClick={handleShow} text="+ Добавить колонку" primary={true} />
                    {
                        showInput && <BtnExit />
                    }
                </BtnBlock>
            </BtnCont>
        </TodoListBlock>
    )
}
export default TodoList;

const BtnBlock = styled.div`
    display: flex;
`

const BtnCont = styled.div`
    /* border: 1px solid red; */
    padding: 5px;
    /* background-color: red; */
    display: flex;
    background-color: #EBECF0;
    flex-flow: column nowrap;
    width: 250px;
`;

const TodoListBlock = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: flex-start;
    /* border: 1px solid red; */
    margin-top: 20px;
    margin-left: 20px;
`;