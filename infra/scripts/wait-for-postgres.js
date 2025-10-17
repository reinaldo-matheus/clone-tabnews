const { exec } = require("node:child_process");

function checkPostgres() {
  exec("docker exec postgres-dev pg_isready --host localhost", handleReturn);

  function handleReturn(error, stdout) {
    if (stdout.search("accepting connections") === -1) {
      process.stdout.write("."); // Correção aqui
      checkPostgres();
      return;
    }

    console.log("\nPostgres está pronto para aceitar conexões!✅");
  }
}

process.stdout.write("\n\naguardando postgres aceitar conexões! ⚠️");
checkPostgres();
