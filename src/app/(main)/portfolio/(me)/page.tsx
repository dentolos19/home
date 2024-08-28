export default function Page() {
  return (
    <main className={"py-4"}>
      <div className={"mx-auto w-[60%] max-md:w-[90%]"}>
        <div className={"grid grid-cols-[auto,1fr] bg-base-300 rounded-box overflow-hidden"}>
          <div className={"mr-8 avatar"}>
            <div className={"size-24 md:size-32"}>
              <img src={"/assets?id=cavatar"} alt={"Avatar"} />
            </div>
          </div>
          <div className={"min-w-0 flex flex-col justify-center"}>
            <h2 className={"mb-1 font-bold text-xl truncate"}>Dennise Catolos</h2>
            <p className={"truncate"}>Aspiring Technologist</p>
          </div>
        </div>
      </div>
    </main>
  );
}