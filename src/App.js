import React from 'react';
import {Route, Link} from 'react-router-dom';

const App = () => (
  <div>
    <Header />
  </div>
);

const Header = () => (
  <header>
    <h1>My Contacts</h1>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/contacts">Contact</Link></li>
      </ul>
    </nav>
    <Route exact path="/" component={Welcome} />
    <Route path="/contacts" component={Contacts} />
  </header>
)

const Welcome = () => (
  <h1>Welcome to the best contacts app!</h1>
)

const Contacts = ({match}) => (
  <div>
    <ul>
      <li><Link to={"/contacts/lynn"}>Lynn</Link></li>
      <li><Link to={"/contacts/jisu"}>Jisu</Link></li>
      <li><Link to={"/contacts/guy"}>Guy</Link></li>
    </ul>
    <Route 
      exact 
      path={`${match.path}`} 
      render={()=><h3>Please select a contact</h3>} 
    />
    <Route 
      path={`${match.path}/:contactName`} 
      component={Contact}
    />
  </div>
)

const Contact = ({match})=>{
  console.log(match);
  return (
    <div>
      {`${match.params.contactName}의 정보`}
      <p><Link to={`${match.url}/detail`}>상세보기</Link></p>
      <Route 
        path={`${match.url}/detail`}
        component={Detail}
      />
    </div>
  );
}

const Detail=({match})=>{
  return <div>{`상세보기`}</div>;
}
export default App;
