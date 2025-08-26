# Test MCP Server

##### Configuration

Create the file `.vscode/mcp.json` in your project with the following JSON to integrate this MCP Server with GitHub Copilot.

```json
{
  "inputs": [],
  "servers": {
    "test": {
      "type": "stdio",
      "command": "bash",
      "args": ["../test-mcp-server/start-server.sh"]
    }
  }
}
```

##### Inspector

- Execute `npx @modelcontextprotocol/inspector bash start-server.sh`
- Clic in "Connect" button on the UI
