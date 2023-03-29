import React, { useEffect } from 'react';
import { useState } from 'react';

import Filter from 'components/Filter';
import FormPhonebook from 'components/FormPhonebook';
import Contacts from 'components/Contacts';

import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectLoading } from 'redux/contacts/selectors';
import { fetchAddContact, fetchContacts } from 'redux/contacts/operations';

import style from './phonebook.module.scss';
import Loader from 'components/Loader';
import { selectIsLoggedIn } from 'redux/auth/selector';

function Phonebook() {
  const userContacts = useSelector(selectContacts);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const isLoading = useSelector(selectLoading);

  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  useEffect(() => {
    if (isLoggedIn) dispatch(fetchContacts());
  }, [dispatch, isLoggedIn]);

  const handleInputChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'phone':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const formOnSubmitBtn = event => {
    event.preventDefault();

    if (userContacts.find(elem => elem.name === name)) {
      alert(`${name} is already in contacts`);
      resetFormInput();
      return;
    }

    dispatch(
      fetchAddContact({
        name: name.trim(),
        number: number.trim(),
      })
    );
    resetFormInput();
  };

  const resetFormInput = () => {
    setName('');
    setNumber('');
  };
  return (
    <div className={style.wrapper}>
      <h2 className={style.title}>Add contact</h2>
      <FormPhonebook
        submit={formOnSubmitBtn}
        name={name}
        number={number}
        change={handleInputChange}
      />
      <div className={style.contacts}>
        <h2 className={style.title}>Contacts</h2>
        <Filter />
        {isLoading && <Loader />}
        <Contacts />
      </div>
    </div>
  );
}

export default Phonebook;
