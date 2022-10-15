export default function userInput(props) {
  return (
    <div className="justify-start">
      <div className="mb-3 xl:w-96">
        <label
          htmlFor="exampleEmail0"
          className="form-label inline-block mb-2 text-gray-700 w-full"
        >
          {props.myLabel}
          <input
            type={props.type}
            className="
        form-control
        block
        w-11/12
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-myInputGray bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
            id={props.id}
          />
        </label>
      </div>
    </div>
  );
}
