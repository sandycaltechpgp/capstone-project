# capstone-project
CALTECH Full Stack Java Developer Capstone Project

A Food Develivery WebSite -- Foody !!

Project Objective:
Create a dynamic and responsive online food delivery web application for ordering food items of different cuisines from a restaurant.

Contains an Admin and an User portal.

Admin Portal Features:
1. Signup/SignIn
2. Add and Remove Cuisines 
3. Add and Remove Food Items 
4. Edit/Enable/Disable Food Items

User Portal Features:
1. SignUp/SignIn
2. Record All Activities of the User
3. Search food items based on keywords
4. Apply Filters on Search Results.
5. Add selected items to cart and customise order.
6. Pay for the order and receive an order summary.

======================================================================================================================================================

USING DOCKER TO RUN THE APP ON LOCALHOST:

BUILD THE DOCKER IMAGE WITH BELOW COMMAND:
$ docker build . -t foody:latest

RUN THE DOCKER IMAGE ON LOCALHOST

$ docker run -p80:80 -p8087:8087 foody:latest

ACCESS THE APP AT BELOW URL IN BROWSER:

URL: http://localhost/

======================================================================================================================================================

RUN THE APP ON LOCALHOST WITH BASH COMMANDS: (MAC/LINUX)


======================================================================================================================================================

