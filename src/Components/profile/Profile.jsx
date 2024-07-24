// import pauls from '../../assets/rsc/paul-castanie-WZB_ZOqR4dA-unsplash.jpg'
import paul from '../../assets/rsc/paul-castanie-WZB_ZOqR4dA-unsplash.jpg'; // Adjust the path according to your folder structure
import josuha from '../../assets/rsc/joshua-earle-ICE__bo2Vws-unsplash.jpg';
import krishtis from '../../assets/rsc/kristina-v-hYdikKrex4U-unsplash.jpg';
import radu from '../../assets/rsc/radu-florin-4_QFycgpC4c-unsplash.jpg';
import settingsIcon from '../../assets/rsc/icons8-settings-48.png';
import logoutIcon from '../../assets/rsc/icons8-logout-48.png';
import projectManagementIcon from '../../assets/rsc/icons8-project-management-48.png';
import closeIcon from '../../assets/rsc/icons8-close-50.png';
import chevronDownIcon from '../../assets/rsc/icons8-chevron-down-30.png';
import dashboardIcon from '../../assets/rsc/icons8-dashboard-layout-48.png';
import eLearningIcon from '../../assets/rsc/icons8-e-learning-48.png';
import userGroupsIcon from '../../assets/rsc/icons8-user-groups-48.png';
import requestServiceIcon from '../../assets/rsc/icons8-request-service-48.png';
import commercialIcon from '../../assets/rsc/icons8-commercial-48.png';
import calendarIcon from '../../assets/rsc/icons8-calendar-48.png';
import googleClassroomIcon from '../../assets/rsc/icons8-google-classroom-48.png';
import auditIcon from '../../assets/rsc/icons8-audit-48.png';
import handWithPenIcon from '../../assets/rsc/icons8-hand-with-pen-48.png';
import unitIcon from '../../assets/rsc/icons8-unit-48.png';
import supportIcon from '../../assets/rsc/icons8-support-60.png';
import menuIcon from '../../assets/rsc/icons8-menu-50.png';
import notificationIcon from '../../assets/rsc/icons8-notification-48 (1).png';
import kristina from '../../assets/rsc/kristina-v-hYdikKrex4U-unsplash.jpg';
import searchIcon from '../../assets/rsc/icons8-search-50 (4).png';
// import banner1 from '../../assets/rsc/banner-1';
// import banner2 from '../../assets/rsc/banner-2';
// import banner3 from '../../assets/rsc/banner-3';
// import banner4 from '../../assets/rsc/banner-4';
// import banner5 from '../../assets/rsc/banner-5';
// import banner6 from '../../assets/rsc/banner-6';
// import author1 from '../../assets/rsc/author-1';
// import author2 from '../../assets/rsc/author-2';
// import author3 from '../../assets/rsc/author-3';
// import author4 from '../../assets/rsc/author-4';
// import author5 from  '../../assets/rsc/author-5';
// import author6 from '../../assets/rsc/author-6';
import { useState } from 'react';

const Profile = () => {

    const [isPanelOpen, setIsPanelOpen] = useState(false);
    const [isNotificationOpen, setIsNotificationOpen] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [openDetails, setOpenDetails] = useState({});
  
    const togglePanel = () => {
      setIsPanelOpen(!isPanelOpen);
    };
  const toggleAddCourse = () => {
    setAddCourseVisible(!isAddCourseVisible)
  }
    const toggleNotification = () => {
      setIsNotificationOpen(!isNotificationOpen);
    };
  
    const toggleProfile = () => {
      setIsProfileOpen(!isProfileOpen);
    };
  
    const toggleDetails = (index) => {
      setOpenDetails((prevDetails) => ({
        ...prevDetails,
        [index]: !prevDetails[index]
      }));
    };
  
    
    const [isAddCourseVisible, setAddCourseVisible] = useState(false);

  const handleAddCourseClick = () => {
    setAddCourseVisible(true);
    document.body.style.position = 'fixed';
  };

  const handleCancelClick = () => {
    setAddCourseVisible(false);
    document.body.style.position = 'relative';
  };
  return (
   <> 
   
   {/* <div className="add-course display-none ">
      <div className="ind-add">
        <div className="left">
          <div className="left-cont">
            <img
              src="https://images.unsplash.com/photo-1602578558883-a40f8c22b3a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNob2VzJTIwYWRzfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60"
              alt=""
            />
          </div>
        </div>
        <div className="modal-box">
          <div className="modal-cont">
            <div className="modal-header">
              <h3>Course Title</h3>
            </div>
            <div className="modal-body form-group">
              <input
                type="text"
                style={{ margin: "20px 0px" }}
                name=""
                id=""
                placeholder="enter course title"
              />
              <button className="upload gradient-btn">Upload Banner Image</button>
            </div>
            <div className="modal-footer right-item ac-btn">
              <button className="a gradient-btn">
                <a href="">Upload</a>
              </button>
              <button className="cancel" onClick={toggleAddCourse}>Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </div> */}
{/* <div className={`app ${isPanelOpen || isNotificationOpen || isProfileOpen ? 'blur' : ''}`}> */}
      <div className={`notification-list-container ${isNotificationOpen ? 'noti-display' : 'noti-notdisplay'}`}>
        <div className="notification-list">
          <div className="notification-heading">
            <h3>Notifications</h3>
            <img src={closeIcon} className='cancel-icon' onClick={toggleNotification} alt="" />
          </div>
          <div className="notifications">
            <div className="notification">
              <div className="noti-details">
                <div className="noti-image">
                  <img src={paul} alt="Paul" />
                </div>
                <div className="noti-detail">
                  <p className="det">Paul updated the syllabus for Python</p>
                  <p className="time">5 min ago</p>
                </div>
              </div>
            </div>
            <div className="notification">
              <div className="noti-details">
                <div className="noti-image">
                  <img src={josuha} alt="Josh" />
                </div>
                <div className="noti-detail">
                  <p className="det">Josh assigned a test for you</p>
                  <p className="time">2 days ago</p>
                </div>
              </div>
            </div>
            <div className="notification">
              <div className="noti-details">
                <div className="noti-image">
                  <img src={radu} alt="Jim" />
                </div>
                <div className="noti-detail">
                  <p className="det">Jim added you to python classroom</p>
                  <p className="time">10 days ago</p>
                </div>
              </div>
            </div>
          </div>
         
        </div>
      </div>

      <div className={`profile-container ${isProfileOpen ? 'profile-display' : 'prof-notdisplay'}`}>
        <div className="profile">
        <div className="profile-heading">
            <h3>Profile</h3>
            <img src={closeIcon} className='profile-close' onClick={toggleProfile} alt="" />
          </div>
          <div className="user-info profile-item">
            <div className="user-image">
              <img src={krishtis} alt="Emily Rose" />
            </div>
            <div className="user-details">
              <p className="user-fullname">Emily Rose</p>
              <p className="user-name">@rose_emily003</p>
            </div>
          </div>
          <div className="settings profile-item">
            <img src={settingsIcon} alt="Settings" />
            <p>Account Settings</p>
          </div>
          <div className="logout profile-item">
            <img src={logoutIcon} alt="Logout" />
            <p>Logout</p>
          </div>
        </div>
      </div>
      <div className={`app ${isPanelOpen || isNotificationOpen || isProfileOpen ? 'blur' : ''}`}> 
      <div className={`side-panel-container ${isPanelOpen ? 'open' : ''}`}>
        <div className="side-panel">
          <div className="panel-item logo-item">
            <div className="logo">
              <img src={projectManagementIcon} alt="managesnap logo" className="logo-image" />
              <p className="logo-name">Create Snap</p>
            </div>
            <img src={closeIcon} alt="Close" id="close" onClick={togglePanel} />
          </div>

          {/* Panel Items */}
          {[
            {
              title: 'Snap it',
              items: [
                { icon: dashboardIcon, text: 'Career Paths', link: '#' },
                { icon: eLearningIcon, text: 'Skill Paths', link: 'index.html' },
                { icon: userGroupsIcon, text: 'Courses', link: 'groups.html' },
                { icon: commercialIcon, text: 'Popups', link: 'groups.html' },
                { icon: userGroupsIcon, text: 'Cheatsheets', link: 'groups.html' },
              ]
            },
            {
              title: 'Course Setting',
              items: [
                { icon: dashboardIcon, text: 'FAQ', link: '#' },
                { icon: eLearningIcon, text: 'Manage access', link: 'index.html' },
                { icon: userGroupsIcon, text: 'Details', link: 'groups.html' }
              ]
            },
            
            {
              title: 'Course Details',
              items: [
                { icon: requestServiceIcon, text: 'Course Details', link: '#' },
                { icon: commercialIcon, text: 'Announcements', link: 'announcements.html' },
                { icon: calendarIcon, text: 'Timetable', link: 'timetable.html' },
                { icon: googleClassroomIcon, text: 'Syllabus', link: 'syllabus.html' },
                { icon: auditIcon, text: 'Assignment', link: 'assignment.html' },
                { icon: handWithPenIcon, text: 'Exams', link: 'exams.html' },
                { icon: unitIcon, text: 'Units', link: 'units.html' },
                { icon: unitIcon, text: 'Courses', link: 'courses.html' }
              ]
            },
            {
              title: 'Course Stats',
              items: [
                { icon: requestServiceIcon, text: 'Enrollment', link: '#' },
                { icon: commercialIcon, text: 'Statistics', link: 'dashboard.html' },
                { icon: calendarIcon, text: 'All files', link: 'timetable.html' }
              ]
            }
          ].map((panel, index) => (
            <div className="course-details panel-item" key={index}>
              <div className="panel-heading" onClick={() => toggleDetails(index)}>
                <h3>{panel.title}</h3>
                <img src={chevronDownIcon} alt="Toggle" className={`arrow ${openDetails[index] ? 'down' : 'up'}`} />
              </div>
              <div className="details" style={{ display: openDetails[index] ? 'block' : 'none' }}>
                {panel.items.map((item, idx) => (
                  <div className="panel-item" key={idx}>
                    <img src={item.icon} alt="" className="item" />
                    <p className="name"><a href={item.link}>{item.text}</a></p>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="panel-item support">
            <button>
              <img src={supportIcon} alt="Support" />
              <p>Get Support</p>
            </button>
          </div>
        </div>
      </div>
</div>
      <div className="navigation">
        <div className="navi">
          <div className="nav-logo">
            <img src={menuIcon} alt="Menu" id="menu" className="nav-logo-item" onClick={togglePanel} />
            <img src={projectManagementIcon} alt="Logo" className="nav-logo-item nav-logo-image" />
            <p className="nav-logo-item nav-logo-text">CreateSnap</p>
          </div>
          <div className="nav-rest">
            <div className="nav-item">
              <img src={notificationIcon} alt="Notifications" className="noti-icon" onClick={toggleNotification} />
            </div>
            <div className="profile-image nav-item">
              <img src={kristina} alt="Profile" className="image" onClick={toggleProfile} />
            </div>
          </div>
        </div>
      </div>
      
      <div className="body">
      <div className={`app ${isPanelOpen || isNotificationOpen || isProfileOpen || isAddCourseVisible ? 'blur' : ''}`}> 
        <div className="courses-container">
          <div className="courses-heading course-item">
            <p className="main">Explore Career Paths</p>
          </div>
          <div className="filter-search course-item">
            <div className="search fs-item">
              <input
                type="text"
                name=""
                id=""
                placeholder="search courses"
                className="search-item searchbar"
              />
              <img src={searchIcon} alt="" className="search-icon search-item" />
            </div>
            <div className="filter fs-item">
              <button className="filter-btn" id="add-course-btn" onClick={toggleAddCourse}>
                Add
              </button>
            </div>
          </div>
          <div className="courses course-item">
            <div className="course-sets">
              <div className="course">
                <div className="course-banner">
                  <img src="../../assets/rsc/banner-1" alt="" className="banner" />
                </div>
                <div className="course-details">
                  <div className="course-author cd">
                    <img src='../../assets/rsc/author-1' alt="" className="author" />
                    <p>The Pragmatic Programmers</p>
                  </div>
                  <h3 className="course-name cd">
                    Fundamentals of Testing Using Rails
                  </h3>
                  <div className="diff-preview cd">
                    <div className="difficulty">
                      <p>Advanced</p>
                    </div>
                    <div className="preview">
                      <button className="preview-btn">Preview</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="course">
                <div className="course-banner">
                  <img src='../../assets/rsc/banner-2' alt="" className="banner" />
                </div>
                <div className="cds">
                  <div className="course-author cd">
                    <img src= '../../assets/rsc/author-2' alt="" className="author" />
                    <p>Alexandre Rousseau</p>
                  </div>
                  <h3 className="course-name cd">
                    Building your own API with Rails
                  </h3>
                  <div className="diff-preview cd">
                    <div className="difficulty">
                      <p>Beginner</p>
                    </div>
                    <div className="preview">
                      <button className="preview-btn">Preview</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="course">
                <div className="course-banner">
                  <img src='../../assets/rsc/banner-3' alt="" className="banner" />
                </div>
                <div className="course-details">
                  <div className="course-author cd">
                    <img src='../../assets/rsc/author-3' alt="" className="author" />
                    <p>Eric Gitonga</p>
                  </div>
                  <h3 className="course-name cd">
                    Develop Web Apps with Streamlit
                  </h3>
                  <div className="diff-preview cd">
                    <div className="difficulty">
                      <p>Beginner</p>
                    </div>
                    <div className="preview">
                      <button className="preview-btn">Preview</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="course">
                <div className="course-banner">
                  <img src='../../assets/rsc/banner-4' alt="" className="banner" />
                </div>
                <div className="course-details">
                  <div className="course-author cd">
                    <img src= '../../assets/rsc/author-4' alt="" className="author" />
                    <p>Francesco Leardini</p>
                  </div>
                  <h3 className="course-name cd">
                    Master the Deno JavaScript Runtime
                  </h3>
                  <div className="diff-preview cd">
                    <div className="difficulty">
                      <p>Beginner</p>
                    </div>
                    <div className="preview">
                      <button className="preview-btn">Preview</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="course">
                <div className="course-banner">
                  <img src='../../assets/rsc/banner-5' alt="" className="banner" />
                </div>
                <div className="course-details">
                  <div className="course-author cd">
                    <img src='../../assets/rsc/author-5' alt="" className="author" />
                    <p>Juan Bruno</p>
                  </div>
                  <h3 className="course-name cd">
                    Mastering Big Data with Apache Spark and Java
                  </h3>
                  <div className="diff-preview cd">
                    <div className="difficulty">
                      <p>Intermediate</p>
                    </div>
                    <div className="preview">
                      <button className="preview-btn">Preview</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="course">
                <div className="course-banner">
                  <img src='../../assets/rsc/banner-6'alt="" className="banner" />
                </div>
                <div className="course-details">
                  <div className="course-author cd">
                    <img src= '../../assets/rsc/author-6' alt="" className="author" />
                    <p>Raghav Aggarwal</p>
                  </div>
                  <h3 className="course-name cd">
                    A Programmer’s Guide to AWS S3
                  </h3>
                  <div className="diff-preview cd">
                    <div className="difficulty">
                      <p>Beginner</p>
                    </div>
                    <div className="preview">
                      <button className="preview-btn">Preview</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>



   </>
  )
}

export default Profile