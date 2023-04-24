export default function Checkbox(props) {
    return (
      <div>
        <div className="mb-3">
            <input
              type= "checkbox"
              className="
                text-base
                font-normal
                text-gray-700
                bg-myInputGray 
                "
              id={props.id}
            />
            <span className="pl-3">{props.option}</span>
        </div>
      </div>
    );
  }