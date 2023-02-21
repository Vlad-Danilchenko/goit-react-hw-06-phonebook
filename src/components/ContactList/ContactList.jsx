import { ContactUl, ContactLi } from './ContactList.styled';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { getContacts, getFilter } from 'redux/selectors';
import { useSelector } from 'react-redux';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filterContacts = useSelector(getFilter);
  const getVisibleContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterContacts.toLowerCase())
    );
  };

  // console.log(getVisibleContacts());
  return (
    <ContactUl>
      {getVisibleContacts().map(({ id, name, number }) => (
        <ContactLi key={id}>
          <ContactItem id={id} name={name} number={number} />
        </ContactLi>
      ))}
    </ContactUl>
  );
};
