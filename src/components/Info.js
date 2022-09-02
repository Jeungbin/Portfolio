const Info = () => {
  return (
    <>
      <div className="main-container">
        <section className="section-center">
          <div className="management-info-name">
            <div className="container-space">
              <div>
                <h1>
                  Yoshiko <br />
                  Management
                  <br /> Application
                </h1>
              </div>
              <div className="stack-info">
                <h4 className="stack-name">Stack</h4>
                <p className="stacks">
                  HTML, CSS, JavaScript,<br></br> NodeJS, Express, MongoDB
                </p>
              </div>
            </div>
          </div>

          <section className="detail-info">
            <div>
              <div className="first-question question">
                <i className="fa-solid fa-fire"></i>
                <h4>Background</h4>
              </div>
              <p className="first-answer answser">
                <span className="first-answer-span">For My Mother</span>
                <br></br>
                My mom runs a small academy. As the director of the academy, she
                manages students and teachers alone. It's a small academy, but
                there needs care a lot.<br></br> When the student started the
                class and whether the student was properly distributed according
                to the teacher. Students have different periods of paying
                tuition, so they should check every day and check when the class
                ends. It is difficult to manage even a small number of students
                alone.<br></br>
                So, I havs started to make this app for her.
              </p>
            </div>

            <div>
              <div className="second-question question">
                <i className="fa-solid fa-circle-check"></i>
                <h4>What Options Need In This App? </h4>
              </div>
              <div className="answser">
                <p className="minor-question">
                  0. Node and Express Basic Setting
                </p>

                <p className="minor-question">
                  1 . How does the manager manage users(students) effectively?
                </p>
                <p className=" answser">- I used table to organize user</p>
                <div className="minor-answer">
                  <i className="fa-solid fa-circle-check"></i>
                  <h5>Organize And Filter Users</h5>
                </div>
                <div className="img-container">
                  <img
                    src="img/filterExplain.svg"
                    className="explain-img"
                    alt=""
                  />
                </div>

                <div className="minor-answer">
                  <i className="fa-solid fa-circle-check"></i>
                  <h5>Create , Update, Delete Users</h5>
                </div>
                <div className="img-container">
                  <img
                    src="img/createExplain.png"
                    className="explain-img"
                    alt=""
                  />
                </div>

                <p className="minor-question">
                  2 . How does the manager check the teachers' schedule at once?
                </p>
                <p className=" answser">
                  - I used a scheduler so that the administrator could check the
                  users (student) at a glance. <br></br>- I made a different
                  scheduler for each teacher. Each scheduler contains users
                  (students) held by the person in charge.
                </p>
                <div className="minor-answer">
                  <i className="fa-solid fa-circle-check"></i>
                  <h5>Each person's scheduler</h5>
                </div>
                <div className="img-container">
                  <img className="moving-img" src="img/scudule.gif" alt="" />
                </div>

                <p className="minor-question">
                  3 . All user information is information that needs security.
                  How do you set up security?
                </p>
                <p className=" answser">
                  - I used the firebase to store manager's email and password.
                  If someone wants to access this website, his email and
                  password should be saved in firebase <br></br>- Only
                  authorized personnel (teachers, principals) are allowed
                  access. The mail and password of the article are stored in the
                  firebase.
                </p>
                <div className="minor-answer">
                  <i className="fa-solid fa-circle-check"></i>
                  <h5>Manager Access</h5>
                </div>
                <div className="img-container">
                  <img src="img/login.png" className="moving-img" alt="" />
                </div>
              </div>
            </div>
            <div>
              <div className="first-question question">
                <i class="fa-solid fa-person-digging"></i>
                <h4>Working on...</h4>
              </div>
              <p className="first-answer answser">
                Now I'm going to include the chat function.
              </p>
            </div>
          </section>
        </section>
      </div>
    </>
  );
};

export default Info;
