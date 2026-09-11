## graphify

This project has a knowledge graph at graphify-out/ with god nodes, community structure, and cross-file relationships.

Rules:
- For codebase questions, first run `graphify query "<question>"` when graphify-out/graph.json exists. Use `graphify path "<A>" "<B>"` for relationships and `graphify explain "<concept>"` for focused concepts. These return a scoped subgraph, usually much smaller than GRAPH_REPORT.md or raw grep output.
- If graphify-out/wiki/index.md exists, use it for broad navigation instead of raw source browsing.
- Read graphify-out/GRAPH_REPORT.md only for broad architecture review or when query/path/explain do not surface enough context.
- After modifying code, run `graphify update .` to keep the graph current (AST-only, no API cost).


## context-mode

This project uses `context-mode` to protect the context window from large tool outputs, sandbox data processing, and preserve searchable session memory.

Rules:

* Prefer `context-mode` tools whenever a command, file read, search, API response, web page, test output, log, or other operation may produce significant output. Do not dump large raw data into the conversation context.
* Think in code: for analyzing, counting, filtering, comparing, searching, parsing, or transforming data, use `ctx_execute` or `ctx_execute_file` and print only the relevant result. Program the analysis instead of reading all the data into context.
* For broad repository/system investigation, prefer `ctx_batch_execute` to gather multiple commands/searches in one call. Use `ctx_search` for follow-up questions against the indexed results instead of repeating commands.
* For file analysis, use `ctx_execute_file(path, language, code)` when the goal is to understand, summarize, search, or extract information. Use normal file reads when the exact content is required for editing.
* For web content, prefer `ctx_fetch_and_index` followed by `ctx_search`. Do not retry blocked `curl`, `wget`, `WebFetch`, or raw HTTP approaches when context-mode redirects them.
* For large shell operations or commands expected to produce substantial output, use `ctx_execute` or `ctx_batch_execute`. Keep direct Bash usage for low-output operational commands such as `git`, `ls`, `mkdir`, `mv`, `rm`, dependency installation, builds, or other commands where raw output is small and directly useful.
* When several independent I/O operations are needed, batch them and use `concurrency` where appropriate rather than issuing many sequential tool calls.
* Index useful long-lived documentation or generated knowledge with `ctx_index`, then retrieve only relevant sections using `ctx_search`.
* After `/compact`, `/clear`, `--continue`, `--resume`, or when previous-session context may matter, search context-mode memory before asking the user to repeat information. Use timeline/source filters when looking for previous prompts, decisions, constraints, rejected approaches, or compaction summaries.
* Do not bypass context-mode routing just because a native tool is available. The goal is to keep raw/high-volume output outside the context window and return only information needed for the current task.
* Use `ctx stats` when context savings or session usage needs inspection, `ctx doctor` for installation/routing diagnostics, `ctx upgrade` to update context-mode, and `ctx purge` only when the indexed knowledge base should intentionally be deleted.
