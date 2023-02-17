import { useEffect } from "react";
const DevFolioButton = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <>
      <div
        className="apply-button"
        data-hackathon-slug="phcet"
        data-button-theme="light"
      ></div>
    </>
  );
};

export default DevFolioButton;
