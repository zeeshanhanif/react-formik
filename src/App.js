import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserForm from './UserForm';
import UserFromWithFormik from './UserFromWithFormik';
import UserFromWithFormikValidation from './UserFromWithFormikValidation';
import UserFromWithFormikContext from './UserFromWithFormikContext';
import UserFormWithFormikMaterialUI from './UserFormWithFormikMaterialUI';

function App() {
  return (
    <div >
      <UserFormWithFormikMaterialUI />
    </div>
  );
}

export default App;
