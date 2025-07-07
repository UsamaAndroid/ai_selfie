/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/generate-img2img/route";
exports.ids = ["app/api/generate-img2img/route"];
exports.modules = {

/***/ "(rsc)/./app/api/generate-img2img/route.ts":
/*!*******************************************!*\
  !*** ./app/api/generate-img2img/route.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _lib_liblibai_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/liblibai-util */ \"(rsc)/./lib/liblibai-util.ts\");\n\n\nasync function POST(req) {\n    try {\n        const body = await req.json();\n        const baseUrl = \"/api/generate/webui/img2img\";\n        const fullUrl = (0,_lib_liblibai_util__WEBPACK_IMPORTED_MODULE_1__.getSignedUrl)(baseUrl);\n        const response = await fetch(`https://openapi.liblibai.cloud${fullUrl}`, {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify(body)\n        });\n        const result = await response.json();\n        console.log(\"📦 LiblibAI Img2Img response:\", JSON.stringify(result, null, 2)); // 👈 Add this\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(result);\n    } catch (error) {\n        console.error(\"❌ Img2Img API Error:\", error); // 👈 Add this too\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Image-to-Image failed\",\n            details: error\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2dlbmVyYXRlLWltZzJpbWcvcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXdEO0FBQ0w7QUFFNUMsZUFBZUUsS0FBS0MsR0FBZ0I7SUFDekMsSUFBSTtRQUNGLE1BQU1DLE9BQU8sTUFBTUQsSUFBSUUsSUFBSTtRQUMzQixNQUFNQyxVQUFVO1FBQ2hCLE1BQU1DLFVBQVVOLGdFQUFZQSxDQUFDSztRQUU3QixNQUFNRSxXQUFXLE1BQU1DLE1BQU0sQ0FBQyw4QkFBOEIsRUFBRUYsU0FBUyxFQUFFO1lBQ3ZFRyxRQUFRO1lBQ1JDLFNBQVM7Z0JBQUUsZ0JBQWdCO1lBQW1CO1lBQzlDUCxNQUFNUSxLQUFLQyxTQUFTLENBQUNUO1FBQ3ZCO1FBRUEsTUFBTVUsU0FBUyxNQUFNTixTQUFTSCxJQUFJO1FBQ2xDVSxRQUFRQyxHQUFHLENBQUMsaUNBQWlDSixLQUFLQyxTQUFTLENBQUNDLFFBQVEsTUFBTSxLQUFLLGNBQWM7UUFFN0YsT0FBT2QscURBQVlBLENBQUNLLElBQUksQ0FBQ1M7SUFDM0IsRUFBRSxPQUFPRyxPQUFPO1FBQ2RGLFFBQVFFLEtBQUssQ0FBQyx3QkFBd0JBLFFBQVEsa0JBQWtCO1FBQ2hFLE9BQU9qQixxREFBWUEsQ0FBQ0ssSUFBSSxDQUN0QjtZQUFFWSxPQUFPO1lBQXlCQyxTQUFTRDtRQUFNLEdBQ2pEO1lBQUVFLFFBQVE7UUFBSTtJQUVsQjtBQUNGIiwic291cmNlcyI6WyIvVXNlcnMvdXNhbWEvRG9jdW1lbnRzL0dpdEh1Yi9haV9zZWxmaWUvYXBwL2FwaS9nZW5lcmF0ZS1pbWcyaW1nL3JvdXRlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXF1ZXN0LCBOZXh0UmVzcG9uc2UgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIjtcbmltcG9ydCB7IGdldFNpZ25lZFVybCB9IGZyb20gXCJAL2xpYi9saWJsaWJhaS11dGlsXCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcTogTmV4dFJlcXVlc3QpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBib2R5ID0gYXdhaXQgcmVxLmpzb24oKTtcbiAgICBjb25zdCBiYXNlVXJsID0gXCIvYXBpL2dlbmVyYXRlL3dlYnVpL2ltZzJpbWdcIjtcbiAgICBjb25zdCBmdWxsVXJsID0gZ2V0U2lnbmVkVXJsKGJhc2VVcmwpO1xuXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9vcGVuYXBpLmxpYmxpYmFpLmNsb3VkJHtmdWxsVXJsfWAsIHtcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShib2R5KSxcbiAgICB9KTtcblxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTsgIFxuICAgIGNvbnNvbGUubG9nKFwi8J+TpiBMaWJsaWJBSSBJbWcySW1nIHJlc3BvbnNlOlwiLCBKU09OLnN0cmluZ2lmeShyZXN1bHQsIG51bGwsIDIpKTsgLy8g8J+RiCBBZGQgdGhpc1xuXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHJlc3VsdCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIuKdjCBJbWcySW1nIEFQSSBFcnJvcjpcIiwgZXJyb3IpOyAvLyDwn5GIIEFkZCB0aGlzIHRvb1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcbiAgICAgIHsgZXJyb3I6IFwiSW1hZ2UtdG8tSW1hZ2UgZmFpbGVkXCIsIGRldGFpbHM6IGVycm9yIH0sXG4gICAgICB7IHN0YXR1czogNTAwIH1cbiAgICApO1xuICB9XG59XG4iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwiZ2V0U2lnbmVkVXJsIiwiUE9TVCIsInJlcSIsImJvZHkiLCJqc29uIiwiYmFzZVVybCIsImZ1bGxVcmwiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZXN1bHQiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJkZXRhaWxzIiwic3RhdHVzIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/generate-img2img/route.ts\n");

/***/ }),

/***/ "(rsc)/./lib/liblibai-util.ts":
/*!******************************!*\
  !*** ./lib/liblibai-util.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   generateSignature: () => (/* binding */ generateSignature),\n/* harmony export */   getApiUrl: () => (/* binding */ getApiUrl),\n/* harmony export */   getSignedUrl: () => (/* binding */ getSignedUrl)\n/* harmony export */ });\n/* harmony import */ var string_random__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! string-random */ \"(rsc)/./node_modules/string-random/index.js\");\n/* harmony import */ var string_random__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(string_random__WEBPACK_IMPORTED_MODULE_0__);\n// lib/liblibai-util.ts\nconst hmacsha1 = __webpack_require__(/*! hmacsha1 */ \"(rsc)/./node_modules/hmacsha1/index.js\");\n\nconst SECRET_KEY = process.env.LIBLIB_SECRET_KEY;\nconst ACCESS_KEY = process.env.LIBLIB_ACCESS_KEY;\n// ✅ Add the check right here:\nif (!SECRET_KEY || !ACCESS_KEY) {\n    throw new Error(\"❌ Missing LiblibAI SECRET_KEY or ACCESS_KEY in environment\");\n}\n/**\n * Generate HMAC-SHA1 signature for LiblibAI API.\n * @param baseUrl - The base path for the API (not full URL)\n */ function generateSignature(baseUrl) {\n    const timestamp = Date.now();\n    const signatureNonce = string_random__WEBPACK_IMPORTED_MODULE_0___default()(16);\n    const raw = `${baseUrl}&${timestamp}&${signatureNonce}`;\n    const hash = hmacsha1(SECRET_KEY, raw);\n    const signature = hash.replace(/\\+/g, '-').replace(/\\//g, '_').replace(/=+$/, '');\n    return {\n        signature,\n        timestamp,\n        signatureNonce\n    };\n}\n/**\n * Construct a full signed LiblibAI URL with query parameters.\n * @param baseUrl - API endpoint path like `/api/generate/webui`\n */ function getSignedUrl(baseUrl) {\n    const { signature, timestamp, signatureNonce } = generateSignature(baseUrl);\n    return `${baseUrl}?AccessKey=${ACCESS_KEY}&Signature=${signature}&Timestamp=${timestamp}&SignatureNonce=${signatureNonce}`;\n}\n/**\n * Get the full API URL for LiblibAI.\n * @param baseUrl - The base path for the API (not full URL)\n */ function getApiUrl(baseUrl) {\n    const signedUrl = getSignedUrl(baseUrl);\n    return `https://openapi.liblibai.cloud${signedUrl}`;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvbGlibGliYWktdXRpbC50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLHVCQUF1QjtBQUN2QixNQUFNQSxXQUFXQyxtQkFBT0EsQ0FBQyx3REFBVTtBQUNNO0FBRXpDLE1BQU1FLGFBQWFDLFFBQVFDLEdBQUcsQ0FBQ0MsaUJBQWlCO0FBQ2hELE1BQU1DLGFBQWFILFFBQVFDLEdBQUcsQ0FBQ0csaUJBQWlCO0FBRWhELDhCQUE4QjtBQUM5QixJQUFJLENBQUNMLGNBQWMsQ0FBQ0ksWUFBWTtJQUM5QixNQUFNLElBQUlFLE1BQU07QUFDbEI7QUFTQTs7O0NBR0MsR0FDTSxTQUFTQyxrQkFBa0JDLE9BQWU7SUFDL0MsTUFBTUMsWUFBWUMsS0FBS0MsR0FBRztJQUMxQixNQUFNQyxpQkFBaUJiLG9EQUFZQSxDQUFDO0lBRXBDLE1BQU1jLE1BQU0sR0FBR0wsUUFBUSxDQUFDLEVBQUVDLFVBQVUsQ0FBQyxFQUFFRyxnQkFBZ0I7SUFDdkQsTUFBTUUsT0FBT2pCLFNBQVNHLFlBQVlhO0lBRWxDLE1BQU1FLFlBQVlELEtBQ2ZFLE9BQU8sQ0FBQyxPQUFPLEtBQ2ZBLE9BQU8sQ0FBQyxPQUFPLEtBQ2ZBLE9BQU8sQ0FBQyxPQUFPO0lBRWxCLE9BQU87UUFDTEQ7UUFDQU47UUFDQUc7SUFDRjtBQUNGO0FBRUE7OztDQUdDLEdBQ00sU0FBU0ssYUFBYVQsT0FBZTtJQUMxQyxNQUFNLEVBQUVPLFNBQVMsRUFBRU4sU0FBUyxFQUFFRyxjQUFjLEVBQUUsR0FBR0wsa0JBQWtCQztJQUVuRSxPQUFPLEdBQUdBLFFBQVEsV0FBVyxFQUFFSixXQUFXLFdBQVcsRUFBRVcsVUFBVSxXQUFXLEVBQUVOLFVBQVUsZ0JBQWdCLEVBQUVHLGdCQUFnQjtBQUM1SDtBQUNBOzs7Q0FHQyxHQUNNLFNBQVNNLFVBQVVWLE9BQWU7SUFDdkMsTUFBTVcsWUFBWUYsYUFBYVQ7SUFDL0IsT0FBTyxDQUFDLDhCQUE4QixFQUFFVyxXQUFXO0FBQ3JEIiwic291cmNlcyI6WyIvVXNlcnMvdXNhbWEvRG9jdW1lbnRzL0dpdEh1Yi9haV9zZWxmaWUvbGliL2xpYmxpYmFpLXV0aWwudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gbGliL2xpYmxpYmFpLXV0aWwudHNcbmNvbnN0IGhtYWNzaGExID0gcmVxdWlyZSgnaG1hY3NoYTEnKTtcbmltcG9ydCBzdHJpbmdSYW5kb20gZnJvbSAnc3RyaW5nLXJhbmRvbSc7XG5cbmNvbnN0IFNFQ1JFVF9LRVkgPSBwcm9jZXNzLmVudi5MSUJMSUJfU0VDUkVUX0tFWSBhcyBzdHJpbmc7XG5jb25zdCBBQ0NFU1NfS0VZID0gcHJvY2Vzcy5lbnYuTElCTElCX0FDQ0VTU19LRVkgYXMgc3RyaW5nO1xuXG4vLyDinIUgQWRkIHRoZSBjaGVjayByaWdodCBoZXJlOlxuaWYgKCFTRUNSRVRfS0VZIHx8ICFBQ0NFU1NfS0VZKSB7XG4gIHRocm93IG5ldyBFcnJvcihcIuKdjCBNaXNzaW5nIExpYmxpYkFJIFNFQ1JFVF9LRVkgb3IgQUNDRVNTX0tFWSBpbiBlbnZpcm9ubWVudFwiKTtcbn1cblxuXG5pbnRlcmZhY2UgU2lnbmF0dXJlUmVzdWx0IHtcbiAgc2lnbmF0dXJlOiBzdHJpbmc7XG4gIHRpbWVzdGFtcDogbnVtYmVyO1xuICBzaWduYXR1cmVOb25jZTogc3RyaW5nO1xufVxuXG4vKipcbiAqIEdlbmVyYXRlIEhNQUMtU0hBMSBzaWduYXR1cmUgZm9yIExpYmxpYkFJIEFQSS5cbiAqIEBwYXJhbSBiYXNlVXJsIC0gVGhlIGJhc2UgcGF0aCBmb3IgdGhlIEFQSSAobm90IGZ1bGwgVVJMKVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVTaWduYXR1cmUoYmFzZVVybDogc3RyaW5nKTogU2lnbmF0dXJlUmVzdWx0IHtcbiAgY29uc3QgdGltZXN0YW1wID0gRGF0ZS5ub3coKTtcbiAgY29uc3Qgc2lnbmF0dXJlTm9uY2UgPSBzdHJpbmdSYW5kb20oMTYpO1xuXG4gIGNvbnN0IHJhdyA9IGAke2Jhc2VVcmx9JiR7dGltZXN0YW1wfSYke3NpZ25hdHVyZU5vbmNlfWA7XG4gIGNvbnN0IGhhc2ggPSBobWFjc2hhMShTRUNSRVRfS0VZLCByYXcpO1xuXG4gIGNvbnN0IHNpZ25hdHVyZSA9IGhhc2hcbiAgICAucmVwbGFjZSgvXFwrL2csICctJylcbiAgICAucmVwbGFjZSgvXFwvL2csICdfJylcbiAgICAucmVwbGFjZSgvPSskLywgJycpO1xuXG4gIHJldHVybiB7XG4gICAgc2lnbmF0dXJlLFxuICAgIHRpbWVzdGFtcCxcbiAgICBzaWduYXR1cmVOb25jZSxcbiAgfTtcbn1cblxuLyoqXG4gKiBDb25zdHJ1Y3QgYSBmdWxsIHNpZ25lZCBMaWJsaWJBSSBVUkwgd2l0aCBxdWVyeSBwYXJhbWV0ZXJzLlxuICogQHBhcmFtIGJhc2VVcmwgLSBBUEkgZW5kcG9pbnQgcGF0aCBsaWtlIGAvYXBpL2dlbmVyYXRlL3dlYnVpYFxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2lnbmVkVXJsKGJhc2VVcmw6IHN0cmluZyk6IHN0cmluZyB7XG4gIGNvbnN0IHsgc2lnbmF0dXJlLCB0aW1lc3RhbXAsIHNpZ25hdHVyZU5vbmNlIH0gPSBnZW5lcmF0ZVNpZ25hdHVyZShiYXNlVXJsKTtcblxuICByZXR1cm4gYCR7YmFzZVVybH0/QWNjZXNzS2V5PSR7QUNDRVNTX0tFWX0mU2lnbmF0dXJlPSR7c2lnbmF0dXJlfSZUaW1lc3RhbXA9JHt0aW1lc3RhbXB9JlNpZ25hdHVyZU5vbmNlPSR7c2lnbmF0dXJlTm9uY2V9YDtcbn1cbi8qKlxuICogR2V0IHRoZSBmdWxsIEFQSSBVUkwgZm9yIExpYmxpYkFJLlxuICogQHBhcmFtIGJhc2VVcmwgLSBUaGUgYmFzZSBwYXRoIGZvciB0aGUgQVBJIChub3QgZnVsbCBVUkwpXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRBcGlVcmwoYmFzZVVybDogc3RyaW5nKTogc3RyaW5nIHtcbiAgY29uc3Qgc2lnbmVkVXJsID0gZ2V0U2lnbmVkVXJsKGJhc2VVcmwpO1xuICByZXR1cm4gYGh0dHBzOi8vb3BlbmFwaS5saWJsaWJhaS5jbG91ZCR7c2lnbmVkVXJsfWA7XG59ICAgIl0sIm5hbWVzIjpbImhtYWNzaGExIiwicmVxdWlyZSIsInN0cmluZ1JhbmRvbSIsIlNFQ1JFVF9LRVkiLCJwcm9jZXNzIiwiZW52IiwiTElCTElCX1NFQ1JFVF9LRVkiLCJBQ0NFU1NfS0VZIiwiTElCTElCX0FDQ0VTU19LRVkiLCJFcnJvciIsImdlbmVyYXRlU2lnbmF0dXJlIiwiYmFzZVVybCIsInRpbWVzdGFtcCIsIkRhdGUiLCJub3ciLCJzaWduYXR1cmVOb25jZSIsInJhdyIsImhhc2giLCJzaWduYXR1cmUiLCJyZXBsYWNlIiwiZ2V0U2lnbmVkVXJsIiwiZ2V0QXBpVXJsIiwic2lnbmVkVXJsIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./lib/liblibai-util.ts\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fgenerate-img2img%2Froute&page=%2Fapi%2Fgenerate-img2img%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fgenerate-img2img%2Froute.ts&appDir=%2FUsers%2Fusama%2FDocuments%2FGitHub%2Fai_selfie%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fusama%2FDocuments%2FGitHub%2Fai_selfie&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fgenerate-img2img%2Froute&page=%2Fapi%2Fgenerate-img2img%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fgenerate-img2img%2Froute.ts&appDir=%2FUsers%2Fusama%2FDocuments%2FGitHub%2Fai_selfie%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fusama%2FDocuments%2FGitHub%2Fai_selfie&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_usama_Documents_GitHub_ai_selfie_app_api_generate_img2img_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/generate-img2img/route.ts */ \"(rsc)/./app/api/generate-img2img/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/generate-img2img/route\",\n        pathname: \"/api/generate-img2img\",\n        filename: \"route\",\n        bundlePath: \"app/api/generate-img2img/route\"\n    },\n    resolvedPagePath: \"/Users/usama/Documents/GitHub/ai_selfie/app/api/generate-img2img/route.ts\",\n    nextConfigOutput,\n    userland: _Users_usama_Documents_GitHub_ai_selfie_app_api_generate_img2img_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZnZW5lcmF0ZS1pbWcyaW1nJTJGcm91dGUmcGFnZT0lMkZhcGklMkZnZW5lcmF0ZS1pbWcyaW1nJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGZ2VuZXJhdGUtaW1nMmltZyUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRnVzYW1hJTJGRG9jdW1lbnRzJTJGR2l0SHViJTJGYWlfc2VsZmllJTJGYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj0lMkZVc2VycyUyRnVzYW1hJTJGRG9jdW1lbnRzJTJGR2l0SHViJTJGYWlfc2VsZmllJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUErRjtBQUN2QztBQUNxQjtBQUN5QjtBQUN0RztBQUNBO0FBQ0E7QUFDQSx3QkFBd0IseUdBQW1CO0FBQzNDO0FBQ0EsY0FBYyxrRUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNEQUFzRDtBQUM5RDtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUMwRjs7QUFFMUYiLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiL1VzZXJzL3VzYW1hL0RvY3VtZW50cy9HaXRIdWIvYWlfc2VsZmllL2FwcC9hcGkvZ2VuZXJhdGUtaW1nMmltZy9yb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvZ2VuZXJhdGUtaW1nMmltZy9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL2dlbmVyYXRlLWltZzJpbWdcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL2dlbmVyYXRlLWltZzJpbWcvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCIvVXNlcnMvdXNhbWEvRG9jdW1lbnRzL0dpdEh1Yi9haV9zZWxmaWUvYXBwL2FwaS9nZW5lcmF0ZS1pbWcyaW1nL3JvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgd29ya0FzeW5jU3RvcmFnZSxcbiAgICAgICAgd29ya1VuaXRBc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fgenerate-img2img%2Froute&page=%2Fapi%2Fgenerate-img2img%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fgenerate-img2img%2Froute.ts&appDir=%2FUsers%2Fusama%2FDocuments%2FGitHub%2Fai_selfie%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fusama%2FDocuments%2FGitHub%2Fai_selfie&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "../app-render/after-task-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist/server/app-render/after-task-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/hmacsha1","vendor-chunks/string-random"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fgenerate-img2img%2Froute&page=%2Fapi%2Fgenerate-img2img%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fgenerate-img2img%2Froute.ts&appDir=%2FUsers%2Fusama%2FDocuments%2FGitHub%2Fai_selfie%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fusama%2FDocuments%2FGitHub%2Fai_selfie&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();