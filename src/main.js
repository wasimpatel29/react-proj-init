import React from 'react';
import Modal from './modal';
import './main.css';

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
        var print = 
        "Project name:" +
        this.state.projectName + 
        "\n Build:" +
        this.state.build +
        " Language:" +
        this.state.language +
        "\n Dependencies:" +
        this.state.dependencies.map(item => item.value) +
        "\n Artifactory:" +
        this.state.artifactory +
        "\n Database:" +
        this.state.database +
        "\n Messaging:" +
        this.state.messaging +
        "\n Description:" +
        this.state.description
        alert(print);
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
    onDependenciesChange = e => {
        let dependenciesNew = [...this.state.dependencies];
        dependenciesNew.push({value: e.target.value});
        this.setState({
            dependencies: dependenciesNew
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
    render() {
        const modal = this.state.showModal ? (
            <Modal>
                <div className="wrapper">
                    <div className="modal">
                        <input type="checkbox" name="dependencies" value="Resilience" onChange={this.onDependenciesChange}/>Resilience<br/>
                        <input type="checkbox" name="dependencies" value="Actuator" onChange={this.onDependenciesChange}/>Actuator<br/>
                        <input type="checkbox" name="dependencies" value="SpringBoot" onChange={this.onDependenciesChange}/>SpringBoot<br/>
                        <input type="button" onClick={this.handleHide} value="Hide Modal" />
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
                    <label class="content-header">Dependencies</label>
                    <div class="content-text">
                        <input type="button" onClick={this.handleShow} value="Add Dependencies"/>
                        {modal}
                        {/* <ul>
                            {this.state.dependencies.map(item => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul> */}
                    </div>
                </div>
            </div>
            <br/>
                {this.state.showModal? <label class="dependencies-must">Please select dependencies</label> :
                    <input type="Submit"  class="submit-button submit-button-hover" onClick={this.alertState}/>
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