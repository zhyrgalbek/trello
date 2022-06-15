import styled from 'styled-components';
import TodoList from './TodoList';
import ProfileHeader from './ProfileHeader';



function Profile() {
    return (
        <ProfileBlock>
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

