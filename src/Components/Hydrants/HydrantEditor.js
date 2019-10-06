import React from 'react';
import HydrantCreateForm from './CreateHydrantForm';
import FormCard from '../../common/FormCard';

class HydrantEditor extends React.Component {
   constructor(props) {
      super(props);
      console.log('Entered HydrantEditor view')
      this.handleSubmit = this.handleSubmit.bind(this);
   }

   handleSubmit(hydrantSubmission){
      // An api call will be added here to submit these values
      console.log(hydrantSubmission);
      this.props.history.push('/hydrant/1');
   }
   render() {
      return (
      <FormCard title ="Create Hydrant">
         <HydrantCreateForm handleSubmit={this.handleSubmit} />
      </FormCard>
      );
   }
}
export default HydrantEditor;
