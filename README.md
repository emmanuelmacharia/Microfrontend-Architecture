# **Microfrontend Architecture**

This repo will contain two projects: <br /> 
 ## **ecomm:**
 A simple 'ecomm' project that introduuces the key concepts of microfrontends and modulefederation - This doesnt have any interaction, it simply contains three apps (microfrontends), each with distinct, and containing their own set of files dependencies and the premise of it all, is how to hook all three microfrontends at the mostt basic level.


 ## **Signon**
 Will be built primarily using React and Vue on the different Mcrofrontends


 ## **Architectural requirements and decisions**
 ### **Inflexible requirements**

1. Zero coupling between child projects -
    - No shared state
    - No importing of funtions/objects/classes etc
    - Shared libraries using ModuleFederation system is okay

 the less we couple the two projects together, the less we would be able break the different parts of the apps - This is why we need to run each projects in isolation.

 2. Container shouldn't assume that the child is using a particular framework - ie: Container should be framework agnostic.


Any necessary communication is going to be done with callbacks or simple event strucures. 
This means that we can have communication between the container and children, but no child to child communicatiion.

3. CSS form one prooject shouldnt affect another

Means that the css should only scoped to the project it's within.

4. Version control (monorepo vs separate) shouldnt have any impact on the  overall project

5. Container should be able to decide to always use the latest version of a microfrontend or a specific version of a microfrontend
