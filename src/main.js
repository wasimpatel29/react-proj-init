import React from 'react';
import './main.css';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            projectName: 'sample',
            build: 'Gradle',
            language: 'Java 8',
            dependencies: 'resilience',
            artifactory: 'some location',
            database: 'Oracle 12c',
            messaging: 'kafka',
            description: 'some description of the project'
        };
        this.alertState = this.alertState.bind(this);
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
        this.state.dependencies +
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
        this.setState({
            dependencies: e.target.value
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
        return (
            <form>
            <div class="logo-head">    
            <img src="https://www.capgemini.com/wp-content/themes/capgemini-komposite/assets/images/logo.svg" alt="Capgemini Worldwide"/>
            </div>
            <p class="hero_title">
                Project initializer will help you build a template project based on the details.
            </p>
            <br/>
            <div class="page-conatiner section--grey">
            <div name="project-name" class="div-space">
                <div>
                    <label class="content-header">Project Name</label>
                </div>
                <div class="content-text">
                    <input type="text" onChange={this.onProjectNameChange}/>
                </div>
            </div>    
            <br/>
            <div class="flex-container">
                <div name="language" class="div-space">
                    <label class="content-header">Language</label>
                    <div class="content-text">
                        <input type="radio" name="language" value="Java 8" onChange={this.onLanguageRadioChange}/>Java 8
                        <input type="radio" name="language" value="Kotlin" onChange={this.onLanguageRadioChange}/>Kotlin
                        <input type="radio" name="language" value="Groovy" onChange={this.onLanguageRadioChange}/>Groovy
                    </div>
                </div>
                <div name="project-type" class="div-space">
                    <label class="content-header ">Project Type</label>
                    <div class="content-text">
                        <input type="radio" name="build" value="Gradle" onChange={this.onBuildChange}/>Gradle
                        <input type="radio" name="build" value="Maven" onChange={this.onBuildChange}/>Maven
                    </div>
                </div>
            </div>
            <br/>
            <div class="flex-container">
                <div name="dependencies" class="div-space">
                    <label class="content-header">Dependencies</label>
                    <div class="content-text">
                        <input type="radio" name="dependencies" value="Resilience" onChange={this.onDependenciesChange}/>Resilience
                        <input type="radio" name="dependencies" value="Actuator" onChange={this.onDependenciesChange}/>Actuator
                        <input type="radio" name="dependencies" value="SpringBoot" onChange={this.onDependenciesChange}/>SpringBoot
                    </div>
                </div>
                <br/>
                <div name="database" class="div-space">
                    <label class="content-header">Database</label>
                    <div class="content-text">
                        <input type="radio" name="database" value="Oracle 12c" onChange={this.onDatabaseChange}/>Oracle 12c
                        <input type="radio" name="database" value="Mongo DB" onChange={this.onDatabaseChange}/>Mongo DB
                        <input type="radio" name="database" value="MySql" onChange={this.onDatabaseChange}/>MySql
                        <input type="radio" name="database" value="DB2" onChange={this.onDatabaseChange}/>DB2
                    </div>
                </div>
            </div>
            <br/>
            <div class="flex-container">
                <div name="messaging" class="div-space">
                    <label class="content-header">Messaging</label>
                    <div class="content-text">
                        <input type="radio" name="messaging" value="Kafka" onChange={this.onMessagingChange}/>Kafka
                        <input type="radio" name="messaging" value="RabbitMQ" onChange={this.onMessagingChange}/>RabbitMQ
                        <input type="radio" name="messaging" value="JMS" onChange={this.onMessagingChange}/>JMS
                        <input type="radio" name="messaging" value="ActiveMQ" onChange={this.onMessagingChange}/>ActiveMQ
                    </div>
                </div>
                <br/>
                <div name="artifactory-url" class="div-space">
                    <div>
                        <label class="content-header">Artifactory URL</label>
                    </div>
                    <div class="content-text">
                        <input type="text" onChange={this.onArtifactoryChange}/>
                    </div>
                </div> 
            </div>
            <br/>
            <div name="description">
                <label class="content-header">Description</label>
                <div class="content-text">
                    <textarea onChange={this.onDescriptionChange}/>
                </div>
            </div>
            <br/>
                <input type="Submit"  class="submit-button submit-button-hover" onClick={this.alertState}/>
            </div>
        </form>
        
        );
    }
}

export default Main;