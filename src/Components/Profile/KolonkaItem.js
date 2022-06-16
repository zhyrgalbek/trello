import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { KolonkaListAction } from '../../store/reducers/KolonkaListSlices';
import BtnAdd from './BtnAdd';

function KolonkaItem(props) {
    const dispatch = useDispatch();

    const onBoolHandler = () => {
        dispatch(KolonkaListAction.isModaBool({
            text: props.text,
            itemIndex: props.index,
            kolonkaIndex: props.kolonkaIndex
        }));
    }

    return (
        <KolonkaItemBlock>
            {props.text}
            <BtnAdd text="..." primary onClick={onBoolHandler}  />
        </KolonkaItemBlock>
    )
}

export default KolonkaItem;

const KolonkaItemBlock = styled.div`
    background-color: #fff;
    text-align: left;
    padding: 10px;
    border-radius: 5px;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;