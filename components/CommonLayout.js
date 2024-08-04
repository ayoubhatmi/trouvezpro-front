import NavBar from "./NavBar";

async function CommonLayout({ children, ...props }) {
  return (
    <div className="mx-auto max-w-7xl p-6 lg:px-8">
      <NavBar />
      <main>{children}</main>
    </div>
  );
}

export default CommonLayout;
