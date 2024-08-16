"use client";

export function showSearchModal() {
  const searchModal = document.getElementById("search-modal") as HTMLDialogElement;
  searchModal.showModal();
}

export default function SearchModal() {
  return (
    <dialog id={"search-modal"} className={"modal"}>
      <div className={"modal-box"}>
        <h3 className={"text-center text-lg"}>Coming Soon!</h3>
      </div>
      <form className={"modal-backdrop"} method={"dialog"}>
        <button type={"submit"}>Close</button>
      </form>
    </dialog>
  );
}