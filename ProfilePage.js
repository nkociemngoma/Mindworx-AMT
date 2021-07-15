import "./ProfilePage.css";
import loginImg from "../mindworx-logo.png";

const ProfilePage = () => {
  return (
    <form>
      <div className="base-container">
        <div className="content">
          <span></span>
          <div className="image">
            <img src={loginImg} alt="Mindworx logo" />
          </div>
          <div className="form">
            <div className="form-group1">
              <div className="name">
                <label htmlFor="name">Name: </label>
                <input type="text" name="name" placeholder="name" />
              </div>
              <div className="surname">
                <label htmlFor="surname">Surname: </label>
                <input type="text" name="surname" placeholder="surname" />
              </div>
            </div>
            <div className="form-group2">
              <label htmlFor="gender">Gender: </label>
              <input type="text" name="gender" placeholder="gender" />

              <label htmlFor="Address">Address: </label>
              <input type="text" name="Address" placeholder="Address" />
            </div>
            <div className="form-group3">
              <label htmlFor="ID">ID no: </label>
              <input type="text" name="ID" placeholder="ID" />

              <label htmlFor="Programme">Programme: </label>
              <input type="text" name="Programme" placeholder="Programme" />
            </div>
            <div className="form-group4">
              <label htmlFor="Nextofkin"> Next of kin: </label>
              <input type="text" name="Programme" placeholder="Next of kin" />
            </div>
            <div className="form-group5">
              <button type="submit" value="Profile" className="btn">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ProfilePage;
