/* Build Check List 

[] Breakdown
[] Composition, Are there new Layout Components that I could use?
[] API
[] Themeing
[] Accessibility
[] Unit Test
*/


export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
  font-size: 16px;
}

*, *:before, *:after {
  box-sizing: inherit;
}

body, h1, h2, h3, h4, h5, h6, p, ol, ul {
  margin: 0;
  padding: 0;
  font-weight: normal;
}

ol, ul {
  list-style: none;
}

img {
  max-width: 100%;
  height: auto;
}
`

//USE STATE
const [value, setValue] = useState(defaultValue)

useEffect(() => {
  //do something everytime.
})

useEffect(() => {
  //do something first time and everytime id changes.
}, [value])

useEffect(() => {
  //do something first only.
}, [])

  const [data, setData] = useState({ hits: [] });

  useEffect(async () => {
    const result = await axios(
      'https://hn.algolia.com/api/v1/search?query=redux',
    );

    setData(result.data);
  }, []);


//componentForward Ref
const component = React.forwardRef(props, ref) => {

}


//AS USAGE
function Title(props) {
 const { as: Component, children } = props;
 return <Component className="title">{children}</Component>
}

Title.defaultProps = {
 as: 'h1',
};

export default Title;


//screenReaders have gotten better about puesdo content
<h1>
 <strong>label</strong>
 Main Heading
</h1>

//More Correct
<div role="doc-subtitle">Subheading</div>
[role="doc-subtitle"] { 
   //styles here
}

//useReducer
const reducerFunction = (state, actionOrValue) => {
  //do something with the state, based on an action or value  
};

const [state, dispatch] = useReducer(reducerFunction, initialState);
dispatch(action)


// Typescript Functional Component 
import React, { FC } from 'react'
import styled from 'styled-components'
import sx, { SxProp } from '../components/sx'
import { space, SpaceProps, position, PositionProps } from 'styled-system'

export interface ComponentProps extends PositionProps, SpaceProps, SxProp {
  someProp?: string;
  someCallBack(event: React.MouseEvent<HTMLButtonElement>)?: void;
  onChange?: (unknown) => void;
  clickFunction: () => void;
}

export const StyledComponent = styled.div<ComponentProps>`
    //Styles Here
    ${space}
    ${position}
    ${sx}
`

export const Component: FC<ComponentProps> = (props) => (
  <StyledComponent {...props}>{props.children}</StyledComponent>
)

Component.displayName = 'ComponentName'
Component.defaultProps = {
  someProp: '3'
}



//Make a Circle and Laysomething on top of it.
export const Circle = styled.div<AvatarProps>`
  display: inline-block;
  vertical-align: middle;
  position: relative;
  background-color: ${({ theme }) => theme.colors.brand.primary};
  border-radius: 50%;
  height: 18px;
  width: 18px;
`

export const Initials = styled.div<AvatarProps>`
  font-size: ${({ theme }) => theme.fontSizes[0]}px;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  left: 50%;
  position: absolute;
  top: 50%;
  color: ${({ theme }) => theme.colors.white}; //extract to a theme file
  transform: translate(-50%, -50%);
  ${space}
  ${position}
  ${sx}
`

//LEVEL
Level Parent:
align-items: center;
justify-content: space-between;
display: flex;

LevelItem-LEFTS
margin-left

LevelItem-RIGHT: 
margin-left: auto

//ELLIPSIS
white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

//LINE CLAMP
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical; 

//MEDIA QUERY
@media screen and (min-width: 480px) {
  body {
    background-color: lightgreen;
  }
}

//MEDIA QUERY
@media screen and (min-width: 480px) {

}

@media screen and (max-width: 900px) and (min-width: 600px) {
 
}


http://via.placeholder.com/1280x960


//USER REDUCER
  const [{ todos, todoCount }, dispatch] = useReducer(reducer, {
    todos: [],
    todoCount: 0
  });

function reducer(state, action) {
  switch (action.type) {
    case "add-todo":
      return {
        todos: [...state.todos, { text: action.text, completed: false }],
        todoCount: state.todoCount + 1
      };
    case "toggle-todo":
      return {
        todos: state.todos.map((t, idx) =>
          idx === action.idx ? { ...t, completed: !t.completed } : t
        ),
        todoCount: state.todoCount
      };poi
    default:
      return state;
  }
}

    var btnClass = classNames({
      btn: true,
      'btn-pressed': this.state.isPressed,
      'btn-over': !this.state.isPressed && this.state.isHovered
    });



 justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly | start | end | left | right

 align-items: stretch | flex-start | flex-end | center | baseline | first baseline | last baseline | start | end | self-start | self-end

//only on multipline
  align-content: flex-start | flex-end | center | space-between | space-around | space-evenly | stretch | start | end | baseline | first baseline | last baseline

  flex-grow
flex-shrink
flex-basis
align-self

onlyWidth:
flex-basis: auto;
flex-grow: 0;
flex-shrink: 0;

rest of space
flex-basis: auto;
flex-grow: 1;
flex-shrink: 1;
