import React from 'react';
import { Row, Col } from 'reactstrap';
import Panel from './Panel';

const PanelGrid = ({ panels }) => {
  return (
    <Row className="panel-grid">
      {panels.map(panel => (
        <Col key={panel.id} xs="12" sm="6" md="4" lg="3" xl="2" className="mb-2">
          <Panel {...panel} />
        </Col>
      ))}
    </Row>
  );
}

export default PanelGrid;
