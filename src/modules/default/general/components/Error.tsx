

interface IErrorMessage {
    children?: any,
    style?: any,
    error?: any
}

export default function Error({children, style, ...props}:IErrorMessage) {
    const styles={
        error:{
            color:"red"
        }
    }

  return (
    <div style={{...styles.error, ...style}} {...props}>{children}</div>
  )
}