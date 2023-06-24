const LanguagedLayout = (props:{
    children: React.ReactNode,
    modal: React.ReactNode
  }) => {
    return ( <>
        {props.modal}
        {props.children}
    </> );
}
 
export default LanguagedLayout;