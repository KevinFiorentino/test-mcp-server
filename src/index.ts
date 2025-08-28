import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { configTools } from "./tools.js";
import { configPrompts } from "./prompts.js";

async function main() {
  const version = "1.0.0";
  const server = new McpServer({
    name: "TestMCPServer",
    version: version,
  });

  configTools(server);
  configPrompts(server);

  const transport = new StdioServerTransport();
  await server.connect(transport);
}

main().catch((error) => {
  console.error("Fatal error in main():", error);
  process.exit(1);
});
