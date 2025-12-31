import { useState, useEffect } from 'react';
import { Container, Row, Col, Card, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { ClockFill } from 'react-bootstrap-icons';

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const targetDate = new Date('2026-01-01T00:00:00');
    
    const timer = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const tooltips = {
    days: 'Days remaining until 2026!',
    hours: 'Hours left to celebrate!',
    minutes: 'Minutes until the big moment!',
    seconds: 'Seconds ticking away!'
  };

  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col md={10}>
          <h2 className="text-center text-white mb-4">
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>Live countdown to New Year 2026!</Tooltip>}
            >
              <ClockFill className="me-2" style={{cursor: 'pointer'}} />
            </OverlayTrigger>
            Time Until 2026
          </h2>
          <Row>
            {Object.entries(timeLeft).map(([unit, value]) => (
              <Col key={unit} xs={6} md={3} className="mb-3">
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>{tooltips[unit]}</Tooltip>}
                >
                  <Card className="countdown-card text-center text-white" style={{cursor: 'pointer'}}>
                    <Card.Body>
                      <h3 className="display-4 fw-bold">{value || 0}</h3>
                      <p className="text-uppercase">{unit}</p>
                    </Card.Body>
                  </Card>
                </OverlayTrigger>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Countdown;