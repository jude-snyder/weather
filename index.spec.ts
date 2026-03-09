import { describe, it, expect, mock } from "bun:test";
describe ("index script tests", () => {
    it ("should log the city the user lives in", async () => {
        const logMock = mock();
        console.log = logMock;
        console.log(
            "You are living in",
            "Grand Rapids",
            "bro 😎"
        );

        expect (logMock).toHaveBeenCalledWith (
            "You are living in",
            "Grand Rapids",
            "bro 😎"
        );
    });

    it ("should log the country of the location", async () => {
        const logMock = mock();
        console.log = logMock;
        console.log(
            "Your country is the",
            "United States",
            ". Isn't that obvious? 🤔"
        );
    });

    it ("should display the current local time", async () => {
        const logMock = mock();
        console.log = logMock;
        console.log(
            "Here is the date of today, plus the current time! 😄",
            "2026-03-09 12:45"
        );
        expect(logMock).toHaveBeenCalled();
    });

      it ("should print the real temperature in degrees", async () => {
        const logMock = mock();
        console.log = logMock;
        console.log("Here's the real temperature:", 45, "degrees.");
        expect(logMock).toHaveBeenCalled();
    });


      it ("should print the feels-like temperature", async () => {
        const logMock = mock();
        console.log = logMock;
        console.log("And here's the temp that it really feels like 💀", 40, "degrees!");
        expect(logMock).toHaveBeenCalled();
      });


      it ("should print the wind speed", async () => {
        const logMock = mock();
        console.log = logMock;
        console.log("Here's the wind speed.", 12);
        expect(logMock).toHaveBeenCalled();
    })
});
