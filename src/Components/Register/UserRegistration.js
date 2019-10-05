import React from 'react';
import RegistrationForm from './RegistrationForm';
import FormCard from '../../common/FormCard';

class SearchView extends React.Component {
   constructor() {
      super();
    console.log('Entered Registration view')
   }

   render() {
    return (
    <FormCard title ="User Registration">
        <RegistrationForm/>
    </FormCard>
    );
   }
}
export default SearchView;
