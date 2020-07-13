import React, { Component } from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';

class Posts extends Component {
    constructor(props){
        super(props);

        this.state = {
            error: null,
            isLoaded: false,
            posts: [] 
        };
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((Response) => Response.json())
            .then((posts) => {
                this.setState({
                    isLoaded: true,
                    posts: posts
                });
            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            });
    }

    render() {
        const {error, isLoaded, posts} = this.state;
        const userId = this.props.userId;

        var count = 0;
        count = posts.map((post) => {
           if(userId[0] === post.postId) {
               count ++;
           }
           return count;
        })

        if(error) {
            return(
                <div className="container">Error: {error.message}</div>
            )
        } else if(!isLoaded) {
            return(
                <div className="container">
                    <p color="primary">Please wait! Loading...</p>
                </div>
          )
        } else {
            
            return(
                <div className="allUsers">
                    <Navbar dark color="dark">
                        <div className="container">
                        <NavbarBrand href="/">Dolcera Assignment</NavbarBrand>
                        </div>
                    </Navbar>
                    <div className="container">
                        <h4 className="text-center mt-3 mb-3">List of all Comments by Users</h4>
                        <div className="row">

                        {count.map((comment)=> (
                            <p key={comment.id}>{comment.name}</p>
                        ))} 
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default Posts;
