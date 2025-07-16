
const Button = (props) => {
  return (
    <>
    <a
        href={props.href}
        className="mt-8 inline-block px-10 py-3 rounded-full bg-teal-500 text-{#18181B} font-semibold tracking-wide hover:bg-teal-400 transition shadow-lg"
      >
        {props.text}
      </a>

    </>
  )
}

export default Button