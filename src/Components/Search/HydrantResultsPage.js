import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import FlexContainer from '../../common/FlexContainer';

class HydrantResultsPage extends React.Component {
   constructor() {
      super();
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

        <FlexContainer>
            <BootstrapTable
                keyField='id'
                data={ mockTableData } 
                columns={ columns } 
            />
            <BootstrapTable
                keyField='id'
                data={ mockTableData } 
                columns={ columns } 
            />
        </FlexContainer>
    );
   }
}
export default HydrantResultsPage;
