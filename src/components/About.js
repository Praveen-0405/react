import { User, UserClass } from "./User";

const About = () => {
  return (
    <div>
      <h1>About Page</h1>
      <User name="Praveen Kumar(Functional)" />
      <br />
      <UserClass name="Praveen Kumar(Class)" />
    </div>
  );
};

export default About;
