(function () {
  const endorseAll = async () => {
    Array.from(document.querySelectorAll("button")).forEach((btn) => {
      const spanText = btn.querySelector("span")?.textContent?.trim();
      if (spanText === "Endorse") btn.click();
    });
  };

  endorseAll();
})();
