## Useful Scripts to run the project

- `npm install` - to install to the dependencies
- `npm run dev` - Starts the development server.
  This will serve the production build at [http://localhost:4173](http://localhost:4173).

- `npm run build` - Builds the project for production.

## Tasks Completed

### UI

- **Category Selection Page**: Users should be able to select a quiz category. Categories can be hardcoded into the frontend (e.g., "JavaScript Basics", "React Basics").
- **Quiz Page**:

  - After the user selects a category, the relevant questions should be loaded. -done
  - Display one question at a time with four multiple-choice options. - done
  - Implement a **10-second countdown timer** for each question. If the user doesn’t answer within the time limit, automatically move to the next question. - done
  - Users should be able to manually navigate to the next question before the timer expires using a "Next" button. - done

- **Score Calculation**:
  - After the last question is answered, calculate the final score. - done
  - Display the score and performance feedback (e.g., "Great job!" for a high score or "Keep practicing!" for a low score). - done
  - Provide the number of correct answers out of the total questions. - done

### Timer and Score Calculation

- **Timer Implementation**: Each question should have a **10-second timer**. If time runs out, automatically move to the next question. - done
- **Score Calculation**: The score should be based on correct answers. Display the score at the end of the quiz, showing:
  - Number of correct answers. - done
  - Number of unanswered questions. - done

### Nice to Have

- **Highlighting Correct/Incorrect Answers**: When a user selects an answer, it should be highlighted based on correctness (e.g., green for correct, red for incorrect), but no feedback should be shown after each question. - not done
