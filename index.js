/* Build Check List 

[] Breakdown
[] Composition
[] API
[] Themeing
[] Accessibility
[] Unit Test
*/

/* Styled Components Reset */
export const GlobalStyle = createGlobalStyle`
  * {box-sizing: border-box}

  body { margin: 0 }

  h1, h2, h3, h4, h5, h6 { font-weight: normal }

  table
  {
   border-collapse: collapse;
   border-spacing: 0
  }

  th, td
  {
   text-align: left;
   vertical-align: top
  }

  img, iframe { border: 0 }
`

<ThemeProvider theme={}></Theme>

//Styled Function and Using It.
const flatButtonStyles = (colors) => css`
  background-color: ${colors.default.bg};
`

const StyledComp = styled.div`
  ${flatButtonsStyles(variable)}
   @media (min-width: 380px) {
    display: block;
  }
 `

const [value, setValue] = useState(defaultValue)

useEffect(() => {
  //do something everytime.
})

useEffect(() => {
  //do something first time and everytime id changes.
}, [id])

useEffect(() => {
  //do something first only.
}, [id])

//useReducer

const reducerFunction = (state, actionOrValue) => {
  //do something with the state, based on an action or value  
};

const [state, dispatch] = useReducer(reducerFunction, initialState);
dispatch(action)

// context
const Context = React.createContext(context)
const values = React.useContext(context)
<Context.Provider value={}></Context.Provider>

// Start Sweet Context
import React, { useState } from 'react'

const patientPanelDefaultValues = {

  //Routing
  baseURL: '',

  // Header   
  menuMode: 'default',
  menuBackLabel: 'Back',

  // Patient info
  patientInfo: null,
}

const PatientPanelContext = React.createContext(patientPanelDefaultValues)

export const PatientPanelContextProvider = ({ children, value }) => {

  const defaultValues = { ...patientPanelDefaultValues, ...value }

  const [values, setValues] = useState(defaultValues)

  const dispatch = (newValues) => {
    setValues({ ...values, ...newValues })
  }

  return (
    <PatientPanelContext.Provider
      value={{
        ...values,
        dispatch: dispatch
      }}
    >
      {children}
    </PatientPanelContext.Provider>
  )
}

export const usePatientPanelContext = () => {
  return React.useContext(PatientPanelContext)
}


//End Sweet Context 

 
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

