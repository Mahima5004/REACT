
import { TextEncoder, TextDecoder } from "util";

// JSDOM doesn't include these, so we polyfill them for testing
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;
