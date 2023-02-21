import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';
import { Container, CardContainer, MainTite, Title } from './App.styled';

export function App() {
  return (
    <>
      <MainTite>Phonebook</MainTite>
      <Container>
        <CardContainer>
          <ContactForm />
        </CardContainer>
        <CardContainer>
          <Title>Contacts</Title>
          <Filter />
          <ContactList />
        </CardContainer>
      </Container>
    </>
  );
}
