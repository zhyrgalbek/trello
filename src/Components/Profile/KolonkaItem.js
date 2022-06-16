import styled from 'styled-components';

function KolonkaItem(props) {
    return (
        <KolonkaItemBlock>
            {props.text}
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
`;