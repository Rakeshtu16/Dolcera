import React, { Component } from 'react';
import {Navbar, NavbarBrand, Table, Button} from 'reactstrap';
import {Link} from 'react-router-dom';

class AllUsers extends Component  {
    constructor(props) {
        super(props); 
    
        this.state = {
          error: null,
          isLoaded: false,
          users: []
        };
      }

      componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
          .then(Response => Response.json())
          .then((users) => {
            this.setState({
              isLoaded: true,
              users : users
            })
          }, 
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          });
      }
      
    render() {
        const {error, isLoaded, users} = this.state;
    
        if(error) {
          return(
            <div className="container">
              <p color="dark">Error: {error.message}</p>
            </div>
          )
        } else if(!isLoaded) {
          return(
            <div className="container">
              <p color="primary">Please wait! Loading...</p>
            </div>
          )
        } else {
          return (
            <div className="allUsers">
              <Navbar dark color="dark">
                <div className="container">
                  <NavbarBrand href="/">Dolcera Assignment</NavbarBrand>
                </div>
              </Navbar>
              <div className="container">
                  <h4 className="text-center mt-3 mb-3">List of all users</h4>
              <div className="row">
                <Table borderless>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>City</th>
                            <th>Posts</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td><a href={`/profile/${user.id}`}>{user.name}</a></td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>{user.address.city}</td>
                                <td><Link to={`/posts/${user.id}`}><Button outline color="primary" size="sm" onClick={this.onClickPost}>Posts</Button></Link></td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
              </div>
              </div>
            </div>
          );
        }
      }
}

export default AllUsers;