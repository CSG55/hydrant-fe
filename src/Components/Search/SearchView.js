import React from 'react';
import HydrantSearchForm from './HydrantSearchForm';
import HydrantResultsPage from './HydrantResultsPage';
import FormCard from '../../common/FormCard';

import '../../css/Search.css';


class SearchView extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         showResults: false,
      }
      
   this.handleSubmit = this.handleSubmit.bind(this);
   }

   handleSubmit(searchParams) {
      // Api call will go here, return results
      // console.log(searchParams)
      this.setState({showResults: true});
   }

   render() {
      const {showResults} = this.state;
      return (
      // Conditionally render either search form or results page. Results show after form is submitted
      (!showResults ? 
         <FormCard title="Hydrant Search">
            <HydrantSearchForm onSubmit={this.handleSubmit}/>
         </FormCard>
         : <HydrantResultsPage history={this.props.history}/> )
      );
   }
}
export default SearchView;
