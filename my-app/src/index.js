import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import * as serviceWorker from './serviceWorker';
import Calculator from './Calculator';
import FilterableProductTable from './Thinking'; 

function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}
  
const user = {
    firstName: 'Harper',
    lastName: 'Perez'
};


function getGreeting(user) {
    if (user) {
        return <h1>Hello, {formatName(user)}!</h1>;
    }
    return <h1>Hello, Stranger.</h1>;
}


  class Clock extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            comments: [],
            date: new Date()
          };
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
          );

    }
  
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
          date: new Date()
        });

        this.setState((state, props) => ({
            counter: state.counter + props.increment
          }));
      }

    render() {
      return (
        <div>
          <FormattedDate date={this.state.date}/>
        </div>
      );
    }
  }

  function FormattedDate(props) {
    return <h2>It is {props.date.toLocaleTimeString()}.</h2>;
  }

  function ActionLink() {
    function handleClick(e) {
      e.preventDefault();
      console.log('The link was clicked.');
    }
  
    return (
        <div>
      <a href="#" onClick={handleClick}>
        Click me
      </a>
        </div>
    );
  }

  class Toggle extends React.Component {
    constructor(props) {
      super(props);
      this.state = {isToggleOn: true};
  
      // This binding is necessary to make `this` work in the callback
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick() {
      this.setState(state => ({
        isToggleOn: !state.isToggleOn
      }));
    }
  
    render() {
      return (
          <div>
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>
        </div>
      );
    }
  }

  class LoggingButton extends React.Component {
    // This syntax ensures `this` is bound within handleClick.
    // Warning: this is *experimental* syntax.
    handleClick = () => {
      console.log('this is:', this);
    }

  
    render() {

      return (
      <div>
        <button onClick={this.handleClick}>
          Click me
        </button>
        </div>
      );
    }

  }

  function App() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <Clock />
        <Clock />
        <Clock />
        <ActionLink />
        <Toggle />
        <LoggingButton />
      </div>
    );
  }

//   ReactDOM.render(<App />, document.getElementById('root'));

  function UserGreeting(props) {
    return <h1>Welcome back!</h1>;
  }
  
  function GuestGreeting(props) {
    return <h1>Please sign up.</h1>;
  }

  function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
      return <UserGreeting />;
    }
    return <GuestGreeting />;
  }
  
//   ReactDOM.render(
//     // Try changing to isLoggedIn={true}:
//     <Greeting isLoggedIn={false} />,
//     document.getElementById('root')
//   );

  function LoginButton(props) {
    return (
      <button onClick={props.onClick}>
        Login
      </button>
    );
  }
  
  function LogoutButton(props) {
    return (
      <button onClick={props.onClick}>
        Logout
      </button>
    );
  }

  class LoginControl extends React.Component {
    constructor(props) {
      super(props);
      this.handleLoginClick = this.handleLoginClick.bind(this);
      this.handleLogoutClick = this.handleLogoutClick.bind(this);
      this.state = {isLoggedIn: false};
    }
  
    handleLoginClick() {
      this.setState({isLoggedIn: true});
    }
  
    handleLogoutClick() {
      this.setState({isLoggedIn: false});
    }
  
    render() {
      const isLoggedIn = this.state.isLoggedIn;
      let button;
  
      if (isLoggedIn) {
        button = <LogoutButton onClick={this.handleLogoutClick} />;
      } else {
        button = <LoginButton onClick={this.handleLoginClick} />;
      }
  
      return (
        <div>
          <Greeting isLoggedIn={isLoggedIn} />
          {button}
        </div>
      );
    }
  }
  
//   ReactDOM.render(
//     <LoginControl />,
//     document.getElementById('root')
//   );

  function Mailbox(props) {
    const unreadMessages = props.unreadMessages;
    return (
      <div>
        <h1>Hello!</h1>
        {unreadMessages.length > 0 &&
          <h2>
            You have {unreadMessages.length} unread messages.
          </h2>
        }
      </div>
    );
  }
  
  const messages = ['React', 'Re: React', 'Re:Re: React'];
  ReactDOM.render(
    <Mailbox unreadMessages={messages} />,
    document.getElementById('root')
  );

//   render() {
//     const isLoggedIn = this.state.isLoggedIn;
//     return (
//       <div>
//         The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.
//       </div>
//     );
//   }

//   render() {
//     const isLoggedIn = this.state.isLoggedIn;
//     return (
//       <div>
//         {isLoggedIn ? (
//           <LogoutButton onClick={this.handleLogoutClick} />
//         ) : (
//           <LoginButton onClick={this.handleLoginClick} />
//         )}
//       </div>
//     );
//   }

function WarningBanner(props) {
    if (!props.warn) {
      return null;
    }
  
    return (
      <div className="warning">
        Warning!
      </div>
    );
  }
  
  class Page extends React.Component {
    constructor(props) {
      super(props);
      this.state = {showWarning: true};
      this.handleToggleClick = this.handleToggleClick.bind(this);
    }
  
    handleToggleClick() {
      this.setState(state => ({
        showWarning: !state.showWarning
      }));
    }
  
    render() {
      return (
        <div>
          <WarningBanner warn={this.state.showWarning} />
          <button onClick={this.handleToggleClick}>
            {this.state.showWarning ? 'Hide' : 'Show'}
          </button>
        </div>
      );
    }
  }
  
  ReactDOM.render(
    <Page />,
    document.getElementById('root')
  );

const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) =>
<li>{number}</li>
);

// ReactDOM.render(
//     <ul>{listItems}</ul>,
//     document.getElementById('root')
//   );

  function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
      <li key={number.toString()}>
        {number}
      </li>
    );
    return (
      <ul>{listItems}</ul>
    );
  }
  
  const numbers2 = [1, 2, 3, 4, 5];
  ReactDOM.render(
    <NumberList numbers={numbers2} />,
    document.getElementById('root')
  );

  const todos = [{id:1, text: "one"},{id:2, text:"two"}]
  const todoItems = todos.map((todo) =>
  <li key={todo.id}>
    {todo.text}
  </li>
);

// const todoItems = todos.map((todo, index) =>
//   // Only do this if items have no stable IDs
//   <li key={index}>
//     {todo.text}
//   </li>
// );

function ListItem(props) {
    // Correct! There is no need to specify the key here:
    return <li>{props.value}</li>;
  }
  
  function NumberList2(props) {
    const numbers = props.numbers;
    return (
        <ul>
        {numbers.map((number) =>
          <ListItem key={number.toString()}
                    value={number} />)}
      </ul>
    );
  }
  
  const numbers3 = [1, 2, 3, 4, 5];
  ReactDOM.render(
    <NumberList2 numbers={numbers3} />,
    document.getElementById('root')
  );


  function Blog(props) {
    const sidebar = (
      <ul>
        {props.posts.map((post) =>
          <li key={post.id}>
            {post.title}
          </li>
        )}
      </ul>
    );
    const content = props.posts.map((post) =>
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.content}</p>
      </div>
    );
    return (
      <div>
        {sidebar}
        <hr />
        {content}
      </div>
    );
  }
  
  const posts = [
    {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
    {id: 2, title: 'Installation', content: 'You can install React from npm.'}
  ];
  ReactDOM.render(
    <Blog posts={posts} />,
    document.getElementById('root')
  );







  ReactDOM.render(
    <Calculator />,
    document.getElementById('root')
  );

  ReactDOM.render(
    <FilterableProductTable />,
    document.getElementById('root')
  );

serviceWorker.unregister();
