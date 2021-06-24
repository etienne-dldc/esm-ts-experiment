export default {
  extensions: {
    ts: "module",
    tsx: "module",
  },
  files: ["src/**/*.test.ts", "src/**/*.test.tsx"],
  nodeArguments: ["--loader=ts-node/esm"],
  nonSemVerExperiments: {
    configurableModuleFormat: true,
  },
};
