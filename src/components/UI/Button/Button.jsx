import styled from "styled-components";
/*
* We are using styled components so that we get dynamically generated unique class names.
And our CSS does not affect other components, unlike regular CSS, if the same class name is used else where.

* Tagged template literal
TODO: Use & to add other pseudo classes/selectors in the CSS

*/

const Button = styled.button`
  width: 100%;
  font: inherit;
  padding: 0.5rem 1.5rem;
  border: 1px solid #8b005d;
  color: white;
  background: #8b005d;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
  cursor: pointer;

  // media query is used to apply styles for mobile devices etc.
  @media (min-width: 1000px) {
    width: auto;
  }

  &:focus {
    outline: none;
  }

  &:hover,
  &:active {
    background: #ac0e77;
    border-color: #ac0e77;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
  }
`;
// ! We won't need <button> anymore as styled components can generate and apply styles to all HTML elements
// const Button = (props) => {
//   return (
//     <button type={props.type} className="button" onClick={props.onClick}>
//       {props.children}
//     </button>
//   );
// };

export default Button;
