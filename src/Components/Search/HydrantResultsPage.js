import React from 'react';
import {Link} from 'react-router-dom';
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import FlexContainer from '../../common/FlexContainer';
import MapContainer from './MapContainer';

const nameFormatter = (cell, row) => {
  console.log(cell, row);
  return (<Link to="/hydrant/1">{cell}</Link>);
}

class HydrantResultsPage extends React.Component {
   constructor(props) {
      super(props);
      console.log('in HydrantResultsPage ')
   }

   render() {
    const columns= [{
        dataField: 'id',
        text: 'Hydrant ID',
        hidden: true,
      },
      {
        dataField: 'name',
        text: 'Name',
        formatter: nameFormatter
      },
      {
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
        {/* React.Fragment allows us to render multiple children without cluttering the DOM with an extra <div></div> */}
          <h1 className="light"> Sample Results Page</h1>
          <FlexContainer>
              {/* The data & columns stored in variables above are passed to the table. */}
              <div 
                style={{ 
                  maxWidth:'50%',
                 }}
>
              <BootstrapTable
                  keyField='id'
                  data={ mockTableData } 
                  columns={ columns } 
              />
              </div>

              <div 
                style={{ 
                maxWidth:'50%',
                maxHeight:'50%',
                 }}
              >
              <MapContainer history={this.props.history}/>
              </div>

              {/* sample google maps location iframe */}
              {/* <iframe title="fake-map" src="https://www.google.com/maps/d/u/0/embed?mid=1AD8yJVFaA4LoiyKHvOUH8M4qsE68B4xG" width="640" height="480"></iframe> */}
          </FlexContainer>
        </React.Fragment>
    );
   }
}
export default HydrantResultsPage;
