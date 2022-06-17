import styled from 'styled-components';
import TodoList from './TodoList';
import ProfileHeader from './ProfileHeader';
import assets from '../../assets/login.jpg'



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
    background: url(${assets}) 0% 0%;
    background-size: 100%;
    min-height: 100vh;

`;

