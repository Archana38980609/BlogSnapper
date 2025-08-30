import { readConfig, setUser } from "./config";
function main() {
  setUser("Archana");
  const cfg = readConfig();
  console.log(cfg);
}

main();
