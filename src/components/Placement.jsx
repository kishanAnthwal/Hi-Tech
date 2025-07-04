import "./placement.css";
const Placement = () => {
  return (
    <section className="placement flex_box justify_evenly">
      <div className="l_partners">
        <h3>Placement</h3>
        <p>our 100% placement assistance</p>
        <div className="flex_box flex_btn">
          <button className="call">Call Us</button>
          <button className="chat">Chat With Us</button>
        </div>
      </div>
      <div className="r_partners">
        <div className="grid-container ">
          <div className="box box1 ">
            <img src="images/1.webp" alt="" />
            <img src="images/2.webp" alt="" />
            <img src="images/3.webp" alt="" />
            <img src="images/4.webp" alt="" />

          </div>

          <div className="box box2 ">
            <h2>Hiring Partner</h2>
          </div>
          <div className="box box3">
            <strong>
              I specialize in creating interfaces for digital products.
            </strong>
            <br />
            Great design starts with values, communication & respect.
          </div>
          <div className="box box4">
            <img
              src="/images/placement-3.jpeg"
              alt="Profile"
              className="profile-img"
            />
            <p>
              Vlad Grama
              <br />
              Digital Product Designer
            </p>
          </div>
          <div className="box box5">
            Invincible under the sun.
            <br />
            vladgrama.com
          </div>
          <div className="box box6">
            <p>
              UI/UX
              <br />
              Prototyping
              <br />
              Visual Identity
              <br />
              Design Systems
              <br />
              Research
            </p>
          </div>
          <div className="box box7">
            Have a project in mind?
            <br />
            <strong>hello@vladgrama.com</strong>
          </div>
          <div className="box box8">
            <p>Process</p>
            <img
              src="/images/Placement-graph.png"
              alt="Graph"
              className="graph-img"
            />
            <p className="steps">
              discovery → strategy → concept → design → optimisation
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Placement;
