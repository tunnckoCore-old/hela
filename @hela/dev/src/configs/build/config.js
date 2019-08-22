module.exports={projects:[{"displayName":"build:esm","testEnvironment":"node","testMatch":["<rootDir>/packages/*/src/**/*","<rootDir>/@hela/*/src/**/*","<rootDir>/@tunnckocore/*/src/**/*"],"testPathIgnorePatterns":[".+/__tests__/.+",".+/fixtures/.+",".+/jest-runner-babel/.+",".+/utils/.+",".+/dist/.+",".+/configs/build/config\\.js$",".+/configs/lint/config\\.js$",".+/configs/test/config\\.js$"],"haste":{"@tunnckocore/jest-runner-babel":{"outDir":"dist/build/esm","workspaces":["packages","@hela","@tunnckocore"],"babel":{"presets":[["@babel/preset-env",{"targets":{"node":"10.13"},"modules":false}],"@babel/preset-react","@babel/preset-typescript"],"plugins":["@babel/plugin-syntax-dynamic-import","@babel/plugin-syntax-import-meta","babel-plugin-dynamic-import-node-babel-7"],"comments":false}}},"runner":"@tunnckocore/jest-runner-babel","moduleFileExtensions":["js","jsx","ts","tsx","mjs","json"],"rootDir":"/home/charlike/dev/code/helapkg/hela"},{"displayName":"build:cjs","testEnvironment":"node","testMatch":["<rootDir>/packages/*/src/**/*","<rootDir>/@hela/*/src/**/*","<rootDir>/@tunnckocore/*/src/**/*"],"testPathIgnorePatterns":[".+/__tests__/.+",".+/fixtures/.+",".+/jest-runner-babel/.+",".+/utils/.+",".+/dist/.+",".+/configs/build/config\\.js$",".+/configs/lint/config\\.js$",".+/configs/test/config\\.js$"],"haste":{"@tunnckocore/jest-runner-babel":{"outDir":"dist/build/cjs","workspaces":["packages","@hela","@tunnckocore"],"babel":{"presets":[["@babel/preset-env",{"targets":{"node":"10.13"},"modules":"commonjs"}],"@babel/preset-react","@babel/preset-typescript"],"plugins":["@babel/plugin-syntax-dynamic-import","@babel/plugin-syntax-import-meta","babel-plugin-dynamic-import-node-babel-7"],"comments":false}}},"runner":"@tunnckocore/jest-runner-babel","moduleFileExtensions":["js","jsx","ts","tsx","mjs","json"],"rootDir":"/home/charlike/dev/code/helapkg/hela"}]};