import React from 'react';
import HydrantSearchForm from './HydrantSearchForm';
import FormCard from '../../common/FormCard';

class SearchView extends React.Component {
   constructor() {
      super();
    console.log('Entered Search view')
   }

   render() {
    return (
    <FormCard title="Hydrant Search">
        <HydrantSearchForm/>
    </FormCard>
    );
   }
}
export default SearchView;
