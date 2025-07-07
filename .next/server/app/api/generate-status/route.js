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
exports.id = "app/api/generate-status/route";
exports.ids = ["app/api/generate-status/route"];
exports.modules = {

/***/ "(rsc)/./app/api/generate-status/route.ts":
/*!******************************************!*\
  !*** ./app/api/generate-status/route.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _lib_liblibai_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/liblibai-util */ \"(rsc)/./lib/liblibai-util.ts\");\n\n // or your lib path\nasync function POST(req) {\n    try {\n        const body = await req.json();\n        const { generateUuid } = body;\n        if (!generateUuid) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                code: -1,\n                msg: \"generateUuid is required\"\n            }, {\n                status: 400\n            });\n        }\n        const baseUrl = \"/api/generate/webui/status\";\n        const fullUrl = (0,_lib_liblibai_util__WEBPACK_IMPORTED_MODULE_1__.getSignedUrl)(baseUrl);\n        const response = await fetch(`https://openapi.liblibai.cloud${fullUrl}`, {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                generateUuid\n            })\n        });\n        const data = await response.json();\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(data);\n    } catch (error) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            code: -1,\n            msg: \"Failed to query status\",\n            error\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2dlbmVyYXRlLXN0YXR1cy9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBd0Q7QUFDTCxDQUFDLG1CQUFtQjtBQUVoRSxlQUFlRSxLQUFLQyxHQUFnQjtJQUN6QyxJQUFJO1FBQ0YsTUFBTUMsT0FBTyxNQUFNRCxJQUFJRSxJQUFJO1FBQzNCLE1BQU0sRUFBRUMsWUFBWSxFQUFFLEdBQUdGO1FBRXpCLElBQUksQ0FBQ0UsY0FBYztZQUNqQixPQUFPTixxREFBWUEsQ0FBQ0ssSUFBSSxDQUFDO2dCQUFFRSxNQUFNLENBQUM7Z0JBQUdDLEtBQUs7WUFBMkIsR0FBRztnQkFBRUMsUUFBUTtZQUFJO1FBQ3hGO1FBRUEsTUFBTUMsVUFBVTtRQUNoQixNQUFNQyxVQUFVVixnRUFBWUEsQ0FBQ1M7UUFFN0IsTUFBTUUsV0FBVyxNQUFNQyxNQUFNLENBQUMsOEJBQThCLEVBQUVGLFNBQVMsRUFBRTtZQUN2RUcsUUFBUTtZQUNSQyxTQUFTO2dCQUFFLGdCQUFnQjtZQUFtQjtZQUM5Q1gsTUFBTVksS0FBS0MsU0FBUyxDQUFDO2dCQUFFWDtZQUFhO1FBQ3RDO1FBRUEsTUFBTVksT0FBTyxNQUFNTixTQUFTUCxJQUFJO1FBQ2hDLE9BQU9MLHFEQUFZQSxDQUFDSyxJQUFJLENBQUNhO0lBQzNCLEVBQUUsT0FBT0MsT0FBTztRQUNkLE9BQU9uQixxREFBWUEsQ0FBQ0ssSUFBSSxDQUFDO1lBQUVFLE1BQU0sQ0FBQztZQUFHQyxLQUFLO1lBQTBCVztRQUFNLEdBQUc7WUFBRVYsUUFBUTtRQUFJO0lBQzdGO0FBQ0YiLCJzb3VyY2VzIjpbIi9Vc2Vycy91c2FtYS9Eb2N1bWVudHMvR2l0SHViL2FpX3NlbGZpZS9hcHAvYXBpL2dlbmVyYXRlLXN0YXR1cy9yb3V0ZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UmVxdWVzdCwgTmV4dFJlc3BvbnNlIH0gZnJvbSBcIm5leHQvc2VydmVyXCI7XG5pbXBvcnQgeyBnZXRTaWduZWRVcmwgfSBmcm9tIFwiQC9saWIvbGlibGliYWktdXRpbFwiOyAvLyBvciB5b3VyIGxpYiBwYXRoXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcTogTmV4dFJlcXVlc3QpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBib2R5ID0gYXdhaXQgcmVxLmpzb24oKTtcbiAgICBjb25zdCB7IGdlbmVyYXRlVXVpZCB9ID0gYm9keTtcblxuICAgIGlmICghZ2VuZXJhdGVVdWlkKSB7XG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBjb2RlOiAtMSwgbXNnOiBcImdlbmVyYXRlVXVpZCBpcyByZXF1aXJlZFwiIH0sIHsgc3RhdHVzOiA0MDAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgYmFzZVVybCA9IFwiL2FwaS9nZW5lcmF0ZS93ZWJ1aS9zdGF0dXNcIjtcbiAgICBjb25zdCBmdWxsVXJsID0gZ2V0U2lnbmVkVXJsKGJhc2VVcmwpO1xuXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9vcGVuYXBpLmxpYmxpYmFpLmNsb3VkJHtmdWxsVXJsfWAsIHtcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGdlbmVyYXRlVXVpZCB9KSxcbiAgICB9KTtcblxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKGRhdGEpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGNvZGU6IC0xLCBtc2c6IFwiRmFpbGVkIHRvIHF1ZXJ5IHN0YXR1c1wiLCBlcnJvciB9LCB7IHN0YXR1czogNTAwIH0pO1xuICB9XG59XG4iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwiZ2V0U2lnbmVkVXJsIiwiUE9TVCIsInJlcSIsImJvZHkiLCJqc29uIiwiZ2VuZXJhdGVVdWlkIiwiY29kZSIsIm1zZyIsInN0YXR1cyIsImJhc2VVcmwiLCJmdWxsVXJsIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJKU09OIiwic3RyaW5naWZ5IiwiZGF0YSIsImVycm9yIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/generate-status/route.ts\n");

/***/ }),

/***/ "(rsc)/./lib/liblibai-util.ts":
/*!******************************!*\
  !*** ./lib/liblibai-util.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   generateSignature: () => (/* binding */ generateSignature),\n/* harmony export */   getApiUrl: () => (/* binding */ getApiUrl),\n/* harmony export */   getSignedUrl: () => (/* binding */ getSignedUrl)\n/* harmony export */ });\n/* harmony import */ var string_random__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! string-random */ \"(rsc)/./node_modules/string-random/index.js\");\n/* harmony import */ var string_random__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(string_random__WEBPACK_IMPORTED_MODULE_0__);\n// lib/liblibai-util.ts\nconst hmacsha1 = __webpack_require__(/*! hmacsha1 */ \"(rsc)/./node_modules/hmacsha1/index.js\");\n\nconst SECRET_KEY = process.env.LIBLIB_SECRET_KEY;\nconst ACCESS_KEY = process.env.LIBLIB_ACCESS_KEY;\n// ✅ Add the check right here:\nif (!SECRET_KEY || !ACCESS_KEY) {\n    throw new Error(\"❌ Missing LiblibAI SECRET_KEY or ACCESS_KEY in environment\");\n}\n/**\n * Generate HMAC-SHA1 signature for LiblibAI API.\n * @param baseUrl - The base path for the API (not full URL)\n */ function generateSignature(baseUrl) {\n    const timestamp = Date.now();\n    const signatureNonce = string_random__WEBPACK_IMPORTED_MODULE_0___default()(16);\n    const raw = `${baseUrl}&${timestamp}&${signatureNonce}`;\n    const hash = hmacsha1(SECRET_KEY, raw);\n    const signature = hash.replace(/\\+/g, '-').replace(/\\//g, '_').replace(/=+$/, '');\n    return {\n        signature,\n        timestamp,\n        signatureNonce\n    };\n}\n/**\n * Construct a full signed LiblibAI URL with query parameters.\n * @param baseUrl - API endpoint path like `/api/generate/webui`\n */ function getSignedUrl(baseUrl) {\n    const { signature, timestamp, signatureNonce } = generateSignature(baseUrl);\n    return `${baseUrl}?AccessKey=${ACCESS_KEY}&Signature=${signature}&Timestamp=${timestamp}&SignatureNonce=${signatureNonce}`;\n}\n/**\n * Get the full API URL for LiblibAI.\n * @param baseUrl - The base path for the API (not full URL)\n */ function getApiUrl(baseUrl) {\n    const signedUrl = getSignedUrl(baseUrl);\n    return `https://openapi.liblibai.cloud${signedUrl}`;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvbGlibGliYWktdXRpbC50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLHVCQUF1QjtBQUN2QixNQUFNQSxXQUFXQyxtQkFBT0EsQ0FBQyx3REFBVTtBQUNNO0FBRXpDLE1BQU1FLGFBQWFDLFFBQVFDLEdBQUcsQ0FBQ0MsaUJBQWlCO0FBQ2hELE1BQU1DLGFBQWFILFFBQVFDLEdBQUcsQ0FBQ0csaUJBQWlCO0FBRWhELDhCQUE4QjtBQUM5QixJQUFJLENBQUNMLGNBQWMsQ0FBQ0ksWUFBWTtJQUM5QixNQUFNLElBQUlFLE1BQU07QUFDbEI7QUFTQTs7O0NBR0MsR0FDTSxTQUFTQyxrQkFBa0JDLE9BQWU7SUFDL0MsTUFBTUMsWUFBWUMsS0FBS0MsR0FBRztJQUMxQixNQUFNQyxpQkFBaUJiLG9EQUFZQSxDQUFDO0lBRXBDLE1BQU1jLE1BQU0sR0FBR0wsUUFBUSxDQUFDLEVBQUVDLFVBQVUsQ0FBQyxFQUFFRyxnQkFBZ0I7SUFDdkQsTUFBTUUsT0FBT2pCLFNBQVNHLFlBQVlhO0lBRWxDLE1BQU1FLFlBQVlELEtBQ2ZFLE9BQU8sQ0FBQyxPQUFPLEtBQ2ZBLE9BQU8sQ0FBQyxPQUFPLEtBQ2ZBLE9BQU8sQ0FBQyxPQUFPO0lBRWxCLE9BQU87UUFDTEQ7UUFDQU47UUFDQUc7SUFDRjtBQUNGO0FBRUE7OztDQUdDLEdBQ00sU0FBU0ssYUFBYVQsT0FBZTtJQUMxQyxNQUFNLEVBQUVPLFNBQVMsRUFBRU4sU0FBUyxFQUFFRyxjQUFjLEVBQUUsR0FBR0wsa0JBQWtCQztJQUVuRSxPQUFPLEdBQUdBLFFBQVEsV0FBVyxFQUFFSixXQUFXLFdBQVcsRUFBRVcsVUFBVSxXQUFXLEVBQUVOLFVBQVUsZ0JBQWdCLEVBQUVHLGdCQUFnQjtBQUM1SDtBQUNBOzs7Q0FHQyxHQUNNLFNBQVNNLFVBQVVWLE9BQWU7SUFDdkMsTUFBTVcsWUFBWUYsYUFBYVQ7SUFDL0IsT0FBTyxDQUFDLDhCQUE4QixFQUFFVyxXQUFXO0FBQ3JEIiwic291cmNlcyI6WyIvVXNlcnMvdXNhbWEvRG9jdW1lbnRzL0dpdEh1Yi9haV9zZWxmaWUvbGliL2xpYmxpYmFpLXV0aWwudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gbGliL2xpYmxpYmFpLXV0aWwudHNcbmNvbnN0IGhtYWNzaGExID0gcmVxdWlyZSgnaG1hY3NoYTEnKTtcbmltcG9ydCBzdHJpbmdSYW5kb20gZnJvbSAnc3RyaW5nLXJhbmRvbSc7XG5cbmNvbnN0IFNFQ1JFVF9LRVkgPSBwcm9jZXNzLmVudi5MSUJMSUJfU0VDUkVUX0tFWSBhcyBzdHJpbmc7XG5jb25zdCBBQ0NFU1NfS0VZID0gcHJvY2Vzcy5lbnYuTElCTElCX0FDQ0VTU19LRVkgYXMgc3RyaW5nO1xuXG4vLyDinIUgQWRkIHRoZSBjaGVjayByaWdodCBoZXJlOlxuaWYgKCFTRUNSRVRfS0VZIHx8ICFBQ0NFU1NfS0VZKSB7XG4gIHRocm93IG5ldyBFcnJvcihcIuKdjCBNaXNzaW5nIExpYmxpYkFJIFNFQ1JFVF9LRVkgb3IgQUNDRVNTX0tFWSBpbiBlbnZpcm9ubWVudFwiKTtcbn1cblxuXG5pbnRlcmZhY2UgU2lnbmF0dXJlUmVzdWx0IHtcbiAgc2lnbmF0dXJlOiBzdHJpbmc7XG4gIHRpbWVzdGFtcDogbnVtYmVyO1xuICBzaWduYXR1cmVOb25jZTogc3RyaW5nO1xufVxuXG4vKipcbiAqIEdlbmVyYXRlIEhNQUMtU0hBMSBzaWduYXR1cmUgZm9yIExpYmxpYkFJIEFQSS5cbiAqIEBwYXJhbSBiYXNlVXJsIC0gVGhlIGJhc2UgcGF0aCBmb3IgdGhlIEFQSSAobm90IGZ1bGwgVVJMKVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVTaWduYXR1cmUoYmFzZVVybDogc3RyaW5nKTogU2lnbmF0dXJlUmVzdWx0IHtcbiAgY29uc3QgdGltZXN0YW1wID0gRGF0ZS5ub3coKTtcbiAgY29uc3Qgc2lnbmF0dXJlTm9uY2UgPSBzdHJpbmdSYW5kb20oMTYpO1xuXG4gIGNvbnN0IHJhdyA9IGAke2Jhc2VVcmx9JiR7dGltZXN0YW1wfSYke3NpZ25hdHVyZU5vbmNlfWA7XG4gIGNvbnN0IGhhc2ggPSBobWFjc2hhMShTRUNSRVRfS0VZLCByYXcpO1xuXG4gIGNvbnN0IHNpZ25hdHVyZSA9IGhhc2hcbiAgICAucmVwbGFjZSgvXFwrL2csICctJylcbiAgICAucmVwbGFjZSgvXFwvL2csICdfJylcbiAgICAucmVwbGFjZSgvPSskLywgJycpO1xuXG4gIHJldHVybiB7XG4gICAgc2lnbmF0dXJlLFxuICAgIHRpbWVzdGFtcCxcbiAgICBzaWduYXR1cmVOb25jZSxcbiAgfTtcbn1cblxuLyoqXG4gKiBDb25zdHJ1Y3QgYSBmdWxsIHNpZ25lZCBMaWJsaWJBSSBVUkwgd2l0aCBxdWVyeSBwYXJhbWV0ZXJzLlxuICogQHBhcmFtIGJhc2VVcmwgLSBBUEkgZW5kcG9pbnQgcGF0aCBsaWtlIGAvYXBpL2dlbmVyYXRlL3dlYnVpYFxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2lnbmVkVXJsKGJhc2VVcmw6IHN0cmluZyk6IHN0cmluZyB7XG4gIGNvbnN0IHsgc2lnbmF0dXJlLCB0aW1lc3RhbXAsIHNpZ25hdHVyZU5vbmNlIH0gPSBnZW5lcmF0ZVNpZ25hdHVyZShiYXNlVXJsKTtcblxuICByZXR1cm4gYCR7YmFzZVVybH0/QWNjZXNzS2V5PSR7QUNDRVNTX0tFWX0mU2lnbmF0dXJlPSR7c2lnbmF0dXJlfSZUaW1lc3RhbXA9JHt0aW1lc3RhbXB9JlNpZ25hdHVyZU5vbmNlPSR7c2lnbmF0dXJlTm9uY2V9YDtcbn1cbi8qKlxuICogR2V0IHRoZSBmdWxsIEFQSSBVUkwgZm9yIExpYmxpYkFJLlxuICogQHBhcmFtIGJhc2VVcmwgLSBUaGUgYmFzZSBwYXRoIGZvciB0aGUgQVBJIChub3QgZnVsbCBVUkwpXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRBcGlVcmwoYmFzZVVybDogc3RyaW5nKTogc3RyaW5nIHtcbiAgY29uc3Qgc2lnbmVkVXJsID0gZ2V0U2lnbmVkVXJsKGJhc2VVcmwpO1xuICByZXR1cm4gYGh0dHBzOi8vb3BlbmFwaS5saWJsaWJhaS5jbG91ZCR7c2lnbmVkVXJsfWA7XG59ICAgIl0sIm5hbWVzIjpbImhtYWNzaGExIiwicmVxdWlyZSIsInN0cmluZ1JhbmRvbSIsIlNFQ1JFVF9LRVkiLCJwcm9jZXNzIiwiZW52IiwiTElCTElCX1NFQ1JFVF9LRVkiLCJBQ0NFU1NfS0VZIiwiTElCTElCX0FDQ0VTU19LRVkiLCJFcnJvciIsImdlbmVyYXRlU2lnbmF0dXJlIiwiYmFzZVVybCIsInRpbWVzdGFtcCIsIkRhdGUiLCJub3ciLCJzaWduYXR1cmVOb25jZSIsInJhdyIsImhhc2giLCJzaWduYXR1cmUiLCJyZXBsYWNlIiwiZ2V0U2lnbmVkVXJsIiwiZ2V0QXBpVXJsIiwic2lnbmVkVXJsIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./lib/liblibai-util.ts\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fgenerate-status%2Froute&page=%2Fapi%2Fgenerate-status%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fgenerate-status%2Froute.ts&appDir=%2FUsers%2Fusama%2FDocuments%2FGitHub%2Fai_selfie%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fusama%2FDocuments%2FGitHub%2Fai_selfie&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fgenerate-status%2Froute&page=%2Fapi%2Fgenerate-status%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fgenerate-status%2Froute.ts&appDir=%2FUsers%2Fusama%2FDocuments%2FGitHub%2Fai_selfie%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fusama%2FDocuments%2FGitHub%2Fai_selfie&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_usama_Documents_GitHub_ai_selfie_app_api_generate_status_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/generate-status/route.ts */ \"(rsc)/./app/api/generate-status/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/generate-status/route\",\n        pathname: \"/api/generate-status\",\n        filename: \"route\",\n        bundlePath: \"app/api/generate-status/route\"\n    },\n    resolvedPagePath: \"/Users/usama/Documents/GitHub/ai_selfie/app/api/generate-status/route.ts\",\n    nextConfigOutput,\n    userland: _Users_usama_Documents_GitHub_ai_selfie_app_api_generate_status_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZnZW5lcmF0ZS1zdGF0dXMlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmdlbmVyYXRlLXN0YXR1cyUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmdlbmVyYXRlLXN0YXR1cyUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRnVzYW1hJTJGRG9jdW1lbnRzJTJGR2l0SHViJTJGYWlfc2VsZmllJTJGYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj0lMkZVc2VycyUyRnVzYW1hJTJGRG9jdW1lbnRzJTJGR2l0SHViJTJGYWlfc2VsZmllJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUErRjtBQUN2QztBQUNxQjtBQUN3QjtBQUNyRztBQUNBO0FBQ0E7QUFDQSx3QkFBd0IseUdBQW1CO0FBQzNDO0FBQ0EsY0FBYyxrRUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNEQUFzRDtBQUM5RDtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUMwRjs7QUFFMUYiLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiL1VzZXJzL3VzYW1hL0RvY3VtZW50cy9HaXRIdWIvYWlfc2VsZmllL2FwcC9hcGkvZ2VuZXJhdGUtc3RhdHVzL3JvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9nZW5lcmF0ZS1zdGF0dXMvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9nZW5lcmF0ZS1zdGF0dXNcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL2dlbmVyYXRlLXN0YXR1cy9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIi9Vc2Vycy91c2FtYS9Eb2N1bWVudHMvR2l0SHViL2FpX3NlbGZpZS9hcHAvYXBpL2dlbmVyYXRlLXN0YXR1cy9yb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHdvcmtBc3luY1N0b3JhZ2UsXG4gICAgICAgIHdvcmtVbml0QXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fgenerate-status%2Froute&page=%2Fapi%2Fgenerate-status%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fgenerate-status%2Froute.ts&appDir=%2FUsers%2Fusama%2FDocuments%2FGitHub%2Fai_selfie%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fusama%2FDocuments%2FGitHub%2Fai_selfie&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/hmacsha1","vendor-chunks/string-random"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fgenerate-status%2Froute&page=%2Fapi%2Fgenerate-status%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fgenerate-status%2Froute.ts&appDir=%2FUsers%2Fusama%2FDocuments%2FGitHub%2Fai_selfie%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fusama%2FDocuments%2FGitHub%2Fai_selfie&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();