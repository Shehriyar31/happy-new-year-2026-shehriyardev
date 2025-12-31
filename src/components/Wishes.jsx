import { Container, Row, Col, Card, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { StarFill, HeartFill, TrophyFill, RocketTakeoffFill } from 'react-bootstrap-icons';

const Wishes = () => {
  const wishes = [
    { 
      icon: <StarFill size={50} className="text-info" />, 
      title: 'New Beginnings', 
      text: 'May this year bring fresh starts and endless opportunities',
      tooltip: 'Start your journey with new opportunities!'
    },
    { 
      icon: <HeartFill size={50} className="text-danger" />, 
      title: 'Dreams Come True', 
      text: 'Chase your dreams and make them reality in 2026',
      tooltip: 'Follow your heart and achieve your dreams!'
    },
    { 
      icon: <TrophyFill size={50} className="text-warning" />, 
      title: 'Joy & Happiness', 
      text: 'Fill your days with laughter, love, and celebration',
      tooltip: 'Celebrate every moment with joy!'
    },
    { 
      icon: <RocketTakeoffFill size={50} className="text-success" />, 
      title: 'Success & Growth', 
      text: 'Reach new heights and achieve all your goals',
      tooltip: 'Soar high and achieve greatness!'
    }
  ];

  return (
    <Container className="py-5">
      <h2 className="text-center text-white mb-5">
        <OverlayTrigger
          placement="top"
          overlay={<Tooltip>Best wishes for the New Year!</Tooltip>}
        >
          <StarFill className="me-2 text-warning" style={{cursor: 'pointer'}} />
        </OverlayTrigger>
        New Year Wishes
        <OverlayTrigger
          placement="top"
          overlay={<Tooltip>Best wishes for the New Year!</Tooltip>}
        >
          <StarFill className="ms-2 text-warning" style={{cursor: 'pointer'}} />
        </OverlayTrigger>
      </h2>
      <Row>
        {wishes.map((wish, index) => (
          <Col key={index} md={6} lg={3} className="mb-4">
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>{wish.tooltip}</Tooltip>}
            >
              <Card className="h-100 countdown-card text-white text-center" style={{cursor: 'pointer'}}>
                <Card.Body>
                  <div className="mb-3">{wish.icon}</div>
                  <Card.Title className="h5">{wish.title}</Card.Title>
                  <Card.Text>{wish.text}</Card.Text>
                </Card.Body>
              </Card>
            </OverlayTrigger>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Wishes;