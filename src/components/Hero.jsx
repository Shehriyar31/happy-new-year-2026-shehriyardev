import { Container, Row, Col, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { StarFill, EmojiSmileFill, RocketTakeoffFill, HeartFill } from 'react-bootstrap-icons';
import logo from '../assets/logo.jpg';

const Hero = () => {
  return (
    <div className="hero-section py-3 py-md-5 text-center position-relative">
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={10} lg={8}>
            <OverlayTrigger
              placement="bottom"
              overlay={<Tooltip>ShehriyarDev's Logo</Tooltip>}
            >
              <img 
                src={logo} 
                alt="Logo" 
                className="mb-3 mb-md-4 sparkle"
                style={{borderRadius: '50%', cursor: 'pointer'}}
              />
            </OverlayTrigger>
            <h1 className="bounce-text fw-bold mb-3">
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip>Celebrate with joy!</Tooltip>}
              >
                <EmojiSmileFill className="me-2 me-md-3 text-warning" size={window.innerWidth < 768 ? 30 : 40} style={{cursor: 'pointer'}} />
              </OverlayTrigger>
              HAPPY NEW YEAR 2026!
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip>Celebrate with joy!</Tooltip>}
              >
                <EmojiSmileFill className="ms-2 ms-md-3 text-warning" size={window.innerWidth < 768 ? 30 : 40} style={{cursor: 'pointer'}} />
              </OverlayTrigger>
            </h1>
            <p className="pulse-text mb-3 mb-md-4">
              <OverlayTrigger
                placement="left"
                overlay={<Tooltip>Launch into success!</Tooltip>}
              >
                <RocketTakeoffFill className="me-2 text-info" size={window.innerWidth < 768 ? 16 : 20} style={{cursor: 'pointer'}} />
              </OverlayTrigger>
              Wishing you joy, success, and endless possibilities!
              <OverlayTrigger
                placement="right"
                overlay={<Tooltip>Reach for the stars!</Tooltip>}
              >
                <RocketTakeoffFill className="ms-2 text-info" size={window.innerWidth < 768 ? 16 : 20} style={{cursor: 'pointer'}} />
              </OverlayTrigger>
            </p>
            <OverlayTrigger
              placement="bottom"
              overlay={<Tooltip>Created by ShehriyarDev</Tooltip>}
            >
              <p className="text-warning fw-bold fs-5 mb-4" style={{cursor: 'pointer'}}>
                From ShehriyarDev
              </p>
            </OverlayTrigger>
            <div className="celebration-text mt-3 mt-md-4">
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip>Start fresh adventures in 2026!</Tooltip>}
              >
                <span className="badge bg-warning text-dark me-2 mb-2" style={{cursor: 'pointer'}}>
                  <RocketTakeoffFill className="me-1" size={14} />New Adventures
                </span>
              </OverlayTrigger>
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip>Follow your heart and dreams!</Tooltip>}
              >
                <span className="badge bg-danger text-white me-2 mb-2" style={{cursor: 'pointer'}}>
                  <HeartFill className="me-1" size={14} />Big Dreams
                </span>
              </OverlayTrigger>
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip>Shine bright like a star!</Tooltip>}
              >
                <span className="badge bg-success text-white mb-2" style={{cursor: 'pointer'}}>
                  <StarFill className="me-1" size={14} />Bright Future
                </span>
              </OverlayTrigger>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;