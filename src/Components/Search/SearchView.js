import React from 'react';
import HydrantSearchForm from './HydrantSearchForm';
import HydrantResultsPage from './HydrantResultsPage';
import FormCard from '../../common/FormCard';

class SearchView extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         showResults: false,
      }
    console.log('Entered Search view')

   this.handleSubmit = this.handleSubmit.bind(this);
   }

   handleSubmit(searchParams) {
      console.log(searchParams);
      // Api call will go here, return results
      console.log(searchParams)
      this.setState({showResults: true});
   }

   render() {
      const {showResults} = this.state;
      return (
      (!showResults ? 
         <FormCard title="Hydrant Search">
            <HydrantSearchForm onSubmit={this.handleSubmit}/>
         </FormCard>
         : <HydrantResultsPage/> )
      );
   }
}
export default SearchView;
