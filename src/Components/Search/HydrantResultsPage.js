import React from 'react';
import {Link} from 'react-router-dom';
import {Col, Row} from 'react-bootstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import MapContainer from '../../common/MapContainer';

const nameFormatter = (cell, row) => {
  return (<Link to="/hydrant/1">{cell}</Link>);
}

class HydrantResultsPage extends React.Component {
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
          <Row>
              <Col md={6} xs={12}>
                {/* The data & columns stored in variables above are passed to the table. */}
                <div className="search-results-table">
                  <BootstrapTable
                      keyField='id'
                      data={ mockTableData } 
                      columns={ columns } 
                  />
                </div>
            </Col>
            <Col md={6} xs={12}>
                <div className="search-results-map">
                  <MapContainer history={this.props.history}/>
                </div>

                {/* sample google maps location iframe */}
                {/* <iframe title="fake-map" src="https://www.google.com/maps/d/u/0/embed?mid=1AD8yJVFaA4LoiyKHvOUH8M4qsE68B4xG" width="640" height="480"></iframe> */}
            </Col>
          </Row>
        </React.Fragment>
    );
   }
}
export default HydrantResultsPage;
