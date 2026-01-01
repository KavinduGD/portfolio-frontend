import "@testing-library/jest-dom";
import { TextEncoder, TextDecoder } from "util";

/**
 * jsdom does not provide TextEncoder/TextDecoder by default.
 * We polyfill them for Jest tests.
 */
if (typeof globalThis.TextEncoder === "undefined") {
  globalThis.TextEncoder =
    TextEncoder as unknown as typeof globalThis.TextEncoder;
  globalThis.TextDecoder =
    TextDecoder as unknown as typeof globalThis.TextDecoder;
}
