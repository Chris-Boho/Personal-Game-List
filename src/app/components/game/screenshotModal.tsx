import { useState } from "react";

type Props = {
  src: string;
};

export default function ScreenshotModal({ src }: Props) {
  return (
    <div className="flex items-center justify-center">
      <button
        onClick={() =>
          (
            document.getElementById(`my_modal_2_${src}`) as HTMLDialogElement
          ).showModal()
        }
      >
        <img
          src={src}
          className="rounded-lg border border-black"
          style={{
            maxWidth: "100%",
            maxHeight: "433px",
            width: "auto",
            height: "auto",
          }}
        />
      </button>
      <dialog id={`my_modal_2_${src}`} className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-circle btn-ghost btn-sm absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="text-lg font-bold">Media!</h3>
          <img src={src} className="rounded-lg" />
        </div>
        <form method="dialog" className="modal-backdrop">
          <button></button>
        </form>
      </dialog>
    </div>
  );
}