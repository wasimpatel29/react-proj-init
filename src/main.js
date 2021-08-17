import React from 'react';
import Modal from './modal';
import './main.css';
import axios from 'axios';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            projectName: 'sample',
            build: 'Gradle',
            language: 'Java 8',
            dependencies: [],
            artifactory: 'some location',
            database: 'Oracle 12c',
            messaging: 'kafka',
            description: 'some description of the project',
            showModal: false
        };
        this.alertState = this.alertState.bind(this);
        this.handleShow = this.handleShow.bind(this);
        this.handleHide = this.handleHide.bind(this);
    }

    handleShow() {
        this.setState({showModal: true});
    }

    handleHide() {
        this.setState({showModal: false});
    }
    
    alertState() {

        // var instanceParams = {
        //     ImageId: 'ami-0d8d212151031f51c', 
        //     InstanceType: 't2.micro',
        //     MinCount: 1,
        //     MaxCount: 1
        //  };

        // var AWS = require('aws-sdk');
        // // AWS.config.loadFromPath('./config.json');
        // var ec2 = new AWS.EC2({apiVersion: '2021-06-21'});
        // var instancePromise = new AWS.EC2({apiVersion: '2016-11-15'}).runInstances(instanceParams).promise();

        // instancePromise.then(
        //     function(data) {
        //       console.log(data);
        //     }).catch(
        //       function(err) {
        //       console.error(err, err.stack);
        //     });

        const request = {
            "projectName":"test",
            "packageName":"com.cap.test",
            "projectDescripation":"demo project",
            "projectgroup":"com.cap",
            "artifactory":"",
            "language":"",
            "projectType":"war",
            "databaseType":"",
            "messaging":"",
            "springVersion": "2.5.0",
            "JavaVersion": "jdk11",
            "dependencies":[
            "SpringDataJDBC","OracleDriver","Lombok"
            ]
        };

        const headers = {
            "Content-Type": "multipart/form-data",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": "true"
        };

        const responseType = {
            "responseType": "arraybuffer"
        }

        axios.post(
             "http://ec2-18-189-11-11.us-east-2.compute.amazonaws.com:8080/app/gentemplate/v1",
             request, 
             {
                'responseType': 'arraybuffer',
                'headers': {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Credentials": "true"
                }
             })
        .then( response  => {
            // const downloadUrl = window.URL.createObjectURL(new Blob([response.data], {type:"application/zip"} ));
            const downloadUrl = window.URL.createObjectURL(new Blob([response.data], {type:"application/zip"}));
            const link = document.createElement('a');
            link.href = downloadUrl;
            link.setAttribute('download', 'template.zip'); //any other extension
            document.body.appendChild(link);
            link.click();
            // link.remove();
        })
        .catch(err => {
            console.log('in the log');
            console.log(err);
        });    
        
    }
    onProjectNameChange = e => {
        this.setState({
            projectName: e.target.value
        });
    }
    onLanguageRadioChange = e => {
        this.setState({
            language: e.target.value
        });
    }
    onBuildChange = e => {
        this.setState({
            build: e.target.value
        });
    }
    onArtifactoryChange = e => {
        this.setState({
            artifactory: e.target.value
        });
    }
    onDatabaseChange = e => {
        this.setState({
            database: e.target.value
        });
    }
    onMessagingChange = e => {
        this.setState({
            messaging: e.target.value
        });
    }
    onDescriptionChange = e => {
        this.setState({
            description: e.target.value
        });
    }
    onDependenciesChange = e => {
        let resilience4J = document.getElementById("Resilience4J");
        let dependenciesNew = [];
        if(resilience4J.checked === true) {
            dependenciesNew.push(resilience4J);
        }
        let actuator = document.getElementById("Actuator");
        if(actuator.checked === true) {
            dependenciesNew.push(actuator);
        }
        let springBoot = document.getElementById("Spring-Boot");
        if(springBoot.checked === true) {
            dependenciesNew.push(springBoot);
        }
        let springReactiveWeb = document.getElementById("Spring-Reactive-Web");
        if(springReactiveWeb.checked === true) {
            dependenciesNew.push(springReactiveWeb);
        }
        let springDataJPA = document.getElementById("Spring-Data-JPA");
        if(springDataJPA.checked === true) {
            dependenciesNew.push(springDataJPA);
        }
        this.setState({
            dependencies: dependenciesNew
        });
        dependenciesNew = [];
    }
    render() {
        const modal = this.state.showModal ? (
            <Modal>
                <div className="wrapper">
                    <div className="modal">
                        <div>
                            <input type="checkbox" id="Resilience4J" value="Resilience4J" onClick={this.onDependenciesChange}/>Resilience4J<br/>
                            <input type="checkbox" id="Actuator" value="Actuator" onClick={this.onDependenciesChange}/>Actuator<br/>
                            <input type="checkbox" id="Spring-Boot" value="Spring Boot" onClick={this.onDependenciesChange}/>Spring Boot<br/>
                            <input type="checkbox" id="Spring-Reactive-Web" value="Spring Reactive Web" onClick={this.onDependenciesChange}/>Spring Reactive Web<br/>
                            <input type="checkbox" id="Spring-Data-JPA" value="Spring Data JPA" onClick={this.onDependenciesChange}/>Spring Data JPA<br/>
                        </div>
                        <div>
                            <input type="button" class="capg-button capg-button-hover small-size margin-top-modal" value="Done" onClick={this.handleHide}/>
                        </div>
                    </div>
                </div>
            </Modal>
        ) : null; 
        return (
            <form>
            <link rel='stylesheet' id='all-css-0' href='https://www.capgemini.com/_static/??-eJx9jUEOgzAMBD9UYyqVA4eqbwnBUJckjmKjit83iAtVpV5XOzP4zsDJh3UkRa+KI6vhEMQvEHgormyotgVqIqemHi5YCS/JKBnmsM6cKjgDBafGHl4yKDpVssN33n94e1Lcuy7PVP0Mi8QsykZnxdH/085FMhWYpMSv9nmHqVRwtzzi/dr1bdvd2q7/AKaIX44=' type='text/css' media='all' />
            <div class="logo-head">    
            <img src="https://www.capgemini.com/wp-content/themes/capgemini-komposite/assets/images/logo.svg" alt="Capgemini Worldwide"/>
            </div>
            <p class="hero_title">
                Project initializer will help you build a template project based on the details.
            </p>
            <br/>
            <div class="page-conatiner">
            <div class="flex-container">
                <div name="project-metadata" class="div-space margin-right card_default card_default--hovered hover--grey card_default--grey">
                    <label class="content-header">Project Metadata</label>
                        <label class="label-project-metadata">Name</label>
                        <input type="text" class="project-metadata" onChange={this.onDescriptionChange}/>
                        <label class="label-project-metadata">Description</label> 
                        <input type="text" class="project-metadata" onChange={this.onDescriptionChange}/>
                        <label class="label-project-metadata">Group</label> 
                        <input type="text" class="project-metadata" onChange={this.onDescriptionChange}/>
                        <label class="label-project-metadata">Package Name</label> 
                        <input type="text" class="project-metadata" onChange={this.onDescriptionChange}/>
                        <label class="label-project-metadata">Artifact</label> 
                        <input type="text" class="project-metadata" onChange={this.onDescriptionChange}/>
                </div>
                <div class="flex-column">
                    <div name="language" class="card_default card_default--hovered hover--grey card_default--grey">
                        <label class="content-header">Language</label>
                        <div class="content-text">
                            <input type="radio" name="language" value="Java 8" onChange={this.onLanguageRadioChange} checked/>Java 8<br/>
                            <input type="radio" name="language" value="Kotlin" onChange={this.onLanguageRadioChange}/>Kotlin<br/>
                            <input type="radio" name="language" value="Groovy" onChange={this.onLanguageRadioChange}/>Groovy<br/>
                        </div>
                    </div>
                    <div name="project-type" class="margin-top card_default card_default--hovered hover--grey card_default--grey">
                        <label class="content-header ">Project Type</label>
                        <div class="content-text">
                            <input type="radio" name="build" value="Gradle" onChange={this.onBuildChange} checked/>Gradle<br/>
                            <input type="radio" name="build" value="Maven" onChange={this.onBuildChange}/>Maven<br/>
                        </div>
                    </div>
                </div>
            </div>
            <br/>
            <div class="flex-container">
                <div name="messaging" class="div-space margin-right card_default card_default--hovered hover--grey card_default--grey">
                    <label class="content-header">Messaging</label>
                    <div class="content-text">
                        <input type="radio" name="messaging" value="Kafka" onChange={this.onMessagingChange} checked/>Kafka<br/>
                        <input type="radio" name="messaging" value="RabbitMQ" onChange={this.onMessagingChange}/>RabbitMQ<br/>
                        <input type="radio" name="messaging" value="JMS" onChange={this.onMessagingChange}/>JMS<br/>
                        <input type="radio" name="messaging" value="ActiveMQ" onChange={this.onMessagingChange}/>ActiveMQ<br/>
                    </div>
                </div>
                <br/>
                <div name="database" class="div-space card_default card_default--hovered hover--grey card_default--grey">
                    <label class="content-header">Database</label>
                    <div class="content-text">
                        <input type="radio" name="database" value="Oracle 12c" onChange={this.onDatabaseChange} checked/>Oracle 12c<br/>
                        <input type="radio" name="database" value="Mongo DB" onChange={this.onDatabaseChange}/>Mongo DB<br/>
                        <input type="radio" name="database" value="MySql" onChange={this.onDatabaseChange}/>MySql<br/>
                        <input type="radio" name="database" value="DB2" onChange={this.onDatabaseChange}/>DB2<br/>
                    </div>
                </div>
            </div>
            <br/>
            <div class="flex-container">
                <div name="dependencies" class="div-space margin-right card_default card_default--hovered hover--grey card_default--grey">
                    <div class="content-text">
                        <input type="button" class="capg-button capg-button-hover small-size" value="Add Dependencies" onClick={this.handleShow}/>
                        {modal}
                            <ul>{this.state.dependencies.map((item, index) => <li key={index+1}>{index+1}. {item.value}</li>)}</ul>
                    </div>
                </div>
            </div>
            <br/>
                {this.state.showModal? <label class="dependencies-must">Please select dependencies</label> :
                    <input type="button" value="Submit" class="capg-button capg-button-hover" onClick={this.alertState}/>
                }
            </div>
            <div class="copyright">
                <p>All rights reserved by Capgemini. <span>Copyright &copy; 2020</span></p>
            </div>
        </form>
        );
    }
}

export default Main;