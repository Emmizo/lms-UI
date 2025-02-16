import { 
    Navbar, Nav, Form, FormControl, Button, 
    Container, Badge, Card, Dropdown, ProgressBar,
    Pagination, Row, Col, ListGroup,
    Carousel
  } from 'react-bootstrap';
  import { 
    Search, Bell, Person, Globe, 
    ThreeDotsVertical, ChevronRight, 
    ChevronDown, Facebook, Linkedin, 
    Twitter, Youtube, Instagram, CheckCircleFill,
     StarFill, Award, Book, Calendar, Clock
  } from 'react-bootstrap-icons';
  import { useState } from 'react';
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
  import pythonLogo from './assets/images/python.png'
  import dataScience from './assets/images/dataScience.png'
  import machineLearning from './assets/images/machineLearning.jpg'
  
  
  function CourseraHomePage() {
    const [activeTab, setActiveTab] = useState('inProgress');
    // const [myLearning, setMyLearning] = useState('myLearning');
    const [home, setHome] = useState('home');
    console.log(home);
    const featuredCourses = [
      {
        id: 201,
        logo:  dataScience,
        name: "Generative AI for Software Development",
        provider: "DeepLearning.AI",
        rating: 4.8,
        ratingCount: 2452,
        type: "Specialization",
        level: "Intermediate"
      },
      {
        id: 202,
        logo: machineLearning,
        name: "Generative AI with Large Language Models",
        provider: "DeepLearning.AI & AWS",
        rating: 4.7,
        ratingCount: 3120,
        type: "Course",
        level: "Intermediate"
      },
      {
        id: 203,
        logo: machineLearning,
        name: "Data Engineering",
        provider: "Google Cloud",
        rating: 4.6,
        ratingCount: 1876,
        type: "Professional Certificate",
        level: "Beginner to Intermediate"
      },
      {
        id: 204,
        logo: os,
        name: "Flutter App Development",
        provider: "Meta",
        rating: 4.9,
        ratingCount: 987,
        type: "Specialization",
        level: "Intermediate"
      }
    ];
    
    const recommendedCourses = [
      {
        id: 301,
        logo: pythonLogo,
        name: "Python for Data Science and Machine Learning",
        provider: "IBM",
        enrolledCount: "257K+ already enrolled",
        type: "Specialization"
      },
      {
        id: 302,
        logo: reactLogo,
        name: "Advanced React Patterns",
        provider: "Meta",
        enrolledCount: "124K+ already enrolled",
        type: "Course"
      },
      {
        id: 303,
        logo: os,
        name: "Flutter for Beginners",
        provider: "Google",
        enrolledCount: "178K+ already enrolled",
        type: "Course"
      }
    ];
    
    const inProgressCourses = [
      {
              id: 1,
              logo: reactLogo,
              name: "Front-End Web Development with React",
              provider: "The Hong Kong University of Science and Technology",
              dueDate: "3/4/2025",
              type: "Course",
              progress: 45,
            },
            {
              id: 2,
              logo: reactNativeLogo,
              name: "Multiplatform Mobile App Development with React Native",
              provider: "The Hong Kong University of Science and Technology",
              dueDate: "3/12/2025",
              type: "Course",
              progress: 40,
            },
            {
              id: 3,
              logo: os,
              name: "Operating Systems and You: Becoming a Power User",
              provider: "Google",
              dueDate: "3/22/2025",
              type: "Course",
              specialization: "Google IT Support Professional Certificate"
              ,
              progress: 23,
            },
            {
              id: 4,
              logo: business,
              name: "Create a Financial Statement using Google Sheets",
              provider: "Coursera Project Network",
              dueDate: "2/10/2025",
              type: "Project",
              progress: 2,
            },
            {
              id: 5,
              logo: responsive,
              name: "Responsive Web Design",
              provider: "Multiple Partners",
              dueDate: "3/13/2025",
              type: "Course",
              progress: 98,
            },
            {
              id: 6,
              logo: cn,
              name: "Computer Networks and Network Security",
              provider: "IBM",
              dueDate: "3/8/2025",
              type: "Course",
              specialization: "IT Fundamentals for Cybersecurity Specialization",
              progress: 34,
            },
            {
              id: 7,
              logo: math,
              name: "Mathematical Thinking in Computer Science",
              provider: "University of California San Diego",
              dueDate: "3/22/2025",
              type: "Course",
              progress: 60,
            },
            {
              id: 8,
              logo: fR,
              name: "Fundamentos de React Hooks",
              provider: "Coursera Project Network",
              dueDate: "2/15/2025", 
              type: "Project",
              progress: 80,
            }
    ];
    const completedCourses = [
        {
          id: 101,
          logo: pythonLogo,
          name: "Python for Everybody",
          provider: "University of Michigan",
          completedDate: "12/15/2024",
          type: "Specialization",
          certificate: true
        },
        {
          id: 102,
          logo: dataScience,
          name: "Data Science Ethics",
          provider: "University of Michigan",
          completedDate: "11/20/2024",
          type: "Course",
          certificate: true
        },
        {
          id: 103,
          logo: machineLearning,
          name: "Machine Learning",
          provider: "Stanford University",
          completedDate: "10/5/2024",
          type: "Course",
          certificate: true,
          specialization: "Data Science Specialization"
        },
        {
          id: 104,
          logo: business,
          name: "Introduction to Financial Accounting",
          provider: "University of Pennsylvania",
          completedDate: "9/30/2024",
          type: "Course",
          certificate: true
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
              <Nav.Link href="#home"  className={` ${home === 'home' ? 'border-bottom border-primary border-3 active' : 'inactive'}`}  
              onClick={() => setHome('home')}
                style={{ cursor: 'pointer' }}
                bg={home === 'home' ? 'primary' : 'light'} 
                text={home === 'home' ? 'white' : 'dark'}
                
              >Home</Nav.Link>
              <Nav.Link href="#my-learning"
              className={` ${home === 'myLearning' ? 'border-bottom border-primary border-3 active' : 'inactive'}`} 
               onClick={() => setHome('myLearning')}
               style={{ cursor: 'pointer' }}
               bg={home === 'myLearning' ? 'primary' : 'light'} 
                text={home === 'myLearning' ? 'white' : 'dark'}
              >My Learning</Nav.Link>
              <Nav.Link href="#online-degrees">Online Degrees</Nav.Link>
              <Nav.Link href="#careers">Careers</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
  
        {/* Main Content */}
        {home==="home"?
        <Container className="py-4">
          {/* Welcome Section */}
          <Row className="mb-4">
            <Col>
              <Card>
                <Card.Body className="d-flex flex-column flex-md-row justify-content-between align-items-center">
                  <div>
                    <h2 className="mb-2">Welcome back, User!</h2>
                    <p className="text-muted mb-0">Ready to continue your learning journey?</p>
                  </div>
                  <div className="mt-3 mt-md-0">
                    <p className="text-primary mb-1">Your career goal: switch roles to a Mobile dev(Flutter)</p>
                    <div className="d-flex align-items-center">
                      <ProgressBar now={35} className="flex-grow-1 me-2" />
                      <span className="text-muted small">35%</span>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
  
          {/* Continue Learning Section */}
          <h4 className="mb-3">Continue learning</h4>
          <Row className="mb-4">
            {inProgressCourses.map((course) => (
              <Col md={4} className="mb-3" key={course.id}>
                <Card className="h-100">
                  <Card.Body>
                    <div className="d-flex align-items-center mb-3">
                      <img
                        src={course.logo}
                        alt={`${course.name} logo`}
                        className="img-fluid me-3"
                        style={{ maxWidth: "60px" }}
                      />
                      <div>
                        <h6 className="mb-1">{course.name}</h6>
                        <p className="text-muted small mb-0">{course.provider}</p>
                      </div>
                    </div>
                    <ProgressBar now={course.progress} label={`${course.progress}%`} className="mb-2" />
                    <p className="small text-muted mb-0">Due: {course.dueDate}</p>
                  </Card.Body>
                  <Card.Footer className="bg-white border-top-0">
                    <Button variant="primary" className="w-100">
                      Continue Learning
                    </Button>
                  </Card.Footer>
                </Card>
              </Col>
            ))}
          </Row>
  
          {/* Featured Courses Carousel */}
          <h4 className="mb-3">Featured this week</h4>
          <Carousel className="mb-4 featured-carousel">
            <Carousel.Item>
              <Row>
                {featuredCourses.slice(0, 2).map((course) => (
                  <Col md={6} key={course.id}>
                    <Card className="h-100">
                      <Row className="g-0">
                        <Col md={4}>
                          <img
                            src={course.logo}
                            alt={course.name}
                            className="img-fluid rounded-start h-100"
                            style={{ objectFit: "cover" }}
                          />
                        </Col>
                        <Col md={8}>
                          <Card.Body>
                            <p className="text-primary small mb-1">{course.type}</p>
                            <h5 className="card-title mb-1">{course.name}</h5>
                            <p className="text-muted small mb-2">{course.provider}</p>
                            <div className="d-flex align-items-center mb-2">
                              <StarFill className="text-warning me-1" />
                              <span>{course.rating}</span>
                              <span className="text-muted small ms-1">({course.ratingCount.toLocaleString()})</span>
                            </div>
                            <span className="badge bg-light text-dark">{course.level}</span>
                          </Card.Body>
                        </Col>
                      </Row>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Carousel.Item>
            <Carousel.Item>
              <Row>
                {featuredCourses.slice(2, 4).map((course) => (
                  <Col md={6} key={course.id}>
                    <Card className="h-100">
                      <Row className="g-0">
                        <Col md={4}>
                          <img
                            src={course.logo}
                            alt={course.name}
                            className="img-fluid rounded-start h-100"
                            style={{ objectFit: "cover" }}
                          />
                        </Col>
                        <Col md={8}>
                          <Card.Body>
                            <p className="text-primary small mb-1">{course.type}</p>
                            <h5 className="card-title mb-1">{course.name}</h5>
                            <p className="text-muted small mb-2">{course.provider}</p>
                            <div className="d-flex align-items-center mb-2">
                              <StarFill className="text-warning me-1" />
                              <span>{course.rating}</span>
                              <span className="text-muted small ms-1">({course.ratingCount.toLocaleString()})</span>
                            </div>
                            <span className="badge bg-light text-dark">{course.level}</span>
                          </Card.Body>
                        </Col>
                      </Row>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Carousel.Item>
          </Carousel>
  
          {/* Recommended Courses */}
          <h4 className="mb-3">Recommended for you</h4>
          <Row className="mb-4">
            {recommendedCourses.map((course) => (
              <Col md={4} className="mb-3" key={course.id}>
                <Card className="h-100">
                  <Card.Body>
                    <div className="d-flex align-items-center mb-3">
                      <img
                        src={course.logo}
                        alt={`${course.name} logo`}
                        className="img-fluid me-3"
                        style={{ maxWidth: "60px" }}
                      />
                      <div>
                        <p className="text-primary small mb-1">{course.type}</p>
                        <h6 className="mb-1">{course.name}</h6>
                        <p className="text-muted small mb-0">{course.provider}</p>
                      </div>
                    </div>
                    <p className="small text-muted mb-0">{course.enrolledCount}</p>
                  </Card.Body>
                  <Card.Footer className="bg-white border-top-0">
                    <Button variant="outline-primary" className="w-100">
                      Explore Course
                    </Button>
                  </Card.Footer>
                </Card>
              </Col>
            ))}
          </Row>
  
          {/* Weekly Goal Card */}
          <Row className="mb-4">
            <Col>
              <Card className="bg-light">
                <Card.Body className="d-flex flex-column flex-md-row justify-content-between align-items-center">
                  <div>
                    <h5 className="mb-2">Set your weekly learning goal</h5>
                    <p className="text-muted mb-0">Learners with goals are 75% more likely to complete their courses</p>
                  </div>
                  <Button variant="primary" className="mt-3 mt-md-0">
                    Set weekly goal
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
  
          {/* Learning Stats */}
          <h4 className="mb-3">Your learning stats</h4>
          <Row className="mb-5">
            <Col md={3}>
              <Card className="text-center h-100">
                <Card.Body>
                  <Clock className="text-primary mb-2" size={24} />
                  <h3>8.5</h3>
                  <p className="text-muted">Hours learned this month</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card className="text-center h-100">
                <Card.Body>
                  <Calendar className="text-primary mb-2" size={24} />
                  <h3>12</h3>
                  <p className="text-muted">Day streak</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card className="text-center h-100">
                <Card.Body>
                  <Book className="text-primary mb-2" size={24} />
                  <h3>3</h3>
                  <p className="text-muted">Courses in progress</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card className="text-center h-100">
                <Card.Body>
                  <Award className="text-primary mb-2" size={24} />
                  <h3>5</h3>
                  <p className="text-muted">Certificates earned</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>: home ==="myLearning"?
        <Container className="py-4">
          <h1 className="h4 mb-2">My Learning</h1>
          
          {/* Filters */}
          <div className="mb-4">
            <Badge 
              pill 
              bg={activeTab === 'inProgress' ? 'primary' : 'light'} 
              text={activeTab === 'inProgress' ? 'white' : 'dark'}
              className="me-2 py-2 px-3"
              onClick={() => setActiveTab('inProgress')}
              style={{ cursor: 'pointer' }}
            >
              In Progress
            </Badge>
            <Badge 
              pill 
              bg={activeTab === 'completed' ? 'primary' : 'light'} 
              text={activeTab === 'completed' ? 'white' : 'dark'}
              className="py-2 px-3"
              onClick={() => setActiveTab('completed')}
              style={{ cursor: 'pointer' }}
            >
              Completed
            </Badge>
          </div>
  
          <Row className="col-md-12">
            {/* Course List */}
            <div className="col-md-9">
              {activeTab === 'inProgress' && inProgressCourses.map((course) => {
                // Parse dueDate properly
                const [month, day, year] = course.dueDate.split("/");
                const dueDate = new Date(`${year}-${month}-${day}`);
                const today = new Date();
                const progress = course.id ===1 ? 80 : course.id ===2?40:course.id ===3?60:course.id ===4?2:course.id ===5?68:course.id ===6?80:course.id ===7?90:course.id ===8?10:0;
                const totalProgress =100;
                
                return (
                  <div key={course.id} className="mb-3">
                    {course.specialization && (
                      <div className="mb-1 text-primary">
                        {course.specialization}
                      </div>
                    )}
                    
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
  
              {activeTab === 'completed' && completedCourses.map((course) => {
                return (
                  <div key={course.id} className="mb-3">
                    {course.specialization && (
                      <div className="mb-1 text-primary">
                        {course.specialization}
                      </div>
                    )}
                    
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
                            <div className="d-flex align-items-center text-success small">
                              <CheckCircleFill className="me-2" />
                              <span>
                                Completed on {course.completedDate}
                              </span>
                            </div>
                          </Col>
                          <Col xs={12} md={3} className="mt-3 mt-md-0 text-md-end">
                            {course.certificate && (
                              <Button variant="outline-primary" className="mb-1 w-90">
                                View Certificate <ChevronRight />
                              </Button>
                            )}
                            <Button variant="link" className="text-primary p-0 small w-100 text-end">
                              View course
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
                          <Dropdown.Item href="#action/3">Move to in progress</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </Card>
                  </div>
                );
              })}
  
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
            </div>
  
            {/* Weekly Goal Tracker - Only show for In Progress tab */}
            {activeTab === 'inProgress' && (
              <div className="col-md-3">
                <Card>
                  <Card.Body>
                    <Row>
                      <Col md={12}>
                        <h5 className="mb-3">Weekly goal progress tracker</h5>
                        <p className="text-muted small">
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
            )}
          </Row>
        </Container>:""}
  
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
  
  export default CourseraHomePage;