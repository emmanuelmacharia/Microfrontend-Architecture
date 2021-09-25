import React from "react";
import MarketingApp from './components/MarketingApp'

/**
 * we use the mount function to ensure that our rule 2 
 * Where continer shouldnt assume that e child is using a particular framework 
 * Or that a child assumes that the container is using a particular framework
 * There isnt any tight coupling, thats why we export the mount function, and use the parent
 * To do this, we've created the MarketingApp component, and we're passing it the mount function through
 * the useRef and useEffect hooks; useEffect makes sure we dont remount the marketing app over and over 
 * while the useRef gives us access to use the mount function
 * This pattern can be used across frameworks whos function can export some sort of html elements; so we can use Angular, Vue and react using this pattern.
 * This is a good example of how we can use the mount function to ensure that our rule 2 isnt broken
 */

export default () => {
    return <div>
        <h1> Hi there! </h1>
        <hr />
        <MarketingApp />
    </div>
}