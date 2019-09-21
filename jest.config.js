module.exports = {
    "roots": [
      "<rootDir>/src",
    ],
    "transform": {
      "^.+\\.tsx?$": "ts-jest",
      "\\.svg$": "<rootDir>/src/app/tests/file-transformer.js"
    },
    "moduleNameMapper": {
      "^app(.*)$": "<rootDir>/src/app$1"
    },
    "setupFilesAfterEnv": ["<rootDir>/src/app/tests/setup-tests.ts"],
    "globals": {
      'ts-jest': {
        "diagnostics": {
            ignoreCodes: [151001]
        }
      }
    }
  }
  