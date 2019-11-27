import React from 'react';
import HydrantSearchForm from './HydrantSearchForm';
import HydrantResultsPage from './HydrantResultsPage';
import FormCard from '../../common/FormCard';

import {fetchHydrant} from '../../api/hydrants-api';

import '../../css/Search.css';


class SearchView extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         showResults: false,
         searchResults:[],
      }
      
   this.handleSubmit = this.handleSubmit.bind(this);
   }

   handleSubmit(searchParams) {
      console.log(searchParams);
      fetchHydrant(searchParams).then(res => {
          this.setState({searchResults: res.data, showResults: true});
          console.log(res.data);
      })
      .catch((err) => {
          console.log("AXIOS ERROR: ", err);
      })
   }

   render() {
      const {showResults} = this.state;
      return (
      // Conditionally render either search form or results page. Results show after form is submitted
      (!showResults ? 
         <FormCard title="Hydrant Search">
            <HydrantSearchForm onSubmit={this.handleSubmit}/>
         </FormCard>
         : <HydrantResultsPage history={this.props.history} searchResults={this.state.searchResults} /> ) 
      );
   }
}
export default SearchView;
