import { selectFilteredContacts } from 'redux/contacts/selectors';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import style from './contacts.module.scss';
import { fetchRemoveContacts } from 'redux/contacts/operations';

function Contacts() {
  const dispatch = useDispatch();
  const userContactsFilter = useSelector(selectFilteredContacts);

  return (
    <ul className={style.list}>
      {userContactsFilter.map(({ name, number, id }) => {
        return (
          <li key={id} id={id} className={style.item}>
            <span className={style.name}>{name}</span>
            <span className={style.phone}>{number}</span>
            <button
              className={style.btn}
              type="button"
              onClick={() => {
                dispatch(fetchRemoveContacts(id));
              }}
              id={id}
            >
              X
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default Contacts;
