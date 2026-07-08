# Component Guidelines

Check this file before changing this project.

## Folder Roles

- `src/App.jsx`: Keep app-level composition and top-level tab state here.
- `src/components`: Keep reusable UI pieces and page-level sections here.
- `src/data`: Keep static display data such as tab labels, starter posts, and topics here.
- `src/hooks`: Keep reusable state and browser-storage logic here.
- `docs`: Keep project maintenance rules here.

## Component Rules

- If a UI pattern appears more than once, or is likely to grow, extract it into a component.
- Use role-based component names: `PageTabs`, `PostCard`, `PostList`, `SectionHeading`.
- Use `Page` suffix for page-level sections: `AboutPage`, `PostsPage`.
- Small display components should receive data through props.
- Static lists should live in `src/data`, not inside display components.
- Shared state logic should live in `src/hooks` when it can be reused or tested in isolation.

## Posts Feature Rules

- `PostsPage` owns the writing workspace flow: list tab, write tab, selected post, and edit mode.
- `useStoredPosts` owns post persistence through `localStorage`.
- `PostEditor` must support both create and edit flows.
- `RichTextEditor` owns rich body editing: text emphasis, font size, text color, and image upload.
- `PostDetail` should handle read view actions through props: back, edit, delete.
- `PostList` and `PostCard` should stay display-focused and avoid storage logic.
- Uploaded images are stored as data URLs inside the post body for now, because this site has no backend.

## Layout Rules

- Main page tabs stay below the page title and span the full page width.
- Do not move page tabs into the top-right header area.
- Cards are for real content groups such as posts, profile panels, and topic panels.
- On mobile, tabs may stack vertically, but text must not be clipped.

## Before Finishing

- Run `npm run build` after changing React structure.
- Run `npm run lint` after changing JSX or styles.
- Confirm new files follow the component/data/hook split above.
