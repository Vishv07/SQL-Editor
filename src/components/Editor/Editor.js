import React, { Component } from 'react'
import AceEditor from "react-ace";
import { Link } from "react-router-dom";
import { Row, Col,Table,Container} from "react-bootstrap";
import classes from "../Home/Home.module.css";
import { Button } from "atomize";
import logo from "../../assets/atlan.svg";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {data, delete_query, select_query, insert_query,update_query, newData} from "./data";
import "ace-builds/src-min-noconflict/ext-searchbox";
import "ace-builds/src-min-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/mode-jsx";
require(`ace-builds/src-noconflict/mode-sql`);
require(`ace-builds/src-noconflict/snippets/sql`);
require(`ace-builds/src-noconflict/theme-solarized_dark`);

export class Editor extends Component {

constructor(props){
    super(props);
    this.state ={
        resultQuery: data,
        query:select_query,
    }
}
handleInsert = () =>{
    this.setState({
        query:insert_query
    });
    // let id =Math.random().toFixed(2)*100;
    // const newww =  newData[id];
    const newUser = {   
        "id":6,
        "firstname":"jacob",
        "lastname":"Willy",
        "city":"Tokyo"
    };
    let newResultQuery = this.state.resultQuery;
    if(newResultQuery.length <=8){
    newResultQuery.push(newUser);
    this.setState({
        resultQuery:newResultQuery
    })
}
}
handleSelect = () =>{
    this.setState({
        query:select_query
    })
}
handleUpdate= () =>{
    this.setState({
        query:update_query
    })
let newResultQuery = this.state.resultQuery;
const objIndex = newResultQuery.findIndex(obj => obj.id === 1);
newResultQuery[objIndex].firstname = 'new firstname';
newResultQuery[objIndex].lastname = 'new lastname';
newResultQuery[objIndex].city = 'new city';

}
handleDelete= () =>{
    this.setState({
        query:delete_query
    })
    let newResultQuery = this.state.resultQuery;
    if(newResultQuery.length >= 2){
        newResultQuery.pop();
    }
}
    render() {
        return (
            <div style={{backgroundColor:"white",marginTop:"-20px"}}> 
                <Navbar>
                    <div className = {classes.home__navbar__brand}>
                        <Link to="/" style={{color:"#000", textDecoration: 'none'}}><img src={logo}  className = {classes.home__navbar__brand__logo} alt="atlan" />
                        </Link>
                        </div>
                        <div style={{ fontSize: "1.7rem", paddingTop: "10px", paddingRight: "30px"}} className="ml-auto">
                        <Nav>
                        <Nav.Link href="https://github.com/Vishv07/SQL-Editor" target="_blank">
                        <i className = {"fab fa-github " + classes.home__navbar__icons}></i>
                        </Nav.Link>
                        </Nav>
                    </div>
                </Navbar>
                <Container>
                    <Row>
                        <Col xs={6}>
                            <AceEditor
                                mode="sql"
                                theme="solarized_dark"
                                value={this.state.query}
                                fontSize={20}
                                style={{border:"3px solid #3157D3",maxHeight:"50vh"}}
                                // onChange={onChange}
                                name="UNIQUE_ID_OF_DIV"
                                editorProps={{ $blockScrolling: true }}
                            />
                        </Col>
                        <Col xs={6}>
                            <div  style={{maxHeight:"50vh",overflowY:"auto"}}>
                            <Table  bordered hover >
                                <thead>
                                    <tr>
                                    <th>id</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>city</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {this.state.resultQuery.map((data,idx) => {
                                    return (<tr>
                                        <td>{data.id}</td>
                                        <td>{data.firstname}</td>
                                        <td>{data.lastname}</td>
                                        <td>{data.city}</td>
                                        </tr>);
                                })}
                                 </tbody>
                                </Table>    
                            </div>
                        </Col>
                    </Row>
                    <Row>
                    <div style={{marginLeft:"30%",minHeight:"34vh"}} >
                            <br/>
                            <center>
                            <span style={{display:"flex",flexDirection: 'row'}}>
                                        <Button
                                            shadow="3"
                                            hoverShadow="4"
                                            m={{ r: "1rem" }}
                                            onClick = {()=>this.handleInsert()}
                                            className = {classes.query_button}
                                        >                   
                                           Insert   
                                        </Button>
                                        <Button
                                            shadow="3"
                                            hoverShadow="4"
                                            m={{ r: "1rem" }}
                                            onClick = {()=>this.handleSelect()}
                                            className = {classes.query_button}
                                        >                   
                                          Select
                                        </Button>
                                        <Button
                                            shadow="3"
                                            hoverShadow="4"
                                            m={{ r: "1rem" }}
                                            onClick = {()=>this.handleUpdate()}
                                            className = {classes.query_button}
                                        >                   
                                          Update  
                                        </Button>
                                        <Button
                                            shadow="3"
                                            hoverShadow="4"
                                            m={{ r: "1rem" }}
                                            onClick = {()=>this.handleDelete()}
                                            className = {classes.query_button}
                                        >                   
                                            Delete   
                                        </Button>
                                        </span>
                                 </center>
                            </div>
                    </Row>
                    </Container>
            </div>
        )
    }
}

export default Editor
