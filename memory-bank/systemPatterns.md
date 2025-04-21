## System Patterns

### System Architecture:
The system architecture for the personal portfolio website with a portfolio assistant includes the following components:
- **Frontend**: Built using React and TypeScript, the frontend is responsible for rendering the user interface and handling user interactions.
- **Backend**: The backend is not explicitly mentioned, but it is assumed to handle any server-side logic and data management.
- **Robot Assistant**: Integrated into the frontend, the portfolio assistant provides interactive features to engage visitors.

### Key Technical Decisions:
- **Technology Stack**: The project uses React, TypeScript, and Tailwind CSS for the frontend. The backend technology is not specified.
- **State Management**: The state management approach is not specified, but it is assumed to be handled using React's state management libraries or context API.
- **Responsive Design**: The website is designed to be responsive, ensuring a consistent user experience across different devices.

### Design Patterns in Use:
- **Component-Based Architecture**: The frontend is built using a component-based architecture, allowing for reusable and modular code.
- **Context API**: Used for state management and sharing data across components.

### Component Relationships:
- **Pages**: The website includes several pages such as About, Creations, History, Projects, and Resume. Each page is a component that renders specific content.
- **UI Components**: The UI components are organized in the `src/components/ui` directory and include various reusable components like buttons, cards, and dialogs.
- **Context**: The `SpotlightContext` is used to manage the state related to the spotlight feature.
- **Hooks**: Custom hooks like `use-mobile` and `use-toast` are used to encapsulate reusable logic.
