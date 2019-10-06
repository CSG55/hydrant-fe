import React from 'react';
import HydrantCreateForm from './CreateHydrantForm';
import FormCard from '../../common/FormCard';

class HydrantEditor extends React.Component {
   constructor() {
      super();
    console.log('Entered HydrantEditor view')
   }

   render() {
    return (
    <FormCard title ="Create Hydrant">
        <HydrantCreateForm/>
    </FormCard>
    );
   }
}
export default HydrantEditor;
