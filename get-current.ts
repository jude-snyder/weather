const key = Bun.env["API_KEY"];

export type Res = {
    location: {
        name: string;
        country: string;
        localtime: string;
    };
    current: {
        temp_f: number;
        feelslike_f: number
        wind_mph: number
    };
}

export async function getCurrent(zip: string) {
    const res = await fetch(
        `https://api.weatherapi.com/v1/current.json?q=49508&key=${key}`,
  );

  if (!res.ok) {
    throw new Error(
        `Unable to fetch current weather - ${res.status}: ${res.statusText}`,
    );
  }

  return (await res.json()) as Res;
}