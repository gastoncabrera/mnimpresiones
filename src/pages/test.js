import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { useForm } from 'react-hook-form';

export default function Test() {
  const [indexes, setIndexes] = useState([]);
  const [counter, setCounter] = useState(0);
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const addFriend = () => {
    setIndexes((a) => [...a, counter]);
    setCounter((prevCounter) => prevCounter + 1);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {indexes.map((index) => {
        const fieldName = `friends[${index}]`;
        return (
          <fieldset name={fieldName} key={fieldName}>
            <label>
              First Name {index}:
              <input
                type="text"
                {...register(`${fieldName}.firstName`)}

                // name={`${fieldName}.firstName`}
                // ref={register}
              />
            </label>

            <label>
              Last Name {index}:
              <input
                type="text"
                {...register(`${fieldName}.lastName`)}
                // name={`${fieldName}.lastName`}
                // ref={register}
              />
            </label>
          </fieldset>
        );
      })}

      <button type="button" onClick={addFriend}>
        Add Friend
      </button>
      <input type="submit" />
    </form>
  );
}
