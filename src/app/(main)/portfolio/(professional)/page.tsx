export default function Page() {
  return (
    <main className={"py-4"}>
      <div className={"mx-auto w-[60%] max-md:w-[90%] grid grid-rows-[auto,1fr] gap-2"}>
        <div className={"grid grid-cols-[auto,1fr] bg-base-300 rounded-box overflow-hidden"}>
          <div className={"mr-8 avatar"}>
            <div className={"size-32"}>
              <img src={"/assets?id=pavatar"} alt={"Avatar"} />
            </div>
          </div>
          <div className={"flex flex-col justify-center"}>
            <h2 className={"mb-1 text-xl font-bold"}>Dennise Catolos</h2>
            <p>Aspiring Technologist</p>
          </div>
        </div>
      </div>
    </main>
  );
}