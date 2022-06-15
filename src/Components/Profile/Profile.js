import styled, { css } from 'styled-components';
import TodoList from './TodoList';

let arr = [
    'Рабочие пространства',
    'Недавние ',
    'В Избранном',
    'Шаблоны',
    'создать'
];

function SearchProfile() {
    return (
        <SeachBlock>
            <SeachInput type="text" placeholder='Search' />
        </SeachBlock>
    )
}

const SeachBlock = styled.div`
    /* border: 1px solid red; */
    display: flex;
    justify-content: center;
    align-items: center;
`

const SeachInput = styled.input`
    background-color: #848788;
    outline: none;
    border: 1px solid #fff;
    border-radius: 5px;
    padding: 0.5rem 1.3rem;
    color: #fff;
    &:focus{
        background-color: #959799;
    }
    &::placeholder{
        color: #fff;
    }
`;



function Profile() {
    return (
        <ProfileBlock>
            <ProfileHeader>
                <ProfileUl>
                    {
                        arr.map((elem, index) => {
                            if (index === 0) {
                                return <ProfileItem first={true} key={index}>{elem}</ProfileItem>
                            }
                            return <ProfileItem key={index}>{elem}</ProfileItem>
                        })
                    }
                </ProfileUl>
                <ProfileHeaderRight>
                    <SearchProfile />
                    <ProfileExit>Выйти</ProfileExit>
                </ProfileHeaderRight>
            </ProfileHeader>
            <TodoList />
        </ProfileBlock>
    )
}
export default Profile;

const ProfileBlock = styled.div`
    background-color: #A98DB9;
    min-height: 100vh;
`

const ProfileHeaderRight = styled.div`
    display: flex;
`;

const ProfileExit = styled.button`
    color: #fff;
    background-color: green;
    border: 1px solid green;
    cursor: pointer;
    margin-left: 50px;
`

const ProfileItem = styled.li`
    margin-left: 20px;
    /* border: 1px solid red; */
    padding: 8px 15px;
    border-radius: 6px;
    cursor: pointer;
    color: #fff;
    &:hover{
        background-color: #848788;
    }
    ${(props) => props.first && css`
        margin-left: 0;
    `}
`

const ProfileUl = styled.ul`
    margin: 0;
    list-style: none;
    display: flex;
    /* border: 1px solid red; */
`

const ProfileHeader = styled.header`
    /* border: 1px solid red; */
    /* height: 50px; */
    background-color: #4F5355;
    padding: 5px 0;
    padding-right: 40px;
    display: flex;
    justify-content: space-between;
`;
