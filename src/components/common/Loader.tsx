import { createPortal } from "react-dom";

const Loader = () => {
  const loadermodalRoot = document.getElementById("loadermodalRoot");
  if (!loadermodalRoot) return null;
  return createPortal(
    <div className="z-50 fixed inset-0 bg-black/40 w-screen h-screen p-2 flex items-center align-middle justify-center">
      <div className="flex gap-3">
        <span className="loading loading-infinity loading-xl"></span>
      </div>
    </div>,
    loadermodalRoot,
  );
};

export default Loader;
