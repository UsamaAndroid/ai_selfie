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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _lib_liblibai_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/liblibai-util */ \"(rsc)/./lib/liblibai-util.ts\");\n// app/api/generate-text2img/route.ts\n\n\nasync function POST(req) {\n    try {\n        const body = await req.json();\n        const baseUrl = \"/api/generate/webui/text2img\";\n        const fullUrl = (0,_lib_liblibai_util__WEBPACK_IMPORTED_MODULE_1__.getApiUrl)(baseUrl);\n        const response = await fetch(fullUrl, {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify(body)\n        });\n        const result = await response.json();\n        if (!response.ok) {\n            console.error(\"❌ LiblibAI API returned error:\", result);\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"LiblibAI error\",\n                details: result\n            }, {\n                status: response.status\n            });\n        }\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(result);\n    } catch (error) {\n        console.error(\"❌ Server error:\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Internal server error\",\n            details: error?.message || error\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2dlbmVyYXRlLXRleHQyaW1nL3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLHFDQUFxQztBQUNtQjtBQUNSO0FBRXpDLGVBQWVFLEtBQUtDLEdBQWdCO0lBQ3pDLElBQUk7UUFDRixNQUFNQyxPQUFPLE1BQU1ELElBQUlFLElBQUk7UUFDM0IsTUFBTUMsVUFBVTtRQUNoQixNQUFNQyxVQUFVTiw2REFBU0EsQ0FBQ0s7UUFFMUIsTUFBTUUsV0FBVyxNQUFNQyxNQUFNRixTQUFTO1lBQ3BDRyxRQUFRO1lBQ1JDLFNBQVM7Z0JBQUUsZ0JBQWdCO1lBQW1CO1lBQzlDUCxNQUFNUSxLQUFLQyxTQUFTLENBQUNUO1FBQ3ZCO1FBRUEsTUFBTVUsU0FBUyxNQUFNTixTQUFTSCxJQUFJO1FBRWxDLElBQUksQ0FBQ0csU0FBU08sRUFBRSxFQUFFO1lBQ2hCQyxRQUFRQyxLQUFLLENBQUMsa0NBQWtDSDtZQUNoRCxPQUFPZCxxREFBWUEsQ0FBQ0ssSUFBSSxDQUN0QjtnQkFBRVksT0FBTztnQkFBa0JDLFNBQVNKO1lBQU8sR0FDM0M7Z0JBQUVLLFFBQVFYLFNBQVNXLE1BQU07WUFBQztRQUU5QjtRQUVBLE9BQU9uQixxREFBWUEsQ0FBQ0ssSUFBSSxDQUFDUztJQUMzQixFQUFFLE9BQU9HLE9BQVk7UUFDbkJELFFBQVFDLEtBQUssQ0FBQyxtQkFBbUJBO1FBQ2pDLE9BQU9qQixxREFBWUEsQ0FBQ0ssSUFBSSxDQUN0QjtZQUFFWSxPQUFPO1lBQXlCQyxTQUFTRCxPQUFPRyxXQUFXSDtRQUFNLEdBQ25FO1lBQUVFLFFBQVE7UUFBSTtJQUVsQjtBQUNGIiwic291cmNlcyI6WyIvVXNlcnMvdXNhbWEvRG9jdW1lbnRzL0dpdEh1Yi9haV9zZWxmaWUvYXBwL2FwaS9nZW5lcmF0ZS10ZXh0MmltZy9yb3V0ZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhcHAvYXBpL2dlbmVyYXRlLXRleHQyaW1nL3JvdXRlLnRzXG5pbXBvcnQgeyBOZXh0UmVxdWVzdCwgTmV4dFJlc3BvbnNlIH0gZnJvbSBcIm5leHQvc2VydmVyXCI7XG5pbXBvcnQgeyBnZXRBcGlVcmwgfSBmcm9tIFwiQC9saWIvbGlibGliYWktdXRpbFwiO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVChyZXE6IE5leHRSZXF1ZXN0KSB7XG4gIHRyeSB7XG4gICAgY29uc3QgYm9keSA9IGF3YWl0IHJlcS5qc29uKCk7XG4gICAgY29uc3QgYmFzZVVybCA9IFwiL2FwaS9nZW5lcmF0ZS93ZWJ1aS90ZXh0MmltZ1wiO1xuICAgIGNvbnN0IGZ1bGxVcmwgPSBnZXRBcGlVcmwoYmFzZVVybCk7XG5cbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGZ1bGxVcmwsIHtcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShib2R5KSxcbiAgICB9KTtcblxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCLinYwgTGlibGliQUkgQVBJIHJldHVybmVkIGVycm9yOlwiLCByZXN1bHQpO1xuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxuICAgICAgICB7IGVycm9yOiBcIkxpYmxpYkFJIGVycm9yXCIsIGRldGFpbHM6IHJlc3VsdCB9LFxuICAgICAgICB7IHN0YXR1czogcmVzcG9uc2Uuc3RhdHVzIH1cbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHJlc3VsdCk7XG4gIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICBjb25zb2xlLmVycm9yKFwi4p2MIFNlcnZlciBlcnJvcjpcIiwgZXJyb3IpO1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcbiAgICAgIHsgZXJyb3I6IFwiSW50ZXJuYWwgc2VydmVyIGVycm9yXCIsIGRldGFpbHM6IGVycm9yPy5tZXNzYWdlIHx8IGVycm9yIH0sXG4gICAgICB7IHN0YXR1czogNTAwIH1cbiAgICApO1xuICB9XG59XG4iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwiZ2V0QXBpVXJsIiwiUE9TVCIsInJlcSIsImJvZHkiLCJqc29uIiwiYmFzZVVybCIsImZ1bGxVcmwiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZXN1bHQiLCJvayIsImNvbnNvbGUiLCJlcnJvciIsImRldGFpbHMiLCJzdGF0dXMiLCJtZXNzYWdlIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/generate-text2img/route.ts\n");

/***/ }),

/***/ "(rsc)/./lib/liblibai-util.ts":
/*!******************************!*\
  !*** ./lib/liblibai-util.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   generateSignature: () => (/* binding */ generateSignature),\n/* harmony export */   getApiUrl: () => (/* binding */ getApiUrl),\n/* harmony export */   getSignedUrl: () => (/* binding */ getSignedUrl)\n/* harmony export */ });\n/* harmony import */ var string_random__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! string-random */ \"(rsc)/./node_modules/string-random/index.js\");\n/* harmony import */ var string_random__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(string_random__WEBPACK_IMPORTED_MODULE_0__);\n// lib/liblibai-util.ts\nconst hmacsha1 = __webpack_require__(/*! hmacsha1 */ \"(rsc)/./node_modules/hmacsha1/index.js\");\n\nconst SECRET_KEY = process.env.LIBLIB_SECRET_KEY;\nconst ACCESS_KEY = process.env.LIBLIB_ACCESS_KEY;\n// ✅ Add the check right here:\nif (!SECRET_KEY || !ACCESS_KEY) {\n    throw new Error(\"❌ Missing LiblibAI SECRET_KEY or ACCESS_KEY in environment\");\n}\n/**\n * Generate HMAC-SHA1 signature for LiblibAI API.\n * @param baseUrl - The base path for the API (not full URL)\n */ function generateSignature(baseUrl) {\n    const timestamp = Date.now();\n    const signatureNonce = string_random__WEBPACK_IMPORTED_MODULE_0___default()(16);\n    const raw = `${baseUrl}&${timestamp}&${signatureNonce}`;\n    const hash = hmacsha1(SECRET_KEY, raw);\n    const signature = hash.replace(/\\+/g, '-').replace(/\\//g, '_').replace(/=+$/, '');\n    return {\n        signature,\n        timestamp,\n        signatureNonce\n    };\n}\n/**\n * Construct a full signed LiblibAI URL with query parameters.\n * @param baseUrl - API endpoint path like `/api/generate/webui`\n */ function getSignedUrl(baseUrl) {\n    const { signature, timestamp, signatureNonce } = generateSignature(baseUrl);\n    return `${baseUrl}?AccessKey=${ACCESS_KEY}&Signature=${signature}&Timestamp=${timestamp}&SignatureNonce=${signatureNonce}`;\n}\n/**\n * Get the full API URL for LiblibAI.\n * @param baseUrl - The base path for the API (not full URL)\n */ function getApiUrl(baseUrl) {\n    const signedUrl = getSignedUrl(baseUrl);\n    return `https://openapi.liblibai.cloud${signedUrl}`;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvbGlibGliYWktdXRpbC50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLHVCQUF1QjtBQUN2QixNQUFNQSxXQUFXQyxtQkFBT0EsQ0FBQyx3REFBVTtBQUNNO0FBRXpDLE1BQU1FLGFBQWFDLFFBQVFDLEdBQUcsQ0FBQ0MsaUJBQWlCO0FBQ2hELE1BQU1DLGFBQWFILFFBQVFDLEdBQUcsQ0FBQ0csaUJBQWlCO0FBRWhELDhCQUE4QjtBQUM5QixJQUFJLENBQUNMLGNBQWMsQ0FBQ0ksWUFBWTtJQUM5QixNQUFNLElBQUlFLE1BQU07QUFDbEI7QUFTQTs7O0NBR0MsR0FDTSxTQUFTQyxrQkFBa0JDLE9BQWU7SUFDL0MsTUFBTUMsWUFBWUMsS0FBS0MsR0FBRztJQUMxQixNQUFNQyxpQkFBaUJiLG9EQUFZQSxDQUFDO0lBRXBDLE1BQU1jLE1BQU0sR0FBR0wsUUFBUSxDQUFDLEVBQUVDLFVBQVUsQ0FBQyxFQUFFRyxnQkFBZ0I7SUFDdkQsTUFBTUUsT0FBT2pCLFNBQVNHLFlBQVlhO0lBRWxDLE1BQU1FLFlBQVlELEtBQ2ZFLE9BQU8sQ0FBQyxPQUFPLEtBQ2ZBLE9BQU8sQ0FBQyxPQUFPLEtBQ2ZBLE9BQU8sQ0FBQyxPQUFPO0lBRWxCLE9BQU87UUFDTEQ7UUFDQU47UUFDQUc7SUFDRjtBQUNGO0FBRUE7OztDQUdDLEdBQ00sU0FBU0ssYUFBYVQsT0FBZTtJQUMxQyxNQUFNLEVBQUVPLFNBQVMsRUFBRU4sU0FBUyxFQUFFRyxjQUFjLEVBQUUsR0FBR0wsa0JBQWtCQztJQUVuRSxPQUFPLEdBQUdBLFFBQVEsV0FBVyxFQUFFSixXQUFXLFdBQVcsRUFBRVcsVUFBVSxXQUFXLEVBQUVOLFVBQVUsZ0JBQWdCLEVBQUVHLGdCQUFnQjtBQUM1SDtBQUNBOzs7Q0FHQyxHQUNNLFNBQVNNLFVBQVVWLE9BQWU7SUFDdkMsTUFBTVcsWUFBWUYsYUFBYVQ7SUFDL0IsT0FBTyxDQUFDLDhCQUE4QixFQUFFVyxXQUFXO0FBQ3JEIiwic291cmNlcyI6WyIvVXNlcnMvdXNhbWEvRG9jdW1lbnRzL0dpdEh1Yi9haV9zZWxmaWUvbGliL2xpYmxpYmFpLXV0aWwudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gbGliL2xpYmxpYmFpLXV0aWwudHNcbmNvbnN0IGhtYWNzaGExID0gcmVxdWlyZSgnaG1hY3NoYTEnKTtcbmltcG9ydCBzdHJpbmdSYW5kb20gZnJvbSAnc3RyaW5nLXJhbmRvbSc7XG5cbmNvbnN0IFNFQ1JFVF9LRVkgPSBwcm9jZXNzLmVudi5MSUJMSUJfU0VDUkVUX0tFWSBhcyBzdHJpbmc7XG5jb25zdCBBQ0NFU1NfS0VZID0gcHJvY2Vzcy5lbnYuTElCTElCX0FDQ0VTU19LRVkgYXMgc3RyaW5nO1xuXG4vLyDinIUgQWRkIHRoZSBjaGVjayByaWdodCBoZXJlOlxuaWYgKCFTRUNSRVRfS0VZIHx8ICFBQ0NFU1NfS0VZKSB7XG4gIHRocm93IG5ldyBFcnJvcihcIuKdjCBNaXNzaW5nIExpYmxpYkFJIFNFQ1JFVF9LRVkgb3IgQUNDRVNTX0tFWSBpbiBlbnZpcm9ubWVudFwiKTtcbn1cblxuXG5pbnRlcmZhY2UgU2lnbmF0dXJlUmVzdWx0IHtcbiAgc2lnbmF0dXJlOiBzdHJpbmc7XG4gIHRpbWVzdGFtcDogbnVtYmVyO1xuICBzaWduYXR1cmVOb25jZTogc3RyaW5nO1xufVxuXG4vKipcbiAqIEdlbmVyYXRlIEhNQUMtU0hBMSBzaWduYXR1cmUgZm9yIExpYmxpYkFJIEFQSS5cbiAqIEBwYXJhbSBiYXNlVXJsIC0gVGhlIGJhc2UgcGF0aCBmb3IgdGhlIEFQSSAobm90IGZ1bGwgVVJMKVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVTaWduYXR1cmUoYmFzZVVybDogc3RyaW5nKTogU2lnbmF0dXJlUmVzdWx0IHtcbiAgY29uc3QgdGltZXN0YW1wID0gRGF0ZS5ub3coKTtcbiAgY29uc3Qgc2lnbmF0dXJlTm9uY2UgPSBzdHJpbmdSYW5kb20oMTYpO1xuXG4gIGNvbnN0IHJhdyA9IGAke2Jhc2VVcmx9JiR7dGltZXN0YW1wfSYke3NpZ25hdHVyZU5vbmNlfWA7XG4gIGNvbnN0IGhhc2ggPSBobWFjc2hhMShTRUNSRVRfS0VZLCByYXcpO1xuXG4gIGNvbnN0IHNpZ25hdHVyZSA9IGhhc2hcbiAgICAucmVwbGFjZSgvXFwrL2csICctJylcbiAgICAucmVwbGFjZSgvXFwvL2csICdfJylcbiAgICAucmVwbGFjZSgvPSskLywgJycpO1xuXG4gIHJldHVybiB7XG4gICAgc2lnbmF0dXJlLFxuICAgIHRpbWVzdGFtcCxcbiAgICBzaWduYXR1cmVOb25jZSxcbiAgfTtcbn1cblxuLyoqXG4gKiBDb25zdHJ1Y3QgYSBmdWxsIHNpZ25lZCBMaWJsaWJBSSBVUkwgd2l0aCBxdWVyeSBwYXJhbWV0ZXJzLlxuICogQHBhcmFtIGJhc2VVcmwgLSBBUEkgZW5kcG9pbnQgcGF0aCBsaWtlIGAvYXBpL2dlbmVyYXRlL3dlYnVpYFxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2lnbmVkVXJsKGJhc2VVcmw6IHN0cmluZyk6IHN0cmluZyB7XG4gIGNvbnN0IHsgc2lnbmF0dXJlLCB0aW1lc3RhbXAsIHNpZ25hdHVyZU5vbmNlIH0gPSBnZW5lcmF0ZVNpZ25hdHVyZShiYXNlVXJsKTtcblxuICByZXR1cm4gYCR7YmFzZVVybH0/QWNjZXNzS2V5PSR7QUNDRVNTX0tFWX0mU2lnbmF0dXJlPSR7c2lnbmF0dXJlfSZUaW1lc3RhbXA9JHt0aW1lc3RhbXB9JlNpZ25hdHVyZU5vbmNlPSR7c2lnbmF0dXJlTm9uY2V9YDtcbn1cbi8qKlxuICogR2V0IHRoZSBmdWxsIEFQSSBVUkwgZm9yIExpYmxpYkFJLlxuICogQHBhcmFtIGJhc2VVcmwgLSBUaGUgYmFzZSBwYXRoIGZvciB0aGUgQVBJIChub3QgZnVsbCBVUkwpXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRBcGlVcmwoYmFzZVVybDogc3RyaW5nKTogc3RyaW5nIHtcbiAgY29uc3Qgc2lnbmVkVXJsID0gZ2V0U2lnbmVkVXJsKGJhc2VVcmwpO1xuICByZXR1cm4gYGh0dHBzOi8vb3BlbmFwaS5saWJsaWJhaS5jbG91ZCR7c2lnbmVkVXJsfWA7XG59ICAgIl0sIm5hbWVzIjpbImhtYWNzaGExIiwicmVxdWlyZSIsInN0cmluZ1JhbmRvbSIsIlNFQ1JFVF9LRVkiLCJwcm9jZXNzIiwiZW52IiwiTElCTElCX1NFQ1JFVF9LRVkiLCJBQ0NFU1NfS0VZIiwiTElCTElCX0FDQ0VTU19LRVkiLCJFcnJvciIsImdlbmVyYXRlU2lnbmF0dXJlIiwiYmFzZVVybCIsInRpbWVzdGFtcCIsIkRhdGUiLCJub3ciLCJzaWduYXR1cmVOb25jZSIsInJhdyIsImhhc2giLCJzaWduYXR1cmUiLCJyZXBsYWNlIiwiZ2V0U2lnbmVkVXJsIiwiZ2V0QXBpVXJsIiwic2lnbmVkVXJsIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./lib/liblibai-util.ts\n");

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