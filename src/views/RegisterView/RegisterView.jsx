import RegisterForm from '../../components/RegisterForm';
import {
  Container,
  Title,
  RegisterFormContainer,
  WellcomeContainer,
} from './RegisterView.styled';
import { ToastContainer } from 'react-toastify';

export default function RegisterView() {
  return (
    <Container>
      <ToastContainer
        position={'bottom-center'}
        autoClose={4000}
        theme={'colored'}
      />
      <RegisterFormContainer>
        <WellcomeContainer>
          <Title>Сторінка реєстрації користувача</Title>
        </WellcomeContainer>
        <RegisterForm />
      </RegisterFormContainer>
    </Container>
  );
}
