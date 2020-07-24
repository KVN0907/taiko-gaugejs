# taiko-gaugejs
POC On Taiko-Gauge with JS

Introduction to Taiko

Taiko is a free and open source browser automation tool built by the team behind Gauge from ThoughtWorks. 
Taiko is a Node.js library with a clear and concise API to automate Chromium based browsers(Chrome, Microsoft Edge, Opera). 
Tests written in Taiko are highly readable and maintainable.
Taiko’s smart selectors make tests reliable by adapting to changes in the structure of your web application. 
With Taiko there’s no need for id/css/xpath selectors or adding explicit waits (for XHR requests) in test scripts

Introduction to Gauge

Gauge is a free and open source framework for writing and running acceptance tests. Some of the key features of Gauge that makes it unique include:
Simple, flexible and rich syntax based on Markdown.
Consistent cross platform/language support for writing test code.
A modular architecture with plugins support
Extensible through plugins and hackable.
Supports data driven execution and external data sources
Helps you create maintainable test suites

Features of Taiko and Gauge

Taiko :

Smart Selectors : Proximity , Xpath, Css
Ability to handle XHR and dynamic content
Request/Response stubbing and mocking
Inbuilt wait mechanism
Device Emulator

Gauge:
Uses Markdown language for writing Spec Files
Uses Concepts for reusability 
Inbuilt Parallel Execution 
Date Store
Reusing scenarios with concepts
Lazy execution
In built reporting


Page Objects Flow With BDD

Installation and Execution

Pre requisite:
 VS-Code (Recommended as it has in built support for Gauge)
Add Gauge Plugin from VS code Market place

Execution:

gauge run specs- to run entire spec folder
gauge run specs/spec1.spec – to run a single spec 
gauge run –p specs – to run specs in parallel


