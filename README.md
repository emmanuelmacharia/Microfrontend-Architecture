# **Microfrontend Architecture**

This repo will contain two projects: <br /> 
 ## **ecomm:**
 A simple 'ecomm' project that introduuces the key concepts of microfrontends and modulefederation - This doesnt have any interaction, it simply contains three apps (microfrontends), each with distinct, and containing their own set of files dependencies and the premise of it all, is how to hook all three microfrontends at the mostt basic level.


 ## **Signon**
 Will be built primarily using React and Vue on the different Mcrofrontends


 ## **Architectural requirements and decisions**
 ### **Inflexible requirements**

1. **Zero coupling between child projects** -
    - No shared state
    - No importing of funtions/objects/classes etc
    - Shared libraries using ModuleFederation system is okay

 the less we couple the two projects together, the less we would be able break the different parts of the apps - This is why we need to run each projects in isolation.

 2. **Container shouldn't assume that the child is using a particular framework** - ie: Container should be framework agnostic.


Any necessary communication is going to be done with callbacks or simple event strucures. 
This means that we can have communication between the container and children, but no child to child communicatiion.

3. **CSS form one prooject shouldn't affect another**

Means that the css should only scoped to the project it's within.

4.**Version control (monorepo vs separate) shouldnt have any impact on the  overall project**

5. **Container should be able to decide to always use the latest version of a microfrontend or a specific version of a microfrontend**


## Deployment
### Requirements
1. We want to be able to deploy microfrontend independently (including the container)
2. Location of child app remoteEntry.js file must be known at ***build time***: We need to know exactly where the urls to the remoteentry files of the children when building the main container app; this is because, there's no way to find those files at runtime - therefore we need to know them beforehand
3. Many frontend apps assume you're deploying a single project - we need something somewhere that can handle multiple different ones
4. We need a CI/CD pipeline of some sort
5. At present, tthe remoteEntry.js file name is fixed; we need to think about caching issues; and where to find the correct files


### Deployment Workflow
- We currently have a single repository that conttains all our microfrontends; This is a Git Monorepo. You dont have to use a monorepo if you dont want to, you can use several repos for each subproject.

- We'll have a script in Github that checks whether there were any changes made to any of those projects- if changes were made, we'll have build pipelines to build each app separately for production using webpack.

- We'll finally use Amazon's S3 to deploy each microfrontend independently.

