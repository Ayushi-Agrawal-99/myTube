const Button = ({name}) => {
    return(
        <div>
            <button className="bg-gray-200 px-2 mx-2 py-1 cursor-pointer font-medium m-4 rounded-lg text-sm">{name}</button>
        </div>
    )
}

export default Button;