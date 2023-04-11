import Image from "next/image";

interface Props {
  onClose: (value: any) => void;
  error: boolean;
  errorMessage?: string;
}

function Modal(props: Props) {
  const { onClose, error, errorMessage } = props;

  return (
    <>
      {!error && (
        <div onClick={() => onClose(false)} className="modal-wrapper">
          <div onClick={(e) => e.stopPropagation()} className="cookiesContent">
            <button onClick={() => onClose(false)} className="close">
              ✖
            </button>
            <Image
              className="modal-img"
              src="/success.svg"
              alt="success"
              width={58}
              height={58}
            />
            <p className="modal-text">
              Your message have been succesfully sent!
              <br />I{"'"}ll answer it as soon as possible.
            </p>
          </div>
        </div>
      )}

      {error && (
        <div onClick={() => onClose(false)} className="modal-wrapper">
          <div onClick={(e) => e.stopPropagation()} className="cookiesContent">
            <button onClick={() => onClose(false)} className="close">
              ✖
            </button>
            <Image
              className="modal-img"
              src="/icons/error.svg"
              alt="error"
              width={58}
              height={58}
            />
            <p className="modal-text">{errorMessage}</p>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
