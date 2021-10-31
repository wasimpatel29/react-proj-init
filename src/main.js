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
            showModal: false,
            projectType: 'war',
            packageName: 'com.cap.test',
            JavaVersion: 'jdk11',
            projectgroup: 'capgemini',
            springVersion:'2.5.0'
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
        const request = {
            "projectName":this.state.projectName,
            "packageName":this.state.packageName,
            "projectDescripation":this.state.description,
            "projectgroup":this.state.projectgroup,
            "artifactory":this.state.artifactory,
            "language":this.state.language,
            "projectType":this.state.projectType,
            "databaseType":this.state.database,
            "messaging":this.state.messaging,
            "springVersion":this.state.springVersion,
            "JavaVersion":this.state.JavaVersion,
            "dependencies":["SpringDataJDBC","OracleDriver","Lombok"]
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
            const downloadUrl = window.URL.createObjectURL(new Blob([response.data], {type:"application/zip"}));
            const link = document.createElement('a');
            link.href = downloadUrl;
            link.setAttribute('download', 'template.zip');
            document.body.appendChild(link);
            link.click();
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
    onDeployableChange = e => {
        this.setState({
            projectType: e.target.value
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
    onProjectGroupChange = e => {
        this.setState({
            projectgroup: e.target.value
        });
    }
    onPackageChange = e => {
        this.setState({
            packageName: e.target.value
        });
    }
    onArtifactoryChange = e => {
        this.setState({
            artifactory: e.target.value
        });
    }
    onDependenciesChange = e => {
        let dependenciesNew = [];
               let springDataJDBC = document.getElementById("SpringDataJDBC");
        if(springDataJDBC.checked === true) {
            dependenciesNew.push(springDataJDBC);
        }
        let oracleDriver = document.getElementById("OracleDriver");
        if(oracleDriver.checked === true) {
            dependenciesNew.push(oracleDriver);
        }
        let lombok = document.getElementById("Lombok");
        if(lombok.checked === true) {
            dependenciesNew.push(lombok);
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
                            <input type="checkbox" id="SpringDataJDBC" value="SpringDataJDBC" onClick={this.onDependenciesChange}/>SpringDataJDBC<br/>
                            <input type="checkbox" id="OracleDriver" value="OracleDriver" onClick={this.onDependenciesChange}/>OracleDriver<br/>
                            <input type="checkbox" id="Lombok" value="Lombok" onClick={this.onDependenciesChange}/>Lombok<br/>
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
                        <input type="text" class="project-metadata" onChange={this.onProjectNameChange}/>
                        <label class="label-project-metadata">Description</label> 
                        <input type="text" class="project-metadata" onChange={this.onDescriptionChange}/>
                        <label class="label-project-metadata">Group</label> 
                        <input type="text" class="project-metadata" onChange={this.onProjectGroupChange}/>
                        <label class="label-project-metadata">Package Name</label> 
                        <input type="text" class="project-metadata" onChange={this.onPackageChange}/>
                        <label class="label-project-metadata">Artifact</label> 
                        <input type="text" class="project-metadata" onChange={this.onArtifactoryChange}/>
                </div>
                <div class="flex-column">
                    <div name="language" class="card_default card_default--hovered hover--grey card_default--grey">
                        <label class="content-header">Language</label>
                        <div class="content-text">
                            <input type="radio" name="language" value="Java 8" onChange={this.onLanguageRadioChange} checked/>Java 8<br/>
                            <input type="radio" name="language" value="Java 11" onChange={this.onLanguageRadioChange} />Java 11<br/>
                            <input type="radio" name="language" value="Java 17" onChange={this.onLanguageRadioChange} />Java 17<br/>
                            <input type="radio" name="language" value="Kotlin" onChange={this.onLanguageRadioChange} disabled="true"/><label class="content-text-disabled">Kotlin</label><br/>
                            <input type="radio" name="language" value="Groovy" onChange={this.onLanguageRadioChange} disabled="true"/><label class="content-text-disabled">Groovy</label><br/>
                        </div>
                    </div>
                    <div name="project-type" class="margin-top card_default card_default--hovered hover--grey card_default--grey">
                        <label class="content-header ">Project Type</label>
                        <div class="content-text">
                            <input type="radio" name="build" value="Gradle" onChange={this.onBuildChange} checked/><label >Gradle</label><br/>
                            <input type="radio" name="build" value="Maven" onChange={this.onBuildChange} disabled="true"/><label class="content-text-disabled">Maven</label><br/>
                        </div>
                    </div>
                    <div name="deployable-type" class="margin-top card_default card_default--hovered hover--grey card_default--grey">
                        <label class="content-header ">Deployable Type</label>
                        <div class="content-text">
                            <input type="radio" name="deployable" value="war" onChange={this.onDeployableChange} checked/><label >.war</label><br/>
                            <input type="radio" name="deployable" value="jar" onChange={this.onDeployableChange} disabled="true"/><label class="content-text-disabled">.jar</label><br/>
                        </div>
                    </div>
                </div>
            </div>
            <br/>
            <div class="flex-container">
                <div name="messaging" class="div-space margin-right card_default card_default--hovered hover--grey card_default--grey">
                    <label class="content-header">Messaging</label>
                    <div class="content-text">
                        <input type="radio" name="messaging" value="ActiveMQ" onChange={this.onMessagingChange} checked /><label>ActiveMQ</label><br/>
                        <input type="radio" name="messaging" value="Kafka" onChange={this.onMessagingChange} disabled="true" /><label class="content-text-disabled">Kafka</label><br/>
                        <input type="radio" name="messaging" value="RabbitMQ" onChange={this.onMessagingChange} disabled="true" /><label class="content-text-disabled">RabbitMQ</label><br/>
                        <input type="radio" name="messaging" value="JMS" onChange={this.onMessagingChange} disabled="true" /><label class="content-text-disabled">JMS</label><br/>
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
            <div class="flex-container">
                <div name="messaging" class="div-space margin-right card_default card_default--hovered hover--grey card_default--grey">
                    <label class="content-header">Type of Microservice</label>
                    <div class="content-text">
                        <input type="radio" name="typeOfMicroservice" value="Rest" checked/>Rest<br/>
                        <input type="radio" name="typeOfMicroservice" value="Reactive" disabled="true" /><label class="content-text-disabled">Reactive</label><br/>
                    </div>
                </div>
                <br/>
                <div name="database" class="div-space card_default card_default--hovered hover--grey card_default--grey">
                    <label class="content-header">Platform</label>
                    <div class="content-text">
                        <input type="radio" name="platform" value="On Premises" checked/><label >On Premises</label><br/>
                        <input type="radio" name="platform" value="PCF" disabled="true" /><label class="content-text-disabled">PCF</label><br/>
                        <input type="radio" name="platform" value="AWS" disabled="true" /><label class="content-text-disabled">AWS</label><br/>
                        <input type="radio" name="platform" value="Azure" disabled="true" /><label class="content-text-disabled">Azure</label><br/>
                        <input type="radio" name="platform" value="GCP" disabled="true" /><label class="content-text-disabled">GCP</label><br/>
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
                    <input type="button" value="Generate" class="capg-button capg-button-hover" onClick={this.alertState}/>
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