const InfoTwo = () => {
  return (
    <>
      <div className="main-container">
        <section className="section-center">
          <div className="management-info-name-two">
            <div className="container-space">
              <div>
                <h1>
                  Chat
                  <br />
                  Post
                  <br /> Application
                </h1>
              </div>
              <div className="stack-info">
                <h4 className="stack-name stack-name2">Stack</h4>
                <p className="stacks stacks2">
                  HTML, CSS, React,<br></br> NodeJS, Express, MongoDB
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
                I created this web to practice react, express inter action, and
                data management using mongodb.
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
                  1 . How do you configure the react component?
                </p>
                <p className=" answser">
                  - I planned the layout of the react components using a
                  diagram.
                </p>
                <div className="minor-answer">
                  <i className="fa-solid fa-circle-check"></i>
                  <h5>Organize the layout of React components</h5>
                </div>
                <div className="img-container">
                  <img src="img/diagram.png" className="explain-img" alt="" />
                </div>

                <div className="minor-answer">
                  <i className="fa-solid fa-circle-check"></i>
                  <h5>Create , Update, Delete Users</h5>
                </div>
                <div className="img-container">
                  <img src="img/register.png" className="explain-img" alt="" />
                </div>
                <div className="img-container">
                  <img
                    src="img/loginChat (1).png"
                    className="explain-img"
                    alt=""
                  />
                </div>

                <p className="minor-question">
                  2 . How does the user show the feeds and upload the feeds?
                </p>
                <p className=" answser">
                  - User can upload the feed to use this form. I connected this
                  app to MongoDB, so all the feed are saved in the database.
                </p>
                <div className="minor-answer">
                  <i className="fa-solid fa-circle-check"></i>
                  <h5>Upload form and live feeds</h5>
                </div>
                <div className="img-container">
                  <img className="moving-img" src="img/feed.png" alt="" />
                </div>

                <p className="minor-question">
                  3 . How can user access his own profile?
                </p>
                <p className=" answser">
                  - User can access his profile, and there are his some info and
                  feeds. He can edit his info in here.
                </p>
                <div className="minor-answer">
                  <i className="fa-solid fa-circle-check"></i>
                  <h5>User Access to Profile</h5>
                </div>
                <div className="img-container">
                  <img src="img/profile.png" className="moving-img" alt="" />
                </div>
              </div>
            </div>
            <div>
              <div className="first-question question">
                <i className="fa-solid fa-person-digging"></i>
                <h4>Working on...</h4>
              </div>
              <p className="first-answer answser">
                I'm Working on some minor bugs of database.
              </p>
            </div>
          </section>
        </section>
      </div>
    </>
  );
};

export default InfoTwo;
