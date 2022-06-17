import styled, { createGlobalStyle } from "styled-components";
import { ValidInput } from "../hooks/ValidInput";
import { FetchUser } from "../../store/reducers/LoginSlices";
import { useDispatch, useSelector } from 'react-redux';

const Authorization = (props) => {
    const dispatch = useDispatch()
    const {proverkaLogin, proLogin} = useSelector(state => state.user)
    const store = useSelector(state => state.user.bool)
    // console.log(store);
    const {
        value: emailValue,
        inputValue: emailInput,
        isValue: emailsValue,
        inputBlur: emailBlur,
        resetValue: emailReset

    } = ValidInput((value) => {
        const validEmailRegex = RegExp(
            /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
        );
        if (validEmailRegex.test(value)) {
            return false;
        } else {
            return true;
        }
    });



    const {
        value: passwordValue,
        inputValue: passwordInput,
        isValue: passwordIsValue,
        inputBlur: passwordBlur,
        resetValue: passwordReset

    } = ValidInput((value) => {
        if (value.trim().length < 5 || value.trim() === '') {
            return true;
        } else {
            return false;
        }
    });

    // console.log(passwordIsValue);



    const submitForm = (e) => {
        
        e.preventDefault();
        if (emailValue === '' || passwordValue === '') {
            emailBlur();
            passwordBlur();
            return;
            
        }
        dispatch(FetchUser({
            email: emailValue,
            password: passwordValue
        }))

        if (emailsValue || passwordIsValue || emailValue === '' || passwordValue === '') {
            return
        } else {
            emailReset();
            passwordReset();
        }
    }
    let ErrorLogin =<P>Аккаунтта с таким адресом электронной почты не существует</P>;
    let error = !proverkaLogin && proLogin



    return <section className="cont" onSubmit={submitForm}>
        <Div>
            <H1><Image src="https://cdn-icons-png.flaticon.com/512/6124/6124991.png"/>Trello</H1>

            <Cont>
                <Form>

                    <div>
                        <h1>Вход Trello</h1>
                        {error && ErrorLogin}
                        <div className={`${emailsValue ? "error" : ""}`}>
    
                        <Input onBlur={emailBlur} type="text" value={emailValue} onChange={emailInput} placeholder='Укажите адрес электронной почты...' />
                        {emailsValue && <P>Отсутствует адрес электронной почты</P>}
                        </div>
                        <div className={`${passwordIsValue ? "error" : ""}`}>

                            <Input onBlur={passwordBlur} type="password" value={passwordValue} onChange={passwordInput} placeholder='Введите пароль...'   />
                            {passwordIsValue && <P3>Пароль должен состоять максимум из 5 символов</P3>}
                        </div>

                    </div>
                    <div className='but'>
                        <Button>Войти</Button>
                    </div>
                    <div>
                        <P2>Или</P2>
                        <div>
                            <Div1> <Image src="https://play-lh.googleusercontent.com/aFWiT2lTa9CYBpyPjfgfNHd0r5puwKRGj2rHpdPTNrz2N9LXgN_MbLjePd1OTc0E8Rl1" />Войти через Google</Div1>
                            <Div1><Image src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAVFBMVEX////yUCJ/ugAApO//uQDxOgBytADyShT2j3v/+/T/tAAAnO74+/R7uACpz3T0+f50wPTxMgD1hW//rgDwHABnrwDxQwD4s6ejzGgAle0Amu5ovPNVGgEPAAABAklEQVR4nO3biQnCQBRF0bhkceKWxGjU/vsUHKzgMyDh3AIenAJeVUmSJEmSJEmSJEmSJEmSpH/tVocaxu/KcW5CzQWF9SZU22Vhsw3VEBISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhKuSDi0oe4/4SlUSeHYxXpk4XIOtRQUSlL5LtHyzCFYQeGzD/V6Z+CUQk0Fhf0u1jUL0z5UIiQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCRckXD97zxJkiRJkiRJkiRJkiRJkhTrA29gzkcc3y0uAAAAAElFTkSuQmCC" />Войти через Microsoft</Div1>
                            <Div1><Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTag8U9FQvV1NqKNnXBmfK_-oThg7p-_QDF-169BQtfskRHzqmCPSfx4p6Djk9v8pfrLDQ&usqp=CAU" />Войти через Apple</Div1>
                        </div>
                        <div>
                            <P1>Вход с помощью SSO</P1>
                        </div>
                        <hr/>
                        <div>
                            <P1>Не удается войти? ・ Зарегистрировать аккаунт</P1>
                        </div>

                    </div>
                    <Img />

                </Form>
               
                
            </Cont>

          <div>
            <P1>Политика конфиденциальности ・ Условия использования</P1>
            <Img1
             src="https://wac-cdn-2.atlassian.com/image/upload/f_auto,q_auto/dam/jcr:8a794ead-879b-460e-b6be-1189ee66ab66/atlassian_logo-1200x630.png"/>
             </div>

        </Div>
    </section>
}       


export default Authorization

const Cont = styled.div`
width: 100%;
display: flex;
justify-content: center;
height: auto;
`

const P = styled.p`
color: red;
margin: 0;

`

const DivError = styled.div`
border: 1px solid red;
`

const P3  = styled.p`
color: red;
font-size: 15px
`

const P1 = styled.p`
color: blue;
font-size: 13px;
padding: 0;
`

const Img = createGlobalStyle` 
body{
    min-height: 100vh;
    background: url('https://site.eventplanon.com/wp-content/uploads/2020/06/all-in-one-tools.png') 2% 90% no-repeat fixed,
                url('https://i.pinimg.com/originals/ef/d4/28/efd428cd0e9766626929d2ec12f04bcb.png') 98% 90% no-repeat fixed;
          
    background-repeat: no-repeat;
    background-size: 30%, 30%, 100%;
    background-color: #F9FAFC;
}
`


const Form = styled.form`
-webkit-box-shadow: 0px 0px 19px 5px rgba(64, 58, 58, 0.72);
box-shadow: 0px 0px 13px -4px black;
width: 400px;
padding: 40px 40px 0px 40px;
background-color: white;
`

const Div = styled.div`
display: flex;
align-items: center;
/* height: 100vh; */
justify-content: center;
flex-flow: row wrap;
`

const Input = styled.input`
    width: 100%;
    height: 50px;
    margin-top: 20px;
    font-family: inherit;
    padding: 0 20px 0 20px;
    &:focus{
    box-shadow: 0 0 0 0.2rem rgba(158, 158, 158, 0.25);
    outline: none;
    }
   &.error{
        border: 1px solid red;
    }
 
`


const Button = styled.button`
width: 100%;
background-color: #5AAC44;
margin-top: 20px;
height: 35px;
border: none;
border-radius: 3px;
color: white;
`


const Div1 = styled.div`
/* -webkit-box-shadow: 0px 0px 19px 5px rgba(220, 220, 220); */
box-shadow: 0px 0px 7px 2px rgba(220, 220, 220); 
width: 100%;
height: 40px;
text-align: center;
font-family: arial;
margin-top: 10px;
display: flex;
align-items: center;
justify-content: center;
font-family: inherit;
color: blue;

`

const Image = styled.img`
width: 25px;
height: 25px;

`

const Img1 = styled.img`
    width: 220px;
    height: 100px;  
`

const H1 = styled.h1`
width: 100%;
font-size: 34px;
padding-left: 5px;

`

const P2 = styled.p`
margin: 0;
padding: 0;
`