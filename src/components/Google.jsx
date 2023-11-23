import { useEffect } from "react";



const TranslateComponent = () => {
  useEffect(() => {
    function googleTranslateElementInit() {
      if (window.google && window.google.translate) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: "en,es,fr,am",
            layout:
              window.google.translate.TranslateElement.InlineLayout.VERTICAL,
            autoDisplay: true,
          },
          "google_translate_element"
        );
      }
    }

    if (window.google && window.google.translate) {
      googleTranslateElementInit();
    }
  }, []);

  return (
    <div
      id="google_translate_element"
    ></div>
  );
};

export default TranslateComponent;
