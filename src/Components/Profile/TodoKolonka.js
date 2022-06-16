import styled from 'styled-components';
import BtnAdd from './BtnAdd';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { useState } from 'react';
import { KolonkaListAction } from '../../store/reducers/KolonkaListSlices';
import KolonkaItem from './KolonkaItem';
import KolonkaTextArea from './KolonkaTextArea';
import BtnExit from './BtnExit';

function TodoKolonka(props) {
    const dispatch = useDispatch();
    const store = useSelector(state => state.listItem[props.index].items);
    // console.log(store);
    const [textValue, setTextValue] = useState('');
    const [showTextArea, setShowTextArea] = useState(false);
    const addItem = () => {
        if (showTextArea === false) {
            setShowTextArea(true);
        } else {
            dispatch(KolonkaListAction.addItem({
                id: Math.random(),
                text: textValue,
                index: props.index
            }));
            setTextValue('');
            setShowTextArea(false);
        }
    }

    const prevItem = () => {
        setShowTextArea(false);
    }

    const textValueChangeHandler = (e) => {
        setTextValue(e.target.value);
    }


    return (
        <KolonkaBlock>
            <KolonkaHader>{props.header}</KolonkaHader>
            {
                store.map((item) => {
                    console.log(item);
                    return <KolonkaItem key={item.id} text={item.text} />
                })
            }
            {
                showTextArea && <KolonkaTextArea value={textValue} onChange={textValueChangeHandler} />
            }
            <KolonkaBtnBlock>
                <BtnAdd onClick={addItem} text="+ добавить карточку" />
                {
                    showTextArea && <BtnExit onClick={prevItem}></BtnExit>
                }
            </KolonkaBtnBlock>
        </KolonkaBlock>
    )
}

export default TodoKolonka;



const KolonkaBtnBlock = styled.div`
    /* border: 1px solid red; */
    display: flex;
    flex-flow: row nowrap;
`;

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
    margin-right: 10px;
    background-color: #EBECF0;
    /* height: 200px; */
    width: 300px;
`;