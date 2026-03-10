import { describe, it, expect, mock } from "bun:test";
import { getCurrent } from "./get-current";

const fakeResponse = {
    location: {name: "Grand Rapids", country: "USA", localtime: "2026-03-09 12:45"},
    current: {temp_f: 50, feelslike_f: 58, wind_mph: 10},
};

function mockFetch(ok = true, data = fakeResponse) {
    const fetchMock = mock(() =>
    Promise.resolve({
        ok,
        status: ok ? 200 : 500,
        statusText: ok ? "OK" : "Internal Server Error",
        json: () => Promise.resolve(data),
    })
    );
    (global as any).fetch = fetchMock;
    return fetchMock;
}

describe("getCurrent", () => {
    it("should retrive weather data", async () => {
        mockFetch();
        const data = await getCurrent("49508");
        expect(data.location.name).toBe("Grand Rapids");
        expect(data.current.temp_f).toBe(50);
    });

      it("should return data with the correct structure", async () => {
        mockFetch();
        const data = await getCurrent("49508");
        expect(data.location).toHaveProperty("name");
        expect(data.location).toHaveProperty("country");
        expect(data.location).toHaveProperty("localtime");


        expect(data.current).toHaveProperty("temp_f");
        expect(data.current).toHaveProperty("feelslike_f");
        expect(data.current).toHaveProperty("wind_mph");
    });

    it("should throw an error if the API fails", async () => {
        mockFetch(false);
        await expect(getCurrent("49508")).rejects.toThrow("Unable to fetch current weather");
    });
});