How to run web application
(Assuming running computer has ReactJS, NodeJS, Express with Bootstrap components installed)

1)	Install XAMPP Server on local computer to run web application with local server. Open XAMPP software and press “start”. Afterwards, go to services tab and select “Apache” and “MySQL” press start.
 
2)	Install MySQL Workbench to check data manipulation. Create new schema “Hero” and add table named “heroes”. Create table columns using the specs shown in image below 

3)	Open backend->config->db.js file from VSC and change user, password and database to set it properly. 

4)	Change directory to backend using VSC terminal and execute “nodemon index.js” in terminal. It will start the local server.
 
5)	Create another terminal in VSC and execute “npm start” to run frontend of web application.
 
6)	Search superhero name in search bar. It will fetch superhero data from www.superheroapi.com API with image and statistics. 
 
7)	Save the search superhero using save button and it will save superhero data in MySQL with its attributes.
 
8)	Press “download heroes” to fetch saved heroes from MySQL database. Where you will be able to edit stats after pressing edit button. User can enter “INT” or numeric value in field and press update to update in MySQL database. Press “edit” again to toggle hide input fields.

*****************************************************************************
-> SEPARATE MS WORD FILE IS IN PROJECT FOLDER TO UNDERSTAND BETTER WITH IMAGES.

-> UPLOADED FOLDER IS WITHOUT NODE MODULES 
