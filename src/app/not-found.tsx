export default function NotFound() {
  return (
    <div className={"h-screen grid place-items-center bg-dark-forest bg-center"}>
      <div className={"frame"}>
        <div className={"text-center"}>
          <a className={"text-2xl font-bold"}>404</a>
          <div className={"text-gray-900"}>The page you are looking for does not exist.</div>
        </div>
      </div>
    </div>
  );
}