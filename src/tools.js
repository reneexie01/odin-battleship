export { toolsManager };

const toolsManager = (function ToolsManager() {
  const generateUniqueId = () => {
    return "_" + Math.random().toString(36).substr(2, 9);
  };

  return { generateUniqueId };
})();