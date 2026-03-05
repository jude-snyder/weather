
import { getCurrent } from "./get-current";

const data = await getCurrent("49508");
console.log("You are living in", data.location.name, "bro 😎");
console.log("Your country is the", data.location.country, ". Isn't that obvious? 🤔");
console.log("Here is the date of today, plus the current time! 😄", data.location.localtime);
console.log("Here's the real temperature:", data.current.temp_f);
console.log("And here's the temp that it really feels like 💀", data.current.feelslike_f);
console.log("Here's the wind speed. I'll leave it up to u to determine whether a tornado is coming 🌪️", data.current.wind_mph);
