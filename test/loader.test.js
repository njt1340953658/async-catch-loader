const compiler = require("./compiler.js");

test("should works 测试 options", async () => {
  const stats = await compiler("example.js");
  const output = stats.toJson().modules[0].source;
  console.log(output)
});
