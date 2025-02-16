

import { 
  Navbar, Nav, Form, FormControl, Button, 
  Container, Badge, Card, Dropdown,ProgressBar,
  Pagination, Row, Col, ListGroup
} from 'react-bootstrap';
import { 
  Search, Bell, Person, Globe, 
  ThreeDotsVertical, ChevronRight, 
  ChevronDown, Facebook, Linkedin, 
  Twitter, Youtube, Instagram
} from 'react-bootstrap-icons';
import Logo from './assets/images/logo.svg';
import reactLogo from './assets/images/react.png'
import reactNativeLogo from './assets/images/reactnative.png'
import os from './assets/images/os.jpg'
import business from './assets/images/business.png'
import responsive from './assets/images/responsive.jpg'
import cn from './assets/images/cn.png'
import math from './assets/images/math.png'
import fR from './assets/images/fR.png'
import apple from './assets/images/apple.png'
import android from './assets/images/android.png'
import B from './assets/images/B.png'


function CourserapMyLearningPage() {
  
  
  const courses = [
    {
      id: 1,
      logo: reactLogo,
      name: "Front-End Web Development with React",
      provider: "The Hong Kong University of Science and Technology",
      dueDate: "3/4/2025",
      type: "Course"
    },
    {
      id: 2,
      logo: reactNativeLogo,
      name: "Multiplatform Mobile App Development with React Native",
      provider: "The Hong Kong University of Science and Technology",
      dueDate: "3/12/2025",
      type: "Course"
    },
    {
      id: 3,
      logo: os,
      name: "Operating Systems and You: Becoming a Power User",
      provider: "Google",
      dueDate: "3/22/2025",
      type: "Course"
    },
    {
      id: 4,
      logo: business,
      name: "Create a Financial Statement using Google Sheets",
      provider: "Coursera Project Network",
      dueDate: "2/10/2025",
      type: "Project"
    },
    {
      id: 5,
      logo: responsive,
      name: "Responsive Web Design",
      provider: "Multiple Partners",
      dueDate: "3/13/2025",
      type: "Course"
    },
    {
      id: 6,
      logo: cn,
      name: "Computer Networks and Network Security",
      provider: "IBM",
      dueDate: "3/8/2025",
      type: "Course"
    },
    {
      id: 7,
      logo: math,
      name: "Mathematical Thinking in Computer Science",
      provider: "University of California San Diego",
      dueDate: "3/22/2025",
      type: "Course"
    },
    {
      id: 8,
      logo: fR,
      name: "Fundamentos de React Hooks",
      provider: "Coursera Project Network",
      dueDate: "2/15/2025", 
      type: "Project"
    }
  ];

  const footerLinks = {
    'Coursera': [
      'About', 'What We Offer', 'Leadership', 'Careers', 'Catalog',
      'Coursera Plus', 'Professional Certificates', 'MasterTrack® Certificates',
      'Degrees', 'For Enterprise', 'For Government', 'For Campus',
      'Become a Partner', 'Social Impact'
    ],
    'Community': [
      'Learners', 'Partners', 'Beta Testers', 'Blog',
      'The Coursera Podcast', 'Tech Blog', 'Teaching Center'
    ],
    'More': [
      'Press', 'Investors', 'Terms', 'Privacy', 'Help',
      'Accessibility', 'Contact', 'Articles', 'Directory',
      'Affiliates', 'Modern Slavery Statement', 'Manage Cookie Preferences'
    ]
  };

  return (
    <div className="coursera-page">
      {/* Header */}
      <Navbar bg="white" expand="lg" className="border-bottom py-2">
        <Container fluid>
          <Navbar.Brand href="#home" className="me-4">
            <img 
              src={Logo} 
              alt="Coursera Logo"
              height="30"
            />
          </Navbar.Brand>
          
          <Button variant="primary" className="me-2 d-none d-lg-block">
            Explore <ChevronDown size={12} />
          </Button>
          
          <Form className="d-flex flex-grow-1 mx-2 position-relative">
            <FormControl
              type="search"
              placeholder="What do you want to learn?"
              className="me-2 flex-grow-1"
              aria-label="Search"
            />
            <Button variant="primary" className="position-absolute end-0">
              <Search />
            </Button>
          </Form>
          
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav>
              <Nav.Link href="#english" className="d-flex align-items-center">
                <Globe className="me-1" /> English
              </Nav.Link>
              <Nav.Link href="#notifications">
                <Bell />
              </Nav.Link>
              <Nav.Link href="#profile">
                <Person />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Secondary Navigation */}
      <Navbar bg="white" variant="light" className="py-0 border-bottom">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#my-learning" active className="border-bottom border-primary border-3">My Learning</Nav.Link>
            <Nav.Link href="#online-degrees">Online Degrees</Nav.Link>
            <Nav.Link href="#careers">Careers</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* Main Content */}
      <Container className="py-4">
        <h1 className="h4 mb-2">My Learning</h1>
        
        {/* Filters */}
        <div className="mb-4">
          <Badge pill bg="primary" className="me-2 py-2 px-3">In Progress</Badge>
          <Badge pill bg="light" text="dark" className="py-2 px-3">Completed</Badge>
        </div>

        <Row className="col-md-12">
        {/* Course List */}
        {courses.map((course) => {
  // Parse dueDate properly
  const [month, day, year] = course.dueDate.split("/");
  const dueDate = new Date(`${year}-${month}-${day}`);
  const today = new Date();
  const progress = course.id ===1 ? 80 : course.id ===2?40:course.id ===3?60:course.id ===4?2:course.id ===5?68:course.id ===6?80:course.id ===7?90:course.id ===8?10:0;
const totalProgress =100;
  return (
    
    <div key={course.id} className="mb-3 col-md-9">
      <div>
        {course.id === 3
          ? "Google IT Support Professional Certificate"
          : course.id === 6
          ? "IT Fundamentals for Cybersecurity Specialization"
          : ""}
      </div>

      <Card>
        <Card.Body>
          <Row className="align-items-center">
            <Col xs={2} md={1} className="ml-3">
              <img
                src={course.logo}
                alt={`${course.name} logo`}
                className="img-fluid"
                style={{ maxWidth: "75px" }}
              />
            </Col>
            <Col xs={10} md={8}>
              <div className="d-flex align-items-center small text-muted mb-1">
                <span>{course.type}</span>
                <span className="mx-1">|</span>
                <span>{course.provider}</span>
              </div>
              <h5 className="mb-3">{course.name}</h5>
              <div className="d-flex align-items-center text-danger small">
                <span className="me-2">⚠️</span>

               
                {dueDate >= today ? (
                    <ProgressBar now={progress} label={`${progress}%`} style={{ width: `${totalProgress}%`} } />
                ) : (
                  <span>
                    Need more time to complete this {course.type.toLowerCase()}? Push your estimated end date to{" "}
                    {course.dueDate} <strong>CAT</strong> and achieve your goal.
                  </span>
                )}
              </div>
            </Col>
            <Col xs={12} md={3} className="mt-3 mt-md-0 text-md-end">
              <Button variant="primary" className="mb-1 w-90">
                Go To {course.type} <ChevronRight />
              </Button>
              <Button variant="link" className="text-primary p-0 small w-100 text-end">
                Push end date
              </Button>
            </Col>
          </Row>
        </Card.Body>

        {/* Dropdown for options */}
        <Dropdown className="position-absolute top-2 end-0 mt-0 me-2">
          <Dropdown.Toggle variant="link" id={`dropdown-${course.id}`} className="p-1 text-muted">
            <ThreeDotsVertical />
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#action/1">View details</Dropdown.Item>
            <Dropdown.Item href="#action/2">Remove from learning</Dropdown.Item>
            <Dropdown.Item href="#action/3">Move to completed</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Card>
    </div>
  );
})}
        <div className="col-md-3 ">
        <Card >
          <Card.Body>
            <Row>
              <Col md={12}>
                <h5 className="mb-3">Weekly goal progress tracker</h5>
                <p className="text-muted small ">
                  Learners with goals are 75% more likely to complete their 
                  courses. Set a weekly goal to take charge of your learning 
                  journey and boost your success!
                </p>
                <Button variant="outline-primary" size="sm">
                  Set your weekly goal
                </Button>
              </Col>
            </Row>
          </Card.Body>
        </Card>
        </div>
</Row>
        {/* Pagination */}
        <div className="d-flex justify-content-between align-items-center mt-4">
          <div className="small text-muted">
            Results per page: 
            <Dropdown className="d-inline-block ms-2">
              <Dropdown.Toggle variant="outline-secondary" size="sm" id="dropdown-results-per-page">
                8 <ChevronDown size={12} />
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>4</Dropdown.Item>
                <Dropdown.Item active>8</Dropdown.Item>
                <Dropdown.Item>12</Dropdown.Item>
                <Dropdown.Item>16</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <Pagination size="sm">
            <Pagination.Item active>{1}</Pagination.Item>
            <Pagination.Item>{2}</Pagination.Item>
            <Pagination.Item>{3}</Pagination.Item>
            <Pagination.Item>{4}</Pagination.Item>
            <Pagination.Item>{5}</Pagination.Item>
            <Pagination.Next />
          </Pagination>
        </div>
      </Container>

      {/* Footer */}
      <footer className="bg-light mt-5 pt-5 pb-3">
        <Container>
          <Row>
            {Object.entries(footerLinks).map(([category, links]) => (
              <Col md={3} sm={6} className="mb-4" key={category}>
                <h5 className="mb-3">{category}</h5>
                <ListGroup variant="flush">
                  {links.map((link, i) => (
                    <ListGroup.Item key={i} className="px-0 py-1 border-0 bg-transparent">
                      <a href="#" className="text-decoration-none text-muted small">
                        {link}
                      </a>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Col>
            ))}
            
            <Col md={3} sm={6} className="mb-4">
              <h5 className="mb-3">Mobile App</h5>
              <div className="mb-3">
                <img src={apple} alt="App Store" className="img-fluid mb-2" />
                <img src={android} alt="Google Play" className="img-fluid" />
              </div>
              <div className="mt-4">
                <img src={B} alt="B Corp Certified" className="img-fluid" />
              </div>
            </Col>
          </Row>
          
          <hr className="my-4" />
          
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
            <div className="text-muted small mb-3 mb-md-0">
              © 2023 Coursera Inc. All rights reserved.
            </div>
            <div className="social-icons">
              <a href="#" className="text-muted me-3"><Facebook /></a>
              <a href="#" className="text-muted me-3"><Linkedin /></a>
              <a href="#" className="text-muted me-3"><Twitter /></a>
              <a href="#" className="text-muted me-3"><Youtube /></a>
              <a href="#" className="text-muted"><Instagram /></a>
            </div>
          </div>
        </Container>
      </footer>
    </div>
  );
}

export default CourserapMyLearningPage;