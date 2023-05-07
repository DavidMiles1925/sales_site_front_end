# Demo Sales Site

## Project Link: [Project Link](https://davidmiles1925.github.io/sales_site_front_end/)

# Product Features:

# Developer Information:

## `App`:

**Developer Tools**

`DeveloperPanel` - React Component: A panel that appears just below the site header to aid with testing and development. It is meant to be a testing sandbox for new code.  
`devMode`/`setDevMode(bool)` - State: Enables/Disables developer panel. Value `true`: Enabled, `false`: Disabled  
`handleToggleLogic()` - Function: Toggles value of `isLoggedIn`.  
`handleToggleAdmin()` - Function: Toggles value of `isAdmin`.

**User Selections:**

`selectLogin()` - Function: Opens a modal for user login.  
`selectSignup()` - Function: Opens a modal for site registration.  
`selectCard()` - Function: Opens a preview modal when a user clicks on a card, such as a product card.

**Submission Handlers**

`handleLoginSubmit()` - Function:  
`handleSignUpSubmit()` - Function:  
`addToCart()` - Function: Adds/Removes a product from the `currentUser`'s `user.cart` array.

**Modal Logic**

## Custom Components Worth Noting:

### `SideBarMenu({ dropdownOptions })`:

This is a sidebar component used for user navigation. It is mobile ready, staying open by default on large screens and toggles open/closed on smaller screens. It is intended to be used in conjunction with a CardSection componenent such as `ProductSection`. Reuires `FilterContext` for passing information to CardSection.

**States**

`isOpen` - Responisible for controlling whether dropdown menu is open or closed.  
`setIsOpen(bool)`

**Functions**

`handleTopClick()` - Function: Opens/Closes Dropdown on mobile device. Sets `currentCategory` to `'all'`.  
`handleCategoryClick()` - Function: Sets `currentCategory` to value of `path`  
`handleResize()` - Function:

## Custom Utilities:

### `useFormAndValidation()`:

This is a custom hook to enable input validation in forms.

**States:**

`values` - Stores the values of input fields. Updated with `handleChange()`.  
`setValues({})` -
s
`errors`- Stores input validation errors returned by browser. Should be displayed in a `<span>` element underneath `<input>` field.  
`setErrors({})`

`isValid` - Will return `true` if the form is valid.  
`setIsValid(bool)`

**Functions:**

`handleChange(e)` - Should be called by `<input>`'s `onChange` attribute to update `values` when the user changes the input field.

`resetForm()` - Returns all states to their default values.

## Custom Contexts:

## Dependencies:

"@testing-library/jest-dom": "^5.16.5",  
"@testing-library/react": "^13.4.0",  
"@testing-library/user-event": "^13.5.0",  
"hashrouter": "^1.1.1",  
"history": "^5.3.0",  
"mongoose": "^7.0.1",  
"react": "^18.2.0",  
"react-dom": "^18.2.0",  
"react-router": "^6.11.1",  
"react-router-dom": "^5.3.4",  
"react-scripts": "5.0.1",  
"web-vitals": "^2.1.4"

## Dev Dependenies:

"@types/react-router-dom": "^5.3.3",  
"gh-pages": "^5.0.0"

## Versions

`node` v18.13.0  
`npm` v8.19.3

### Deployment

**`npm test`**

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

**`npm run build`**

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
