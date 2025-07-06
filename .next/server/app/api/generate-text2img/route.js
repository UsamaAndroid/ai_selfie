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
exports.id = "app/api/generate-text2img/route";
exports.ids = ["app/api/generate-text2img/route"];
exports.modules = {

/***/ "(rsc)/./app/api/generate-text2img/route.ts":
/*!********************************************!*\
  !*** ./app/api/generate-text2img/route.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _lib_liblibai_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/liblibai-util */ \"(rsc)/./lib/liblibai-util.ts\");\n// app/api/generate-text2img/route.ts\n\n // Your util for signed URLs\nasync function POST(req) {\n    try {\n        const body = await req.json();\n        // Base API endpoint for text2img generation as per liblibai doc\n        const baseUrl = \"/api/generate/webui/text2img\";\n        // Get signed URL with all auth query params\n        const fullUrl = (0,_lib_liblibai_util__WEBPACK_IMPORTED_MODULE_1__.getSignedUrl)(baseUrl);\n        // Call LibLibAI official API\n        const response = await fetch(`https://openapi.liblibai.cloud${fullUrl}`, {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify(body)\n        });\n        // Forward the response back to frontend\n        const result = await response.json();\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(result);\n    } catch (error) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Failed to generate image\",\n            details: error\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2dlbmVyYXRlLXRleHQyaW1nL3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLHFDQUFxQztBQUVtQjtBQUNMLENBQUMsNEJBQTRCO0FBRXpFLGVBQWVFLEtBQUtDLEdBQWdCO0lBQ3pDLElBQUk7UUFDRixNQUFNQyxPQUFPLE1BQU1ELElBQUlFLElBQUk7UUFFM0IsZ0VBQWdFO1FBQ2hFLE1BQU1DLFVBQVU7UUFFaEIsNENBQTRDO1FBQzVDLE1BQU1DLFVBQVVOLGdFQUFZQSxDQUFDSztRQUU3Qiw2QkFBNkI7UUFDN0IsTUFBTUUsV0FBVyxNQUFNQyxNQUFNLENBQUMsOEJBQThCLEVBQUVGLFNBQVMsRUFBRTtZQUN2RUcsUUFBUTtZQUNSQyxTQUFTO2dCQUNQLGdCQUFnQjtZQUNsQjtZQUNBUCxNQUFNUSxLQUFLQyxTQUFTLENBQUNUO1FBQ3ZCO1FBRUEsd0NBQXdDO1FBQ3hDLE1BQU1VLFNBQVMsTUFBTU4sU0FBU0gsSUFBSTtRQUVsQyxPQUFPTCxxREFBWUEsQ0FBQ0ssSUFBSSxDQUFDUztJQUMzQixFQUFFLE9BQU9DLE9BQU87UUFDZCxPQUFPZixxREFBWUEsQ0FBQ0ssSUFBSSxDQUFDO1lBQUVVLE9BQU87WUFBNEJDLFNBQVNEO1FBQU0sR0FBRztZQUFFRSxRQUFRO1FBQUk7SUFDaEc7QUFDRiIsInNvdXJjZXMiOlsiL1VzZXJzL3VzYW1hL0RvY3VtZW50cy9HaXRIdWIvYWlfc2VsZmllL2FwcC9hcGkvZ2VuZXJhdGUtdGV4dDJpbWcvcm91dGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gYXBwL2FwaS9nZW5lcmF0ZS10ZXh0MmltZy9yb3V0ZS50c1xuXG5pbXBvcnQgeyBOZXh0UmVxdWVzdCwgTmV4dFJlc3BvbnNlIH0gZnJvbSBcIm5leHQvc2VydmVyXCI7XG5pbXBvcnQgeyBnZXRTaWduZWRVcmwgfSBmcm9tIFwiQC9saWIvbGlibGliYWktdXRpbFwiOyAvLyBZb3VyIHV0aWwgZm9yIHNpZ25lZCBVUkxzXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcTogTmV4dFJlcXVlc3QpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBib2R5ID0gYXdhaXQgcmVxLmpzb24oKTtcblxuICAgIC8vIEJhc2UgQVBJIGVuZHBvaW50IGZvciB0ZXh0MmltZyBnZW5lcmF0aW9uIGFzIHBlciBsaWJsaWJhaSBkb2NcbiAgICBjb25zdCBiYXNlVXJsID0gXCIvYXBpL2dlbmVyYXRlL3dlYnVpL3RleHQyaW1nXCI7XG5cbiAgICAvLyBHZXQgc2lnbmVkIFVSTCB3aXRoIGFsbCBhdXRoIHF1ZXJ5IHBhcmFtc1xuICAgIGNvbnN0IGZ1bGxVcmwgPSBnZXRTaWduZWRVcmwoYmFzZVVybCk7XG5cbiAgICAvLyBDYWxsIExpYkxpYkFJIG9mZmljaWFsIEFQSVxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vb3BlbmFwaS5saWJsaWJhaS5jbG91ZCR7ZnVsbFVybH1gLCB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShib2R5KSxcbiAgICB9KTtcblxuICAgIC8vIEZvcndhcmQgdGhlIHJlc3BvbnNlIGJhY2sgdG8gZnJvbnRlbmRcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24ocmVzdWx0KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogXCJGYWlsZWQgdG8gZ2VuZXJhdGUgaW1hZ2VcIiwgZGV0YWlsczogZXJyb3IgfSwgeyBzdGF0dXM6IDUwMCB9KTtcbiAgfVxufSJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJnZXRTaWduZWRVcmwiLCJQT1NUIiwicmVxIiwiYm9keSIsImpzb24iLCJiYXNlVXJsIiwiZnVsbFVybCIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiSlNPTiIsInN0cmluZ2lmeSIsInJlc3VsdCIsImVycm9yIiwiZGV0YWlscyIsInN0YXR1cyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/generate-text2img/route.ts\n");

/***/ }),

/***/ "(rsc)/./lib/liblibai-util.ts":
/*!******************************!*\
  !*** ./lib/liblibai-util.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   generateSignature: () => (/* binding */ generateSignature),\n/* harmony export */   getApiUrl: () => (/* binding */ getApiUrl),\n/* harmony export */   getSignedUrl: () => (/* binding */ getSignedUrl)\n/* harmony export */ });\n/* harmony import */ var string_random__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! string-random */ \"(rsc)/./node_modules/string-random/index.js\");\n/* harmony import */ var string_random__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(string_random__WEBPACK_IMPORTED_MODULE_0__);\n// lib/liblibai-util.ts\nconst hmacsha1 = __webpack_require__(/*! hmacsha1 */ \"(rsc)/./node_modules/hmacsha1/index.js\");\n\nconst SECRET_KEY = process.env.LIBLIB_SECRET_KEY; // Set this in .env.local\nconst ACCESS_KEY = process.env.LIBLIB_ACCESS_KEY; // Set this in .env.local\n/**\n * Generate HMAC-SHA1 signature for LiblibAI API.\n * @param baseUrl - The base path for the API (not full URL)\n */ function generateSignature(baseUrl) {\n    const timestamp = Date.now();\n    const signatureNonce = string_random__WEBPACK_IMPORTED_MODULE_0___default()(16);\n    const raw = `${baseUrl}&${timestamp}&${signatureNonce}`;\n    const hash = hmacsha1(SECRET_KEY, raw);\n    const signature = hash.replace(/\\+/g, '-').replace(/\\//g, '_').replace(/=+$/, '');\n    return {\n        signature,\n        timestamp,\n        signatureNonce\n    };\n}\n/**\n * Construct a full signed LiblibAI URL with query parameters.\n * @param baseUrl - API endpoint path like `/api/generate/webui`\n */ function getSignedUrl(baseUrl) {\n    const { signature, timestamp, signatureNonce } = generateSignature(baseUrl);\n    return `${baseUrl}?AccessKey=${ACCESS_KEY}&Signature=${signature}&Timestamp=${timestamp}&SignatureNonce=${signatureNonce}`;\n}\n/**\n * Get the full API URL for LiblibAI.\n * @param baseUrl - The base path for the API (not full URL)\n */ function getApiUrl(baseUrl) {\n    const signedUrl = getSignedUrl(baseUrl);\n    return `https://openapi.liblibai.cloud${signedUrl}`;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvbGlibGliYWktdXRpbC50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLHVCQUF1QjtBQUV2QixNQUFNQSxXQUFXQyxtQkFBT0EsQ0FBQyx3REFBVTtBQUNNO0FBRXpDLE1BQU1FLGFBQWFDLFFBQVFDLEdBQUcsQ0FBQ0MsaUJBQWlCLEVBQVkseUJBQXlCO0FBQ3JGLE1BQU1DLGFBQWFILFFBQVFDLEdBQUcsQ0FBQ0csaUJBQWlCLEVBQVkseUJBQXlCO0FBUXJGOzs7Q0FHQyxHQUNNLFNBQVNDLGtCQUFrQkMsT0FBZTtJQUMvQyxNQUFNQyxZQUFZQyxLQUFLQyxHQUFHO0lBQzFCLE1BQU1DLGlCQUFpQlosb0RBQVlBLENBQUM7SUFFcEMsTUFBTWEsTUFBTSxHQUFHTCxRQUFRLENBQUMsRUFBRUMsVUFBVSxDQUFDLEVBQUVHLGdCQUFnQjtJQUN2RCxNQUFNRSxPQUFPaEIsU0FBU0csWUFBWVk7SUFFbEMsTUFBTUUsWUFBWUQsS0FDZkUsT0FBTyxDQUFDLE9BQU8sS0FDZkEsT0FBTyxDQUFDLE9BQU8sS0FDZkEsT0FBTyxDQUFDLE9BQU87SUFFbEIsT0FBTztRQUNMRDtRQUNBTjtRQUNBRztJQUNGO0FBQ0Y7QUFFQTs7O0NBR0MsR0FDTSxTQUFTSyxhQUFhVCxPQUFlO0lBQzFDLE1BQU0sRUFBRU8sU0FBUyxFQUFFTixTQUFTLEVBQUVHLGNBQWMsRUFBRSxHQUFHTCxrQkFBa0JDO0lBRW5FLE9BQU8sR0FBR0EsUUFBUSxXQUFXLEVBQUVILFdBQVcsV0FBVyxFQUFFVSxVQUFVLFdBQVcsRUFBRU4sVUFBVSxnQkFBZ0IsRUFBRUcsZ0JBQWdCO0FBQzVIO0FBQ0E7OztDQUdDLEdBQ00sU0FBU00sVUFBVVYsT0FBZTtJQUN2QyxNQUFNVyxZQUFZRixhQUFhVDtJQUMvQixPQUFPLENBQUMsOEJBQThCLEVBQUVXLFdBQVc7QUFDckQiLCJzb3VyY2VzIjpbIi9Vc2Vycy91c2FtYS9Eb2N1bWVudHMvR2l0SHViL2FpX3NlbGZpZS9saWIvbGlibGliYWktdXRpbC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBsaWIvbGlibGliYWktdXRpbC50c1xuXG5jb25zdCBobWFjc2hhMSA9IHJlcXVpcmUoJ2htYWNzaGExJyk7XG5pbXBvcnQgc3RyaW5nUmFuZG9tIGZyb20gJ3N0cmluZy1yYW5kb20nO1xuXG5jb25zdCBTRUNSRVRfS0VZID0gcHJvY2Vzcy5lbnYuTElCTElCX1NFQ1JFVF9LRVkgYXMgc3RyaW5nOyAvLyBTZXQgdGhpcyBpbiAuZW52LmxvY2FsXG5jb25zdCBBQ0NFU1NfS0VZID0gcHJvY2Vzcy5lbnYuTElCTElCX0FDQ0VTU19LRVkgYXMgc3RyaW5nOyAvLyBTZXQgdGhpcyBpbiAuZW52LmxvY2FsXG5cbmludGVyZmFjZSBTaWduYXR1cmVSZXN1bHQge1xuICBzaWduYXR1cmU6IHN0cmluZztcbiAgdGltZXN0YW1wOiBudW1iZXI7XG4gIHNpZ25hdHVyZU5vbmNlOiBzdHJpbmc7XG59XG5cbi8qKlxuICogR2VuZXJhdGUgSE1BQy1TSEExIHNpZ25hdHVyZSBmb3IgTGlibGliQUkgQVBJLlxuICogQHBhcmFtIGJhc2VVcmwgLSBUaGUgYmFzZSBwYXRoIGZvciB0aGUgQVBJIChub3QgZnVsbCBVUkwpXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZVNpZ25hdHVyZShiYXNlVXJsOiBzdHJpbmcpOiBTaWduYXR1cmVSZXN1bHQge1xuICBjb25zdCB0aW1lc3RhbXAgPSBEYXRlLm5vdygpO1xuICBjb25zdCBzaWduYXR1cmVOb25jZSA9IHN0cmluZ1JhbmRvbSgxNik7XG5cbiAgY29uc3QgcmF3ID0gYCR7YmFzZVVybH0mJHt0aW1lc3RhbXB9JiR7c2lnbmF0dXJlTm9uY2V9YDtcbiAgY29uc3QgaGFzaCA9IGhtYWNzaGExKFNFQ1JFVF9LRVksIHJhdyk7XG5cbiAgY29uc3Qgc2lnbmF0dXJlID0gaGFzaFxuICAgIC5yZXBsYWNlKC9cXCsvZywgJy0nKVxuICAgIC5yZXBsYWNlKC9cXC8vZywgJ18nKVxuICAgIC5yZXBsYWNlKC89KyQvLCAnJyk7XG5cbiAgcmV0dXJuIHtcbiAgICBzaWduYXR1cmUsXG4gICAgdGltZXN0YW1wLFxuICAgIHNpZ25hdHVyZU5vbmNlLFxuICB9O1xufVxuXG4vKipcbiAqIENvbnN0cnVjdCBhIGZ1bGwgc2lnbmVkIExpYmxpYkFJIFVSTCB3aXRoIHF1ZXJ5IHBhcmFtZXRlcnMuXG4gKiBAcGFyYW0gYmFzZVVybCAtIEFQSSBlbmRwb2ludCBwYXRoIGxpa2UgYC9hcGkvZ2VuZXJhdGUvd2VidWlgXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRTaWduZWRVcmwoYmFzZVVybDogc3RyaW5nKTogc3RyaW5nIHtcbiAgY29uc3QgeyBzaWduYXR1cmUsIHRpbWVzdGFtcCwgc2lnbmF0dXJlTm9uY2UgfSA9IGdlbmVyYXRlU2lnbmF0dXJlKGJhc2VVcmwpO1xuXG4gIHJldHVybiBgJHtiYXNlVXJsfT9BY2Nlc3NLZXk9JHtBQ0NFU1NfS0VZfSZTaWduYXR1cmU9JHtzaWduYXR1cmV9JlRpbWVzdGFtcD0ke3RpbWVzdGFtcH0mU2lnbmF0dXJlTm9uY2U9JHtzaWduYXR1cmVOb25jZX1gO1xufVxuLyoqXG4gKiBHZXQgdGhlIGZ1bGwgQVBJIFVSTCBmb3IgTGlibGliQUkuXG4gKiBAcGFyYW0gYmFzZVVybCAtIFRoZSBiYXNlIHBhdGggZm9yIHRoZSBBUEkgKG5vdCBmdWxsIFVSTClcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldEFwaVVybChiYXNlVXJsOiBzdHJpbmcpOiBzdHJpbmcge1xuICBjb25zdCBzaWduZWRVcmwgPSBnZXRTaWduZWRVcmwoYmFzZVVybCk7XG4gIHJldHVybiBgaHR0cHM6Ly9vcGVuYXBpLmxpYmxpYmFpLmNsb3VkJHtzaWduZWRVcmx9YDtcbn0gICAiXSwibmFtZXMiOlsiaG1hY3NoYTEiLCJyZXF1aXJlIiwic3RyaW5nUmFuZG9tIiwiU0VDUkVUX0tFWSIsInByb2Nlc3MiLCJlbnYiLCJMSUJMSUJfU0VDUkVUX0tFWSIsIkFDQ0VTU19LRVkiLCJMSUJMSUJfQUNDRVNTX0tFWSIsImdlbmVyYXRlU2lnbmF0dXJlIiwiYmFzZVVybCIsInRpbWVzdGFtcCIsIkRhdGUiLCJub3ciLCJzaWduYXR1cmVOb25jZSIsInJhdyIsImhhc2giLCJzaWduYXR1cmUiLCJyZXBsYWNlIiwiZ2V0U2lnbmVkVXJsIiwiZ2V0QXBpVXJsIiwic2lnbmVkVXJsIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./lib/liblibai-util.ts\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fgenerate-text2img%2Froute&page=%2Fapi%2Fgenerate-text2img%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fgenerate-text2img%2Froute.ts&appDir=%2FUsers%2Fusama%2FDocuments%2FGitHub%2Fai_selfie%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fusama%2FDocuments%2FGitHub%2Fai_selfie&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fgenerate-text2img%2Froute&page=%2Fapi%2Fgenerate-text2img%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fgenerate-text2img%2Froute.ts&appDir=%2FUsers%2Fusama%2FDocuments%2FGitHub%2Fai_selfie%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fusama%2FDocuments%2FGitHub%2Fai_selfie&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_usama_Documents_GitHub_ai_selfie_app_api_generate_text2img_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/generate-text2img/route.ts */ \"(rsc)/./app/api/generate-text2img/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/generate-text2img/route\",\n        pathname: \"/api/generate-text2img\",\n        filename: \"route\",\n        bundlePath: \"app/api/generate-text2img/route\"\n    },\n    resolvedPagePath: \"/Users/usama/Documents/GitHub/ai_selfie/app/api/generate-text2img/route.ts\",\n    nextConfigOutput,\n    userland: _Users_usama_Documents_GitHub_ai_selfie_app_api_generate_text2img_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZnZW5lcmF0ZS10ZXh0MmltZyUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGZ2VuZXJhdGUtdGV4dDJpbWclMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZnZW5lcmF0ZS10ZXh0MmltZyUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRnVzYW1hJTJGRG9jdW1lbnRzJTJGR2l0SHViJTJGYWlfc2VsZmllJTJGYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj0lMkZVc2VycyUyRnVzYW1hJTJGRG9jdW1lbnRzJTJGR2l0SHViJTJGYWlfc2VsZmllJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUErRjtBQUN2QztBQUNxQjtBQUMwQjtBQUN2RztBQUNBO0FBQ0E7QUFDQSx3QkFBd0IseUdBQW1CO0FBQzNDO0FBQ0EsY0FBYyxrRUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNEQUFzRDtBQUM5RDtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUMwRjs7QUFFMUYiLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiL1VzZXJzL3VzYW1hL0RvY3VtZW50cy9HaXRIdWIvYWlfc2VsZmllL2FwcC9hcGkvZ2VuZXJhdGUtdGV4dDJpbWcvcm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2dlbmVyYXRlLXRleHQyaW1nL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvZ2VuZXJhdGUtdGV4dDJpbWdcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL2dlbmVyYXRlLXRleHQyaW1nL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiL1VzZXJzL3VzYW1hL0RvY3VtZW50cy9HaXRIdWIvYWlfc2VsZmllL2FwcC9hcGkvZ2VuZXJhdGUtdGV4dDJpbWcvcm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICB3b3JrQXN5bmNTdG9yYWdlLFxuICAgICAgICB3b3JrVW5pdEFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fgenerate-text2img%2Froute&page=%2Fapi%2Fgenerate-text2img%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fgenerate-text2img%2Froute.ts&appDir=%2FUsers%2Fusama%2FDocuments%2FGitHub%2Fai_selfie%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fusama%2FDocuments%2FGitHub%2Fai_selfie&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/hmacsha1","vendor-chunks/string-random"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fgenerate-text2img%2Froute&page=%2Fapi%2Fgenerate-text2img%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fgenerate-text2img%2Froute.ts&appDir=%2FUsers%2Fusama%2FDocuments%2FGitHub%2Fai_selfie%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fusama%2FDocuments%2FGitHub%2Fai_selfie&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();