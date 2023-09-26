# lib-management-frontend
This is the frontend of the library management system that is used by the librarian to do CRUD operations on books and members as well as issue and return a book. You can interact with the frontend locally or through the live page using [this link](https://lib-management-system.onrender.com).

1. The homepage is a page that shows functionalities of adding, searching, update, deleting, issuing and returning a book to and from the database:
![HomePage](https://github.com/nsa1im/lib-management-frontend/documentation/blob/main/homePage.png)

2. The members' page shows functionalities for adding, searching, update and deleting a member to and from the database:
![Members Page](https://github.com/nsa1im/lib-management-frontend/documentation/blob/main/membersPage.png)

3.The addBook page allows the librarian to enter a books' data into the database.
#
![a. Before entering into the database:](https://github.com/nsa1im/lib-management-frontend/documentation/blob/main/addBook.png)
![b. After entering into the database:](https://github.com/nsa1im/lib-management-frontend/documentation/blob/main/addBook(2).png)
![c. Entering the same details into the database brings out an error message:](https://github.com/nsa1im/lib-management-frontend/documentation/blob/main/addBook(3).png)

4. The searchBook page searches for the book with the title specified or the author specified and generates all the books from the database that corresponds to the query:
![](https://github.com/nsa1im/lib-management-frontend/documentation/blob/main/searchBook.png)

5. The updateBook page updates the quantities of the specified book in the database:
![](https://github.com/nsa1im/lib-management-frontend/documentation/blob/main/updateBook.png)

6. The deleteBook page deletes the book with the specified isbn from the database.
#
![a. After deleting the book:](https://github.com/nsa1im/lib-management-frontend/documentation/blob/main/deleteBook.png)
![b. Deleting a book that is not there generates an error message:](https://github.com/nsa1im/lib-management-frontend/documentation/blob/main/deleteBook(2).png)

7. The issuePage issues a book to a member:
![a. After issuing a book:](https://github.com/nsa1im/lib-management-frontend/documentation/blob/main/issueBook.png)
![b. Issuing with the same details again generates an error message because the issue is already there:](https://github.com/nsa1im/lib-management-frontend/documentation/blob/main/issueBook(2).png)

8. The returnPage returns a book from a student that has been issued and generates the number of days and fees from which the member took the book to when he returned it:
![a. After returning a book:](https://github.com/nsa1im/lib-management-frontend/documentation/blob/main/returnBook.png)
![b. Returning a book that is not issued generates an error message:](https://github.com/nsa1im/lib-management-frontend/documentation/blob/main/returnBook(2).png)

9.The addMember page allows the librarian to enter a members' data into the database.
#
![a. After entering into the database:](https://github.com/nsa1im/lib-management-frontend/documentation/blob/main/addMember.png)
![b. Entering the same details into the database brings out an error message:](https://github.com/nsa1im/lib-management-frontend/documentation/blob/main/addMember(2).png)

10. The searchMember page searches for the member with the first name or the last name specified and generates all the members from the database that corresponds to the query:
![](https://github.com/nsa1im/lib-management-frontend/documentation/blob/main/searchMember.png)

11. The updateMember page updates the names of the specified member in the database:
![](https://github.com/nsa1im/lib-management-frontend/documentation/blob/main/updateMember.png)

12. The deleteMember page deletes the member with the specified member ID from the database.
#
![a. After deleting the member:](https://github.com/nsa1im/lib-management-frontend/documentation/blob/main/deleteMember.png)
![b. Deleting a member that is not there generates an error message:](https://github.com/nsa1im/lib-management-frontend/documentation/blob/main/deleteMember(2).png)

## 1. Set up the project as follows:
Clone the repository to your local machine
#
Open the folder from within Visual Studio Code

## 2. Install the dependencies required by running the following commands:
npm install

## 3. Run the server file using the following command:
npm run dev

## 4. Open the following link in your browser:
http:localhost/5173
