import {mustArray} from "./mustArray";

test(`'' should return []`, () => {
   expect(mustArray('')).toEqual([]);
});
