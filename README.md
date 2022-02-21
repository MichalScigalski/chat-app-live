# React Chat App with Firebase

## Instalation steps 🛠️

1. Copy repository
<pre><code>git clone https://github.com/MichalScigalski/reactChatApp.git
cd ./reactChatApp</code></pre>

<br>
2. Install required packages

<pre><code>npm install</code></pre>

<br>
3. Open App in Development mode

<pre><code>npm start
</code></pre>

If browser did't run, open it then go to https://localhost:3000/

<br><br />

## Setting Firebase 🔥

1. Open https://firebase.com/, login/register then create a project. <br />
2. Navigate to "Project settings" scroll to the bottom and click third option. <br /> <img height="150" src="https://user-images.githubusercontent.com/38386731/155026498-6650d1de-8848-4615-b45c-78889aa6d0f8.png">  <img height="150" src="https://user-images.githubusercontent.com/38386731/155028449-4d28b5af-6938-4d2b-8154-417eaa2f7c2d.png"><br />
3. Register App then copy content of variable called "firebaseConfig". <br />  <img height="150" src="https://user-images.githubusercontent.com/38386731/155026464-7f22d7fa-8202-4a73-9649-5dea3d22036f.png"><br />
4. Paste it in file: /src/firebase.js. <br><img height="200" src="https://user-images.githubusercontent.com/38386731/155027579-b79adef1-26d8-4e8e-b0e6-1db18f12dc04.png"> <br />
5. Back to firebase website, on the left nav bar click on the "Authentication" then turn on the Google provider. <br /> <img height="300" src="https://user-images.githubusercontent.com/38386731/155027267-783151b5-f876-41bc-911f-52346870e2f7.png"><br />
6. On the same nav bar go to "Firestore database" then create it with default settings, create new collection called "messages". <br /> <img height="300" src="https://user-images.githubusercontent.com/38386731/155027377-7c62611e-63a9-49de-8c27-cdd4da3b06e7.png"><br />

<b> That's all!</b>

# Preview
![chat](https://user-images.githubusercontent.com/38386731/155026284-e04bcc03-6853-4186-9b8e-dc962af48c59.png)
