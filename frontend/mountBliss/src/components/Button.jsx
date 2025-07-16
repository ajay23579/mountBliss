
const Button = (props) => {
  return (
    <>
    <div className={`flex gap-2 items-center ${props.className}`}>
        {props.icon}
        <button>
            {props.text}</button>
    </div>

    </>
  )
}

export default Button