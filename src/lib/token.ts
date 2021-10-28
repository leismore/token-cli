import { Token } from "@leismore/token";

const BITSIZE       = 128;
const BASE_ENCODING = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';
const token         = Token.create(BITSIZE, BASE_ENCODING);

export { token };
