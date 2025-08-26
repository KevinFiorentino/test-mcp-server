import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";

export function configTools(server: McpServer) {
  server.tool(
    "add",
    "Sum numbers",
    {
      a: z.number().describe("First number to sum"),
      b: z.number().describe("Second number to sum"),
    },
    async ({ a, b }) => {
      const result = a + b;
      return { content: [{ type: "text", text: String(result) }] };
    }
  );

  server.tool(
    "substract",
    "Substract numbers",
    {
      a: z.number().describe("First number to substract"),
      b: z.number().describe("Second number to substract"),
    },
    async ({ a, b }) => {
      const result = a - b;
      return { content: [{ type: "text", text: String(result) }] };
    }
  );

  server.tool(
    "calculate",
    "Calculate Plazo Fijo income",
    {
      countDays: z.number().describe("Count of days"),
      nar: z.number().describe("Nominal Annual Rate percentaje"),
      money: z.number().describe("Investment amount"),
    },
    async ({ countDays, nar, money }) => {
      const result = (countDays * (nar / 100) * money) / 365;
      return { content: [{ type: "text", text: String(result) }] };
    }
  );
}
