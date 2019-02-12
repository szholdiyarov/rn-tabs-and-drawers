# rn-tabs-and-drawers
A template to demonstrate one possible way to implement tabs and drawers on react-navigation

### Why?
I found myslef reiventing a wheel recently as I was thinking about how to construct architecture on a project which required me to 
implement bottom tabs and drawer on the same screen.

### How?
Here is the basic idea (from the top to the bottom) : 

1. App.js initializes a createAppContainer(drawerNavigator)
2. My drawer navigator holds a BottomTabNavigatorWrapper as the only screen. It is responsible to present an actual drawer.
3. BottomTabNavigatorWrapper is just a wrapper (** stack navigator ** ) above the bottom tab navigator
4. BottomTabNavigator.js is the most deepest navigator in the tree. It is responsible to present actual bottom tabs
