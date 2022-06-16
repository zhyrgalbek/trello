import styled from 'styled-components';

import KolonkaTextArea from '../KolonkaTextArea';

function ModalBody(){
    return (
        <ModalBodyContent>
            <h2>Hello world</h2>
            <KolonkaTextArea />
        </ModalBodyContent>
    )
}

const ModalBodyContent = styled.div`
    /* border: 1px solid red; */
    width: 400px;
    height: 400px;
    margin: 0 auto;
    /* color: #fff; */
    /* background-color: #fff; */
`;


function Modal(){
    return (
        <ModalBlock>
            <ModalBody />
        </ModalBlock>
    )
}

export default Modal;

const ModalBlock = styled.div`
    display: flex;
    align-items: center;
    position: fixed;
    background-color: rgba(0, 0, 0, 0.7);
    width: 100vw;
    height: 100vh;
    z-index: 10;
`;