# Cross-site-scripts

This repository has been created to provide an environment for working on issues arising on our syndicated tools embedded on partner sites. 

## Third party cookies are blocked in content embedded in an iFrame

This currently affects users viewing a MAS tool embedded on a partner site with Safari, though other browsers will adopt this in the future. This causes a number of our tools to become unusable as they require these cookies to persist data during the journey through the tool.

One approach to deal with this that we are trying out here is to implement the Storage Access API to determine if this is an issue for the user and if so to render a link to the tool separate from the parner site. This is documented in [TP11920](https://maps.tpondemand.com/entity/11920-credit-card-calculator-implement-the-storage).
