1. Install all the required packages:

   ```bash
   npm install
   ```

2. Go to [Google Firebase Console](https://console.firebase.google.com/) and
create your own Firebase project

   * Disable Google Analytics

3. Select "Project Overview" from the left navigation panel then add a Web app
   * Enter the app nickname
   * Use the NPM instruction to add the Firebase SDK
   * Copy the Firebase configuration to `src/myconfig.ts`

      ```ts
      // In src/myconfig.ts
      export const firebaseConfig = {
         // details copied from Firebase dashboard
      }
      ```

4. Select "Firestore Database" from the left navigation bar

   * Click "Create Database"
   * Select "Start in test mode"
   * Select a cloud server location

5. Run the main function:

   ```bash
   npx nodemon src/main.ts
   ```
