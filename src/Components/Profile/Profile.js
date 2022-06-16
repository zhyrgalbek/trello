import styled from 'styled-components';
import TodoList from './TodoList';
import ProfileHeader from './ProfileHeader';
import Modal from './Modal/Modal';
import { useSelector } from 'react-redux';



function Profile() {
    const isModal = useSelector(state=>state.listItem.isModal);

    return (
        <ProfileBlock>
            {
                isModal && <Modal />
            }
            <ProfileHeader />
            <TodoList />
        </ProfileBlock>
    )
}
export default Profile;

const ProfileBlock = styled.div`
    background-color: #A98DB9;
    min-height: 100vh;
`;

