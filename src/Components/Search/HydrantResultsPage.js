import React from 'react';
import {Link} from 'react-router-dom';
import {Col, Row} from 'react-bootstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import MapContainer from '../../common/MapContainer';

const nameFormatter = (cell, row) => {
  return (<Link to={`/hydrant/${row.id}`}>{cell}</Link>);
}
const averageRatingFormatter = (cell, row) => {
  if (cell.length===0) return "No Reviews"; //reviews array is empty
  const sumRatings = cell.reduce((a,b) => a + b.rating, 0); // initial sum is 0
  return(`${(sumRatings/cell.length).toFixed(2)} / 5`); // ex) 2.56/5
}

class HydrantResultsPage extends React.Component {
   render() {
    const {searchResults} = this.props;

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
        dataField: 'reviews',
        text: 'Rating',
        formatter: averageRatingFormatter

      }];
      const tableData = searchResults;

      return (
        <React.Fragment>
        {/* React.Fragment allows us to render multiple children without cluttering the DOM with an extra <div></div> */}
          <h1 className="light"> Search Results</h1>
          <Row>
              <Col md={6} xs={12}>
                {/* The data & columns stored in variables above are passed to the table. */}
                <div className="search-results-table">
                  <BootstrapTable
                      keyField='id'
                      data={ tableData } 
                      columns={ columns } 
                  />
                </div>
            </Col>
            <Col md={6} xs={12}>
                {searchResults.length!==0 && 
                  <div className="search-results-map">
                    <MapContainer history={this.props.history} hydrantList={searchResults}/>
                  </div>
                }
            </Col>
          </Row>
        </React.Fragment>
    );
   }
}
export default HydrantResultsPage;
