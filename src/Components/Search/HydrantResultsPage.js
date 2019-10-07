import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import FlexContainer from '../../common/FlexContainer';

class HydrantResultsPage extends React.Component {
   constructor(props) {
      super(props);
      console.log('in HydrantResultsPage ')
   }

   render() {
    const columns= [{
        dataField: 'id',
        text: 'Hydrant ID',
        hidden: true
      },
      {
        dataField: 'name',
        text: 'Name'
      }, {
        dataField: 'rating',
        text: 'Rating',
      }];
  
      const mockTableData = [
        {
          id: 1,
          name: 'Hydro One',
          rating: 'Five stars'
        },
        {
          id: 2,
          name: 'Hydrant Too',
          rating: 'Three stars'
        },
        {
          id: 3,
          name: 'HydranThree',
          rating: 'One star'
        },
      ];

      return (
        <React.Fragment>
          <h1 className="light"> Sample Results Page</h1>
          <FlexContainer>
              <BootstrapTable
                  keyField='id'
                  data={ mockTableData } 
                  columns={ columns } 
              />
              <iframe title="fake-map" src="https://www.google.com/maps/d/u/0/embed?mid=1AD8yJVFaA4LoiyKHvOUH8M4qsE68B4xG" width="640" height="480"></iframe>
          </FlexContainer>
        </React.Fragment>
    );
   }
}
export default HydrantResultsPage;
