import React, { useState } from 'react';

function TodoForm() {
  const [value, setValue] = useState('');
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setValue('');
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        value=''
        placeholder='추가할 내용'
        onChange={e => setValue(e.target.value)}
      />
      <button>등록</button>
    </form>
  );
}

export default TodoForm;
