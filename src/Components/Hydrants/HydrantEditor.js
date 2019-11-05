import React from 'react';
import HydrantCreateForm from './CreateHydrantForm';
import FormCard from '../../common/FormCard';

class HydrantEditor extends React.Component {
   constructor(props) {
      super(props);
   
      this.handleSubmit = this.handleSubmit.bind(this);
   }

   handleSubmit(hydrantSubmission){
      // An api call will be added here to submit these values
      console.log(hydrantSubmission);
      this.props.history.push('/hydrant/1'); // navigate to sample hydrant page
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
