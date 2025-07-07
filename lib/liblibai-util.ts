// lib/liblibai-util.ts
const hmacsha1 = require('hmacsha1');
import stringRandom from 'string-random';

const SECRET_KEY = process.env.LIBLIB_SECRET_KEY as string;
const ACCESS_KEY = process.env.LIBLIB_ACCESS_KEY as string;

// ✅ Add the check right here:
if (!SECRET_KEY || !ACCESS_KEY) {
  throw new Error("❌ Missing LiblibAI SECRET_KEY or ACCESS_KEY in environment");
}


interface SignatureResult {
  signature: string;
  timestamp: number;
  signatureNonce: string;
}

/**
 * Generate HMAC-SHA1 signature for LiblibAI API.
 * @param baseUrl - The base path for the API (not full URL)
 */
export function generateSignature(baseUrl: string): SignatureResult {
  const timestamp = Date.now();
  const signatureNonce = stringRandom(16);

  const raw = `${baseUrl}&${timestamp}&${signatureNonce}`;
  const hash = hmacsha1(SECRET_KEY, raw);

  const signature = hash
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');

  return {
    signature,
    timestamp,
    signatureNonce,
  };
}

/**
 * Construct a full signed LiblibAI URL with query parameters.
 * @param baseUrl - API endpoint path like `/api/generate/webui`
 */
export function getSignedUrl(baseUrl: string): string {
  const { signature, timestamp, signatureNonce } = generateSignature(baseUrl);

  return `${baseUrl}?AccessKey=${ACCESS_KEY}&Signature=${signature}&Timestamp=${timestamp}&SignatureNonce=${signatureNonce}`;
}
/**
 * Get the full API URL for LiblibAI.
 * @param baseUrl - The base path for the API (not full URL)
 */
export function getApiUrl(baseUrl: string): string {
  const signedUrl = getSignedUrl(baseUrl);
  return `https://openapi.liblibai.cloud${signedUrl}`;
}   