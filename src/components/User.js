import React from "react";
import UserContext from "../utils/UserContext";

// functional based component
export const User = (props) => {
  const { name } = props;

  //   useEffect(() => {
  //     //api calls after component render

  //   return () =>{} // this used for componenetUnmould like in class based we use here as functional based compoenet
  //   }, []);

  return (
    <div className="user-card">
      <h1>This Code is Functional Based Component</h1>
      <h2>{name}</h2>
      <h3>Location : Hyderabad</h3>
      <h4>Contact : praveenkumarpathro123@gmail.com</h4>
    </div>
  );
};

// Class based component
export class UserClass extends React.Component {
  // constructor can be optional if it remove also it will be used in this.props it is applicable for props only
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      userData: {
        name: "",
        location: "",
      },
    };
  }

  async componentDidMount() {
    const gitHubApi = await fetch("https://api.github.com/users/Praveen-0405");

    const userData = await gitHubApi.json();

    this.setState({ userData: userData });
    // after component render like useEffect in functional component we use api calls here for class componenets
  }

  componentDidUpdate() {
    // after componentDidMount done this function called
  }

  componentWillUnmount() {
    // after the component is destoyed or component is changes to another component or navigates then this function called
  }

  render() {
    // const { name } = this.props;
    const { count, userData } = this.state;
    const { name, location, avatar_url } = userData;

    return (
      <div className="user-card">
        <h1>This Code is Class Based Component</h1>
        Logged User :
        <UserContext.Consumer>
          {({ userData }) => <h1>{userData}</h1>}
        </UserContext.Consumer>
        <h2>{name}</h2>
        <img src={avatar_url} />
        <h3>Location : {location}</h3>
        <h4>Contact : praveenkumarpathro123@gmail.com</h4>
        <div>
          Count : {count}
          <button
            className="btn btn-primary"
            onClick={() => {
              this.setState({
                count: count + 1,
              });
            }}
          >
            Add Count
          </button>
        </div>
      </div>
    );
  }
}

// export default User;
