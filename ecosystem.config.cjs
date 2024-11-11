module.exports = {
    apps: [
      {
        name: "my-backend",
        script: "./server.js",
        instances: 1,
        autorestart: true,
        watch: true,
        max_memory_restart: "1G",
        out_file: "./out.log",
        error_file: "./error.log",
        merge_logs: true,
        log_date_format: "DD-MM HH:mm:ss Z",
        log_type: "json",
        ignore_watch : ["node_modules", "client/img"],
        env: {
          NODE_ENV: "production"
         },
      },
    ],
  }