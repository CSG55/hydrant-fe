import React from 'react';
import HydrantSearchForm from './HydrantSearchForm';
import FormCard from './FormCard';

class SearchView extends React.Component {
   constructor() {
      super();
    console.log('Entered Search view')
   }

   render() {
    return (
    <FormCard title="User Registration">
        <HydrantSearchForm/>
    </FormCard>
    );
   }
}
export default SearchView;
