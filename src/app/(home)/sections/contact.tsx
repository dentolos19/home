export default function Contact() {
  return (
    <div className={"h-screen grid place-items-center bg-japanese-train bg-center"}>
      <div className={"frame"}>
        <div className={"text-center"}>
          <a className={"text-2xl font-bold"} href={"mailto:contact@dennise.me"}>
            contact@dennise.me
          </a>
          <div className={"text-gray-900"}>
            For any enquiries or feedback, please email me via the address shown above.
          </div>
        </div>
      </div>
    </div>
  );
}