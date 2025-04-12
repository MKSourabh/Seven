# Seven - The 7AM Clock

Seven is a minimalist timepiece that only rings once a day — at 7:00 AM. This project includes a frontend for user interaction and a backend to handle email submissions and store them in a text file.

---

## **Features**
- **Frontend**: A clean and responsive design with animations.
- **Backend**: Handles email submissions and saves them to a text file (`emails.txt`).
- **Interactivity**: Users can submit their email to join the waitlist.

---

## **How to Run the Project**

### **1. Prerequisites**
Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14 or higher)
- [MongoDB](https://www.mongodb.com/try/download/community)

---

### **2. Steps to Run**

#### **Option 1: Use the `.bat` File (Simplified)**
1. Double-click the `start_servers.bat` file located in the project directory:
   ```
   c:\Users\kiree\GitHub Projects\Seven\start_servers.bat
   ```
2. This will:
   - Start the MongoDB server (`mongod`).
   - Start the Node.js backend server (`node server.js`).

#### **Option 2: Manual Steps**

##### **Step 1: Start the MongoDB Server**
1. Open a terminal.
2. Run the following command to start the MongoDB server:
   ```bash
   "C:\Program Files\MongoDB\Server\8.0\bin\mongod.exe"
   ```
   - This starts the MongoDB server on the default port `27017`.

##### **Step 2: Start the Node.js Server**
1. Open a new terminal.
2. Navigate to the backend directory:
   ```bash
   cd c:\Users\kiree\GitHub Projects\Seven\backend
   ```
3. Install the required dependencies:
   ```bash
   npm install
   ```
4. Start the server:
   ```bash
   node server.js
   ```
   - The server will start on `http://localhost:5000`.

##### **Step 3: Open the Frontend**
1. Open the `index.html` file in your browser:
   ```
   c:\Users\kiree\GitHub Projects\Seven\index.html
   ```
2. Use the "Join the Waitlist" form to submit an email.

---

### **3. How to View Submitted Emails**
1. Open the `emails.txt` file located in the backend directory:
   ```
   c:\Users\kiree\GitHub Projects\Seven\backend\emails.txt
   ```
2. Each submitted email will be saved on a new line.

---

## **Project Structure**
```
Seven/
├── backend/
│   ├── server.js         # Backend server code
│   ├── package.json      # Node.js dependencies
│   ├── emails.txt        # File where submitted emails are saved
│   ├── start_servers.bat # Script to start MongoDB and backend server
├── css/
│   ├── styles.css        # Frontend styles
├── js/
│   ├── script.js         # Frontend interactivity
├── index.html            # Frontend HTML
├── README.md             # Project documentation
```

---

## **Endpoints**

### **POST /submit-email**
- **Description**: Saves an email to the `emails.txt` file.
- **Request Body**:
  ```json
  {
    "email": "example@example.com"
  }
  ```
- **Response**:
  - `200 OK`: Email saved successfully.
  - `400 Bad Request`: Email is missing.
  - `500 Internal Server Error`: Error saving email.

---

## **Troubleshooting**

### **1. Server Not Starting**
- Ensure all dependencies are installed:
  ```bash
  npm install
  ```

### **2. Emails Not Saving**
- Check if the `emails.txt` file exists in the backend directory.
- Ensure the backend server is running.

---

## **License**
This project is licensed under the MIT License.